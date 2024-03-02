import { AboutBlock } from "@shared/ui/AboutBlock";
import { Fade } from "react-awesome-reveal";

export const HoldingScreen = () => {
  return (
    <section className="container !mt-20 !mb-20">
      <div className="w-full flex items-center justify-between">
        <Fade
          className="w-full flex items-center justify-between"
          cascade
          damping={0.3}
        >
          <h1 className="heading">О холдинге</h1>

          <p className="paragraph w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
            facilisis ac tristique ut, malesuada et risus. In hac habitasse
            platea dictumst. Integer laoreet magna nulla, sed feugiat nisi
            mollis nec. Ut tempor id tellus at semper.
          </p>
        </Fade>
      </div>
      <div className="flex items-start justify-between">
        <Fade
          className="w-full flex items-start justify-between"
          cascade
          damping={0.3}
        >
          <AboutBlock
            number="01"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
          facilisis ac tristique ut, malesuada et risus. In hac habitasse platea
          dictumst. Integer laoreet magna nulla, sed feugiat nisi mollis nec. Ut
          tempor id tellus at"
          />
          <AboutBlock
            number="02"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
          facilisis ac tristique ut, malesuada et risus. In hac habitasse platea
          dictumst. Integer laoreet magna nulla, sed feugiat nisi mollis nec. Ut
          tempor id tellus at"
          />
          <AboutBlock
            number="03"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
          facilisis ac tristique ut, malesuada et risus. In hac habitasse platea
          dictumst. Integer laoreet magna nulla, sed feugiat nisi mollis nec. Ut
          tempor id tellus at"
          />
        </Fade>
      </div>
    </section>
  );
};
