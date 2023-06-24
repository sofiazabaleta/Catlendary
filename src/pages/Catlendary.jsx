import { format, getDay, parse, startOfWeek } from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";
import { useState } from "react";
import { ActionIcon, Modal, Stack, Text } from "@mantine/core";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import { useDisclosure } from "@mantine/hooks";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

//todo save events on local storage
//TODO VERY IMPORTANT ADD CATS SVGS

export default function Catlendary({ events, setEvents }) {
  const [opened, { open, close }] = useDisclosure(false);

  const [newEvent, setNewEvent] = useState({
    id: uuid(),
    title: "",
    start: new Date(),
    end: new Date(),
  });
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleAddEvent() {
    setEvents([...events, newEvent]);
    setNewEvent({
      id: uuid(),
      title: "",
      start: new Date(),
      end: new Date(),
    });
  }

  function handleSelectEvent(evt) {
    setSelectedEvent(evt);
    open();
  }
  const handleEventDelete = () => {
    if (window.confirm("you really want to delete this event?")) {
      setEvents((prev) =>
        prev.filter((event) => event.id !== selectedEvent.id)
      );
      close();
      setSelectedEvent(null);
    }
  };
  return (
    <>
      <EventModal
        event={selectedEvent}
        opened={opened}
        close={close}
        onDelete={handleEventDelete}
      />
      <h1 classname="title-catlendary">Catlendary</h1>
      <h2 classname="add-new-event-catlendary">Add New Event</h2>
      <div style={{ position: "relative", zIndex: 100 }}>
        <input
          type="text"
          placeholder="Add title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <div>
          <DatePicker
            placeholderText="Start Date"
            selected={newEvent.start}
            onChange={(date) =>
              setNewEvent((prev) => ({ ...prev, start: date }))
            }
          />
          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(date) => setNewEvent((prev) => ({ ...prev, end: date }))}
          />
        </div>
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "58px" }}
        onSelectEvent={handleSelectEvent}
      />
    </>
  );
}

const EventModal = ({ event, opened, close, onDelete }) => {
  if (!event) return null;
  return (
    <>
      <Modal opened={opened} onClose={close}>
        <Text>Title: {event.title}</Text>
        <Text>Start Date: {new Date(event.start).toDateString()}</Text>
        <Text>End Date: {new Date(event.end).toDateString()}</Text>
        <ActionIcon color={"red"} onClick={onDelete}>
          <RiDeleteBin6Line size={"1.2rem"} />
        </ActionIcon>
      </Modal>
    </>
  );
};
