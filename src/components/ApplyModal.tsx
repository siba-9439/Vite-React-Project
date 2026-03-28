import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ApplyModal = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
        Apply Now
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Apply Now</DialogTitle>
      </DialogHeader>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div><Label htmlFor="name">Full Name</Label><Input id="name" placeholder="Your full name" /></div>
        <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" /></div>
        <div><Label htmlFor="phone">Phone</Label><Input id="phone" placeholder="+91 XXXXX XXXXX" /></div>
        <div><Label htmlFor="course">Preferred Course</Label><Input id="course" placeholder="e.g. BBA, B.Tech" /></div>
        <Button type="submit" className="w-full bg-primary text-primary-foreground">Submit Application</Button>
      </form>
    </DialogContent>
  </Dialog>
);

export default ApplyModal;
