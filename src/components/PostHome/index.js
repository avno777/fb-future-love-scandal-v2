import React, { useEffect, useState } from "react";
import {
  CommentIcon,
  SendIcon,
  ShareIcon,
  SmileIcon,
  ViewIcon,
} from "../../common/CustomIcon";
import axios from "axios";

const PostHome = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [randomEvents, setRandomEvents] = useState([]);
  const [comments, setComment] = useState([]);

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

        const selectedEventData = shuffledEventData.slice(0, 2);
        console.log("selectedData", selectedEventData);
        setRandomEvents(selectedEventData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    }
    fetchEventData();
  }, []);

  useEffect(() => {
    async function fetchCommentData() {
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
    }
    fetchCommentData();
  }, []);
  return (
    <div className="col-span-2 grid grid-rows-2 gap-2 h-fit">
      {randomEvents.map((content) => (
        <div className="bg-white rounded-mlarge p-2.5 h-fit drop-shadow-md">
          <div className="">
            <img
              src={content.User_Avatar}
              className="object-cover w-full h-[480px] rounded-mlarge"
              alt="Post pic"
            />
          </div>
          <div className="pt-2.5">
            <div className="flex p-3">
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
            <div className="flex justify-around mx-16 px-3 py-2 border-y-2 border-gray-200 mb-6">
              <div className="flex grow-0 ml-2 items-center">
                <p className="font-semibold mr-2">Comments</p>
                <CommentIcon width={40} height={40} />
              </div>
              <div className="flex grow-0 items-center">
                <p className="font-semibold mr-2">Share</p>
                <ShareIcon width={40} height={40} />
              </div>
            </div>
            <div className="mx-16 mb-6">
              <div className="w-full flex">
                <div>
                  <img
                    src={content.User_Avatar}
                    alt="User Avatar"
                    className="w-11 h-11 object-cover rounded-full items-center"
                  />
                </div>
                <div className="flex items-center w-full relative">
                  <input
                    type="text"
                    className=" ml-3 pl-6 pr-16 py-2 border rounded-large w-full bg-gray-custom text-base"
                    placeholder="Type a public commentSearch..."
                  />
                  <div className="absolute right-9 cursor-pointer top-1/2 transform -translate-y-1/2">
                    <SmileIcon height={24} width={24} />
                  </div>
                  <div className="absolute right-3 cursor-pointer top-1/2 transform -translate-y-1/2">
                    <SendIcon height={24} width={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-16 mb-6">
              <div className="">
                <div className="flex">
                  <div>
                    <img
                      src={content.User_Avatar}
                      alt="User Avatar"
                      className="w-11 h-11 object-cover rounded-full mx-auto items-center"
                    />
                  </div>
                  <div className="ml-3 w-full">
                    <div className="border-black bg-gray-custom rounded-mlarge h-auto w-full px-3 pb-2 mb-2">
                      <div>
                        <span className="font-bold">{content.User_Name}</span>
                      </div>
                      <div className="w-full">{content.Name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-16 mb-6">
              <div>
                {isShowMore ? (
                  <>
                    <div className="mt-6 mx-20 flex">
                      <img
                        src={content.User_Avatar}
                        className="w-[50px] h-[50px] rounded-full"
                        alt="User Avatar"
                      />
                      <div className="w-full h-[70px] ml-4 px-5 py-2 rounded-[20px] bg-slate-100">
                        <h2 className="text-slate-700">username</h2>
                        <p className="font-bold mt-1">
                          Takes advantage of people's trust by borrowing and not
                          returning t money.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="flex justify-center items-center mt-4 mb-4">
                  {isShowMore ? (
                    <button
                      className="font-semibold"
                      onClick={() => setIsShowMore(false)}
                    >
                      View less comments ...
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsShowMore(true)}
                      className="font-semibold"
                    >
                      View more comments ...
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostHome;
