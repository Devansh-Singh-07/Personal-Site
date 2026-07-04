import Link from "next/link";
import { Apple } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Progress", href: "#progress" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-8 w-full z-50 px-8 flex justify-between items-center max-w-[1728px] mx-auto animate-fade-in-up">
      {/* Main Navigation Links */}
      <div className="bg-[#52057E] rounded-[50px] px-12 py-4 shadow-xl">
        <ul className="flex items-center gap-12 text-white font-body text-2xl md:text-3xl">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-lime-300 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Link
        href="#native"
        className="bg-[#52057E] rounded-[40px] px-8 py-4 flex items-center gap-4 text-white font-body text-2xl md:text-3xl hover:bg-opacity-90 transition-all shadow-xl hover:scale-105"
      >
        Go
        <Apple className="w-8 h-8" />
        Native
      </Link>
    </nav>
  );
}
