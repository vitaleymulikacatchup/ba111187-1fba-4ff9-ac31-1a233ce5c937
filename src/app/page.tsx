"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { CheckCircle, Code, Layers, PieChart, Rocket } from "lucide-react";

const assetMap = [
  {"id":"hero-background","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern tech office - Photo by Pew Nguyen"},
  {"id":"about-image","url":"https://images.pexels.com/photos/34325550/pexels-photo-34325550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A focused businesswoman delivering a presentation in a modern office setting. Ideal for business and corporate themes."},
  {"id":"feature-1","url":"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up of a hand with a pen analyzing data on colorful bar and line charts on paper."},
  {"id":"feature-2","url":"https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of hand drawing intricate technical designs on blueprint with pen, ideal for engineering or architecture themes."},
  {"id":"feature-3","url":"https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed close-up of a hand-drawn wireframe design on paper for a UX project."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/4177708/pexels-photo-4177708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Happy black female in casual clothes with shopping bag demonstrating product squatting among grocery shelves while choosing goods in supermarket"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Diverse business team in a meeting analyzing client testimonial on laptop screen."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/7731373/pexels-photo-7731373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of hands typing on a laptop and reviewing business documents, focused on finance and legal tasks."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="DialedWeb"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Empowering Digital Transformation"
            description="Leading your journey in web development with innovative solutions."
            imageSrc={assetMap.find(a => a.id === "hero-background")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Get Started", href: "contact" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About DialedWeb"
            description="Discover our mission and values. We strive to create impactful digital experiences."
            bulletPoints={[
              { title: "Innovation", description: "Pioneering digital solutions.", icon: Rocket },
              { title: "Excellence", description: "Delivering top-tier web services.", icon: CheckCircle }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            imagePosition="left"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Expertise"
            description="Explore the cutting-edge services we offer."
            features={[
              { title: "Data Analytics", description: "Harness the power of data.", icon: PieChart },
              { title: "UX/UI Design", description: "Creating seamless experiences.", icon: Layers },
              { title: "Web Development", description: "Building impactful platforms.", icon: Code }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Clients Say"
            description="See how we're making a difference."
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "CEO", company: "TechCorp", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url ?? "/public/images/placeholder.webp" },
              { id: "2", name: "Michael Chen", role: "CTO", company: "InnovateLab", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url ?? "/public/images/placeholder.webp" },
              { id: "3", name: "Emily Rodriguez", role: "Marketing Director", company: "GrowthCo", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url ?? "/public/images/placeholder.webp" },
              { id: "4", name: "David Kim", role: "Product Manager", company: "StartupXYZ", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url ?? "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Services", href: "services" }] },
              { items: [{ label: "Contact", href: "contact" }] },
              { items: [{ label: "Privacy Policy", href: "privacy-policy" }] }
            ]}
            logoText="DialedWeb"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
