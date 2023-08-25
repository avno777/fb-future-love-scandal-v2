import React, { useEffect, useState } from "react";
import axios from "axios";
import { ViewIcon, ShareIcon, CommentIcon } from "../../common/CustomIcon";

function Card() {
  const [radomEvents, setRandomEvents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/db/sk-data.json");
        const data = response.data;

        const dataArrays = Object.values(data);

        const flattenedData = dataArrays.reduce(
          (acc, curr) => acc.concat(curr),
          []
        );

        const shuffledData = flattenedData.sort(() => Math.random() - 0.5);

        const selectedData = shuffledData.slice(0, 4);

        setRandomEvents(selectedData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {radomEvents.map((content) => (
        <div className=" bg-white px-2 pt-2 rounded-mlarge drop-shadow-md">
          <div className="mb-5 h-3/5">
            <img
              src={content.User_Avatar}
              alt="Card Avatar"
              className="object-cover w-full h-full rounded-mlarge"
            />
          </div>
          <div className="flex mb-3">
            <div>
              <img
                src={content.User_Avatar}
                alt="User Avatar"
                className="w-7 h-7 object-cover rounded-full mx-auto items-center"
              />
            </div>
            <div className="pl-3 font-bold">{content.User_Name}</div>
          </div>
          <div className="truncate font-semibold mb-8">{content.Name}</div>
          <div className="flex justify-end">
            <div className="flex">
              <ViewIcon width={24} height={24} />
              <p className="font-semibold ml-2">13.2k views</p>
            </div>
            <div className="flex ml-2">
              <p className="font-semibold mr-2">14</p>
              <ShareIcon width={24} height={24} />
            </div>
            <div className="flex ml-2">
              <p className="font-semibold mr-2">14</p>
              <CommentIcon width={24} height={24} />
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Card;
