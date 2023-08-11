import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/Greetings/GreetingsSlice';

function RandomGreeting() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const {greeting, isLoading}  = useSelector((store) => store.greetings);


  return (
    <div>
      <h1>Random Greeting</h1>
      {isLoading === false && 
        <p>{greeting}</p> 
      }
    </div>
  );
}

export default RandomGreeting;