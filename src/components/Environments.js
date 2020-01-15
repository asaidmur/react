// src/components/Environments.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import getCurrentUTC from "./getCurrentUTC";
import convertToUTC from "./convertToUTC";

export default function Environments() {
  const state = {
    environments: []
  };

  var cardWidth = {
    width: "inherit",
    marginTop: "25px",
    marginLeft: "10px"
  };

  // Getter and setter for user state
  const [environments, setEnv] = useState(state);

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getEnv = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(
        `https://main-healthdash.yvrcalabrio.com/healthdash-app/healthcheck/`
      );
      // Update state
      setEnv(data.responseData);
    };

    // Invoke the async function
    getEnv();
  }, []); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  function envStatus(status) {
    switch (status) {
      case "ERROR":
        return "card text-white bg-danger mb-3";
      case "WARNING":
        return "card text-white bg-warning mb-3";
      case "INFO":
        return "card text-white bg-info mb-3";
      case "OK":
        return "card text-white bg-success mb-3";
      case "OBSOLETE":
        return "card text-white bg-secondary mb-3";
      default:
        return "card";
    }
  }

  // Return a table with some data from the API.
  return environments.loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <div
            style={{
              margin: "0px 80px auto 100px",
              width: "100%"
            }}
          >
            <div style={{ float: "left" }}>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/">Home</Link>
              </li>
            </div>
            <div style={{ float: "right" }}>{getCurrentUTC()}</div>
          </div>
        </ol>
      </nav>

      <div
        style={{
          margin: "100px 96px auto 100px",
          width: "auto"
        }}
      >
        <h1>
          <span style={{ margin: "10px" }}>Calabrio HealthDash</span>
        </h1>
        {Array.from(environments).map(env => (
          <Link
            to={env.environment}
            param={env.environment}
            style={{
              textDecoration: "none"
            }}
          >
            <div className={envStatus(env.status)} style={cardWidth}>
              <div className="card-header">
                <h5 style={{ float: "left" }}>{env.environment}</h5>
                <h5 style={{ float: "right" }}>
                  {env.status} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {convertToUTC(env.timeUpdated)}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
