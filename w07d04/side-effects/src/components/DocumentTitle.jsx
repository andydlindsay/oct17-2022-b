import {useEffect, useState} from 'react';

const DocumentTitle = () => {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    console.log('updating the document title');
    document.title = `the count is ${count}`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('the timer has fired!', count);
    }, 2000);
    
    const cleanup = () => {
      console.log('clearing the interval');
      clearInterval(interval);
    };

    return cleanup;
  }, [count]);

  return (
    <div>
      <h2>This is the DocumentTitle component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default DocumentTitle;
