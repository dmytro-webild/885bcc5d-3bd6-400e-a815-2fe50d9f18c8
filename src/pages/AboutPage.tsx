import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TeamProfileCards from '@/components/sections/team/TeamProfileCards';
import ContactCta from '@/components/sections/contact/ContactCta';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import { Sparkles, Utensils, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div id="about-hero" data-section="about-hero">
        <SectionErrorBoundary name="about-hero">
          <HeroSplit
            tag="Heritage & Legacy"
            title="A Sanctuary of Timeless Hospitality"
            description="Since 1928, Grand Hotel has been an icon of coastal luxury, providing discerning guests with unmatched elegance, serene ocean vistas, and personalized care."
            primaryButton={{ text: "Explore Suites", href: "/#rooms" }}
            secondaryButton={{ text: "Contact Concierge", href: "/#contact" }}
            imageSrc="https://images.pexels.com/photos/33039011/pexels-photo-33039011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="our-story" data-section="our-story">
        <SectionErrorBoundary name="our-story">
          <AboutFeaturesSplit
            tag="Our Philosophy"
            title="Crafted Excellence in Every Moment"
            description="We believe that true luxury lies in thoughtful details, quiet comfort, and authentic connections. Every aspect of your stay is curated to create unforgettable memories."
            imageSrc="https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            items={[
              {
                icon: Sparkles,
                title: "Bespoke Concierge Care",
                description: "Personalized itineraries and dedicated service around the clock to meet your every wish."
              },
              {
                icon: Utensils,
                title: "Michelin Gastronomy",
                description: "Seasonal menus crafted from locally sourced ingredients by world-renowned culinary masters."
              },
              {
                icon: ShieldCheck,
                title: "Sustainable Hospitality",
                description: "Eco-friendly operations, zero-waste initiatives, and active marine conservation partnerships."
              },
              {
                icon: Heart,
                title: "Wellness & Renewal",
                description: "Oceanfront spa rituals, heated mineral baths, and holistic mind-body wellness retreats."
              }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="metrics" data-section="metrics">
        <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
            tag="Milestones"
            title="Nearly a Century of Excellence"
            description="Our tradition of world-class service reflected in numbers."
            metrics={[
              { value: "1928", description: "Year Established" },
              { value: "120", description: "Luxury Suites & Villas" },
              { value: "99.4%", description: "Guest Satisfaction" },
              { value: "45+", description: "Global Hospitality Awards" }
            ]}
            textAnimation="fade"
          />
        </SectionErrorBoundary>
      </div>

      <div id="leadership" data-section="leadership">
        <SectionErrorBoundary name="leadership">
          <TeamProfileCards
            tag="Our Leadership"
            title="The Minds Behind Grand Hotel"
            description="Meet the dedicated leadership team upholding our legacy of exceptional hospitality."
            items={[
              {
                title: "Elena Rostova",
                description: "General Manager with over 20 years in international luxury hotel management.",
                avatarSrc: "https://images.pexels.com/photos/136320/pexels-photo-136320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageSrc: "https://images.pexels.com/photos/136320/pexels-photo-136320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                buttonText: "Leadership",
                buttonHref: "/#contact"
              },
              {
                title: "Marcus Vance",
                description: "Executive Chef directing our Michelin-starred oceanfront dining experience.",
                avatarSrc: "https://images.pexels.com/photos/21700773/pexels-photo-21700773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageSrc: "https://images.pexels.com/photos/21700773/pexels-photo-21700773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                buttonText: "Culinary",
                buttonHref: "/#contact"
              },
              {
                title: "Sofia Chen",
                description: "Head Concierge ensuring seamless, personalized experiences for every guest.",
                avatarSrc: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageSrc: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                buttonText: "Guest Relations",
                buttonHref: "/#contact"
              }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="about-cta" data-section="about-cta">
        <SectionErrorBoundary name="about-cta">
          <ContactCta
            tag="Plan Your Stay"
            text="Experience Timeless Coastal Luxury"
            primaryButton={{ text: "Book Your Stay", href: "/#contact" }}
            secondaryButton={{ text: "Explore Accommodations", href: "/#rooms" }}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}
