import { RefObject, SyntheticEvent, useEffect } from "react";
import gsap from "gsap";

export const useCustomLabel = (labelRef: RefObject<HTMLElement>) => {
  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        bottom: "clamp(16px,1.66656vw,64px)",
        fontSize: "clamp(8px,0.83328vw,32px)",
        color: "#FF7300",
        duration: 0.3,
        ease: "power1",
      });
    }
  };

  const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        bottom: "4px",
        fontSize: "clamp(9px,0.93744vw,36px)",
        color: "rgba(255, 255, 255, 0.80)",
        duration: 0.3,
        ease: "power1",
      });
    }
  };

  return { onLabelFocus, onLabelBlur };
};
