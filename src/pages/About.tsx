import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Eye, Target, BookOpen, Users, Lightbulb } from "lucide-react";

const missions = [
  "To provide high-quality, industry-oriented education with a focus on practical learning",
  "To develop students' skills, creativity, and critical thinking for career success",
  "To promote innovation, research, and modern teaching methodologies",
  "To build strong industry connections for better training and placement opportunities",
  "To instill ethical values, leadership qualities, and social responsibility",
  "To create a supportive and inclusive learning environment for overall student growth",
];

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-primary-foreground/80 text-lg">Learn about our vision, mission, and values</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-card rounded-xl shadow-md p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-secondary h-8 w-8" />
              <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become a leading institution of global standards that empowers students through quality education, innovation, and skill development. To nurture future-ready professionals who contribute meaningfully to society and the world.
            </p>
          </div>
          <div className="bg-card rounded-xl shadow-md p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-secondary h-8 w-8" />
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
            </div>
            <ul className="space-y-3">
              {missions.map((m, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-secondary font-bold mt-0.5">•</span> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Objectives */}
        <SectionHeading title="Our Objectives" subtitle="Guiding principles that drive our institution forward" />
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: BookOpen, title: "Academic Excellence", desc: "Maintaining the highest standards of education and research." },
            { icon: Users, title: "Student Development", desc: "Holistic growth through mentorship and extracurricular activities." },
            { icon: Lightbulb, title: "Innovation", desc: "Fostering creativity and entrepreneurial thinking." },
          ].map((o) => (
            <div key={o.title} className="bg-card rounded-xl p-6 shadow border border-border text-center">
              <o.icon className="mx-auto h-10 w-10 text-secondary mb-3" />
              <h3 className="font-bold text-primary mb-2">{o.title}</h3>
              <p className="text-muted-foreground text-sm">{o.desc}</p>
            </div>
          ))}
        </div>

        {/* Founder & Affiliation */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-3">Founder's Message</h3>
            <p className="text-muted-foreground italic">"Education is the most powerful tool we can use to change the world. At Aris Global Education, we are committed to providing opportunities that transform lives and empower communities."</p>
            <p className="mt-4 font-semibold text-foreground">— Founder, Aris Global Education</p>
          </div>
          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-3">Affiliation & Recognition</h3>
            <p className="text-muted-foreground">Aris Global Education is affiliated with recognized universities and regulatory bodies in India. Our programs are designed to meet national education standards and industry requirements.</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
