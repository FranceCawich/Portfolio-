import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { createGoogleCalendarEvent } from "@/lib/googleCalendar";

const dataFile = path.join(process.cwd(), "data", "contact-submissions.json");

function ensureDataFile() {
    if (!fs.existsSync(dataFile)) {
        fs.writeFileSync(dataFile, "[]", "utf8");
    }
}

function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
    const body = await request.json().catch(() => null);

    if (!body) {
        return NextResponse.json(
            { success: false, error: "Invalid JSON body." },
            { status: 400 }
        );
    }

    const { type, name, email, message, note, date, time } = body;
    const errors = [];

    if (!type || !["message", "booking"].includes(type)) {
        errors.push("type must be 'message' or 'booking'.");
    }

    if (!name || !name.trim()) {
        errors.push("Name is required.");
    }

    if (!email || !isEmail(email)) {
        errors.push("A valid email address is required.");
    }

    if (type === "message" && (!message || !message.trim())) {
        errors.push("A message is required.");
    }

    if (type === "booking") {
        if (!date || !date.trim()) {
            errors.push("Booking date is required.");
        }
        if (!time || !time.trim()) {
            errors.push("Booking time is required.");
        }
    }

    if (errors.length > 0) {
        return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    ensureDataFile();

    const raw = fs.readFileSync(dataFile, "utf8") || "[]";
    const stored = JSON.parse(raw);

    const submission = {
        id: Date.now(),
        type,
        name: name.trim(),
        email: email.trim(),
        message: message?.trim() || "",
        note: note?.trim() || "",
        date: date?.trim() || null,
        time: time?.trim() || null,
        createdAt: new Date().toISOString(),
    };

    if (type === "booking") {
        try {
            const event = await createGoogleCalendarEvent({
                name: submission.name,
                email: submission.email,
                note: submission.note,
                date: submission.date,
                time: submission.time,
            });

            submission.googleCalendarEventId = event.id;
            submission.googleMeetLink =
                event.hangoutLink || event.conferenceData?.entryPoints?.[0]?.uri || null;
        } catch (error) {
            console.error("[Contact API] Google Calendar error:", error);
            return NextResponse.json(
                {
                    success: false,
                    error:
                        error?.message ||
                        "Unable to create Google Calendar booking. Check your calendar credentials.",
                },
                { status: 500 }
            );
        }
    }

    stored.push(submission);
    fs.writeFileSync(dataFile, JSON.stringify(stored, null, 2), "utf8");

    console.log("[Contact API] New submission:", submission);

    return NextResponse.json({
        success: true,
        message:
            type === "booking"
                ? "Booking confirmed and calendar invite sent."
