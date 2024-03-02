import { ResourceTab } from "@shared/ui/ResourceTab";
import { Fade } from "react-awesome-reveal";

export const ResourcesScreen = () => {
  return (
    <section className="container-no-height !mt-20 flex items-center justify-center">
      <Fade cascade damping={0.3} className="flex flex-col items-center">
        <h1 className="heading">Наши ресурсы</h1>
        <p className="paragraph text-center w-[50%] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
          facilisis ac tristique ut, malesuada et risus. In hac habitasse platea
          dictumst. Integer laoreet magna nulla, sed feugiat nisi mollis nec. Ut
          tempor id tellus at semper.
        </p>
      </Fade>
      <div className="w-full flex justify-between items-start mt-16">
        <Fade
          cascade
          damping={0.3}
          className="w-full flex justify-between items-start"
        >
          <ResourceTab
            name="Forbes Kazakhstan "
            bgImage="forbes hoverable"
            href="https://forbes.kz/"
          />
          <ResourceTab
            name="Business FM"
            bgImage="businessFM hoverable"
            href="https://businessfm.kz/"
          />
          <ResourceTab
            name="Arbat Media"
            bgImage="arbat hoverable"
            href="https://arbatmedia.kz/"
          />
        </Fade>
      </div>
      <div className="w-full flex justify-between items-start mt-8">
        <Fade
          cascade
          damping={0.3}
          className="w-full flex justify-between items-start"
        >
          <ResourceTab
            name="Muzzone"
            bgImage="muzzone hoverable"
            href="https://www.instagram.com/muzzone.tv/"
          />
          <ResourceTab
            name="Tan Digital Media"
            bgImage="tan_digital hoverable"
            href="https://tanmediagroup.kz/"
          />
          <ResourceTab
            name="@Armanzhan"
            bgImage="armanzhan hoverable"
            href="https://www.instagram.com/armanzhan/"
          />
        </Fade>
      </div>
      <div className="w-full flex justify-between items-start mt-8">
        <Fade
          cascade
          damping={0.3}
          className="w-full flex justify-between items-start"
        >
          <ResourceTab
            name="Baitassov Live"
            bgImage="baitassov_live hoverable"
            href="https://www.youtube.com/channel/UCh0k3JlUGI0UBFQOUPaaImQ"
          />
          <ResourceTab
            name="Mediacafe"
            bgImage="mediacafe hoverable"
            href="https://tanmediagroup.kz/uniquemedia"
          />
          <ResourceTab
            name="Unique Media"
            bgImage="unique hoverable"
            href="https://tanmediagroup.kz/mediacafe"
          />
        </Fade>
      </div>
    </section>
  );
};
