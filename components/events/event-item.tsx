import Image from "next/image";

import styles from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
}

const EventItem = (props: any) => {
  const { title, image, date, location, id }: Event = props;

  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/section04/events/${id}`;

  return (
    <li className={styles["item"]}>
      <Image src={"/" + image} alt="" width={100} height={100} />
      <div className={styles["content"]}>
        <div className={styles["summary"]}>
          <h2>{title}</h2>
          <div className={styles["date"]}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles["address"]}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles["actions"]}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles["icon"]}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
