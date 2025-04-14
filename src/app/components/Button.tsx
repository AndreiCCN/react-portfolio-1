import Link from "next/link";
import { ReactNode } from "react";

const Button = ({
  variant,
  href,
  target,
  label,
  icon,
  classes,
}: {
  variant: string;
  href: string;
  target: string;
  label: string;
  icon: ReactNode;
  classes: string;
}) => {
  return href ? (
    <Link
      href={href}
      target={target}
      className={`btn btn-${variant} ${classes}`}
    >
      {label}
      {icon && icon}
    </Link>
  ) : (
    <button className={`btn btn-${variant} ${classes}`}>
      {label}
      {icon && icon}
    </button>
  );
};

export default Button;
