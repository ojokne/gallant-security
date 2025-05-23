"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { containerVariants, itemVariants, fadeInVariants } from "@/lib/animation-variants";
import HeroOverlay from "@/components/common/hero-overlay";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

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
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your API
      console.log(data);
      
      // Show success message with the new variant
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "success",
      });
      
      form.reset();
    } catch (error) {
      // Show error message
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

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

      {/* Contact Form and Information Section */}
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
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="email" placeholder="Email Address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder="Your Message" 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-r-transparent" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
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