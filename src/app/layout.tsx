import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Engineer & Manager Portfolio",
  description: "Portfolio of a Senior AI Developer and AI Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
