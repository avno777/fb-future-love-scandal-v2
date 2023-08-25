import React, { useEffect, useState } from "react";
import axios from "axios";
import { ModalProvider } from "../../context/ModalContext";
import Modal from "../Modal";
import { Event } from "./Event";

function PostComments() {
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

  // useEffect(() => {
  //   const filteredItems = comments.filter((item) => {
  //     return (
  //       item.STT_SK === (eventOnClick?.STT || "") &&
  //       item.idParent.toLowerCase() ===
  //         (eventOnClick?.idParent || "").toLowerCase()
  //     );
  //   });
  //   console.log("eventOnClick", eventOnClick);
  //   setSelectedComment(filteredItems);
  //   console.log("filteredItems", filteredItems);
  // }, [comments, eventOnClick]);

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
}

{
  /* <img data-visualcompletion="media-vc-image" alt="Có thể là hình ảnh về 2 người và văn bản" class="x85a59c x193iq5w x4fas0m x19kjcj4" referrerpolicy="origin-when-cross-origin" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/347414219_10222242820329797_1721002249522354565_n.jpg?stp=cp6_dst-jpg&amp;_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8bfeb9&amp;_nc_ohc=H-PTRKGMdzYAX9j53gq&amp;_nc_ht=scontent.fhan2-3.fna&amp;oh=00_AfD6I8QuxVPlhPku_rpuVq0StrLv-SQaWqXPW5E9i0rhAQ&amp;oe=64E64E63">

Có thể là hình ảnh về 2 người và văn bản */
}

export default PostComments;
