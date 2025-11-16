import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/content";

interface BrochureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BrochureDialog = ({ open, onOpenChange }: BrochureDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please provide your name and phone number",
        variant: "destructive"
      });
      return;
    }

    // Download the brochure
    const link = document.createElement('a');
    link.href = siteConfig.site.brochureUrl;
    link.download = 'Tiny-Forest-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started!",
      description: "Your brochure is being downloaded. Thank you for your interest!",
    });

    onOpenChange(false);
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Brochure</DialogTitle>
          <DialogDescription>
            Please provide your details to download our brochure
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Download Brochure
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureDialog;
