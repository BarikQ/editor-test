import { DragEvent } from "react";
import styles from "./Instrument.module.css";

export default function Instrument({
  title,
  type,
  dragEventCallback,
  ...props
}: {
  title: string;
  type: string;
  dragEventCallback: (e: DragEvent<HTMLDivElement>, type: string) => void;
}) {
  function handleDragStart(e: DragEvent<HTMLDivElement>) {
    dragEventCallback(e, type);
    e.dataTransfer.setData("element-type", type);
  }

  function handleDragEnd(e: DragEvent<HTMLDivElement>) {
    dragEventCallback(e, type);
  }

  return (
    <div
      className={styles.container}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <span className={styles.title}>{title}</span>
    </div>
  );
}
