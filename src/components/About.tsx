import { GlobeIcon } from "./Icons";

const aboutItems: { number: number; label: string }[] = [
  { number: 33, label: "Projects done" },
  { number: 4, label: "Years of experience" },
];

const About = () => {
  return (
    <section id="about" className="pt-20 lg:pt-32">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Nicolae-Andrei, a professional web developer with
            a knack for crafting visually stunning and highly functional
            websites. Combining cretivity and technical expertise. I transform
            your vision into digital masterpiece that excels on both appearance
            and performance
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ number, label }, index) => {
              return (
                <div key={`about-item-${index}`}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              );
            })}
            <GlobeIcon
              width={30}
              height={30}
              fillColor="#ffffff"
              ariaLabel="Globe icon"
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
