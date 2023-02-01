import { MouseEvent } from "react";
import styles from "./WorkAreaRemoveIcon.module.css";

export default function WorkAreaRemoveIcon({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  function handleClick(e: MouseEvent) {
    onClick();
  }

  return (
    <img
      className={[styles.icon, className].join(" ")}
      onClick={handleClick}
      src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
      alt="x"
    />
  );
}
