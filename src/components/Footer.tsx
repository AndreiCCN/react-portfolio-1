import Link from "next/link";
import Button from "./Button";
import { ChevronRightIcon, GlobeIcon } from "./Icons";
import { socialLinks } from "@/utils/socialLinks";

const sitemap: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact me", href: "#contact" },
];

const ListItem = ({
  label,
  href,
  target,
}: {
  label: string;
  href: string;
  target?: string;
}) => {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
      >
        {label}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="pt-20 lg:pt-32">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>

            <Button
              variant="primary"
              href="mailto:andreicuconoiu@gmail.com"
              label="Start project"
              icon={
                <ChevronRightIcon
                  width={20}
                  height={20}
                  fillColor="#000000"
                  ariaLabel="Chevron right icon"
                />
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, index) => {
                  return (
                    <ListItem
                      key={`sitemap-item-${index}`}
                      label={label}
                      href={href}
                    />
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socialLinks.map(({ label, href }, index) => {
                  return (
                    <ListItem
                      key={`social-item-${index}`}
                      label={label}
                      href={href}
                      target="_blank"
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <Link href="" className="">
            <GlobeIcon width={40} height={40} fillColor="#ffffff" />
          </Link>

          <p className="text-zinc-500 text-sm">
            &copy; 2025{" "}
            <span className="text-zinc-200">Nicolae-Andrei Cuconoiu</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
