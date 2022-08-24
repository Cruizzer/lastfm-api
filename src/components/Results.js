import React from "react";
import UserInfo from "./UserInfo";
import Card from "./Card";

const ResultsList = ({
  listOfTracks,
  realName,
  profilePic,
  country,
  playcount,
  errorMessage,
}) => {
  console.log(listOfTracks);

  return (
    <>
      {errorMessage === "" ? (
        <>
          <UserInfo
            realName={realName}
            profilePic={profilePic}
            country={country}
            playcount={playcount}
          />
          <Card listOfTracks={listOfTracks} />
        </>
      ) : (
        <h1>{errorMessage}</h1>
      )}
    </>
  );
};

export default ResultsList;
