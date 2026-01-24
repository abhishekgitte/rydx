import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RydX - Increase Your Reading Speed with Better Comprehension",
  description: "Master reading comprehension for CAT, GMAT, IELTS, and competitive exams. Improve your reading speed while maintaining comprehension.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
