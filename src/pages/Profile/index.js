import React from "react";
import { BaseLayout } from "../../layout/BaseLayout";
import Post from "../../components/Post";
import PostComments from "../../components/Comment/PostComments";
import Card from "../../components/Card";

export const Profile = () => {
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
