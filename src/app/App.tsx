import { MyRoutes } from "@pages/index";
import { Cursor } from "@shared/ui/Cursor";
import React from "react";

export const App = () => {
  return (
    <div>
      <Cursor />
      <MyRoutes />
    </div>
  );
};
