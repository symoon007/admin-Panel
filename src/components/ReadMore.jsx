/* eslint-disable react/prop-types */
import { useState } from "react";

const ReadMore = ({ text, maxChars }) => {
  const [isExpaded, setIsExpaded] = useState(true);
  const toggleReadMore = () => {
    setIsExpaded(!isExpaded);
  };
  return (
    <div>
      {isExpaded ? (
        <>
          {text.slice(0, maxChars)}
          <span
            onClick={toggleReadMore}
            style={{ cursor: "pointer", color: "blue", fontWeight: "medium" }}
          >
            ...Read More
          </span>
        </>
      ) : (
        <>
          {text}
          <span
            onClick={toggleReadMore}
            style={{ cursor: "pointer", color: "blue", fontWeight: "medium" }}
          >
            &nbsp;Read Less
          </span>
        </>
      )}
    </div>
  );
};

export default ReadMore;
