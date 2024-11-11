import Hero from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Benefits } from "@/components/home/benefits";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
