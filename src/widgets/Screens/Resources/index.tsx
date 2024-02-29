import { ResourceTab } from "@shared/ui/ResourceTab";

export const ResourcesScreen = () => {
  return (
    <section className="container-no-height !mt-20 flex items-center justify-center">
      <h1 className="heading">Наши ресурсы</h1>
      <p className="paragraph text-center w-[50%] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
        facilisis ac tristique ut, malesuada et risus. In hac habitasse platea
        dictumst. Integer laoreet magna nulla, sed feugiat nisi mollis nec. Ut
        tempor id tellus at semper.
      </p>
      <div className="w-full flex justify-between items-start">
        <ResourceTab name="Forbes Kazakhstan " bgImage="forbes" />
        <ResourceTab name="Business FM" bgImage="businessFM" />
        <ResourceTab name="Arbat Media" bgImage="arbat" />
      </div>
      <div className="w-full flex justify-between items-start">
        <ResourceTab name="Muzzone" bgImage="muzzone" />
        <ResourceTab name="Tan Digital Media" bgImage="tan_digital" />
        <ResourceTab name="@Armanzhan" bgImage="armanzhan" />
      </div>
      <div className="w-full flex justify-between items-start">
        <ResourceTab name="Baitassov Live" bgImage="baitassov_live" />
        <ResourceTab name="Mediacafe" bgImage="mediacafe" />
        <ResourceTab name="Unique Media" bgImage="unique" />
      </div>
    </section>
  );
};
