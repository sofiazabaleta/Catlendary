import { format, getDay, parse, startOfWeek } from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";
import { useState } from "react";
import { Stack } from "@mantine/core";

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

const events = [
  {
    title: "play league of legends",
    start: new Date(),
    end: new Date(),
  },
];

export default function Catlendary() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <>
      <h1>Catlendary</h1>
      <h2>Add New Event</h2>
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
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "58px" }}
      />
    </>
  );
}
