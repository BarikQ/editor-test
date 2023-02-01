import WorkAreaRemoveIcon from "../WorkAreaRemoveIcon/WorkAreaRemoveIcon";
import styles from "./WorkAreaText.module.css";

export default function WorkAreaText({
  id,
  onRemove,
  ...props
}: {
  id: string;
  onRemove: (id: string) => void;
}) {
  function handleRemove() {
    onRemove(id);
  }

  return (
    <>
      <WorkAreaRemoveIcon onClick={handleRemove} />
      <textarea id={id} className={styles.textarea} {...props} />
    </>
  );
}
