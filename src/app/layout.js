import Navbar, { SmallNavbar } from '@/components/Navbar';
import './globals.css';
import Navscore from '@/components/Navscore';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'zuAI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#e5ecf3]">
        <Toaster swipeDirection="top" />
        <Navbar />
        <SmallNavbar />
        <div className="md:ml-[80px]">{children}</div>
        <div className="hidden md:block">
          <Navscore />
        </div>
      </body>
    </html>
  );
}
