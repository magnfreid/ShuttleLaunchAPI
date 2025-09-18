import { Link, useParams } from "react-router";
import "./Info.css";
import { useContext } from "react";
import { DataContext } from "../data/context";
import InfoPair from "./InfoPair";

function Info() {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const launch = data.find((launch) => launch.id === id);
  const agency = launch.agencies[0];

  return (
    <div className="info">
      <h2 className="info__agency">{agency.name}</h2>
      <div className="info__row">
        <div className="info__row-left">
          <InfoPair title={"Country:"} text={agency.country} />
          <InfoPair title={"Type:"} text={agency.type} />
          <InfoPair title={"Administrator:"} text={agency.administrator} />
          <InfoPair title={"Founded:"} text={agency.founded} />
        </div>
        <img
          className="info__thumbnail"
          src={agency.imageUrl}
          alt="Company image"
        />
      </div>
      <InfoPair title={"Description:"} text={agency.description} />

      <div className="info__stats-grid">
        <InfoPair
          title={"Total launches:"}
          text={agency.launchStats.totalLaunchCount}
        />
        <InfoPair
          title={"Consecutive successful launches:"}
          text={agency.launchStats.consecutiveSuccessfulLaunches}
        />
        <InfoPair
          title={"Successful launches:"}
          text={agency.launchStats.successfulLaunches}
        />
        <InfoPair
          title={"Failed launches:"}
          text={agency.launchStats.failedLaunches}
        />
        <InfoPair
          title={"Pending launches:"}
          text={agency.launchStats.pendingLaunches}
        />
        <InfoPair
          title={"Consecutive successful landings:"}
          text={agency.launchStats.consecutiveSuccessfulLandings}
        />
        <InfoPair
          title={"Successful landings:"}
          text={agency.launchStats.successfulLandings}
        />
        <InfoPair
          title={"Failed landings:"}
          text={agency.launchStats.failedLandings}
        />
        <InfoPair
          title={"Attempted landings:"}
          text={agency.launchStats.attemptedLandings}
        />
        <InfoPair
          title={"Successful landings (spacecraft):"}
          text={agency.launchStats.successfulLandingsSpacecraft}
        />
        <InfoPair
          title={"Failed landings (spacecraft):"}
          text={agency.launchStats.failedLandingsSpacecraft}
        />
        <InfoPair
          title={"Attempted landings (spacecraft):"}
          text={agency.launchStats.attemptedLandingsSpacecraft}
        />
        <InfoPair
          title={"Successful landings (payload):"}
          text={agency.launchStats.successfulLandingsPayload}
        />
        <InfoPair
          title={"Failed landings (payload):"}
          text={agency.launchStats.failedLandingsPayload}
        />
        <InfoPair
          title={"Attempted landings (payload):"}
          text={agency.launchStats.attemptedLandingsPayload}
        />
      </div>
      <Link className="info__back-button" to={"/"}>
        Back
      </Link>
    </div>
  );
}

export default Info;
