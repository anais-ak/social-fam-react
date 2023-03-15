import Image from "next/image";
import classes from "@/components/post/post.module.css";
import DateIcon from "@/components/ui/icons/date-icon.js";

export default function Post(props) {
  const { post } = props;

  const postDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "2-digit",
  });

  return (
    <div className={classes.postContainer}>
      <div>
        <Image src={"/" + post.image} alt="alt" width={500} height={500} />
      </div>

      <div>
        <h2>{post.title}</h2>
        <time className={classes.date}>
          <DateIcon />
          {postDate}
        </time>
        <div>{post.description}</div>
      </div>
    </div>
  );
}
