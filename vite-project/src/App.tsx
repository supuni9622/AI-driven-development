import React, { useState } from 'react';

interface Props {}

const HiMom: React.FC<Props> = () => {
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {visible && <div><h1>hi mom</h1></div>}
    </div>
  );
};

export default HiMom;

