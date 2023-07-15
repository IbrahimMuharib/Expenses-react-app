import { ReactNode } from "react";
import "./Card.css";
function Card({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}
export default Card;
