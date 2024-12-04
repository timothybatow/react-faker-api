import styles from "../styles/SceneDisplayItem.module.css";
import { SceneImage } from "../types/DataModel";

const SceneDisplayItem = ({ scene }: { scene: SceneImage }) => {
  return (
    <div className={styles.card}>
      <img src={scene.url} alt={scene.title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{scene.title}</h2>
        <p className={styles.description}>{scene.description}</p>
      </div>
    </div>
  );
};

export default SceneDisplayItem;
