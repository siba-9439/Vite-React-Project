import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Handshake, Building, Heart } from "lucide-react";

const items = [
  { icon: Handshake, title: "Partner With Us", desc: "Collaborate with Aris Global Education to create impactful educational programs and initiatives.", action: "Become a Partner" },
  { icon: Building, title: "Become a Center / Franchise", desc: "Expand our reach by establishing an Aris Global Education center in your region.", action: "Apply for Franchise" },
  { icon: Heart, title: "Volunteer Opportunities", desc: "Join our volunteer programs and make a difference in students' lives through mentoring and support.", action: "Volunteer Now" },
];

const GetInvolved = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
        <p className="text-primary-foreground/80 text-lg">Join us in transforming education</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Ways to Get Involved" subtitle="There are many ways to be part of the Aris Global Education family" />
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="bg-card rounded-xl shadow-md border border-border p-8 text-center hover:shadow-lg transition-shadow">
              <item.icon className="mx-auto h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
              <Button className="bg-primary text-primary-foreground">{item.action}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default GetInvolved;
