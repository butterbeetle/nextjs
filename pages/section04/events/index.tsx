import EventList from "@/components/events/event-list";
import { getAllEvents } from "../dummy-data";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPAth = `/section04/events/${year}/${month}`;
    router.push(fullPAth);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};
export default AllEventsPage;
