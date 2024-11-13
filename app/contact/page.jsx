"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { containerVariants, itemVariants, fadeInVariants } from "@/lib/animation-variants";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+256 123 456 789", "+256 987 654 321"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@gallantsecurity.com", "support@gallantsecurity.com"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Business Center", "Kampala, Uganda"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday: 8am - 6pm", "24/7 Emergency Response"],
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative py-24 bg-muted">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground">
              Get in touch with our team for professional security solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <div className="space-y-1 text-muted-foreground">
                    {item.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 