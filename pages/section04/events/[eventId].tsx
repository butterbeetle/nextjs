import { useRouter } from "next/router";
import { getEventById } from "../dummy-data";
import { Fragment } from "react";

import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistic from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import Button from "@/components/ui/button";

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Event Found!</p>;
        </ErrorAlert>
        <div className={"center"}>
          <Button link="/section04/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
export default EventDetailPage;
