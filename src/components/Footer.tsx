import Link from "next/link";
import Button from "./Button";
import { ChevronRightIcon, GlobeIcon } from "./Icons";

const sitemap: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact me", href: "#contact" },
];

const socials: { label: string; href: string }[] = [
  {
    label: "Github",
    href: "https://www.github.com/AndreiCCN",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolae-andrei-cuconoiu",
  },
];

const Footer = () => {
  return (
    <footer className="pt-20 lg:pt-32">
      <div className="container">
        <div className="">
          <div className="">
            <h2 className="headline-1">Let&apos;s work together today!</h2>

            <Button
              variant="primary"
              href="mailto:andreicuconoiu@gmail.com"
              label="Start project"
              target=""
              icon={
                <ChevronRightIcon
                  width={20}
                  height={20}
                  fillColor="#000000"
                  ariaLabel="Chevron right icon"
                />
              }
              classes=""
            />
          </div>
          <div className="">
            <div>
              <p className="">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, index) => {
                  return (
                    <li key={`sitemap-item-${index}`}>
                      <Link href={href} className="">
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="">Socials</p>
              <ul>
                {socials.map(({ label, href }, index) => {
                  return (
                    <li key={`sitemap-item-${index}`}>
                      <Link href={href} target="_blank" className="">
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <Link href="" className="">
            <GlobeIcon width={40} height={40} fillColor="#ffffff" />
          </Link>

          <p className="">
            &copy; 2024 <span className="">Nicolae-Andrei Cuconoiu</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
