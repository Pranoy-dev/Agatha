import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Solutions } from "@/components/sections/Solutions";
import { Vision } from "@/components/sections/Vision";
import { Certifications } from "@/components/sections/Certifications";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <Vision />
      <Certifications />
      <Testimonial />
      <CTA />
    </>
  );
}
