import { MyRoutes } from "@pages/index";
import { Cursor } from "@shared/ui/Cursor";

import "@shared/styles/global.scss";

export const App = () => {
  return (
    <div className="w-full">
      <Cursor />
      <MyRoutes />
    </div>
  );
};
