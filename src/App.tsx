import React, { DragEvent, useCallback, useState } from "react";
import styles from "./App.module.css";
import Instrument from "./components/Instrument/Instrument";
import WorkAreaImage from "./components/WorkArea/WorkAreaImage/WorkAreaImage";
import WorkAreaText from "./components/WorkArea/WorkAreaText/WorkAreaText";

function App() {
  const [isWorkAreaActive, setIsWorkAreaActive] = useState(false);
  const [workAreaElements, setWorkAreaElements] = useState<any>({});

  const handleElementRemove = useCallback(
    (id: string) => {
      const { [id]: removedElement, ...remainingElements } = workAreaElements;
      setWorkAreaElements({ ...remainingElements });
    },
    [workAreaElements]
  );

  const getWorkAreaElement = useCallback(
    (type: string, id: string) => {
      switch (type) {
        case "image":
          return <WorkAreaImage id={id} onRemove={handleElementRemove} />;
        case "text":
          return <WorkAreaText id={id} onRemove={handleElementRemove} />;
        default:
          return null;
      }
    },
    [handleElementRemove]
  );

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setWorkAreaElements({
      ...workAreaElements,
      [Date.now()]: {
        type: e.dataTransfer.getData("element-type"),
      },
    });
  }

  function dragEventCallback(e: DragEvent<HTMLDivElement>, type: string) {
    setIsWorkAreaActive(!isWorkAreaActive);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Instruments</h2>
        <Instrument
          title="Text"
          type="text"
          dragEventCallback={dragEventCallback}
        />
        <Instrument
          title="Image"
          type="image"
          dragEventCallback={dragEventCallback}
        />
      </div>
      <div
        className={styles.workArea}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {Object.entries(workAreaElements).map(
          ([key, { type }]: any) => (
            <div key={key} className={styles.workAreaElement}>
              {getWorkAreaElement(type, key)}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
