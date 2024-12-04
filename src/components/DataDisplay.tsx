import React, { useCallback, useEffect, useState } from "react";
import { getFakerData } from "../services/api";
import styles from "../styles/DataDisplay.module.css";
import { SceneImage } from "../types/DataModel";
import SceneDisplayItem from "./SceneDisplayItem";

const DataDisplay: React.FC = () => {
  const [sceneImages, setSceneImages] = useState<SceneImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const data = await getFakerData();
      if (data && data.data) {
        setSceneImages(data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Faker API Data</h1>
      {!isLoading ? (
        <div className={styles.gridContainer}>
          {sceneImages.map((scene, index) => (
            <SceneDisplayItem scene={scene} key={index} />
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataDisplay;
