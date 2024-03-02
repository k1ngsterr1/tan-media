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
      <div className="w-full flex justify-between items-start mt-16">
        <ResourceTab
          name="Forbes Kazakhstan "
          bgImage="forbes hoverable"
          href="https://forbes.kz/"
        />
        <ResourceTab
          name="Business FM"
          bgImage="businessFM hoverable"
          href="https://forbes.kz/"
        />
        <ResourceTab
          name="Arbat Media"
          bgImage="arbat hoverable"
          href="https://forbes.kz/"
        />
      </div>
      <div className="w-full flex justify-between items-start mt-8">
        <ResourceTab
          name="Muzzone"
          bgImage="muzzone hoverable"
          href="https://forbes.kz/"
        />
        <ResourceTab
          name="Tan Digital Media"
          bgImage="tan_digital hoverable"
          href="https://forbes.kz/"
        />
        <ResourceTab
          name="@Armanzhan"
          bgImage="armanzhan hoverable"
          href="https://forbes.kz/"
        />
      </div>
      <div className="w-full flex justify-between items-start mt-8">
        <ResourceTab
          name="Baitassov Live"
          bgImage="baitassov_live hoverable"
          href="https://forbes.kz/"
        />
        <ResourceTab
          name="Mediacafe"
          bgImage="mediacafe hoverable"
          href="https://forbes.kz/"
        />
        <ResourceTab
          name="Unique Media"
          bgImage="unique hoverable"
          href="https://forbes.kz/"
        />
      </div>
    </section>
  );
};
