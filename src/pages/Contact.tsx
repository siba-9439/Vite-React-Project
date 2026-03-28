import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80 text-lg">We'd love to hear from you</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Get in Touch" centered={false} />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-secondary mt-1" />
                <div><h4 className="font-semibold text-foreground">Address</h4><p className="text-muted-foreground text-sm">123 Education Street, New Delhi, India - 110001</p></div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-secondary mt-1" />
                <div><h4 className="font-semibold text-foreground">Phone</h4><p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p></div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-secondary mt-1" />
                <div><h4 className="font-semibold text-foreground">Email</h4><p className="text-muted-foreground text-sm">info@arisglobaleducation.com</p></div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-md border border-border p-8">
            <h3 className="text-xl font-bold text-primary mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div><Label htmlFor="c-name">Name</Label><Input id="c-name" placeholder="Your name" /></div>
              <div><Label htmlFor="c-email">Email</Label><Input id="c-email" type="email" placeholder="your@email.com" /></div>
              <div><Label htmlFor="c-subject">Subject</Label><Input id="c-subject" placeholder="Subject" /></div>
              <div><Label htmlFor="c-message">Message</Label><Textarea id="c-message" placeholder="Your message..." rows={4} /></div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
