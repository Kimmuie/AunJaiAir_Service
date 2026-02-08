import { useState } from "react";

const Seperator = () => {
  return (
    <>
  <div className="w-full h-6 bg-Primary overflow-hidden ">
        <div 
          className="w-full h-full opacity-90"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--color-Black), var(--color-Black) 15px, transparent 15px, transparent 30px)`
          }}
        />
      </div>
    </>
  );
};

export default Seperator;
