import React from "react";
import "./Results.css";

const ResultsList = ({ listOfTracks }) => {
  console.log(listOfTracks);

  if (listOfTracks.length === 0) return;

  const singleCard = listOfTracks.map((singleTrack) => {
    return (
      <div
        className="singleCard"
        key={"date" in singleTrack ? singleTrack.date.uts : "1"}
      >
        <img
          className="ui left floated image"
          src={Object.values(singleTrack.image[2])[1]}
          alt="Empty"
        />
        <h1>{Object.values(singleTrack.artist)[1]}</h1>
        <span>{singleTrack.name}</span>
        <h2>
          {"@attr" in singleTrack
            ? "Now playing"
            : Object.values(singleTrack.date)[1]}
        </h2>
        <br />
      </div>
    );
  });
  return <h1>{singleCard}</h1>;
};

export default ResultsList;
