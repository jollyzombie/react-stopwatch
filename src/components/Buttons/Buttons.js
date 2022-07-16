import styles from './Buttons.module.scss';

const Buttons = (props) => {

  return (
    <div>
      {/* <button className={styles.button} onClick={() => props.setStart(oldState => !oldState)}>Start</button> */}
      <button className={styles.button} onClick={() => props.setStart(true)}>Start</button>
      <button className={styles.button} onClick={() => props.setStart(false)}>Stop</button>
      <button className={styles.button} onClick={() => props.setTime(0)}>Reset</button>
    </div>
  );
};

export default Buttons;
