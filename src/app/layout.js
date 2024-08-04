import { Space_Mono } from "next/font/google";
import "./globals.css";

const space_Mono = Space_Mono({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Ireoluwa Portfolio",
  description: "Ireoluwa E-portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_Mono.className}>{children}</body>
    </html>
  );
}
