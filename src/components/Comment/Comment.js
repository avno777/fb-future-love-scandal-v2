import React from "react";

export const Comment = ({ comment }) => {
  return (
    <div className="p-2 ml-5">
      <div className="flex">
        <div>
          <img
            src={comment.User_Avatar}
            alt="User Avatar"
            className="w-7 h-7 object-cover rounded-full mx-auto items-center"
          />
        </div>
        <div className="ml-3 w-full">
          <div className="border-black bg-gray-custom rounded-mlarge h-auto w-full px-3 pb-2 mb-2">
            <div className="font-bold text-ellipsis overflow-hidden ...">
              {comment.User_Name}
            </div>
            <div className="w-full">{comment.Comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
