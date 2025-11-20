declare global {
  interface Window {
    zaraz?: {
      track: (eventName: string, data?: Record<string, any>) => void;
    };
  }
}

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian phone number validation
    return phoneRegex.test(phone.replace(/\D/g, "")); // Remove non-digits and test
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please provide your name and phone number",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (!validatePhone(cleanedPhone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit Indian phone number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Download the brochure immediately
      const link = document.createElement("a");
      link.href = siteConfig.site.brochureUrl;
      link.download = "Tiny-Forest-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message immediately
      toast({
        title: "Download started!",
        description:
          "Your brochure is being downloaded. Thank you for your interest!",
      });

      if (typeof window !== "undefined") {
        window.zaraz?.track("download_brochure");
        console.log("TinyForest_Brochure_Download");
      } else {
        console.log("TinyForest_Brochure_Download-");
      }

      // Close dialog and reset form immediately
      onOpenChange(false);
      setFormData({ name: "", phone: "", email: "" });

      // Send data to Formspree in background (no await)
      fetch("https://formspree.io/f/mqawnyja", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Lead From Website - Brochure Download",
          name: formData.name,
          phone: cleanedPhone, // Send cleaned phone number
          email: formData.email,
          source: "Website Brochure Download",
          timestamp: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        }),
      })
        .then((response) => {
          if (!response.ok) {
            console.error("Form submission failed");
          }
          // Silently handle success - user doesn't need to know
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          // Silently handle error - user doesn't need to know
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error("Error in form submission:", error);
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and limit to 10 digits
    const numbersOnly = value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, phone: numbersOnly });
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
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your 10-digit phone number"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              maxLength={10}
            />
            {formData.phone && !validatePhone(formData.phone) && (
              <p className="text-sm text-red-500">
                Please enter a valid 10-digit phone number
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Download Brochure"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureDialog;
