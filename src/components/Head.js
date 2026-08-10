import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheSearch } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const handleMenuBtnClick = () => {
    dispatch(toggleMenu());
  }
  // console.log(searchQuery);

  const cachedSearch = useSelector((store) => store.search);// suscribing to the right portion of the store

  const fetchSearchSuggestionData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    console.log("API CALLED");
    setSuggestionData(json[1]);
    dispatch(cacheSearch({
      [searchQuery]:json[1]
    }))
  }

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestionData([]);
      return;
    }

    // console.log("searchAPi - " + searchQuery);
    const timer = setTimeout(() => {
      if (cachedSearch[searchQuery]) {
        setSuggestionData(cachedSearch[searchQuery]);
      } else {
        fetchSearchSuggestionData();
      }
    }, 200);

    return (() => {
      clearTimeout(timer);
    })
  }, [searchQuery])

  return (
    <div
      className="grid grid-flow-col m-2 p-5 shadow-lg"
    >
      <div className="flex col-span-1">
        <img
          className="h-8 m-2 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/960px-Hamburger_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
          onClick={() => handleMenuBtnClick()}
        />
        <Link to="/">
          <img
            className="h-8 m-2 "
            alt="youtube"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" />
        </Link>

      </div>

      <div className="col-span-10  ml-60"
      >
        <input
          className="border border-gray-400 w-1/2 rounded-l-full p-2"
          type="text" placeholder="enter text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />

        <button
          className="border border-gray-400 p-2 bg-gray-200 hover:bg-gray-300 rounded-r-full"
        >Search</button>

        {showSuggestion && <div
          className=" absolute shadow-md rounded-lg w-[29.5rem] bg-white text-black"

        >
          <ul className="pt-2 pl-2">
            {suggestionData[0] && suggestionData.map((suggestion, index) =>
              <li className="flex p-1 m-1 rounded-sm hover:bg-gray-200" key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"
                  className="pt-1 mr-1"
                >
                  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
                {suggestion}

              </li>
            )}
          </ul>
        </div>}
      </div>

      <div className="col-span-1">
        <img
          className="h-8 "
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/709/709699.png" />
      </div>
    </div>
  )
};
export default Head;