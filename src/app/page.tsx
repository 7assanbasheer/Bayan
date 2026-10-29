"use client";

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { MethodologySection } from "@/components/MethodologySection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <MethodologySection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
