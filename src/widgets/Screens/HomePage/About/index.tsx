import Marquee from "react-fast-marquee";

import forbes from "@assets/holding/forbes.png";
import arbat from "@assets/holding/arbat.png";
import armanzhan from "@assets/holding/armanzhan.png";
import baitassov from "@assets/holding/baitassov.png";
import business_fm from "@assets/holding/business_fm.png";
import media from "@assets/holding/media.png";
import mz from "@assets/holding/mz.png";
import unique from "@assets/holding/unique.png";

export const AboutScreen = () => {
  return (
    <section className="container">
      <Marquee className="flex items-center mt-4" speed={130}>
        <img src={forbes} alt="forbes" className="w-1/2" />
        <img src={arbat} alt="arbat" className="w-1/2" />
        <img src={armanzhan} alt="arbat" className="w-1/2" />
        <img src={baitassov} alt="arbat" className="w-1/2" />
        <img src={business_fm} alt="arbat" className="w-1/2" />
        <img src={media} alt="arbat" className="w-1/2" />
        <img src={mz} alt="arbat" className="w-1/2" />
        <img src={unique} alt="arbat" className="w-1/2" />
      </Marquee>
    </section>
  );
};
