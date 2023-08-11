import React, { useState, useEffect } from 'react';

function RandomGreeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/random_greeting') // Replace with your API URL
      .then(response => response.json())
      .then(data => setGreeting(data.greeting))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default RandomGreeting;