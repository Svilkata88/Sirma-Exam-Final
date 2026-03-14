import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import Spinner from "../others/Spinner";
import { useDateContext } from "../../hookes/useDate";
import { useSearchContext } from "../../hookes/useSearch";

function MatchesNav() {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const dateRef = useRef(null);
  const searchRef = useRef(null);
  const [date, setDate] = useDateContext();
  const [query, setQuery] = useSearchContext();

  function handleSearch(formData) {
    const searchImput = formData.get("searchImput");
    setQuery(searchImput);
  }

  async function handleFileChange(files) {
    // setLoading(true);

    try {
      for (const file of files) {
        const buffer = await file.arrayBuffer();
        await fetch(
          "https://f-tournament-backend-739415981315.europe-west3.run.app/api/v1/matches/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/octet-stream",
              "X-Filename": file.name,
            },
            body: buffer,
          },
        );
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
      <form className="flex justify-start items-center w-24 ml-2 md:w-24 h-10">
        <button
          className="cursor-pointer rounded-full bg-teal-900 p-1 md:p-2 mt-1 hover:bg-gray-600 hover:scale-110 "
          type="button"
          onClick={() => fileInputRef.current.click()}
        >
          <img src="/upload.png" alt="upload" className="w-full h-full " />
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
      <ul className="flex justify-center items-center space gap-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-main ${isActive ? "nav-active" : "nav-unactive"}`
          }
        >
          Schema
        </NavLink>
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
      <div className="flex ">
        <form
          className="w-10 mt-1 mr-1 cursor-pointer rounded-lg overflow-hidden md:w-10 h-10 mt-0"
          action={handleSearch}
        >
          <img
            src="/search.png"
            alt="search"
            className="hover:scale-110 w-full h-full object-contain"
            onClick={() => searchRef.current.classList.toggle("hidden")}
          />
          <input
            className="absolute top-2.5 right-26 bg-mauve-100 p-1 rounded-lg rounded-tr-none hidden pl-3"
            name="searchImput"
            placeholder="Search a game..."
            ref={searchRef}
          ></input>
        </form>
        <form className="w-12 mr-2 cursor-pointer md:mr-1">
          <img
            src="/chose-date.png"
            alt="chose-date"
            className="hover:scale-110"
            onClick={() => dateRef.current.classList.toggle("hidden")}
          />

          <select
            ref={dateRef}
            className="absolute top-2.5 right-26 bg-mauve-100 p-1 rounded-lg rounded-tr-none hidden"
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
            <option
              className="font-semibold hover:text-green-500"
              value="julian"
            >
              Julian/Ordinal
            </option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default MatchesNav;
