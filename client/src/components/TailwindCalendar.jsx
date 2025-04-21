import React, { useState } from "react";
import dayjs from "dayjs";

const TailwindCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const days = [];
  let day = startDate;

  while (day.isBefore(endDate, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  const isToday = (date) => dayjs().isSame(date, "day");
  const isCurrentMonth = (date) => date.month() === currentDate.month();

  return (
    <div className="w-full max-w-sm mx-auto p-4 rounded-3xl bg-white/30 backdrop-blur-md shadow-2xl text-white">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setCurrentDate(currentDate.subtract(1, "month"))} className="text-xl hover:text-yellow-300">
          ‹
        </button>
        <h2 className="text-xl font-bold">{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={() => setCurrentDate(currentDate.add(1, "month"))} className="text-xl hover:text-yellow-300">
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-medium text-purple-200 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((date) => (
          <div
            key={date}
            className={`p-2 rounded-xl ${
              isToday(date)
                ? "bg-pink-300 text-black font-bold"
                : isCurrentMonth(date)
                ? "text-white"
                : "text-purple-300"
            }`}
          >
            {date.date()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailwindCalendar;
