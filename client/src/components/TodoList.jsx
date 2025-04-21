import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const TodoList = ({ selectedDate }) => {
  const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
  const today = dayjs().format("YYYY-MM-DD");
  const isToday = formattedDate === today;

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("todos") || "{}";
    const parsed = JSON.parse(stored);
    setTasks(parsed[formattedDate] || []);
  }, [formattedDate]);

  // Save to localStorage
  useEffect(() => {
    const stored = localStorage.getItem("todos") || "{}";
    const parsed = JSON.parse(stored);
    parsed[formattedDate] = tasks;
    localStorage.setItem("todos", JSON.stringify(parsed));
  }, [tasks, formattedDate]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold font-sans mb-4 tracking-wide">
        {isToday ? "Today's Goals" : `Goals for ${dayjs(selectedDate).format("DD MMM, YYYY")}`}
      </h2>

      {isToday && (
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 rounded-xl px-4 py-2 text-sm font-medium placeholder:text-gray-400 text-black shadow-inner outline-none"
            placeholder="Add something"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow"
          >
            Add
          </button>
        </div>
      )}

      <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
        {tasks.length === 0 && (
          <li className="text-white/60 italic font-light text-sm">
            No tasks for this day.
          </li>
        )}

        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white/10 backdrop-blur p-3 rounded-xl shadow-sm"
          >
            <label className="flex items-center gap-3 w-full cursor-pointer">
              <input
                type="checkbox"
                disabled={!isToday}
                checked={task.completed}
                onChange={() => isToday && toggleTask(index)}
                className="w-5 h-5 accent-green-500"
              />
              <span
                className={`flex-1 text-white text-base font-medium ${
                  task.completed ? "line-through opacity-60 italic" : ""
                }`}
              >
                {task.text}
              </span>
            </label>
            {isToday && (
              <button
                onClick={() => deleteTask(index)}
                className="text-red-400 hover:text-red-600 text-sm"
              >
                ✕
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
