import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';
import { signIn } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button><br />

      <button onClick={() => dispatch(signIn())}>Toggle Sign In</button>

      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : '' }
    </div>
  );
}

export default App;
