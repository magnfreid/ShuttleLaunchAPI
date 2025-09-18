import { Link } from "react-router";
import "./LaunchListItem.css";
import InfoPair from "./InfoPair";

function LaunchListItem({ launch }) {
  return (
    <li className="launch-list-item">
      {/* HEADER */}
      <div className="launch-list-item__header">
        <h1 className="launch-list-item__title">{launch.name}</h1>
        <div className="launch-list-item__agency-wrapper">
          <h1 className="launch-list-item__agency-title">
            {launch.agencies.length === 0 ? "Unknown" : launch.agencies[0].name}
          </h1>
          <Link
            to={`/info/${launch.id}`}
            className="launch-list-item__agency-info-button"
            type="text"
          >
            {launch.agencies.length === 0 ? "" : "Info"}
          </Link>
        </div>
      </div>

      {/* INFO GRID */}
      <div className="launch-list-item__info-grid-wrapper">
        <div className="launch-list-item__info-grid">
          <InfoPair title={"Date:"} text={launch.launchDate} />
          <InfoPair title={"Status:"} text={launch.status} />
          <div className="launch-list-item__info-pair">
            <p className="launch-list-item__info-title">Launchpad:</p>
            <p>{launch.launchPad.name ?? "Unknown"}</p>
            <p>{launch.launchPad.country ?? "Unknown"}</p>
            <a
              href={launch.launchPad.mapUrl ?? ""}
              target="_blank"
              rel="noreferrer"
            >
              See on map
            </a>
          </div>
          <InfoPair
            title={"Orbit:"}
            text={`${launch.orbit.celestialBody}, ${launch.orbit.name}`}
          />
        </div>
        {/* Thumbnail*/}
        <img
          className="launch-list-item__thumbnail"
          src={launch.thumbnailUrl}
          alt="Space rocket image"
        />
      </div>
      {/* MISSION */}
      <div className="launch-list-item__info-pair">
        <p className="launch-list-item__info-title">Mission:</p>
        <p className="launch-list-item__mission-description">
          {launch.mission.description}
        </p>
      </div>
    </li>
  );
}

export default LaunchListItem;
