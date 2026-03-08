import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import Spinner from "../others/Spinner";
import { useDateContext } from "../../hookes/useDate";

function MatchesNav() {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const dateRef = useRef(null);
  const [date, setDate] = useDateContext();

  async function handleFileChange(files) {
    // setLoading(true);

    try {
      for (const file of files) {
        const buffer = await file.arrayBuffer();
        await fetch("http://localhost:3000/api/v1/matches/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Filename": file.name,
          },
          body: buffer,
        });
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="flex justify-between relative">
      <form className="flex justify-center items-center w-12 ml-2 rounded-full bg-teal-900 hover:bg-gray-600 hover:scale-110">
        <button
          className="cursor-pointer"
          type="button"
          onClick={() => fileInputRef.current.click()}
        >
          <img src="/upload.png" alt="upload" className="" />
        </button>
        <div>
          <input
            type="file"
            name="files"
            multiple
            ref={fileInputRef}
            className="hidden"
            onChange={async (e) => {
              const files = e.target.files;

              if (!files.length) {
                console.log("No file selected");
                return;
              }

              await handleFileChange(files);
              e.target.value = null;
            }}
          />
        </div>
      </form>
      <ul className="flex justify-center space gap-1">
        <NavLink
          to="/group-stage"
          className={({ isActive }) =>
            `nav-main ${isActive ? "nav-active" : "nav-unactive"}`
          }
        >
          Group Stage
        </NavLink>
        <NavLink
          to="/round-of-16"
          className={({ isActive }) =>
            `nav-main ${isActive ? "nav-active" : "nav-unactive"}`
          }
        >
          8th Finals
        </NavLink>
        <NavLink
          to="/round-of-8"
          className={({ isActive }) =>
            `nav-main ${isActive ? "nav-active" : "nav-unactive"} `
          }
        >
          4th Finals
        </NavLink>
        <NavLink
          to="/semi-finals"
          className={({ isActive }) =>
            `nav-main ${isActive ? "nav-active" : "nav-unactive"}`
          }
        >
          Semi-Finals
        </NavLink>
        <NavLink
          to="/final"
          className={({ isActive }) =>
            `nav-main ${isActive ? "nav-active" : "nav-unactive"}`
          }
        >
          Grand Final
        </NavLink>
      </ul>
      <form className="w-12 mr-2 cursor-pointer">
        <img
          src="/chose-date.png"
          alt="chose-date"
          className="hover:scale-110"
          onClick={() => dateRef.current.classList.toggle("hidden")}
        />

        <select
          ref={dateRef}
          className="absolute top-2.5 right-14 bg-mauve-100 p-1 rounded-lg rounded-tr-none hidden"
          onChange={(e) => setDate(e.target.value)}
        >
          <option className="font-semibold hover:text-green-500" value="iso">
            ISO date
          </option>
          <option className="font-semibold hover:text-green-500" value="us">
            US style
          </option>
          <option
            className="font-semibold hover:text-green-500"
            value="european"
          >
            European/International
          </option>
          <option
            className="font-semibold hover:text-green-500"
            value="written"
          >
            Written/Text
          </option>
          <option className="font-semibold hover:text-green-500" value="julian">
            Julian/Ordinal
          </option>
        </select>
      </form>
    </div>
  );
}

export default MatchesNav;
