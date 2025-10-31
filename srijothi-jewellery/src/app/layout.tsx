import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srijothi Jewellery - Exquisite Silver Creations",
  description: "Discover the elegance of 92.5% sterling silver jewelry and articles, crafted with precision and care at Srijothi Jewellery.",
  openGraph: {
    title: "Srijothi Jewellery - Exquisite Silver Creations",
    description: "Discover the elegance of 92.5% sterling silver jewelry and articles, crafted with precision and care at Srijothi Jewellery.",
    url: "https://srijothi-jewellery.vercel.app", // Replace with the actual URL when deployed
    siteName: "Srijothi Jewellery",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIdze7YXG-4i8eN8qELYWWQfsFjhlUuHliCZ2GESRpyXJKtGtW5-xxzIGHTBoPro4Oa3wBT7kFNmOOm1lXy4Z5A4QZkW7Suugk-a9RAylRBf4dSjFxB_ycX5Ipzi0aZrt7xEYZNKTiO32EU5C2auLdNhSJ7jRR41dScRr7k00YQWbU3ObcQltFLLa4mn3dyC8p8p7Z0mABSomYzMxZ4FHDWfPGe4oXgMTkBvmzopUd4CHtCFEk4KnsEGSEHb_Gw13QNmNTaLY_gJKd", // A representative image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}