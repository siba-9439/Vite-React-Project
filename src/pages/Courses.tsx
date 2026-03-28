import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ApplyModal from "@/components/ApplyModal";
import { Briefcase, BookOpen, Library, Cpu, Pill, Wrench } from "lucide-react";

const categories = [
  {
    icon: Briefcase, title: "Commerce & Management", courses: [
      { name: "B.Com", desc: "Foundation in commerce, accounting, and business.", duration: "3 Years", eligibility: "10+2 with Commerce" },
      { name: "BBA", desc: "Bachelor's in Business Administration with industry focus.", duration: "3 Years", eligibility: "10+2 any stream" },
      { name: "MBA", desc: "Master's in Business Administration for leadership roles.", duration: "2 Years", eligibility: "Bachelor's degree" },
    ]
  },
  {
    icon: BookOpen, title: "Arts & Humanities", courses: [
      { name: "BA", desc: "Broad-based liberal arts education.", duration: "3 Years", eligibility: "10+2 any stream" },
      { name: "MA", desc: "Advanced study in humanities and social sciences.", duration: "2 Years", eligibility: "Bachelor's degree" },
    ]
  },
  {
    icon: Library, title: "Library Sciences", courses: [
      { name: "BLIS", desc: "Bachelor of Library and Information Science.", duration: "1 Year", eligibility: "Bachelor's degree" },
      { name: "MLIS", desc: "Master of Library and Information Science.", duration: "1 Year", eligibility: "BLIS degree" },
    ]
  },
  {
    icon: Cpu, title: "Engineering & Technology", courses: [
      { name: "B.Tech", desc: "Undergraduate engineering across multiple specializations.", duration: "4 Years", eligibility: "10+2 with PCM" },
      { name: "M.Tech", desc: "Postgraduate engineering with research focus.", duration: "2 Years", eligibility: "B.Tech/BE degree" },
    ]
  },
  {
    icon: Pill, title: "Pharmacy", courses: [
      { name: "D.Pharmacy", desc: "Diploma in Pharmacy for entry-level practice.", duration: "2 Years", eligibility: "10+2 with PCB/PCM" },
      { name: "B.Pharmacy", desc: "Bachelor's in Pharmaceutical Sciences.", duration: "4 Years", eligibility: "10+2 with PCB/PCM" },
      { name: "M.Pharmacy", desc: "Advanced pharmaceutical research and practice.", duration: "2 Years", eligibility: "B.Pharmacy degree" },
    ]
  },
  {
    icon: Wrench, title: "Vocational & Diploma", courses: [
      { name: "B.Voc", desc: "Skill-focused vocational bachelor's program.", duration: "3 Years", eligibility: "10+2 any stream" },
      { name: "Skill-based Diploma", desc: "Industry-oriented short-term diploma programs.", duration: "1-2 Years", eligibility: "10th/12th pass" },
    ]
  },
];

const Courses = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
        <p className="text-primary-foreground/80 text-lg">Explore our wide range of courses across multiple disciplines</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((cat) => (
          <div key={cat.title} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <cat.icon className="h-8 w-8 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary">{cat.title}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.courses.map((c) => (
                <div key={c.name} className="bg-card rounded-xl shadow-md border border-border p-6 hover:shadow-lg transition-shadow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">{c.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{c.desc}</p>
                  <div className="text-xs text-muted-foreground space-y-1 mb-4">
                    <p><span className="font-semibold text-foreground">Duration:</span> {c.duration}</p>
                    <p><span className="font-semibold text-foreground">Eligibility:</span> {c.eligibility}</p>
                  </div>
                  <ApplyModal />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Courses;
