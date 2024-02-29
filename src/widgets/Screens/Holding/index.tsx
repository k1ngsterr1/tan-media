import { AboutBlock } from "@shared/ui/AboutBlock";

export const HoldingScreen = () => {
  return (
    <section className="container">
      <div className="w-full flex items-center justify-between">
        <h1 className="heading">О холдинге</h1>
        <p className="paragraph w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
          facilisis ac tristique ut, malesuada et risus. In hac habitasse platea
          dictumst. Integer laoreet magna nulla, sed feugiat nisi mollis nec. Ut
          tempor id tellus at semper.
        </p>
      </div>
      <div className="flex items-start justify-between">
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
      </div>
    </section>
  );
};
