import VantaBackground from "@shared/lib/3d";
import { Form } from "@widgets/Form/ui";
import { FormScreen } from "@widgets/Screens/FormScreen";
import { AboutScreen } from "@widgets/Screens/HomePage/About";

export const HomePage = () => {
  return (
    <div>
      <VantaBackground />
      <AboutScreen />
      <FormScreen />
    </div>
  );
};
