import Skills from "@/components/Skills";
import BadgesCertificates from "@/components/BadgesCertificates";

export default function SkillsPage() {
    return (
        <div className="space-y-20">
            <section className="py-20">
                <Skills />
            </section>
            <section className="py-20 border-t border-purple-500/10">
                <BadgesCertificates />
            </section>
        </div>
    );
}
