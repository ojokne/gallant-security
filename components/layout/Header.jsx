"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Image 
            src="/logo.png" 
            alt="Gallant Security Logo" 
            width={40} 
            height={40}
            className="object-contain"
            priority
          />
          <span className="font-bold text-lg tracking-tight">
            Gallant Security
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <div className="flex items-center px-2 gap-6">
            {navItems.map((item) => {
              const isActive = 
                item.href === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors",
                    "after:absolute after:left-0 after:right-0 after:-bottom-[1px]",
                    "after:h-[2px] after:bg-primary",
                    "after:origin-left after:scale-x-0 hover:after:scale-x-100",
                    "after:transition-transform after:duration-300",
                    isActive
                      ? "text-primary after:scale-x-100"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="pl-6 ml-2 border-l border-muted">
            <Button asChild>
              <Link href="/contact" className="font-medium">
                Get Started
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <div className="h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="p-6 border-b">
                <Link 
                  href="/" 
                  className="flex items-center gap-2"
                >
                  <Image 
                    src="/logo.png" 
                    alt="Gallant Security Logo" 
                    width={32} 
                    height={32}
                    className="object-contain"
                  />
                  <span className="font-bold text-lg tracking-tight">
                    Gallant Security
                  </span>
                </Link>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto">
                <div className="p-6">
                  {navItems.map((item) => {
                    const isActive = 
                      item.href === '/' 
                        ? pathname === '/' 
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center h-11 px-3",
                          "text-sm font-medium tracking-tight rounded-md transition-colors",
                          "hover:bg-accent/50",
                          isActive 
                            ? "text-primary bg-primary/5" 
                            : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t bg-muted/30">
                <Button asChild className="w-full font-medium text-sm">
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}