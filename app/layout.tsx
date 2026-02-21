import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandbox AI — Your Private AI. Out of the Box.",
  description: "Pre-configured, sandboxed, secure AI assistant hardware. No cloud. No coding. Just plug in.",
  openGraph: {
    title: "Sandbox AI — Your Private AI. Out of the Box.",
    description: "Pre-configured, sandboxed, secure AI assistant hardware. No cloud. No coding. Just plug in.",
    type: "website",
    url: "https://sandbox-ai.co.za",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
