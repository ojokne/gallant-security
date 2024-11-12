"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Target, Rocket, Users, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/about/hero";
import { Stats } from "@/components/about/stats";
import { CoreValues } from "@/components/about/core-values";
import VisionMission from "@/components/about/vision-mission";
import DirectorMessage from "@/components/about/director-message";
import ServiceStandards from "@/components/about/service-standards";
import { LeadershipTeam } from "@/components/about/leadership-team";
import { Partners } from "@/components/about/partners";


export default function AboutPage() {
  return (
    <main className="flex-1">
      <Hero />

      <Stats />

      <CoreValues />


      <VisionMission/>

      <DirectorMessage/>

      <ServiceStandards />

      <LeadershipTeam/>

      <Partners/>
    </main>
  );
}
