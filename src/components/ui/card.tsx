import React from "react";

const Card: React.FC = () => {
  const left = 0;
  const top = 0;

  const handleSomething = () => {
    // handle something
  };

  const style: React.CSSProperties = {
    position: "absolute",
    left: left,
    top: top,
  };

  const anotherHandler = () => {
    // handle another thing
  };

  return (
    <div>
      <div style={style} onClick={handleSomething}>
        {/* content */}
      </div>
      <div onClick={anotherHandler}>
        {/* content */}
      </div>
    </div>
  );
};

export default Card;