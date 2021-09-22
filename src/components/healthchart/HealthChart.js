import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Loading from "../loading/Loading";

const data = require("../../data.json");

const HealthChart = () => {
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);
  const [values2, setValues2] = useState([]);
  const [labels2, setLabels2] = useState([]);
  const [values3, setValues3] = useState([]);
  const [labels3, setLabels3] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("GOT IT", result);
          setLabels(result.labels);
          setValues(result.values);
          // setLabels2(result.labels2);
          setValues2(result.values2);
          // setLabels3(result.labels3);
          setValues3(result.values3);
          setLoading(false);
        },
        (error) => {
          console.log("error", error);
        }
      );
  }, []);

  if (loading) {
    return <Loading />;
  }
  // console.log(values);
  // console.log(labels);
  // console.log(values2);
  // console.log(labels2);
  // console.log(values3);
  // console.log(labels3);

  return (
    <>
      <section className="stats_area">
        <div className="container">
          <div className="row chart_area">
            <div className="col-12">
              <h2>
                How <span className="span_bold">student's overall health</span>{" "}
                impacts their academic performance?
              </h2>
            </div>
            <div className="col-md-8 card shadow mx-auto">
              <Bar
                className="base_chart"
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: "G1 / Health",
                      data: values,
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.8)",
                        "rgba(54, 162, 235, 0.8)",
                        "rgba(255, 206, 86, 0.8)",
                        "rgba(75, 192, 192, 0.8)",
                        "rgba(153, 102, 255, 0.8)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                      ],
                      borderWidth: 1,
                    },
                    {
                      label: "G2 / Health",
                      data: values2,
                      backgroundColor: [
                        "rgba(200, 50, 115, 0.8)",
                        "rgba(54, 90, 235, 0.8)",
                        "rgba(255, 150, 86, 0.8)",
                        "rgba(75, 230, 192, 0.8)",
                        "rgba(153, 50, 255, 0.8)",
                      ],
                      borderColor: [
                        "rgba(200, 50, 115, 1)",
                        "rgba(54, 90, 255, 1)",

                        "rgba(255, 150, 86, 1)",
                        "rgba(75, 230, 192, 1)",
                        "rgba(153, 50, 255, 1)",
                      ],
                      borderWidth: 1,
                    },
                    {
                      label: "Final / Health",
                      data: values3,
                      backgroundColor: [
                        "rgba(230, 13, 132, 0.8)",
                        "rgba(74, 90, 255, 0.8)",
                        "rgba(240, 206, 86, 0.8)",
                        "rgba(20, 192, 192, 0.8)",
                        "rgba(113, 102, 255, 0.8)",
                      ],
                      borderColor: [
                        "rgba(230, 13, 132, 1)",
                        "rgba(154, 162, 235, 1)",
                        "rgba(240, 206, 86, 1)",
                        "rgba(20, 192, 192, 1)",
                        "rgba(113, 102, 255, 1)",
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
                  <em>1 = Very Bad</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>2 = Bad</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>3 = Regular</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>4 = Good</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>5 = Very Good</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthChart;
