import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="Experience Excellence"
      title="A Sanctuary of Timeless Luxury"
      description="Discover unparalleled comfort and world-class service in the heart of the city. Your ultimate getaway awaits."
      primaryButton={{
        text: "Reserve Your Stay", href: "#"}}
      secondaryButton={{
        text: "View Suites", href: "#rooms"}}
      imageSrc="https://storage.googleapis.com/webild/users/user_3AOVA6jYM6jYkWRWwEyFUGAp7VN/uploaded-1793221833410-ngybmrmm.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Story"
      quote="The Grand Hotel redefined our understanding of luxury. Every detail, from the linen sheets to the concierge service, was perfection."
      author="Julianne Moore"
      role="Travel Writer"
      imageSrc="https://images.pexels.com/photos/6940647/pexels-photo-6940647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="amenities" data-section="amenities">
    <SectionErrorBoundary name="amenities">
          <FeaturesComparison
      tag="Amenities"
      title="Exceptional Comfort"
      description="We cater to your every need with state-of-the-art facilities and personalized care."
      negativeItems={[
        "Airport transfers",        "Concierge assistance",        "In-room dining"]}
      positiveItems={[
        "Heated infinity pool",        "Private spa retreat",        "Michelin-starred restaurant",        "24/7 fitness center",        "Valet service"]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="rooms" data-section="rooms">
    <SectionErrorBoundary name="rooms">
          <FeaturesImageBento
      tag="Accommodations"
      title="Exquisite Suites"
      description="Retreat into luxury with our thoughtfully designed living spaces."
      items={[
        { title: "Royal Suite", description: "Spacious penthouse with skyline view.", imageSrc: "https://images.pexels.com/photos/6876822/pexels-photo-6876822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { title: "Deluxe King", description: "Ultimate comfort with premium amenities.", imageSrc: "https://images.pexels.com/photos/37748241/pexels-photo-37748241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { title: "Garden View", description: "Serene space facing our lush gardens.", imageSrc: "https://images.pexels.com/photos/7908079/pexels-photo-7908079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { title: "Junior Suite", description: "Cozy yet elegant living space.", imageSrc: "https://images.pexels.com/photos/6782578/pexels-photo-6782578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { title: "Executive Room", description: "Ideal for business travelers.", imageSrc: "https://images.pexels.com/photos/39205185/pexels-photo-39205185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { title: "Family Suite", description: "Designed for unforgettable family memories.", imageSrc: "https://images.pexels.com/photos/26556326/pexels-photo-26556326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { title: "Premier View", description: "Panoramic vista of the coast.", imageSrc: "https://images.pexels.com/photos/20854915/pexels-photo-20854915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Guest Reviews"
      title="Loved by Guests"
      description="Hear what our distinguished guests have to say about their stay."
      testimonials={[
        { name: "Alice Thompson", role: "Traveler", quote: "A truly magical stay, will return soon.", rating: 5, imageSrc: "https://images.pexels.com/photos/29284264/pexels-photo-29284264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { name: "Bob Miller", role: "Corporate Client", quote: "Seamless service and professional care.", rating: 5, imageSrc: "https://images.pexels.com/photos/37148340/pexels-photo-37148340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { name: "Charlie Davis", role: "Tourist", quote: "Unmatched hospitality and luxury.", rating: 5, imageSrc: "https://images.pexels.com/photos/38760208/pexels-photo-38760208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { name: "Diana Ross", role: "Celebrity", quote: "The quietest and most luxurious rooms I've stayed in.", rating: 5, imageSrc: "https://images.pexels.com/photos/13059581/pexels-photo-13059581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        { name: "Edward Norton", role: "Guest", quote: "Superb amenities and food.", rating: 5, imageSrc: "https://images.pexels.com/photos/10765459/pexels-photo-10765459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Support"
      title="Frequently Asked Questions"
      description="Common inquiries to make your stay effortless."
      categories={[
        {
          name: "General",          items: [
            { question: "Check-in time?", answer: "3:00 PM." },
            { question: "Parking?", answer: "Valet is available 24/7." },
          ],
        },
        {
          name: "Services",          items: [
            { question: "Dining?", answer: "Our kitchen is open until midnight." },
            { question: "Spa?", answer: "Spa is open 9 AM - 9 PM daily." },
          ],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Book Now"
      text="Ready to book your dream stay at the Grand Hotel?"
      primaryButton={{ text: "Contact Us", href: "#" }}
      secondaryButton={{ text: "Check Availability", href: "#" }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
