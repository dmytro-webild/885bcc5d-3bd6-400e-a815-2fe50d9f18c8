import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { Star, Sparkles, Award } from "lucide-react";

type ThreeDHeroCardProps = {
  imageSrc?: string;
  videoSrc?: string;
  badgeText?: string;
  cardTitle?: string;
  cardSubtitle?: string;
  rating?: number;
  className?: string;
};

export default function ThreeDHeroCard({
  imageSrc,
  videoSrc,
  badgeText = "5-Star Sanctuary",
  cardTitle = "World-Class Luxury",
  cardSubtitle = "Exquisite Guest Experience",
  rating = 4.9,
  className = "",
}: ThreeDHeroCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tilt rotation
  const springConfig = { stiffness: 220, damping: 22 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  // Dynamic glare coordinates (%)
  const glareX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full perspective-[1200px] cursor-pointer group ${className}`}
    >
      <motion.div
        animate={isHovered ? { y: 0 } : { y: [-6, 6, -6], rotateY: [-3, 3, -3] }}
        transition={
          isHovered
            ? { duration: 0.3 }
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-[var(--radius)] card p-2 xl:p-3 2xl:p-4 shadow-2xl transition-shadow duration-300 group-hover:shadow-primary/25"
      >
        {/* Main media container with clip path & perspective depth */}
        <div
          className="relative w-full h-full rounded-[calc(var(--radius)-4px)] overflow-hidden"
          style={{ transform: "translateZ(0px)" }}
        >
          <ImageOrVideo
            imageSrc={imageSrc}
            videoSrc={videoSrc}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient shading overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          {/* Dynamic glare / reflection sheen */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 65%)`,
            }}
          />
        </div>

        {/* Floating 3D Badge (Top-Left) */}
        <motion.div
          style={{ transform: "translateZ(45px)" }}
          className="absolute top-6 left-6 pointer-events-none backdrop-blur-md bg-background/85 border border-border/70 text-foreground text-xs md:text-sm font-medium py-1.5 px-3.5 rounded-full shadow-2xl flex items-center gap-2 transition-transform duration-300"
        >
          <Sparkles className="w-4 h-4 text-accent fill-accent/30" />
          <span>{badgeText}</span>
        </motion.div>

        {/* Floating 3D Info Card (Bottom-Right) */}
        <motion.div
          style={{ transform: "translateZ(55px)" }}
          className="absolute bottom-6 right-6 pointer-events-none backdrop-blur-md bg-background/90 border border-border/70 text-foreground text-xs md:text-sm font-medium p-3 rounded-xl shadow-2xl flex items-center gap-3 transition-transform duration-300"
        >
          <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-semibold text-xs text-foreground">
              <span>{rating}</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-foreground/70 text-xs font-normal mt-0.5">{cardSubtitle || cardTitle}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
