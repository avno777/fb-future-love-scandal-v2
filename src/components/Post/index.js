import React, { useEffect, useState } from "react";
import axios from "axios";
import { ViewIcon, ShareIcon, CommentIcon } from "../../common/CustomIcon";

function Post() {
  const [radomEvent, setRandomEvent] = useState({});

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

        const randomIndex = Math.floor(Math.random() * shuffledData.length);
        const selectedData = shuffledData[randomIndex];

        setRandomEvent(selectedData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-5 bg-white flex w-9/12 items-start rounded-mlarge mr-4">
      <div className="grow mr-8 w-3/5">
        <img
          src={radomEvent.User_Avatar}
          alt="Post Avatar"
          className="object-cover w-full h-96 rounded-mlarge"
        />
      </div>
      <div className=" w-2/5 grow-0">
        <div className="flex items-center">
          <div className="w-fit h-fit mr-2">
            <img
              src={radomEvent.User_Avatar}
              alt="User Avatar"
              className="w-12 h-12 object-cover rounded-full mx-auto items-center"
            />
          </div>
          <div className="text-lg font-bold">{radomEvent.User_Name}</div>
        </div>
        <div className="mt-3 mb-6 font-semibold">{radomEvent.Name}</div>
        <div className="flex">
          <div className="flex grow">
            <ViewIcon width={24} height={24} />
            <p className="font-semibold ml-2">13.2k views</p>
          </div>
          <div className="flex grow-0">
            <p className="font-semibold mr-2">14</p>
            <ShareIcon width={24} height={24} />
          </div>
          <div className="flex grow-0 ml-2">
            <p className="font-semibold mr-2">14</p>
            <CommentIcon width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
