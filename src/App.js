import { useState, useEffect } from 'react';
import RenderTime from './components/RenderTime/RenderTime';
import Buttons from './components/Buttons/Buttons';
import Container from './components/Container/Container';



const App = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;

    if (start) {
      timer = setInterval(() => {
        setTime((preValue) => preValue + 10);
      }, 10);
    } else if (!start) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [start]);

  return (
    <Container>
      <RenderTime time={time} />
      <Buttons setTime={setTime} setStart={setStart} />
    </Container>
  );
};

export default App;
