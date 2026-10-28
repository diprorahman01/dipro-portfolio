import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Dipro | Full-Stack Web Developer",
  description: "MD. Musfizur Rahman (Dipro) — Full-Stack Web Developer based in Dhaka, Bangladesh. Explore web projects, development skills and contact details.",
  openGraph: { title: "Dipro | Full-Stack Web Developer", description: "Explore my projects and skills in modern web development.", type: "website" },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body suppressHydrationWarning>{children}</body></html>}
