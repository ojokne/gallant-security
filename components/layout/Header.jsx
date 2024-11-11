"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle, 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@/components/common/visually-hidden";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Gallant Security Logo" 
            width={50} 
            height={50}
            className="object-contain"
            priority
          />
          <span className="font-bold text-xl">Gallant Security</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>
                <VisuallyHidden>
                  Navigation Menu
                </VisuallyHidden>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium p-2 hover:bg-accent rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
