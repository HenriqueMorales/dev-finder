import React from "react";
import StyledMain from "./Styles";

import locationIcon from "../../assets/icon-location.svg";
import websiteIcon from "../../assets/icon-website.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import companyIcon from "../../assets/icon-company.svg";
import dayjs from "dayjs";

const Main = ({ userData }) => {
  return (
    <StyledMain>
      <div className="profile-wrapper">
        <section className="profile-header">
          <img
            src={userData.avatar_url}
            className="profile-pic"
            alt="Profile"
          />
          <div className="name-date-wrapper">
            <div className="profile-name">
              <h2>{userData.name}</h2>
              <p className="profile-user">@{userData.login}</p>
            </div>
            <p className="profile-date">
              Joined {dayjs(userData.created_at).format("DD MMM YYYY")}
            </p>
          </div>
        </section>

        <div className="bio-stats-footer-wrapper">
          <p className="bio">{userData.bio || "This profile has no bio"}</p>

          <section className="profile-stats">
            <ul>
              <li>
                <p>Repos</p>
                <p>{userData.public_repos}</p>
              </li>
              <li>
                <p>Followers</p>
                <p>{userData.followers}</p>
              </li>
              <li>
                <p>Following</p>
                <p>{userData.following}</p>
              </li>
            </ul>
          </section>

          <section className="profile-footer">
            <div>
              <ul>
                <li style={userData.location ? null : { opacity: 0.4 }}>
                  <img src={locationIcon} alt="Location" />
                  <p className="p-2">{userData.location || "Not Available"}</p>
                </li>
                <li style={userData.blog ? null : { opacity: 0.4 }}>
                  <img src={websiteIcon} alt="Website" />
                  <p>{userData.blog || "Not Available"}</p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li style={userData.twitter_username ? null : { opacity: 0.4 }}>
                  <img src={twitterIcon} alt="Twitter" />
                  <p>{userData.twitter_username || "Not Available"}</p>
                </li>
                <li style={userData.company ? null : { opacity: 0.4 }}>
                  <img src={companyIcon} alt="Company" />
                  <p>{userData.company || "Not Available"}</p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
