"use client";
import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Download, Award, Grip } from 'lucide-react';
// Using lucide-react for standard icons, and react-icons for Brands (Github, etc used in original code, but we need specific brand icons if Lucide doesn't have them all perfectly matching user preference, 
// BUT user provided code used Lucide for Github/Twitter/Linkedin. I will stick to Lucide where possible matching their code, and import FaMedium/FaWhatsapp for missing ones).
import { Github, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';
import { FaMedium, FaWhatsapp } from 'react-icons/fa';
import contactsData from "@/data/contacts";
import CVDownloadButton from './CVDownloadButton';

const Contacts = () => {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(id);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  // Helper to find link in data
  const getLink = (name) => contactsData.find(c => c.name.toLowerCase() === name.toLowerCase())?.link || '#';

  const socialLinks = [
    { icon: Github, label: 'Github', color: 'from-gray-700 to-gray-900', hover: 'hover:shadow-gray-500/50', url: getLink('github') },
    { icon: Twitter, label: 'Twitter', color: 'from-blue-400 to-blue-600', hover: 'hover:shadow-blue-500/50', url: getLink('twitter') },
    { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800', hover: 'hover:shadow-blue-600/50', url: getLink('linkedin') },
    { icon: Youtube, label: 'YouTube', color: 'from-red-500 to-red-700', hover: 'hover:shadow-red-500/50', url: getLink('youtube') },
    { icon: Facebook, label: 'Facebook', color: 'from-blue-500 to-blue-700', hover: 'hover:shadow-blue-500/50', url: getLink('facebook') },
    { icon: FaMedium, label: 'Medium', color: 'from-stone-700 to-stone-900', hover: 'hover:shadow-stone-500/50', url: getLink('medium') },
    { icon: FaWhatsapp, label: 'WhatsApp', color: 'from-green-500 to-emerald-600', hover: 'hover:shadow-green-500/50', url: getLink('whatsapp') },
  ];

  const emailContacts = [
    { email: 'Cawich.Francis@Gmail.Com', icon: Mail, color: 'from-red-500 to-pink-600' },
    { email: 'Franol27@Outlook.Com', icon: Mail, color: 'from-blue-500 to-cyan-600' },
  ];

  const directContact = [
    { icon: Phone, label: '+501 673-1342', color: 'from-green-500 to-emerald-600', hover: 'hover:shadow-green-500/50' },
  ];

  const resources = [
    // Using existing file paths
    { icon: Download, label: 'Download CV', color: 'from-orange-500 to-pink-500', hover: 'hover:shadow-orange-500/50', link: '/files/cv.pdf', isDownload: true },
    { icon: Award, label: 'View Certificates', color: 'from-purple-500 to-pink-600', hover: 'hover:shadow-purple-500/50', link: '/files/Certificates.pdf', isDownload: false },
  ];

  return (
    <div className="min-h-screen text-white pt-10 pb-20 px-6 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you want to collaborate or just say hello, feel free to reach out!
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="space-y-12">
          {/* Social Links Section */}
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Social Profiles</h2>
              <p className="text-gray-400 text-sm ml-auto">Follow my work</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/item relative overflow-hidden bg-gradient-to-br ${social.color} p-6 rounded-xl transition-all duration-300 ${social.hover} hover:shadow-lg hover:scale-105 cursor-pointer block`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
                      <Icon className="w-8 h-8" />
                      <span className="text-sm font-semibold text-center">{social.label}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Email Section */}
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Email Me</h2>
              <p className="text-gray-400 text-sm ml-auto">Direct contact</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {emailContacts.map((contact, i) => (
                <button
                  key={i}
                  onClick={() => handleCopy(contact.email, i)}
                  className={`group/email w-full relative overflow-hidden bg-gradient-to-br ${contact.color} p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105`}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/email:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6" />
                      <div className="text-left">
                        <p className="text-xs text-white/70 mb-1">Email</p>
                        <p className="text-sm font-semibold break-all">{contact.email}</p>
                      </div>
                    </div>
                    {copiedEmail === i ? (
                      <Check className="w-5 h-5 text-green-300 animate-pulse shrink-0" />
                    ) : (
                      <Copy className="w-5 h-5 opacity-60 group-hover/email:opacity-100 transition-opacity shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Direct Contact Section */}
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Call Me</h2>
              <p className="text-gray-400 text-sm ml-auto">Immediate response</p>
            </div>
            <div>
              {directContact.map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={i}
                    href={`tel:${contact.label.replace(/\s/g, '')}`}
                    className={`group/phone w-full md:w-auto relative overflow-hidden bg-gradient-to-br ${contact.color} p-6 rounded-xl transition-all duration-300 ${contact.hover} hover:shadow-lg hover:scale-105 block`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/phone:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 flex items-center gap-4">
                      <Icon className="w-6 h-6 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-white/70 mb-1">Phone</p>
                        <p className="text-lg font-semibold">{contact.label}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resources Section */}
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Resources</h2>
              <p className="text-gray-400 text-sm ml-auto">Get to know me better</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.map((resource, i) => {
                const Icon = resource.icon;
                return resource.label === 'Download CV' ? (
                  <div key={i} className="flex-1">
                    <CVDownloadButton />
                  </div>

                ) : (
                  <a
                    key={i}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/resource relative overflow-hidden bg-gradient-to-br ${resource.color} p-6 rounded-xl transition-all duration-300 ${resource.hover} hover:shadow-lg hover:scale-105 flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/resource:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 flex items-center gap-3">
                      <Icon className="w-6 h-6" />
                      <span className="font-semibold">{resource.label}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 pt-12 border-t border-purple-500/30">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            <a href="mailto:Cawich.Francis@Gmail.Com" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 text-white">
              <Mail className="w-5 h-5" />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
