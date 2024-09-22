import React, { useRef, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Foreground() {
  const ref = useRef(null);
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [mainTask, setMainTask] = useState([]);

  // Function to add a new task
  const handleAdd = (e) => {
    e.preventDefault();
    if (desc && date) {
      setMainTask([
        ...mainTask,
        {
          desc: desc,
          date: date,
          close: true,
          tag: { isOpen: true, tagtitle: "Pending", tagColor: "blue" },
        },
      ]);
      // Reset the form
      setDesc("");
      setDate("");
    }
  };

  // Function to delete a task by index
  const deleteTask = (indexToDelete) => {
    setMainTask((prevTasks) => {
      return prevTasks.filter((_, index) => index !== indexToDelete);
    });
  };

  // Function to toggle task completion (change from "Pending" to "Completed")
  const toggleTaskStatus = (index) => {
    setMainTask((prevTasks) =>
      prevTasks.map((task, i) => {
        if (i === index) {
          // Toggle between "Pending" and "Completed"
          return {
            ...task,
            tag: {
              ...task.tag,
              tagtitle: task.tag.tagtitle === "Pending" ? "Completed" : "Pending",
              tagColor: task.tag.tagColor === "blue" ? "green" : "blue",
            },
          };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap"
      >
        <form className="m font-semibold mt-5 mx-[25rem]" onSubmit={handleAdd}>
          <input
            className="border-zinc-900 border-2 rounded-lg w-80 h-12 px-4 py-2 m-5"
            placeholder="Enter Task Here"
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <input
            className="border-zinc-900 border-2 rounded-lg h-12 px-4 py-2 m-5"
            placeholder="Enter DeadLine"
            type="text"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-1.5 rounded-full font-bold text-2xl m-1"
          >
            +
          </button>
        </form>

        {/* Rendering the tasks as cards */}
        {mainTask.map((task, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={ref}
            whileDrag={{ scale: 1.2 }}
            className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden"
          >
            <FaFileAlt />
            <p className="text-sm leading-tight mt-5 font-semibold">
              {task.desc}
            </p>
            <div className="absolute footer w-full left-0 bottom-0">
              <div className="flex text-sm items-center justify-between mb-2 px-8 py-3">
                <h5>{task.date}</h5>
                <button
                  className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center"
                  onClick={() => deleteTask(index)}
                >
                  {task.close ? <IoClose /> : <LuDownload size=".9em" color="#fff" />}
                </button>
              </div>
              <div>
                {task.tag.isOpen ? (
                  <button
                    onClick={() => toggleTaskStatus(index)} // Toggling task status
                    className={`tag w-full py-4 ${
                      task.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
                    } flex items-center justify-center`}
                  >
                    <h3 className="text-sm font-semibold">{task.tag.tagtitle}</h3>
                  </button>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Foreground;
