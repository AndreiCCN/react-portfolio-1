import Link from "next/link";
import { ReactNode } from "react";

const Button = ({
  variant,
  label,
  icon,
  href,
  target,
  classes,
}: {
  variant: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  target?: string;
  classes?: string;
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
