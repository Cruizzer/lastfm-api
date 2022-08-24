import React from "react";
import "./Card.css";

const Card = ({ listOfTracks }) => {
  const singleCard = listOfTracks.map((singleTrack, index) => {
    return (
      <div className="singleCard" key={index}>
        <img
          className="ui floated image"
          src={
            Object.values(singleTrack.image[2])[1] === ""
              ? "https://external-preview.redd.it/PQ_RcPSlW_SlZYPNOSPK6Fp8dhF-jdwbVhproaDSLek.jpg?auto=webp&s=5a203fc3392f4cd1cebfd45c59c7f09e1defb709"
              : Object.values(singleTrack.image[2])[1]
          }
          alt="Empty"
          width={174}
          height={174}
        />
        <h1>{Object.values(singleTrack.artist)[1]}</h1>
        <span>{singleTrack.name}</span>
        <h2>
          {"@attr" in singleTrack ? (
            <div className="nowPlaying">
              <h1>Now playing</h1>
              <span className="dot"></span>
            </div>
          ) : (
            Object.values(singleTrack.date)[1]
          )}
        </h2>
        <br />
      </div>
    );
  });

  return singleCard;
};

export default Card;
