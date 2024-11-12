import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
// React Server Components
import * as motion from "framer-motion/client";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/security-team.jpg"
          alt="Security professionals in action"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={50}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32">
        <div className="flex flex-col gap-8 max-w-[640px]">
          {/* Main Content */}
          <div className="space-y-6">
            <motion.h1
              className="text-4xl/tight sm:text-5xl/tight font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional Security Solutions You Can Trust
            </motion.h1>
            <motion.p
              className="text-lg/relaxed text-white/90 max-w-[540px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Protecting your business with trained professionals and 24/7
              dedicated service.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="text-base font-medium">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-medium bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-2 rounded-lg bg-white/10">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white">
                Licensed & Insured
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="p-2 rounded-lg bg-white/10">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white">
                24/7 Protection
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="p-2 rounded-lg bg-white/10">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white">
                Expert Teams
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
