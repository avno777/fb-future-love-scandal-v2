import axios from "axios";
import React, { useEffect, useState } from "react";
import { OnlineIcon } from "../../common/CustomIcon";

function OnlineUser() {
  const [randomEvents, setRandomEvents] = useState([]);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const response = await axios.get("/db/sk-data.json");
        const data = response.data;
        console.log("data", data);

        const flattenedEventData = Object.entries(data).reduce(function (
          currentValue,
          accumulateValue
        ) {
          const [key, value] = accumulateValue;

          return [
            ...currentValue,
            ...value.map((val) => ({ ...val, idParent: key })),
          ];
        },
        []);

        const shuffledEventData = flattenedEventData.sort(
          () => Math.random() - 0.5
        );
        console.log("shuffledEventData", shuffledEventData);

        const selectedEventData = shuffledEventData.slice(0, 23);
        console.log("selectedData", selectedEventData);
        setRandomEvents(selectedEventData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    }
    fetchEventData();
  }, []);
  return (
    <div>
      <div className=" bg-white w-full rounded-lg">
        <div className="text-center py-3 relative text-2xl font-bold bg-gradient-to-l from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Online User
          <div className="absolute left-0 right-0 h-0.5 bg-custom-bg bottom-0"></div>
        </div>
        {randomEvents.map((content) => (
          <div className="flex items-center px-2 py-3">
            <div className="w-fit h-fit mr-2 relative">
              <img
                src={content.User_Avatar}
                alt="User Avatar"
                className="w-8 h-8 object-cover rounded-full mx-auto items-center"
              />
              <div className="absolute bottom-0 right-0">
                <OnlineIcon width={8} height={8} />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold">{content.User_Name}</div>
              <p className="font-medium text-sm text-gray-500">12/10/2023</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineUser;
