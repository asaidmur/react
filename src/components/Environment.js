// src/components/Environments.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import getCurrentUTC from "./getCurrentUTC";
import convertToUTC from "./convertToUTC";
import btnColor from "./buttonStatus";
import { UncontrolledCollapse } from "reactstrap";
import JSONPretty from "react-json-pretty";

export default function Environment(props) {
  const state = {
    environments: []
  };

  var cardWidth = {
    width: "inherit",
    marginTop: "25px",
    marginLeft: "10px"
  };

  // Getter and setter for Env state
  const [environments, setEnv] = useState(state);

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getEnv = async () => {
      // Pass our param (:environment) to the API call
      const { data } = await axios(
        `https://main-healthdash.yvrcalabrio.com/healthdash-app/healthcheck/environment/${props.match.params.environment}`
      );
      // Update state
      setEnv(data.responseData);
    };

    // Invoke the async function
    getEnv();
  }, [props.match.params.environment]); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

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
            <div
              style={{
                float: "left",
                display: "inline-flex"
              }}
            >
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.match.params.environment}
              </li>
            </div>
            <div
              style={{
                float: "right"
              }}
            >
              {getCurrentUTC()}
            </div>
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
          <span
            style={{
              margin: "10px"
            }}
          >
            {props.match.params.environment}
          </span>
        </h1>
        {Array.from(environments).map(env => (
          <div className={"card"} style={cardWidth}>
            <button
              className={btnColor(env.status)}
              id={env.arn.replace(/[0-9]/g, "")}
            >
              <h5
                style={{
                  float: "left"
                }}
              >
                {env.service}
              </h5>
              <h5
                style={{
                  float: "right"
                }}
              >
                {convertToUTC(env.timeUpdated)}
              </h5>
            </button>
            <UncontrolledCollapse toggler={env.arn.replace(/[0-9]/g, "")}>
              <Link
                to={{
                  pathname: env.environment + "/" + env.service
                }}
                style={{
                  textDecoration: "none"
                }}
              >
                <div className="card-body">
                  <p className="card-text"></p>
                  <p
                    style={{
                      float: "left"
                    }}
                  >
                    {
                      <JSONPretty
                        id="json-pretty"
                        data={env.healthCheck}
                      ></JSONPretty>
                    }
                  </p>
                </div>
              </Link>
            </UncontrolledCollapse>
          </div>
        ))}
      </div>
    </div>
  );
}
