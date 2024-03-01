import { useRef } from "react";
import { useCustomCursor } from "@shared/lib/hooks/useCustomCursor";

import T from "@assets/T.svg";
import styles from "./styles.module.scss";

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useCustomCursor(cursorRef);

  return (
    <div className={styles.cursor} ref={cursorRef}>
      <img src={T} className="w-1/3" />
    </div>
  );
};
