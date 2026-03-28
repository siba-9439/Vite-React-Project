import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ApplyModal from "@/components/ApplyModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardList, FileText, CheckCircle, Send } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Check Eligibility", desc: "Review the eligibility criteria for your desired program." },
  { icon: FileText, title: "Prepare Documents", desc: "Gather all required documents and certificates." },
  { icon: CheckCircle, title: "Fill Application", desc: "Complete the online application form with accurate details." },
  { icon: Send, title: "Submit & Confirm", desc: "Submit your application and await confirmation." },
];

const faqs = [
  { q: "What are the admission deadlines?", a: "Admissions are open on a rolling basis. Please check the specific program page for exact deadlines." },
  { q: "Is there an entrance exam?", a: "Some programs require entrance exams. Details are provided during the application process." },
  { q: "Can I apply for multiple courses?", a: "Yes, you can apply for multiple courses simultaneously." },
  { q: "What documents are required?", a: "Generally: mark sheets, identity proof, passport photos, and transfer certificate. Specific requirements vary by program." },
  { q: "Is financial aid available?", a: "Yes, scholarships and financial aid options are available for eligible students." },
];

const Admissions = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
        <p className="text-primary-foreground/80 text-lg">Your journey to a brighter future starts here</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Admission Process" subtitle="Follow these simple steps to join Aris Global Education" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-card rounded-xl shadow border border-border p-6 text-center relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">{i + 1}</div>
              <s.icon className="mx-auto h-10 w-10 text-primary mb-3" />
              <h3 className="font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="bg-muted rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-primary mb-4">Required Documents</h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
            {["10th & 12th Mark Sheets", "Transfer Certificate", "Migration Certificate", "Passport-size Photographs", "Aadhaar Card / ID Proof", "Caste Certificate (if applicable)", "Income Certificate (for scholarships)", "Previous Degree (for PG programs)"].map((d) => (
              <li key={d} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> {d}</li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <SectionHeading title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <ApplyModal />
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Admissions;
