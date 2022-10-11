import React from "react";
import "./Timeline.scss";

// Assets
import { FaTimes } from "react-icons/fa";

// Data
import timeline from "../../data/timeline.json";

export default function Timeline() {
    const setTab = (open) => {
        const left = open ? "0" : "";
        document.getElementById("timeline").style.left = left;
    };

    return (
        <div id="timeline">
            {timeline.events.map((e) => {
                return (
                    <div className="event">
                        <div className="notch" />
                        <h3 className="date">{e.date}</h3>
                        <div className="description">
                            <h4>{e.description}</h4>
                            {e.extended && (
                                <p className="extended">{e.extended}</p>
                            )}
                        </div>
                    </div>
                );
            })}
            <FaTimes
                size={32}
                className="close"
                onClick={(_e) => setTab(false)}
            />
            <div className="tab" onClick={(_e) => setTab(true)}>
                Background
            </div>
        </div>
    );
}
