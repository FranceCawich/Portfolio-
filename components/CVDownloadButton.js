"use client";
import jsPDF from "jspdf";
import { PDFDocument } from "pdf-lib";
import { Download } from "lucide-react";
import headerData from "@/data/header";
import aboutData from "@/data/about";
import workData from "@/data/work";
import skillsData from "@/data/skills";
import contactData from "@/data/contacts";
import badgesData from "@/data/BadgesCert";
import referencesData from "@/data/references";
import projectsData from "@/data/projects";

const CVDownloadButton = ({ className }) => {
    // Helper to get image data url using a very robust multi-method approach
    const getDataUrl = (src) => {
        return new Promise((resolve) => {
            const fullPath = src.startsWith('/') ? window.location.origin + src : src;

            // Try direct fetch first (most reliable)
            fetch(fullPath)
                .then(res => res.blob())
                .then(blob => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => {
                        // Fallback to canvas method
                        const img = new Image();
                        img.onload = () => {
                            const canvas = document.createElement("canvas");
                            canvas.width = img.width;
                            canvas.height = img.height;
                            const ctx = canvas.getContext("2d");
                            ctx.drawImage(img, 0, 0);
                            resolve(canvas.toDataURL("image/jpeg"));
                        };
                        img.src = fullPath;
                    };
                    reader.readAsDataURL(blob);
                })
                .catch(() => {
                    // Last resort: canvas method
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement("canvas");
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0);
                        resolve(canvas.toDataURL("image/jpeg"));
                    };
                    img.onerror = () => resolve(null);
                    img.src = fullPath + "?v=" + new Date().getTime();
                });
        });
    };

    const generatePDF = async () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // --- Design Tokens (Teal Style) ---
        const tealColor = [78, 154, 180]; // Primary Teal
        const darkGray = [60, 60, 60];
        const mediumGray = [100, 100, 100];
        const lightGray = [180, 180, 180];
        const sidebarWidth = 70;
        const mainMargin = 12;
        const rightMargin = 22; // Increased to prevent cutoff
        const contentX = sidebarWidth + mainMargin; // 82
        const mainWidth = pageWidth - contentX - rightMargin; // ~106mm

        // 1. Teal Top Bar
        doc.setFillColor(...tealColor);
        doc.rect(0, 0, pageWidth, 24, "F");

        let currentY = 38;

        // --- HEADER SECTION ---
        try {
            // Robust image load: Try direct fetch first as it's most reliable for local Next.js assets
            const imgData = await getDataUrl(headerData.image || "/images/me.jpg");
            const imgSize = 42;
            const imgX = (sidebarWidth - imgSize) / 2 + 5;

            if (imgData) {
                try {
                    const centerX = imgX + imgSize / 2;
                    const centerY = currentY + imgSize / 2;
                    const radiusX = imgSize / 2;
                    const radiusY = imgSize / 2.2; // Slightly taller to create oval effect

                    // Draw white background ellipse first
                    doc.setFillColor(255, 255, 255);
                    doc.setDrawColor(255, 255, 255);
                    doc.ellipse(centerX, centerY, radiusX, radiusY, 'FD');

                    // Add image as rectangle
                    doc.addImage(imgData, 'JPEG', imgX, currentY, imgSize, imgSize);

                    // Draw teal border ellipse on top
                    doc.setDrawColor(78, 154, 180);
                    doc.setLineWidth(1.5);
                    doc.ellipse(centerX, centerY, radiusX, radiusY, 'S');
                } catch (imgErr) {
                    console.error("Failed to add image to PDF:", imgErr);
                }
            }

            // Name & Title
            doc.setFont("helvetica", "bold");
            doc.setFontSize(26);
            doc.setTextColor(...darkGray);
            const name = "FRANCIS CAWICH"; // High priority on correctness
            doc.text(name, contentX, currentY + 12);

            // Subtitle
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            doc.setTextColor(...tealColor);
            const subTitle = "Software Developer Database Developer";
            doc.saveGraphicsState();
            if (doc.setCharSpace) doc.setCharSpace(0.4);
            doc.text(subTitle, contentX, currentY + 21);
            doc.restoreGraphicsState();

            // Line
            doc.setDrawColor(180, 180, 180);
            doc.setLineWidth(0.3);
            doc.line(contentX, currentY + 25, contentX + mainWidth, currentY + 25);

        } catch (e) { console.error(e); }

        let leftY = currentY + 52;
        let rightY = currentY + 45;

        // --- SIDEBAR ---
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        doc.text("francis cawich", sidebarWidth / 2 + 5, currentY + 48, { align: "center" });

        const drawContact = (lbl, val, y) => {
            doc.setFont("helvetica", "bold");
            doc.setTextColor(...tealColor);
            doc.text(lbl, 15, y);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(80, 80, 80);
            doc.setFontSize(8.5);
            if (Array.isArray(val)) {
                doc.text(val, 22, y);
                return y + (val.length * 4) + 6;
            }
            doc.text(val, 22, y);
            return y + 6;
        };

        leftY = drawContact("P:", "501-606-7821", leftY);
        leftY = drawContact("E:", "cawich.francis@gmail.com", leftY);
        const addrLines = doc.splitTextToSize("19 Philip Goldon Highway\nConcepcion Village Corozal District", sidebarWidth - 25);
        leftY = drawContact("A:", addrLines, leftY) + 8;

        const sidebarHeader = (txt, y) => {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(13);
            doc.setTextColor(...tealColor);
            doc.saveGraphicsState();
            if (doc.setCharSpace) doc.setCharSpace(0.3);
            doc.text(txt.toUpperCase(), 15, y);
            doc.restoreGraphicsState();
            return y + 10;
        };

        // EDUCATION
        leftY = sidebarHeader("Education", leftY);
        doc.setFontSize(9.5);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(50, 50, 50);
        doc.text("Computer System Engineer", 15, leftY);
        leftY += 5;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(110, 110, 110);
        doc.text("Instituto Tecnologico de Chetumal", 15, leftY);
        leftY += 4;
        doc.text("2018 - 2022", 15, leftY);
        leftY += 9;

        doc.setFont("helvetica", "bold");
        doc.setTextColor(50, 50, 50);
        doc.text("Associates Degree IT", 15, leftY);
        leftY += 5;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(110, 110, 110);
        doc.text("Centro Escolar Mexico Jr College", 15, leftY);
        leftY += 4;
        doc.text("2015 - 2017", 15, leftY);
        leftY += 18;

        // EXPERTISE
        leftY = sidebarHeader("Expertise", leftY);
        doc.setFontSize(9.5);
        doc.setTextColor(80, 80, 80);
        const expertiseArr = ["Web Design", "Backend Development", "Rest API", "Front End Development", "Mongo Db, MySql, Sql Server", "Python, node.js, Ruby, Java"];
        expertiseArr.forEach(item => { doc.text(item, 15, leftY); leftY += 6; });
        leftY += 12;

        // LANGUAGE
        leftY = sidebarHeader("Language", leftY);
        doc.text("English", 15, leftY); leftY += 6;
        doc.text("Spanish", 15, leftY);

        // --- MAIN CONTENT ---

        // ABOUT ME
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(...tealColor);
        doc.text("ABOUT ME", contentX, rightY);
        rightY += 10;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(80, 80, 80);
        const bioText = aboutData.bio;
        const bioLinesParsed = doc.splitTextToSize(bioText, mainWidth);

        // Dot for bio
        doc.setFillColor(180, 180, 180);
        doc.circle(contentX - 4, rightY - 1.5, 0.5, 'F');

        doc.text(bioLinesParsed, contentX, rightY);
        rightY += (bioLinesParsed.length * 4.5) + 18;

        // WORK EXPERIENCE
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(...tealColor);
        doc.text("WORK EXPERIENCE", contentX, rightY);
        rightY += 12;

        const timeline_X = contentX + 2;
        const text_X = contentX + 8;

        workData.forEach((job) => {
            if (rightY > pageHeight - 45) {
                doc.addPage();
                doc.setFillColor(...tealColor);
                doc.rect(0, 0, pageWidth, 24, "F");
                rightY = 35;
            }

            doc.setDrawColor(200, 200, 200);
            doc.setLineWidth(0.4);
            doc.line(timeline_X, rightY - 5, timeline_X, rightY + 28);

            doc.setDrawColor(...tealColor);
            doc.setFillColor(255, 255, 255);
            doc.setLineWidth(0.6);
            doc.circle(timeline_X, rightY - 4, 1.8, 'FD');

            // Date
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(120, 120, 120);
            doc.text(job.date, text_X, rightY - 4);
            rightY += 5;

            // Company
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.setTextColor(50, 50, 50);
            doc.text(job.company, text_X, rightY);
            rightY += 5;

            // Role
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            doc.text(job.role, text_X, rightY);
            rightY += 5;

            const descText = `Responsible for development using ${job.skills.slice(0, 4).map(s => s.name).join(", ")}. Focused on building robust solutions.`;
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(110, 110, 110);
            const contentLines = doc.splitTextToSize(descText, mainWidth - 10);
            doc.text(contentLines, text_X, rightY);
            rightY += (contentLines.length * 4) + 12;
        });

        // PROJECTS (Formal Section)
        if (projectsData && projectsData.length > 0) {
            if (rightY > pageHeight - 50) {
                doc.addPage();
                doc.setFillColor(...tealColor);
                doc.rect(0, 0, pageWidth, 24, "F");
                rightY = 35;
            }
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.setTextColor(...tealColor);
            doc.text("KEY PROJECTS", contentX, rightY);
            rightY += 10;

            projectsData.slice(0, 3).forEach((project) => {
                if (rightY > pageHeight - 40) {
                    doc.addPage();
                    doc.setFillColor(...tealColor);
                    doc.rect(0, 0, pageWidth, 24, "F");
                    rightY = 35;
                }

                // Project title
                doc.setFont("helvetica", "bold");
                doc.setFontSize(10.5);
                doc.setTextColor(50, 50, 50);
                doc.text(project.title, contentX, rightY);
                rightY += 5;

                // Project description
                doc.setFont("helvetica", "normal");
                doc.setFontSize(8.5);
                doc.setTextColor(100, 100, 100);
                const descLines = doc.splitTextToSize(project.description, mainWidth - 5);
                doc.text(descLines, contentX, rightY);
                rightY += (descLines.length * 3.8) + 2;

                // Technologies used
                doc.setFont("helvetica", "bold");
                doc.setFontSize(8);
                doc.setTextColor(78, 154, 180);
                const techList = project.skills.slice(0, 5).map(s => s.name).join(" • ");
                const techLines = doc.splitTextToSize(`Technologies: ${techList}`, mainWidth - 5);
                doc.text(techLines, contentX, rightY);
                rightY += (techLines.length * 3.5) + 6;
            });
        }

        // CERTIFICATIONS (Newly added)
        if (badgesData && badgesData.length > 0) {
            if (rightY > pageHeight - 50) {
                doc.addPage();
                doc.setFillColor(...tealColor);
                doc.rect(0, 0, pageWidth, 24, "F");
                rightY = 35;
            }
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.setTextColor(...tealColor);
            doc.text("CERTIFICATIONS", contentX, rightY);
            rightY += 10;

            badgesData.forEach(cert => {
                doc.setFont("helvetica", "bold");
                doc.setFontSize(10);
                doc.setTextColor(50, 50, 50);
                doc.text(cert.CerificateName, contentX, rightY);
                rightY += 4;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(8.5);
                doc.setTextColor(110, 110, 110);
                doc.text(`${cert.company} | ${cert.date}`, contentX, rightY);
                rightY += 8;
            });
            rightY += 5;
        }

        // REFERENCES
        if (referencesData && referencesData.length > 0) {
            if (rightY > pageHeight - 65) {
                doc.addPage();
                doc.setFillColor(...tealColor);
                doc.rect(0, 0, pageWidth, 24, "F");
                rightY = 35;
            }
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.setTextColor(...tealColor);
            doc.text("REFERENCES", contentX, rightY);
            rightY += 12;

            referencesData.forEach((ref, index) => {
                if (rightY > pageHeight - 35) {
                    doc.addPage();
                    doc.setFillColor(...tealColor);
                    doc.rect(0, 0, pageWidth, 24, "F");
                    rightY = 35;
                }

                const xPos = contentX;
                const yPos = rightY;

                doc.setFont("helvetica", "bold");
                doc.setFontSize(10.5);
                doc.setTextColor(50, 50, 50);
                doc.text(ref.name, xPos, yPos);

                doc.setFont("helvetica", "normal");
                doc.setFontSize(8.5);
                doc.setTextColor(110, 110, 110);
                const refInfo = `${ref.company} / ${ref.position}`;
                const refLines = doc.splitTextToSize(refInfo, mainWidth - 5);
                doc.text(refLines, xPos, yPos + 6);

                let nextY = yPos + 6 + (refLines.length * 4) + 3;

                if (ref.workDescription) {
                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(8.5);
                    doc.setTextColor(100, 100, 100); // Slightly lighter for description
                    const descLines = doc.splitTextToSize(ref.workDescription, mainWidth - 5);
                    doc.text(descLines, xPos, nextY);
                    nextY += (descLines.length * 3.8) + 4;
                }

                const cont_Y = nextY;
                let currentLineY = cont_Y;
                if (ref.phone) {
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(8.5);
                    doc.text("Phone: ", xPos, currentLineY);
                    doc.setFont("helvetica", "normal");
                    doc.text(ref.phone, xPos + 15, currentLineY);
                    currentLineY += 5;
                }

                if (ref.email) {
                    doc.setFont("helvetica", "bold");
                    doc.text("Email: ", xPos, currentLineY);
                    doc.setFont("helvetica", "normal");
                    doc.text(ref.email, xPos + 15, currentLineY);
                    currentLineY += 5;
                }

                rightY = currentLineY + 7;
            });
            currentY = rightY + (Math.ceil(referencesData.length / 2) * 35);
        } else {
            currentY = rightY;
        }
        const generatedPdfBytes = doc.output('arraybuffer');
        try {
            const mergedPdf = await PDFDocument.create();
            const genDoc = await PDFDocument.load(generatedPdfBytes);
            const copiedPages = await mergedPdf.copyPages(genDoc, genDoc.getPageIndices());
            copiedPages.forEach(p => mergedPdf.addPage(p));

            const files = ['/files/Certificates.pdf', '/files/diploma.pdf'];
            for (const file of files) {
                try {
                    const res = await fetch(file);
                    if (res.ok) {
                        const bytes = await res.arrayBuffer();
                        const externalDoc = await PDFDocument.load(bytes);
                        const pages = await mergedPdf.copyPages(externalDoc, externalDoc.getPageIndices());
                        pages.forEach(p => mergedPdf.addPage(p));
                    }
                } catch (e) { console.warn(`Couln't merge ${file}`, e); }
            }

            const mergedBytes = await mergedPdf.save();
            const blob = new Blob([mergedBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${headerData.name.replace(" ", "_")}_Final_CV.pdf`;
            a.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Merging failed", error);
            doc.save(`${headerData.name.replace(" ", "_")}_CV.pdf`);
        }
    };

    return (
        <button
            onClick={generatePDF}
            className={`group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 mt-6 ${className || ''}`}
        >
            <Download className="w-5 h-5" />
            Download Full CV
            <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></span>
        </button>
    );
};

export default CVDownloadButton;
