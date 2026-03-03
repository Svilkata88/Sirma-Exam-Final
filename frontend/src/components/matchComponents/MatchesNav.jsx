import { NavLink } from "react-router-dom";
import { useRef } from "react";

function MatchesNav() {
  const fileInputRef = useRef(null);

  function handleFileChange(files) {
    // const formData = new FormData();
    // formData.append("matches", files);

    Object.values(files).forEach((file) => {
      file.arrayBuffer().then((buffer) => {
        fetch("http://localhost:3000/api/v1/matches/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
          },
          body: buffer,
        }).catch((err) => console.error("Error uploading csv"));
      });
    });
  }

  return (
    <div className="flex justify-between">
      <form className="flex justify-center items-center w-24 rounded-full p-2 bg-gray-800 hover:bg-gray-700 cursor-pointer">
        <button
          className=""
          type="button"
          onClick={() => fileInputRef.current.click()}
        >
          <img src="upload.png" alt="upload" className="" />
        </button>
        <div>
          <input
            type="file"
            name="files"
            multiple
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => {
              const files = e.target.files;

              if (!files.length) {
                console.log("No file selected");
                return;
              }

              handleFileChange(files);
              e.target.value = null;
            }}
          />
        </div>
      </form>
      <ul className="flex justify-center space gap-1">
        <NavLink
          to="/group-stage"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-100 ${isActive ? "text-emerald-950 text-xl bg-teal-600 font-bold" : "text-green-300 text-lg bg-gray-800"}`
          }
        >
          Group Stage
        </NavLink>
        <NavLink
          to="/round-of-16"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200 ${isActive ? "text-emerald-950 text-xl bg-teal-600 font-bold" : "text-green-300 text-lg bg-gray-800"}`
          }
        >
          16th Finals
        </NavLink>
        <NavLink
          to="/round-of-8"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200 ${isActive ? "text-emerald-950 text-xl bg-teal-600 font-bold" : "text-green-300 text-lg bg-gray-800"}`
          }
        >
          8th Finals
        </NavLink>
        <NavLink
          to="/round-of-4"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200 ${isActive ? "text-emerald-950 text-xl bg-teal-600 font-bold" : "text-green-300 text-lg bg-gray-800"}`
          }
        >
          4th Finals
        </NavLink>
        <NavLink
          to="/semi-finals"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200 ${isActive ? "text-emerald-950 text-xl bg-teal-600 font-bold" : "text-green-300 text-lg bg-gray-800"}`
          }
        >
          Semi-Finals
        </NavLink>
        <NavLink
          to="/final"
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200 ${isActive ? "text-emerald-950 text-xl bg-teal-600 font-bold" : "text-green-300 text-lg bg-gray-800"}`
          }
        >
          Grand Final
        </NavLink>
      </ul>
      <div className="w-24"></div>
    </div>
  );
}

export default MatchesNav;
