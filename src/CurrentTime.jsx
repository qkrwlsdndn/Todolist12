import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <h2>실시간 시간</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentTime;
