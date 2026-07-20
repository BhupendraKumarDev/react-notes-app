import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    setTask([
      {
        title,
        details,
        date: new Date().toLocaleString(),
      },
      ...task,
    ]);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copy = [...task];
    copy.splice(idx, 1);
    setTask(copy);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* Heading */}

      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-5xl font-bold">
          Notes<span className="text-violet-500">.</span>
        </h1>

        <p className="text-slate-400 mt-2">
          Organize your ideas beautifully.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT */}

        <form
          onSubmit={submitHandler}
          className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-2">
            Add New Note
          </h2>

          <p className="text-slate-400 mb-8">
            Capture your thoughts quickly.
          </p>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition"
            />

            <textarea
              rows={8}
              placeholder="Write your note..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full resize-none bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition"
            />

            <button
              className="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-[1.02] transition duration-300 shadow-lg"
            >
              + Add Note
            </button>
          </div>
        </form>

        {/* RIGHT */}

        <div>

          <h2 className="text-3xl font-bold">
            Recent Notes
          </h2>

          <p className="text-slate-400 mt-2 mb-8">
            {task.length} Notes Available
          </p>

          {task.length === 0 ? (
            <div className="bg-slate-900 rounded-3xl border border-dashed border-slate-700 h-96 flex flex-col justify-center items-center">

              <div className="text-7xl mb-4">
                📝
              </div>

              <h3 className="text-2xl font-semibold">
                No Notes Yet
              </h3>

              <p className="text-slate-500 mt-2">
                Create your first note.
              </p>

            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">

              {task.map((elem, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 hover:-translate-y-1 transition duration-300 shadow-xl flex flex-col justify-between"
                >

                  <div>

                    <div className="flex justify-between items-center">

                      <h3 className="text-xl font-bold break-words">
                        {elem.title}
                      </h3>

                      <span className="bg-violet-600 text-xs px-2 py-1 rounded-full">
                        #{idx + 1}
                      </span>

                    </div>

                    <p className="mt-4 text-slate-400 text-sm leading-7 break-words">
                      {elem.details}
                    </p>

                  </div>

                  <div className="mt-6">

                    <p className="text-xs text-slate-500 mb-4">
                      📅 {elem.date}
                    </p>

                    <button
                      onClick={() => deleteNote(idx)}
                      className="w-full bg-red-500 hover:bg-red-600 active:scale-95 transition py-2 rounded-lg font-semibold"
                    >
                      Delete Note
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default App;