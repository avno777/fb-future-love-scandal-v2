import React from "react";
import { BaseLayout } from "../../layout/BaseLayout";
import OnlineUser from "../../components/OnlineUser";
import HomeCart from "../../components/HomeCart";
import PostHome from "../../components/PostHome";

export const Home = () => {
  return (
    <BaseLayout>
      <div className="w-full">
        <div className=" bg-custom-bg pl-4 pr-6 pt-36">
          <div className="grid grid-cols-5 gap-4">
            <OnlineUser />
           <PostHome/>
            <HomeCart/>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
