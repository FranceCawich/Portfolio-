import { google } from "googleapis";

const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
    GOOGLE_CALENDAR_ID = "primary",
    GOOGLE_CALENDAR_TIMEZONE = "America/Belize",
} = process.env;

const months = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
};

function ensureGoogleConfig() {
    const missing = [];

    if (!GOOGLE_CLIENT_ID) missing.push("GOOGLE_CLIENT_ID");
    if (!GOOGLE_CLIENT_SECRET) missing.push("GOOGLE_CLIENT_SECRET");
    if (!GOOGLE_REFRESH_TOKEN) missing.push("GOOGLE_REFRESH_TOKEN");

    if (missing.length > 0) {
        throw new Error(
            `Google Calendar environment variables missing: ${missing.join(", ")}`
        );
    }
}

function parseBookingDate(date, time) {
    const dateParts = date.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
    const timeParts = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);

    if (!dateParts || !timeParts) {
        throw new Error("Unable to parse booking date or time.");
    }

    const monthName = dateParts[1].toLowerCase();
    const month = months[monthName];
    const day = Number(dateParts[2]);
    const year = Number(dateParts[3]);

    if (!month) {
        throw new Error("Invalid booking month.");
    }

    let hour = Number(timeParts[1]);
    const minute = Number(timeParts[2]);
    const period = timeParts[3].toUpperCase();

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    return new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
}

function formatAsCalendarDateTime(date) {
    const pad = (value) => String(value).padStart(2, "0");

    return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(
        date.getUTCDate()
    )}T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:00-06:00`;
}

export async function createGoogleCalendarEvent({
    name,
    email,
    note,
    date,
    time,
}) {
    ensureGoogleConfig();

    const auth = new google.auth.OAuth2(
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET
    );
    auth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

    const calendar = google.calendar({ version: "v3", auth });

    const startDate = parseBookingDate(date, time);
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

    const event = {
        summary: `Meeting with ${name}`,
        description: note
            ? `${note}\n\nBooked via portfolio contact page.`
            : "Booked via portfolio contact page.",
        start: {
            dateTime: formatAsCalendarDateTime(startDate),
            timeZone: GOOGLE_CALENDAR_TIMEZONE,
        },
        end: {
            dateTime: formatAsCalendarDateTime(endDate),
            timeZone: GOOGLE_CALENDAR_TIMEZONE,
        },
        attendees: [{ email }],
        conferenceData: {
            createRequest: {
                requestId: `meet-${Date.now()}`,
                conferenceSolutionKey: { type: "hangoutsMeet" },
            },
        },
        reminders: {
            useDefault: false,
            overrides: [
                { method: "email", minutes: 60 * 24 },
                { method: "popup", minutes: 10 },
            ],
        },
    };

    const response = await calendar.events.insert({
        calendarId: GOOGLE_CALENDAR_ID,
        requestBody: event,
        conferenceDataVersion: 1,
        sendUpdates: "all",
    });

    return response.data;
}
