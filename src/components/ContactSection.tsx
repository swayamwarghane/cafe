import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
} from "lucide-react";

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = "" }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    loading: false,
    error: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });

    // Simulate form submission
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        message: "",
        submitted: true,
        loading: false,
        error: false,
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 6:00 PM" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "#" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "#" },
  ];

  return (
    <section
      id="contact"
      className={`py-16 px-4 md:px-8 lg:px-16 bg-stone-50 ${className}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">
            Get In Touch
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our
            menu, hours, or just want to say hello, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="shadow-md bg-white border-0">
            <CardContent className="p-6">
              {formState.submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-stone-600">
                    Thank you for reaching out. We'll get back to you soon!
                  </p>
                  <Button
                    className="mt-6 bg-stone-800 hover:bg-stone-700"
                    onClick={() =>
                      setFormState({ ...formState, submitted: false })
                    }
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-stone-300 focus:border-stone-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-stone-300 focus:border-stone-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="min-h-[120px] border-stone-300 focus:border-stone-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-stone-800 hover:bg-stone-700 transition-colors"
                    disabled={formState.loading}
                  >
                    {formState.loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-[250px] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1652813742483!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brew & Bloom location"
              />
            </div>

            {/* Contact Details */}
            <Card className="shadow-md bg-white border-0">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-stone-700 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Address</h4>
                    <p className="text-stone-600">
                      150 Park Row, New York, NY 10007
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-stone-700 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Phone</h4>
                    <p className="text-stone-600">(212) 555-1234</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-stone-700 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">Email</h4>
                    <p className="text-stone-600">hello@brewandbloom.com</p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <div className="flex items-start space-x-3 mb-3">
                    <Clock className="h-5 w-5 text-stone-700 mt-0.5" />
                    <h4 className="font-medium text-stone-800">
                      Business Hours
                    </h4>
                  </div>
                  <div className="ml-8 space-y-2">
                    {businessHours.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-stone-600"
                      >
                        <span>{item.day}</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h4 className="font-medium text-stone-800 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <TooltipProvider>
                      {socialLinks.map((social, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <a
                              href={social.url}
                              className="p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
                              aria-label={`Follow us on ${social.name}`}
                            >
                              {social.icon}
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Follow us on {social.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="shadow-md bg-stone-800 text-white border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
                <p className="text-stone-300 mb-4">
                  Subscribe to our newsletter for special offers and events.
                </p>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Your email address"
                    className="bg-stone-700 border-stone-600 text-white placeholder:text-stone-400"
                  />
                  <Button className="bg-green-700 hover:bg-green-600 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
