import "../Styles/Top_button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Top_button() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="top-btn" onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowUp} className="top-btn-icon" />
    </div>
  );
}
