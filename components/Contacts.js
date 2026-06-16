"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Download,
  Award,
  Calendar,
  Clock,
  Send,
  Video,
  MapPin,
} from "lucide-react";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import { FaMedium, FaWhatsapp } from "react-icons/fa";
import dynamic from "next/dynamic";
import contactsData from "@/data/contacts";

const CVDownloadButton = dynamic(() => import("./CVDownloadButton"), {
  ssr: false,
  loading: () => (
    <span className="flex items-center gap-2 border border-white/20 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 cursor-wait">
      <Download className="w-4 h-4" />
      Loading…
    </span>
  ),
});

const Contacts = () => {
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [selectedDay, setSelectedDay] = useState(9);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingNote, setBookingNote] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState({ loading: false, success: null, error: null });
  const [bookingStatus, setBookingStatus] = useState({ loading: false, success: null, error: null });

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(id);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const resetForm = () => {
    setFormName("");
    setFormEmail("");
    setFormMessage("");
  };

  const handleMessageSubmit = async () => {
    if (!formName || !formEmail || !formMessage) {
      setFormStatus({ loading: false, success: null, error: "Please fill in all fields." });
      return;
    }

    setFormStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "message",
          name: formName,
          email: formEmail,
          message: formMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error || (data.errors ? data.errors.join(" ") : "Unable to send message.");
        throw new Error(errorMessage);
      }

      resetForm();
      setFormStatus({ loading: false, success: data.message, error: null });
    } catch (error) {
      setFormStatus({ loading: false, success: null, error: error.message });
    }
  };

  const handleBooking = async () => {
    if (!bookingName || !bookingEmail) {
      setBookingStatus({ loading: false, success: null, error: "Name and email are required for booking." });
      return;
    }

    setBookingStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          name: bookingName,
          email: bookingEmail,
          note: bookingNote,
          date: `June ${selectedDay}, 2026`,
          time: selectedTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error || (data.errors ? data.errors.join(" ") : "Unable to book meeting.");
        throw new Error(errorMessage);
      }

      setBookingConfirmed(true);
      setBookingStatus({ loading: false, success: data.message, error: null });
    } catch (error) {
      setBookingStatus({ loading: false, success: null, error: error.message });
    }
  };

  const getLink = (name) =>
    contactsData.find((c) => c.name.toLowerCase() === name.toLowerCase())
      ?.link || "#";

  const primarySocials = [
    { icon: Github, label: "GitHub", url: getLink("github") },
    { icon: Linkedin, label: "LinkedIn", url: getLink("linkedin") },
  ];

  const secondarySocials = [
    { icon: Twitter, label: "Twitter", url: getLink("twitter") },
    { icon: FaMedium, label: "Medium", url: getLink("medium") },
    { icon: Youtube, label: "YouTube", url: getLink("youtube") },
    { icon: FaWhatsapp, label: "WhatsApp", url: getLink("whatsapp") },
  ];

  // Calendar: available weekdays in June 2026 (June starts on Monday)
  // Days 1–8 are past, weekends disabled
  const calDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const disabledDays = new Set([
    1, 2, 3, 4, 5, 6, 7, 8, // past
    13, 14, 20, 21, 27, 28, // weekends
  ]);

  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM",
  ];

  return (
    <div className="min-h-screen text-white pt-10 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-5xl mx-auto mt-10 space-y-10">

        {/* ── HERO HEADER ── */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white shrink-0">
            FC
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">
              France{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Cawich
              </span>
            </h1>
            <p className="text-gray-400 mb-3">
              Full-stack Developer &amp; Data Analyst
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4" /> Belize
              </span>
              <span className="flex items-center gap-1.5 text-sm text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Available for new projects
              </span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-row md:flex-col gap-3 shrink-0">
            <CVDownloadButton />
            <a
              href="/files/Certificates.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all"
            >
              <Award className="w-4 h-4" />
              Certificates
            </a>
          </div>
        </div>

        {/* ── SOCIAL LINKS ── */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-xl font-bold">Connect with me</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Primary: GitHub + LinkedIn highlighted */}
            {primarySocials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 px-4 py-2 rounded-full text-sm font-medium text-purple-200 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                  {s.label}
                </a>
              );
            })}
            {/* Secondary socials */}
            {secondarySocials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* ── CONTACT FORM + DIRECT CONTACT ── */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Contact form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-0.5 w-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
              <h2 className="text-xl font-bold">Send a message</h2>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Your name</label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 outline-none rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Email address</label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 outline-none rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">What's on your mind?</label>
                <textarea
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Tell me about your project or idea…"
                  className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 outline-none rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors resize-none"
                />
              </div>
              <button
                type="button"
                onClick={handleMessageSubmit}
                disabled={!formName || !formEmail || !formMessage || formStatus.loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                {formStatus.loading ? "Sending..." : "Send message"}
              </button>
              {formStatus.error ? (
                <p className="text-sm text-red-400 mt-2">{formStatus.error}</p>
              ) : formStatus.success ? (
                <p className="text-sm text-emerald-400 mt-2">{formStatus.success}</p>
              ) : null}
            </div>
          </div>

          {/* Direct contact */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                <h2 className="text-xl font-bold">Reach me directly</h2>
              </div>
              <div className="space-y-4">
                {/* Email — click to copy */}
                {[
                  { id: 0, email: "Cawich.Francis@Gmail.Com", label: "Work inquiries" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCopy(c.email, c.id)}
                    className="w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all text-left"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-600/30 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-purple-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{c.email}</p>
                      <p className="text-xs text-gray-400">{c.label}</p>
                    </div>
                    {copiedEmail === c.id ? (
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-500 shrink-0" />
                    )}
                  </button>
                ))}

                {/* Phone */}
                <a
                  href="tel:+5016731342"
                  className="w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">+501 673-1342</p>
                    <p className="text-xs text-gray-400">Call or WhatsApp</p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-600/30 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Mon – Fri, 9am – 5pm CST</p>
                    <p className="text-xs text-gray-400">Typical reply within 24 hrs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nudge to booking */}
            <div className="mt-5 bg-purple-600/10 border border-purple-500/20 rounded-xl px-4 py-3">
              <p className="text-xs text-gray-400 leading-relaxed">
                Prefer a quick chat? Book a free 30-min call below — I'll send a Google Meet link straight to your inbox.
              </p>
            </div>
          </div>
        </div>

        {/* ── BOOKING CALENDAR ── */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <h2 className="text-xl font-bold">Book a meeting</h2>
            </div>
            <span className="text-xs bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-medium">
              Free · 30 min · Google Meet
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Pick a date and time — you'll get a calendar invite with a Meet link automatically.
          </p>

          {bookingConfirmed ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-emerald-600/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Meeting confirmed!</h3>
              <p className="text-gray-400 text-sm mb-4">
                A calendar invite has been sent to <span className="text-white">{bookingEmail}</span>.
              </p>
              <div className="inline-flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm text-gray-300 text-left">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  June {selectedDay}, 2026 · {selectedTime}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  30 minutes
                </span>
                <span className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-purple-400" />
                  Google Meet link in your invite
                </span>
              </div>
              <button
                onClick={() => { setBookingConfirmed(false); setBookingName(""); setBookingEmail(""); setBookingNote(""); }}
                className="mt-6 text-xs text-gray-500 hover:text-gray-300 underline transition-colors"
              >
                Book another slot
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">

              {/* Calendar */}
              <div>
                <p className="text-xs text-gray-400 mb-3 font-medium">June 2026</p>
                <div className="grid grid-cols-7 gap-1 mb-1">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <div key={i} className="text-center text-xs text-gray-500 py-1">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {/* June 2026 starts on Monday — 1 empty cell for Sunday */}
                  <div />
                  {calDays.map((day) => {
                    const disabled = disabledDays.has(day);
                    const selected = selectedDay === day;
                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() => setSelectedDay(day)}
                        className={`aspect-square flex items-center justify-center rounded-lg text-xs font-medium transition-all
                          ${disabled ? "text-gray-600 cursor-not-allowed" : "cursor-pointer"}
                          ${selected ? "bg-purple-600 text-white" : !disabled ? "hover:bg-white/10 text-gray-300 border border-white/10" : ""}
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time + form */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-2 font-medium">
                    Available times · {selectedDay ? `Jun ${selectedDay}` : "Pick a date"}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all
                          ${selectedTime === t
                            ? "bg-purple-600 border-purple-500 text-white"
                            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                          }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Your name</label>
                    <input
                      type="text"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 outline-none rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Email address</label>
                    <input
                      type="email"
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 outline-none rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">What's it about? <span className="text-gray-600">(optional)</span></label>
                    <input
                      type="text"
                      value={bookingNote}
                      onChange={(e) => setBookingNote(e.target.value)}
                      placeholder="Quick intro, project idea…"
                      className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 outline-none rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <button
                    onClick={handleBooking}
                    disabled={!bookingName || !bookingEmail || bookingStatus.loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                  >
                    <Calendar className="w-4 h-4" />
                    {bookingStatus.loading ? "Booking..." : "Confirm booking"}
                  </button>
                  {bookingStatus.error ? (
                    <p className="text-sm text-red-400 mt-2">{bookingStatus.error}</p>
                  ) : bookingStatus.success ? (
                    <p className="text-sm text-emerald-400 mt-2">{bookingStatus.success}</p>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── FOOTER CTA ── */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to work together?</h3>
          <p className="text-gray-300 text-sm mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <a
            href="mailto:Cawich.Francis@Gmail.Com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 text-white"
          >
            <Mail className="w-4 h-4" />
            Send Me an Email
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contacts;