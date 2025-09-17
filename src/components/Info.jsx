import { Link, useParams } from "react-router";
import "./Info.css";
import { useContext } from "react";
import { DataContext } from "../data/context";

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
          <div className="info__pair">
            <p className="info__title">Country:</p>
            <p>{agency.country}</p>
          </div>
          <div className="info__pair">
            <p className="info__title">Type:</p>
            <p>{agency.type}</p>
          </div>
          <div className="info__pair">
            <p className="info__title">Administrator:</p>
            <p>{agency.administrator}</p>
          </div>
          <div className="info__pair">
            <p className="info__title">Founded:</p>
            <p>{agency.founded}</p>
          </div>
        </div>
        <img
          className="info__thumbnail"
          src={agency.imageUrl}
          alt="Company image"
        />
      </div>
      <div className="info__pair">
        <p className="info__title">Description:</p>
        <p>{agency.description}</p>
      </div>

      <h3 className="info__section-title">Launch stats:</h3>
      <div className="info__stats-grid">
        <div className="info__stats-pair">
          <p className="info__stats-title">Total Launches:</p>
          <p>{agency.launchStats.totalLaunchCount}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Consecutive Successful Launches:</p>
          <p>{agency.launchStats.consecutiveSuccessfulLaunches}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Successful Launches:</p>
          <p>{agency.launchStats.successfulLaunches}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Failed Launches:</p>
          <p>{agency.launchStats.failedLaunches}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Pending Launches:</p>
          <p>{agency.launchStats.pendingLaunches}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Consecutive Successful Landings:</p>
          <p>{agency.launchStats.consecutiveSuccessfulLandings}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Successful Landings:</p>
          <p>{agency.launchStats.successfulLandings}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Failed Landings:</p>
          <p>{agency.launchStats.failedLandings}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Attempted Landings:</p>
          <p>{agency.launchStats.attemptedLandings}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Successful Landings (Spacecraft):</p>
          <p>{agency.launchStats.successfulLandingsSpacecraft}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Failed Landings (Spacecraft):</p>
          <p>{agency.launchStats.failedLandingsSpacecraft}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Attempted Landings (Spacecraft):</p>
          <p>{agency.launchStats.attemptedLandingsSpacecraft}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Successful Landings (Payload):</p>
          <p>{agency.launchStats.successfulLandingsPayload}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Failed Landings (Payload):</p>
          <p>{agency.launchStats.failedLandingsPayload}</p>
        </div>
        <div className="info__stats-pair">
          <p className="info__stats-title">Attempted Landings (Payload):</p>
          <p>{agency.launchStats.attemptedLandingsPayload}</p>
        </div>
      </div>

      <Link className="info__back-button" to={"/"}>
        Back
      </Link>
    </div>
  );
}

export default Info;
