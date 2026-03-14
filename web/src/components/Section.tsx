import { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10 sm:mb-12">
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  );
}
