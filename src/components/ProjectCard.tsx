import Image from "next/image";
import { ArrowOutwardIcon } from "./Icons";
import Link from "next/link";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
}: {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink?: string;
  classes?: string;
}) => {
  return (
    <div
      className={`${classes} relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors`}
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <Image
          width={1980}
          height={1080}
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover"
        />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tagLabel, index) => {
              return (
                <span
                  key={index}
                  className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                >
                  {tagLabel}
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <ArrowOutwardIcon
            width={25}
            height={25}
            fillColor="#000000"
            ariaLabel="Arrow outward icon"
            ariaHidden={true}
          />
        </div>
      </div>
      <Link
        href={projectLink}
        target="_blank"
        className="absolute inset-0"
      ></Link>
    </div>
  );
};

export default ProjectCard;
