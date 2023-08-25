import React from "react";
import { EnterIcon } from "../../common/CustomIcon";
import { Comment } from "./Comment";

export const Event = ({
  events,
  showReplies,
  onViewReplies,
  onHideReplies,
  selectedEvent,
  comments,
}) => {
  return (
    <div className="p-5" key={events.STT}>
      <div className="flex">
        <div>
          <img
            src={events.User_Avatar}
            alt="User Avatar"
            className="w-7 h-7 object-cover rounded-full mx-auto items-center"
          />
        </div>
        <div className="ml-3 w-full">
          <div className="border-black bg-gray-custom rounded-mlarge h-auto w-full px-3 pb-2 mb-2">
            <div>
              <span className="font-bold">{events.User_Name}</span>
            </div>
            <div className="w-full">{events.Name}</div>
            <div>{events.idParent}</div>
          </div>
          <div className="flex justify-between w-6/12 text-sm pl-1">
            <div className="font-bold bg-gradient-to-l from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Reply
            </div>
            <div className="font-bold bg-gradient-to-l from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Edit
            </div>
            <div className="font-bold bg-gradient-to-l from-purple-500 to-pink-500 text-transparent bg-clip-text">
              2 day ago
            </div>
          </div>
        </div>
      </div>
      {(!showReplies[events.STT] && (
        <div
          className="flex pl-10 pt-3 cursor-pointer"
          onClick={() => onViewReplies(events.STT, events.idParent)}
        >
          <EnterIcon width={24} height={24} />
          <p className="font-bold">View more replies ...</p>
        </div>
      )) || (
        <div className="flex pl-10 pt-3 cursor-pointer">
          <p className="font-bold" onClick={() => onHideReplies(events.STT)}>
            Hide replies ...
          </p>
        </div>
      )}
      {showReplies[events.STT] &&
        selectedEvent &&
        selectedEvent.STT === events.STT && (
          <div>
            {comments
              .filter(
                (comment) =>
                  comment.STT_SK === events.STT &&
                  comment.idParent.toLowerCase() ===
                    events.idParent.toLowerCase()
              )
              .map((comment) => (
                <Comment key={comment.STT_SK} comment={comment} />
              ))}
          </div>
        )}
    </div>
  );
};
