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
  const burgerRef = useRef(null);
  const [date, setDate] = useDateContext();
  const [query, setQuery] = useSearchContext();

  function handleSearch(formData) {
    const searchInput = formData.get("searchInput");
    setQuery(searchInput);
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
    <div className="flex justify-between relative mx-4">
      <form className="flex justify-start items-center w-[78px] h-[39px] md:h-13 md:w-24 md:h-14">
        <button
          className="w-[39px] h-[39px] md:w-14 md:h-14 cursor-pointer rounded-full bg-teal-900 p-2 md:p-2 md:mt-1 hover:bg-gray-600 hover:scale-110 "
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

      <div className="flex flex-col gap-1 items-center">
        <button
          className="w-[39px] h-[39px] md:hidden"
          onClick={() => burgerRef.current.classList.toggle("hidden")}
        >
          <img src="/burger.png" alt="burger" className="w-full h-full" />
        </button>
        <ul
          className="hidden flex flex-col md:flex md:flex-row justify-center items-center space gap-1"
          ref={burgerRef}
        >
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
      </div>

      <div className="flex items-start relative w-[78px] md:h-13 ml-2 md:w-[132px]">
        <form className="" action={handleSearch}>
          <div className="cursor-pointer w-[39px] md:w-[66px]">
            <img
              src="/search.png"
              alt="search"
              className="w-full h-full object-contain hover:scale-110 transition"
              onClick={() => searchRef.current.classList.toggle("hidden")}
            />
          </div>

          <input
            className="absolute top-11 md:top-17 right-0 hidden h-12 md:w-56 bg-mauve-100 px-3 rounded-lg rounded-tr-none"
            name="searchInput"
            placeholder="Search a game..."
            ref={searchRef}
          />
        </form>

        <form className="">
          <div className="cursor-pointer w-[39px] md:w-[68px] md:h-[70px]">
            <img
              src="/chose-date.png"
              alt="chose-date"
              className="w-full h-full object-contain hover:scale-110 transition"
              onClick={() => dateRef.current.classList.toggle("hidden")}
            />
          </div>

          <select
            ref={dateRef}
            className="absolute top-11 md:top-17 right-0 h-12 md:w-28 bg-mauve-100 p-1 rounded-lg rounded-tr-none hidden"
            onChange={(e) => setDate(e.target.value)}
          >
            <option value="iso">ISO date</option>
            <option value="us">US style</option>
            <option value="european">European/International</option>
            <option value="written">Written/Text</option>
            <option value="julian">Julian/Ordinal</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default MatchesNav;
