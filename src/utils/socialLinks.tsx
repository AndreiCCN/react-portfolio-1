import { GithubIcon, LinkedInIcon } from "@/components/Icons";
import { ReactNode } from "react";

export const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Github",
    href: "https://www.github.com/AndreiCCN",
    icon: (
      <GithubIcon
        width={24}
        height={24}
        fillColor="#ffffff"
        viewBox="0 0 24 24"
        className="group-hover:fill-zinc-950"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolae-andrei-cuconoiu",
    icon: (
      <LinkedInIcon
        width={24}
        height={24}
        fillColor="#ffffff"
        viewBox="0 0 24 24"
        className="group-hover:fill-zinc-950"
      />
    ),
  },
];
