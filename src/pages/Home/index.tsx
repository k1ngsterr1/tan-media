import VantaBackground from "@shared/lib/3d";
import { Form } from "@widgets/Form/ui";
import { AboutScreen } from "@widgets/Screens/HomePage/About";

export const HomePage = () => {
  return (
    <div>
      <VantaBackground />
      <AboutScreen />
      <Form />
    </div>
  );
};
