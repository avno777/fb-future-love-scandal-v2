import React from "react";
import { BaseLayout } from "../../layout/BaseLayout";
import Post from "../../common/Post";
import PostComments from "../../common/Comment/PostComments";
import Card from "../../common/Card";

export const Home = () => {
  return (
    <BaseLayout>
      <div className="w-full">
        <div>
          <div className="bg-custom-bg pt-36 px-4 w-screen ">
            <div className="flex">
              <Post></Post>
              <PostComments></PostComments>
            </div>
            <div className="mt-9">
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
