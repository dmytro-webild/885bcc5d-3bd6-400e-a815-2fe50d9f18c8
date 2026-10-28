import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Home",
      "href": "/"
    },
    {
      "name": "About",
      "href": "/about"
    }
  ];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Grand Hotel"
      secondaryButton={{
        text: "About",
        href: "/about",
      }}
      ctaButton={{
        text: "Book Now",
        href: "#",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Grand Hotel"
      copyright="© 2024 Grand Hotel Inc. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
        },
        {
          icon: Twitter,
          href: "#",
        },
        {
          icon: Facebook,
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
