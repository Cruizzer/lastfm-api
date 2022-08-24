import React from "react";
import "./UserInfo.css";

const UserInfo = ({ realName, profilePic, country, playcount }) => {
  if (country === "") return;
  return (
    <div className="userInfo">
      <img
        src={
          profilePic === ""
            ? "https://external-preview.redd.it/hLitnIbPtXmyMB8vcMkiGRE97PNFp4luuRM6wYDTdgc.jpg?auto=webp&s=2c65de69fac1b49fdfd24bd7d75931f66947e724"
            : profilePic
        }
        alt="Profile picture"
        width={174}
        height={174}
      />
      <h1>Real Name: {realName === "" ? "Unknown" : realName}</h1>
      <p>Country: {country === "None" ? "Unknown" : country}</p>
      <p>Total Scrobbled: {playcount}</p>
    </div>
  );
};

export default UserInfo;
