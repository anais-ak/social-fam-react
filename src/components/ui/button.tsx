import Link from "next/link";
import classes from "@/components/post/post.module.css";
import { ReactNode } from "react";

export default function Button(props: {
  children: ReactNode;
  link?: string;
  onClick?: () => void;
}) {
  if (props.link)
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
}
