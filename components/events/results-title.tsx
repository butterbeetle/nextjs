import Button from "../ui/button";
import classes from "./results-title.module.css";

function ResultsTitle(props: any) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/section04/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
