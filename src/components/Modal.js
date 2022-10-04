import React from "react";

import Trending from "./TrendingList";
import Suggestions from "./SuggestionList";

export default function Modal({ onBckgroundClick }) {
  function handleClick(e) {
    if (
      e.target.classList.contains("search-bar") ||
      e.target.closest(".search-bar") ||
      e.target.classList.contains("trending-popular-modal") ||
      e.target.closest(".trending-popular-modal")
    ) {
      return;
    }

    onBckgroundClick();
  }

  React.useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="trending-popular-modal">
      <Trending />
      <Suggestions />
    </div>
  );
}