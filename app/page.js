import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkHistory from "@/components/WorkHistory";
import BadgesCertificates from "@/components/BadgesCertificates";
import References from "@/components/References";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <main className="max-w-screen-xl w-full mx-auto px-6 pt-10">
        <section id="home" className="pt-20">
          <Header />
        </section>

        <section id="contact" className="py-20">
          <Contacts />
        </section>

        <section id="about" className="py-20 border-t border-purple-500/10">
          <About />
        </section>

        <section id="skills" className="py-20 border-t border-purple-500/10">
          <Skills />
        </section>

        <section className="py-20 border-t border-purple-500/10">
          <BadgesCertificates />
        </section>

        <section id="services" className="py-20 border-t border-purple-500/10">
          <WorkHistory />
        </section>

        <section id="projects" className="py-20 border-t border-purple-500/10">
          <Projects />
        </section>

        <section id="references" className="py-20 border-t border-purple-500/10">
          <References />
        </section>
      </main>
      <Footer />
    </div>
  );
}

