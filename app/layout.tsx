import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#cta", label: "Get Started" }
];

export const metadata: Metadata = {
  title: "Agentic Hello",
  description: "A friendly landing page created autonomously by Codex."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <div className="site-header__inner">
            <Link href="/" className="brand">
              Agentic<span>Hello</span>
            </Link>
            <nav>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} Agentic Hello. Crafted by Codex.</p>
        </footer>
      </body>
    </html>
  );
}
