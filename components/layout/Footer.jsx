import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            {/* <h3 className="font-bold text-lg mb-4">Gallant Security</h3> */}
            <Image
              src="/gallant-security-8.png"
              alt="Gallant Security Logo"
              width={40}
              height={40}
              className="object-contain mb-4"
              priority
            />
            <p className="text-sm opacity-80">
              Professional security services providing peace of mind through
              excellence in protection.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:underline">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/security-guards"
                  className="text-sm hover:underline"
                >
                  Security Guards
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-patrol"
                  className="text-sm hover:underline"
                >
                  Mobile Patrol
                </Link>
              </li>
              <li>
                <Link
                  href="/services/event-security"
                  className="text-sm hover:underline"
                >
                  Event Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-security"
                  className="text-sm hover:underline"
                >
                  Corporate Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>1234 Security Ave</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Emergency: (555) 911-0000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Gallant Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
