import { Footer } from "@features/Footer/ui";
import { Header } from "@features/Header/ui";
import { HoldingScreen } from "@widgets/Screens/Holding";
import { OwnerScreen } from "@widgets/Screens/Holding/OwnerScreen";
import { AboutScreen } from "@widgets/Screens/HomePage/About";

export const HoldingPage = () => {
  return (
    <div>
      <Header />
      <HoldingScreen />
      <AboutScreen />
      <OwnerScreen />
      <Footer />
    </div>
  );
};
