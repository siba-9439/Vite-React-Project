import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ApplyModal from "@/components/ApplyModal";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "15+ Courses", desc: "From B.Tech to MBA across multiple disciplines" },
  { icon: BookOpen, title: "Expert Faculty", desc: "Industry-experienced educators guiding your journey" },
  { icon: Users, title: "10,000+ Students", desc: "A growing community of future professionals" },
  { icon: Award, title: "Recognized Programs", desc: "Affiliated with top universities in India" },
];

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Empowering Education for a Better Tomorrow
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Aris Global Education provides higher education programs, professional courses, and skill-based learning across multiple disciplines in India.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <ApplyModal />
          <Link to="/courses" className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold hover:bg-primary-foreground/10 transition-colors">
            Explore Courses
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold hover:bg-primary-foreground/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Aris Global Education?" subtitle="We bring together quality education, practical learning, and industry connections." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card rounded-xl shadow-md p-6 text-center border border-border hover:shadow-lg transition-shadow">
              <h.icon className="mx-auto h-12 w-12 text-secondary mb-4" />
              <h3 className="text-lg font-bold text-card-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground mb-8 text-lg">Join thousands of students building their future with Aris Global Education.</p>
        <ApplyModal />
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
