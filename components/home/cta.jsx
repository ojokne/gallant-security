import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Your Business?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-[540px] mx-auto">
          Contact us today for a free security assessment
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </section>
  );
} 