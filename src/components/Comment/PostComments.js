import React, { useEffect, useState } from "react";
import axios from "axios";
import { ModalProvider } from "../../context/ModalContext";
import Modal from "../Modal";
import { Event } from "./Event";

export const PostComments = () => {
  const [radomEvents, setRandomEvents] = useState([]);
  const [comments, setComment] = useState([]);
  const [eventOnClick, setEventOnClick] = useState(null);
  const [showReplies, setShowReplies] = useState({});

  useEffect(() => {
    const fetchEventData = async () => {
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

        const selectedEventData = shuffledEventData.slice(0, 10);
        console.log("selectedData", selectedEventData);
        setRandomEvents(selectedEventData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };
    fetchEventData();
  }, []);

  useEffect(() => {
    const fetchCommentData = async () => {
      const response = await axios.get("/db/comment-data.json");
      const data = response.data;
      console.log("data", data);

      const flattenedCommentData = Object.entries(data).reduce(function (
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

      console.log("flattenedCommentData", flattenedCommentData);
      setComment(flattenedCommentData);
    };
    fetchCommentData();
  }, []);

  const handleViewMore = (eventSTT, eventIdParent) => {
    setEventOnClick({ STT: eventSTT, idParent: eventIdParent });
    setShowReplies((prevShowReplies) => ({
      ...prevShowReplies,
      [eventSTT]: true,
    }));
  };

  const handleHideReplies = (eventSTT) => {
    setShowReplies((prevShowReplies) => ({
      ...prevShowReplies,
      [eventSTT]: false,
    }));
  };

  return (
    <div className=" bg-white w-3/12 rounded-mlarge drop-shadow-md">
      <div className="text-center text-lg py-6 relative text-2xl font-extrabold">
        Comments
        <div className="absolute left-0 right-0 h-0.5 bg-gray-custom bottom-0"></div>
      </div>
      <div className="overflow-y-scroll h-80 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-400 scrollbar-track-gray-300">
        {radomEvents.map((events) => (
          <Event
            key={events.STT}
            events={events}
            showReplies={showReplies}
            onViewReplies={handleViewMore}
            onHideReplies={handleHideReplies}
            selectedEvent={eventOnClick}
            comments={comments}
          />
        ))}
      </div>
    </div>
  );
};
