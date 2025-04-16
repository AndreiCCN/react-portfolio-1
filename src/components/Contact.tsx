import { socialLinks } from "@/utils/socialLinks";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="pt-20 lg:pt-32">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch]">
            Contact me for collaboration
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
            Reach out today to discuss your project needs and start
            collaboration on something amazing!
          </p>
          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={href}
                  target="_blank"
                  className="group w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 active:bg-zinc-50/80"
                >
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
        <form
          action="https://getform.io/f/ajjmwvva"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Enter your name"
                required
                className="text-field"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label">
                Name
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="e.g. andreicuconoiu@gmail.com"
                required
                className="text-field"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full! w-full justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
