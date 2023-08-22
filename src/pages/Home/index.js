import React from "react";
import { BaseLayout } from "../../layout/BaseLayout";
import OnlineUser from "../../components/OnlineUser";

export const Home = () => {
  return (
    <BaseLayout>
      <div className="w-full">
        <div className=" bg-custom-bg pl-4 pr-6 pt-36">
          <div className="grid grid-cols-5 gap-4">
            <OnlineUser />
            <div className="col-span-3">Post</div>
            <div>Card</div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
