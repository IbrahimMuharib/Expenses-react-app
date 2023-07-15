import { ReactNode } from "react";
import "./Card.css";
function Card({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const classes = className ? `card ${className}` : "card";
  return <div className={classes}>{children}</div>;
}
export default Card;
