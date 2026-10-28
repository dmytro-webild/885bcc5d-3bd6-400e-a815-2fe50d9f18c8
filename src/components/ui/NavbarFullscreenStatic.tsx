import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { useButtonClick } from "@/hooks/useButtonClick";

interface NavbarFullscreenStaticProps {
  logo: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const NavItemLink = ({
  item,
  index,
  total,
  menuOpen,
  onClose,
}: {
  item: { name: string; href: string };
  index: number;
  total: number;
  menuOpen: boolean;
  onClose: () => void;
}) => {
  const handleClick = useButtonClick(item.href, onClose);

  return (
    <div className="overflow-hidden">
      <a
        href={item.href}
        onClick={handleClick}
        className="group flex items-center gap-4 py-4 cursor-pointer"
        style={{
          transform: menuOpen ? "translateY(0%)" : "translateY(100%)",
          transition: "transform 0.5s cubic-bezier(0.7, 0, 0.3, 1)",
          transitionDelay: menuOpen
            ? `${0.3 + index * 0.05}s`
            : `${(total - 1 - index) * 0.05}s`,
        }}
      >
        <span className="text-7xl md:text-9xl font-medium text-background group-hover:ml-4 transition-[margin] duration-300">
          {item.name}
        </span>
        <ArrowUpRight
          className="h-(--text-7xl) md:h-(--text-9xl) w-auto text-background group-hover:rotate-45 group-hover:mr-4 transition-all duration-300"
          strokeWidth={1.5}
        />
      </a>
      {index < total - 1 && <div className="h-px bg-background/20" />}
    </div>
  );
};

const NavbarFullscreenStatic = ({ logo, navItems, ctaButton }: NavbarFullscreenStaticProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogoClick = useButtonClick("/", () => setMenuOpen(false));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav data-section="navbar" className="absolute inset-0 z-1000 pointer-events-none">
      <div className="absolute z-10 top-5 left-1/2 -translate-x-1/2 flex items-center justify-between w-content-width pointer-events-auto">
        <a
          href="/"
          onClick={handleLogoClick}
          className="text-xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity cursor-pointer"
        >
          {logo}
        </a>

        <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4">
          <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} />

          <div
            className="relative flex items-center justify-center size-9 rounded cursor-pointer primary-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={cls(
                "absolute w-3 h-px bg-primary-cta-text transition-all duration-300",
                menuOpen ? "rotate-45" : "-translate-y-1"
              )}
            />
            <span
              className={cls(
                "absolute w-3 h-px bg-primary-cta-text transition-all duration-300",
                menuOpen ? "-rotate-45" : "translate-y-1"
              )}
            />
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-foreground pointer-events-auto transition-[clip-path] duration-700 ease-[cubic-bezier(0.9,0,0.1,1)]"
        style={{
          clipPath: menuOpen
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }}
      >
        <div className="flex flex-col items-center">
          {navItems.map((item, index) => (
            <NavItemLink
              key={item.name}
              item={item}
              index={index}
              total={navItems.length}
              menuOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarFullscreenStatic;
