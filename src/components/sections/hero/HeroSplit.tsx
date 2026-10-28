import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ThreeDHeroCard from "@/components/ui/ThreeDHeroCard";

type HeroSplitProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroSplit = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  textAnimation,
}: HeroSplitProps) => {
  return (
    <section aria-label="Hero section" className="relative flex items-center h-fit pt-25 pb-20 md:pt-32 md:pb-24">
      <HeroBackgroundSlot />
      <div className="flex flex-col items-center gap-10 md:gap-14 w-content-width mx-auto text-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h1"
            className="text-5xl sm:text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="max-w-2xl text-lg md:text-xl leading-snug text-center text-balance"
          />

          <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
            <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
            <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
          </div>
        </div>

        <ScrollReveal variant="slide-up" delay={0.2} className="w-full max-w-5xl h-80 sm:h-112 md:h-[520px] lg:h-[600px]">
          <ThreeDHeroCard imageSrc={imageSrc} videoSrc={videoSrc} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSplit;
