import React from "react";
import "./ProfileBanner.scss";

// Assets
import { FaCopy } from "react-icons/fa";

// Data
import basicInfo from "../../data/basicInfo.json";

export default function ProfileBanner() {
    const copyEmail = () => {
        navigator.clipboard.writeText(basicInfo.email);

        const email = document.getElementById("profile-banner-email");
        email.style.transitionProperty = "none";
        email.style.color = "#5cb85c";
        setTimeout(() => {
            email.style.transitionProperty = "all";
            email.style.color = "rgb(220, 220, 220)";
        }, 100);
    };

    return (
        <div id="profile-banner">
            <h1>
                {basicInfo.firstName} {basicInfo.lastName}
            </h1>
            <div className="email">
                <h2 id="profile-banner-email">{basicInfo.email}</h2>
                <button className="copy">
                    <FaCopy
                        className="icon"
                        size={20}
                        color="white"
                        onClick={copyEmail}
                    />
                </button>
            </div>
            <h2 id="profile-banner-email">{basicInfo.phoneNumber}</h2>
        </div>
    );
}
