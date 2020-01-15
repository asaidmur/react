// src/components/Environments.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import getCurrentUTC from "./getCurrentUTC";
import convertToUTC from "./convertToUTC";
import btnColor from "./buttonStatus";
import JSONPretty from "react-json-pretty";

import { UncontrolledCollapse } from "reactstrap";

export default function Service(props) {
  const state = {
    service: []
  };

  var cardWidth = {
    width: "inherit",
    marginTop: "25px",
    marginLeft: "10px"
  };

  // Getter and setter for service
  const [service, setService] = useState(state);

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getService = async () => {
      const { data } = await axios(
        `https://main-healthdash.yvrcalabrio.com/healthdash-app/healthcheck/environment/${props.match.params.environment}/service/${props.match.params.service}`
      );

      // Update state
      setService(data.responseData);
    };

    // Invoke the async function
    getService();
  }, [props.match.params.environment, props.match.params.service]); // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  // Return a table with some data from the API.
  return service.loading ? (
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
            <div style={{ float: "left", display: "inline-flex" }}>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={{ pathname: "/" + props.match.params.environment }}>
                  {props.match.params.environment}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.match.params.service}
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
          <span style={{ margin: "10px" }}>
            {props.match.params.environment} - {props.match.params.service}
          </span>
        </h1>
        {Array.from(service).map(serv => (
          <div className={"card"} style={cardWidth}>
            <button
              class={btnColor(serv.status)}
              id={serv.arn.replace(/[0-9]/g, "")}
            >
              <h5 style={{ float: "left" }}>{serv.arn}</h5>
              <h5 style={{ float: "right" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {serv.version}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {convertToUTC(serv.timeUpdated)}
              </h5>
            </button>
            <UncontrolledCollapse toggler={serv.arn.replace(/[0-9]/g, "")}>
              <div className="card-body">
                <p className="card-text">
                  {
                    <JSONPretty
                      id="json-pretty"
                      data={serv.healthCheck}
                    ></JSONPretty>
                  }
                </p>
              </div>
            </UncontrolledCollapse>
          </div>
        ))}
      </div>
    </div>
  );
}
