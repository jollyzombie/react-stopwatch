import styles from './RenderTime.module.scss';

const RenderTime = (props) => {

  return (
    <div>
      <span className={styles.stopwatch}>{('0' + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
      <span className={styles.stopwatch}>{('0' + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
      <span className={styles.stopwatch}>{('0' + ((props.time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default RenderTime;
