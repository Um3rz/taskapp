import { useContext } from "react";
import { Tasklist } from "./components/Tasklist";
import { Taskcontext } from "./contexts/Taskcontext";
import "./index.css";

function App() {
  const context = useContext(Taskcontext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const task = data.get("task");

    context.addTask(task);

    e.target.reset();
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen w-full flex flex-col items-center justify-start text-4xl font-bold">
      <h1 className="mt-12 text-green-500">Task Manager</h1>

      <form onSubmit={handleSubmit} className="mt-20 rounded-lg flex gap-10">
        <input
          type="text"
          name="task"
          className="bg-neutral-900 border border-purple-500 rounded-lg"
        />
        <button
          type="submit"
          className="text-base bg-purple-500 p-2 rounded-full"
        >
          Add Task
        </button>
      </form>

      <div className="mt-10 p-10 text-lg font-normal">
        <Tasklist tasks={context.tasks} />
      </div>
    </div>
  );
}

export default App;
