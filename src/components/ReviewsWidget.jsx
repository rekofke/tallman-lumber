import React, { useEffect } from "react";

const ReviewsWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      class="elfsight-app-1b9c5674-bd8b-4fc2-89f9-299794247f50"
      data-elfsight-app-lazy
    ></div>
  );
};

export default ReviewsWidget;
