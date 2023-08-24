import React from "react";
import { BaseLayout } from "../../layout/BaseLayout";
import OnlineUser from "../../components/OnlineUser";
import HomeCart from "../../components/HomeCart";
import PostHome from "../../components/PostHome";

export const Home = () => {
  return (
    <BaseLayout>
      <div className="w-full">
        <div className=" bg-gray-custom pl-5 pr-7 pt-36 pb-12">
          <div className="grid grid-cols-4 gap-4">
            <OnlineUser />
            <PostHome />
            <HomeCart />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
