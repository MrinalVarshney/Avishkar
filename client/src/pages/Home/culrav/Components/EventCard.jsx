import { Link } from "react-router-dom"; // Import Link from React Router
import "./EventCard.css";
import { useParams } from "react-router-dom";
// import data from "../../../../Data/Event/Culrav/Department";

const EventCard = ({ data }) => {
  console.log(data.info[0]);
  const { index } = useParams();
  return (
    <div className="EventCard">
      {" "}
      {/* Wrap the card with Link */}
      <div className="card">
        <Link
          to={`/culravEvent/${encodeURIComponent(JSON.stringify(data))}`}
          className="flex items-center justify-center cursor-pointer"
        >
          <div className="wrapper-card">
            {/* <h1 className="w-full flex justify-center border-2  border-black  sm:text-2xl xl:text-3xl font-custom ">
              {data.event}
            </h1> */}
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-center">
                <img
                  className="cover-image"
                  src={data.info[0].BgImageLink}
                  alt="Event Cover"
                />
                <span className="flex text-center mx-auto text-3xl text-amber-100 font-custom hover:opacity-70 transition-opacity duration-300 ">
                  <div className="flex-col">
                    <p className="text-3xl w-full mt-2 rumoura-font">
                      Explore !
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>

          {/* <img
            src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
            alt="Event Character"
            className="character"
          /> */}
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
