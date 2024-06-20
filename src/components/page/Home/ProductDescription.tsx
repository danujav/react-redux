import { useState } from "react";

const ProductDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };
  
    const words = description.split(" ");
  
    const displayText = isExpanded ? description : words.slice(0, 10).join(" ");
  
    return (
      <div>
        <p className="text-teal-900">
          {displayText}
          {!isExpanded && words.length > 10 && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleReadMore}
            >
              ... Read more
            </span>
          )}
          {isExpanded && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleReadMore}
            >
              Read less
            </span>
          )}
        </p>
      </div>
    );
  };

  export default ProductDescription;