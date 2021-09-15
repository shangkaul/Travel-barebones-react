import "./styles.css";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="Card">
      <img className="card_image" alt="scenery" src={props.img} />
      <div className="card_body">
        <div className="card_title">{props.title}</div>
        <div className="card_content">{props.content}</div>
        <div className="action_bar">
          <a
            href={
              "https://www.google.com/maps/search/places+to+visit+in+" +
              props.title
            }
          >
            Take me to {props.title}{" "}
            <span className="action_icon">
              <FaChevronCircleRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
