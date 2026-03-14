import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="
      text-[16px] sm:text-[17px] lg:text-[18px]
      font-bold
      border-b-2 border-[var(--color-border-dark)]
      pb-2
      mb-5 sm:mb-6
      text-left
    ">
      {children}
    </h2>
  );
}
