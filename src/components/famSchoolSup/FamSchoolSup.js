import { result } from "lodash";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Loading from "../loading/Loading";

// const data = require("../../data.json");

const FamSchoolSupChart = () => {
  const [loading, setLoading] = useState(true);
  const [valuesFamSup, setValuesFamSup] = useState([]);
  const [labelsFamSup, setLabelsFamSup] = useState([]);
  const [labelsSchoolSup, setLabelSchoolSup] = useState([]);
  const [valuesSchoolSup, setValueSchoolSup] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/traveltime")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         console.log("GOT IT", result);
  //   setLabels(result.labelsFamSup);
  //   setValues(result.valuesFamSup);
  //   setLabelsSchoolSup(result.labelSchoolSup);
  //   setValuesSchoolSup(result.valuesSchoolSup);
  //         // setLoading(false);
  //       },
  //       (error) => {
  //         console.log("error", error);
  //       }
  //     );
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  // console.log(valuesFamSup);
  // console.log(labelsFamSup);
  // console.log(valuesSchoolSup);
  // console.log(labelsSchoolSup);

  return (
    <>
      <section className="stats_area">
        <div className="container">
          <div className="row chart_area">
            <div className="col-12">
              <h2>
                How student's
                <span className="span_bold"> Travel Time to school</span>{" "}
                affects their academic performance?
              </h2>
            </div>
            <div className="col-md-8 card shadow mx-auto">
              <Line
                className="base_chart"
                data={{
                  // labels: [labelsFamSup, labelsSchoolSup]
                  datasets: [
                    {
                      label: "Final / FamSuport",
                      // data: valuesFamSup,
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.8)",
                        "rgba(54, 162, 235, 0.8)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                      ],
                      borderWidth: 1,
                    },
                    {
                      label: "Final / SchoolSupport",
                      // data: valuesSchoolSup,
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.8)",
                        "rgba(54, 162, 235, 0.8)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                height={400}
                width={600}
                options={{
                  maintainAspecRatio: false,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                    xAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                }}
              />
              <div className="leyend">
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>1 = less than 15 min</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>2 = 15 min to 30 min</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>3 = 30 min to 1 hr</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>4 = More than 1 hr</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FamSchoolSupChart;
