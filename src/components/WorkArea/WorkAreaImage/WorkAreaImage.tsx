import { useState } from "react";
import styles from "./WorkAreaImage.module.css";
import WorkAreaRemoveIcon from "../WorkAreaRemoveIcon/WorkAreaRemoveIcon";

export default function WorkAreaImage({
  id,
  onRemove,
}: {
  id: string;
  onRemove: (id: string) => void;
}) {
  const [src, setSrc] = useState("");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;
    const newSrc = window.URL.createObjectURL(e.target.files?.[0]);
    setSrc(newSrc);
  }

  function handleRemove() {
    onRemove(id);
  }

  return (
    <>
      <WorkAreaRemoveIcon
        className={styles.removeIcon}
        onClick={handleRemove}
      />
      <label
        htmlFor={`image-${id}`}
        className={
          src ? [styles.label, styles.labelFilled].join(" ") : styles.label
        }
      >
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          id={`image-${id}`}
          onChange={handleImageChange}
        />
        {src ? <img src={src} alt="" /> : <span>Add your image</span>}
      </label>
    </>
  );
}
