"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Download, MapPin, Briefcase, BookOpen, Code, ChevronDown } from 'lucide-react';
import headerData from "../data/header";
import CVDownloadButton from "./CVDownloadButton";

const Header = () => {
  const { image, name, jobTitle, address, experience, education } = headerData;

  // Split name for styling (Francis Cawich)
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <div className="relative rounded-2xl w-full max-w-sm shadow-2xl bg-slate-800">
                <Image
                  src={image}
                  alt={name}
                  width={500}
                  height={600}
                  priority
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-950 animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-2 text-white">
                {firstName} <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{lastName}</span>
              </h2>
              <p className="text-xl text-purple-300 font-semibold tracking-wider uppercase">{jobTitle}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-colors">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm capitalize">{address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Briefcase className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm font-semibold capitalize">{experience}</span>
              </div>
            </div>

            {/* Credentials Cards */}
            <div className="space-y-3 pt-4">
              {education.map((edu, index) => {
                // Alternate colors for cards based on index
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`group relative bg-gradient-to-r ${isEven ? 'from-purple-600/20 to-pink-600/20 border-purple-500/30 hover:border-purple-400/60 hover:shadow-purple-500/20' : 'from-blue-600/20 to-cyan-600/20 border-blue-500/30 hover:border-blue-400/60 hover:shadow-blue-500/20'} border rounded-xl p-4 transition-all cursor-pointer hover:shadow-lg`}>
                    <div className="flex items-start gap-3">
                      {isEven ? (
                        <BookOpen className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      ) : (
                        <Code className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-gray-200">{edu.degree}</p>
                        <p className="text-xs text-gray-400 mt-1">{edu.institution} {edu.period ? `(${edu.period})` : ''}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <CVDownloadButton />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-slate-950 to-purple-950/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Completed', value: '15+' },
            { label: 'Technologies Mastered', value: '20+' },
          ].map((stat, i) => (
            <div key={i} className="group text-center p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-500/10 transition-all">
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Header;
