import React, { useState } from 'react';
import { ExternalLink, Download, MapPin, Briefcase, Award, Code2, Menu, X } from 'lucide-react';

export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const skills = [
        { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript', 'Tailwind CSS', 'Bootstrap'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'PHP', 'Python', 'FastAPI', 'C++'] },
        { category: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'MariaDB'] },
        { category: 'ML/AI', items: ['TensorFlow', 'PyTorch', 'Deep Learning', 'OpenAI CUDA'] },
        { category: 'Tools', items: ['Docker', 'Git', 'AWS', 'Google Colab'] },
    ];

    const workHistory = [
        {
            title: 'Software Developer',
            company: 'SpeedNet Communication LTD',
            period: '06/2024 - Present',
            type: 'Onsite',
            skills: ['Python', 'HTML', 'MySQL', 'PostgreSQL', 'C', 'PHP'],
        },
        {
            title: 'IT Instructor',
            company: 'Escuela Secundaria Tecna Mexico ACE',
            period: '06/2023',
            type: 'Onsite',
            skills: ['Python', 'HTML', 'MariaDB'],
        },
        {
            title: 'Full Stack Developer',
            company: 'Quickstop Finance Center',
            period: '20/02/2023 - 20/11/2023',
            type: 'Onsite',
            skills: ['Node.js', 'Express', 'MongoDB', 'React', 'Next.js', 'Tailwind CSS', 'Material UI'],
        },
        {
            title: 'Research & Development Intern',
            company: 'University Institute of Technology Chetumal',
            period: '08/2019 - 11/2022',
            type: 'Onsite',
            skills: ['Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'MongoDB'],
        },
    ];

    const projects = [
        {
            title: 'Pest Detection using CNNs',
            desc: 'Built convolutional neural networks with Python and TensorFlow to detect pests in sugar cane crops in Quintana Roo, Mexico. Trained on 2000+ images with 95% accuracy.',
            tags: ['Python', 'TensorFlow', 'Deep Learning'],
        },
        {
            title: 'Machine Learning Docker Container',
            desc: 'Created Docker containers for deploying ML models using TensorFlow, CUDA, and cuDNN. Tested on Windows and Linux with zero dependency issues.',
            tags: ['Docker', 'TensorFlow', 'CUDA'],
        },
        {
            title: 'Deep Learning Tutorial Suite',
            desc: 'Comprehensive Jupyter notebook tutorials teaching TensorFlow, Keras, and PyTorch fundamentals. Designed for beginners with runnable examples.',
            tags: ['PyTorch', 'TensorFlow', 'Keras'],
        },
        {
            title: 'Mobile CURP/RFC Generator',
            desc: 'Android app built with Kotlin and Android Studio for generating Mexican CURP and RFC codes. Lightweight and generates results in under 5 seconds.',
            tags: ['Kotlin', 'Android'],
        },
    ];

    const testimonials = [
        {
            name: 'Ryan Florence',
            role: 'Remix & React Training',
            text: 'I feel like an idiot for not using Tailwind CSS until now.',
        },
        {
            name: 'Debbie O\'Brien',
            role: 'Senior Program Manager at Microsoft',
            text: 'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
        },
        {
            name: 'Kent C. Dodds',
            role: 'Developer and Educator',
            text: 'Skip to the end. Use @tailwindcss.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-purple-500/20">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">FC</h1>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <div className="md:col-span-2">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Francis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Cawich</span>
                        </h1>
                        <p className="text-2xl text-gray-300 mb-6">Full Stack Developer & Data Analyst</p>
                        <div className="space-y-3 text-gray-400 mb-8">
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-purple-400" />
                                <span>Corozal, Belize</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase size={18} className="text-purple-400" />
                                <span>3+ Years of Experience</span>
                            </div>
                            <p className="text-sm">BSc Computer Systems Engineering & Mathematics</p>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            <a href="#" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition">
                                View Projects
                            </a>
                            <a href="#" className="px-6 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-500/10 transition flex items-center gap-2">
                                <Download size={18} /> Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3">
                            {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((platform) => (
                                <a key={platform} href="#" className="text-sm px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-purple-500/20 hover:text-purple-300 transition">
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="hidden md:block">
                        <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                            <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                                <div className="text-6xl">👤</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-4 py-20 border-t border-purple-500/20">
                <h2 className="text-3xl font-bold text-white mb-8">About</h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                    I'm a versatile software developer and data analyst with expertise spanning JavaScript, Python, React, Node.js, and machine learning frameworks. I thrive on building intuitive user interfaces and developing predictive models. With a passion for solving complex problems and driving innovation, I'm committed to leveraging technology to empower businesses and create positive impact.
                </p>
            </section>

            {/* Skills Section */}
            <section className="max-w-6xl mx-auto px-4 py-20 border-t border-purple-500/20">
                <h2 className="text-3xl font-bold text-white mb-12">Technical Skills</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition">
                            <h3 className="text-purple-400 font-semibold mb-4 text-lg">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-200 text-sm rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Work History */}
            <section className="max-w-6xl mx-auto px-4 py-20 border-t border-purple-500/20">
                <h2 className="text-3xl font-bold text-white mb-12">Work History</h2>
                <div className="space-y-6">
                    {workHistory.map((job, idx) => (
                        <div key={idx} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                    <p className="text-purple-400">{job.company}</p>
                                </div>
                                <span className="text-sm text-gray-400">{job.period}</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{job.type}</p>
                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-200 text-xs rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="max-w-6xl mx-auto px-4 py-20 border-t border-purple-500/20">
                <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition group">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">{project.title}</h3>
                                <ExternalLink size={20} className="text-purple-400 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                            <p className="text-gray-400 mb-4">{project.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-200 text-xs rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Footer */}
            <footer className="max-w-6xl mx-auto px-4 py-12 border-t border-purple-500/20 mt-20">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© 2024 Francis Cawich. All rights reserved.</p>
                    <p>Crafted with passion • Built with Next.js & Tailwind</p>
                </div>
            </footer>
        </div>
    );
}
