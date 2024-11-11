import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Security professionals in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-800/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32">
        <div className="flex flex-col gap-8 max-w-[640px]">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl/tight sm:text-5xl/tight font-bold text-white">
              Professional Security Solutions You Can Trust
            </h1>
            <p className="text-lg/relaxed text-white/90 max-w-[540px]">
              Protecting your business with trained professionals and 24/7 dedicated service.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="text-base font-medium"
            >
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
              <Link href="/services">
                Our Services
              </Link>
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white">
                Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white">
                24/7 Protection
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white">
                Expert Teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
