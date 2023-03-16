import { useRef } from "react";
import classes from "@/components/post/post-sort.module.css";
import Button from "@/components/ui/button";

export default function PostSort(props: {
  onSort: (sort: string, isFeatured: string) => void;
}) {
  const sortInput = useRef();
  const featuredInput = useRef();

  const sortHandler = function (event) {
    event.preventDefault();

    const sortDirection = sortInput?.current?.value;
    const idFeatured = featuredInput?.current?.value;

    props.onSort(sortDirection, idFeatured);
  };

  return (
    <form className={classes.form} onSubmit={sortHandler}>
      <div className={classes.control}>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <select id="sort" ref={sortInput}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="isFeatured">Featured</label>
          <select id="isFeatured" ref={featuredInput}>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <div className={classes.control}>
          <Button>Sort</Button>
        </div>
      </div>
    </form>
  );
}
