import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greeting from './components/Greeting';
import { fetchGreeting } from './features/greeting/greetingSlice';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchGreeting());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
