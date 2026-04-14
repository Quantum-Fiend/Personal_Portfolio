"use client";

import Button from "@/components/ui/Button";

export default function HeroActions() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Button>Hire Me</Button>
      <Button>Download CV</Button>
    </div>
  );
}
