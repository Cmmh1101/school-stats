import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const data = require("../../data.json");

const InternetChart = () => {
  var totalYes = 0;
  var totalNo = 0;
  var finalGradeYes = 0;
  var finalGradeNo = 0;

  data.forEach((student) => {
    if (student.internet === "yes") {
      totalYes++;
      finalGradeYes = finalGradeYes + student.G3;
    } else if (student.internet === "no") {
      totalNo++;
      finalGradeNo = finalGradeNo + student.G3;
    }
  });

  const summary = [finalGradeYes / totalYes, finalGradeNo / totalNo];

  return (
    <>
      <section className="stats_area" id="internet">
        <div className="container">
          <div className="row chart_area">
            <div className="col-12">
              <h2>
                How <span className="span_bold">students Internet access</span>{" "}
                impact their academic performance?
              </h2>
            </div>
            <div className="col-8 card shadow mx-auto">
              <Bar
                data={{
                  labels: ["Y", "N"],
                  datasets: [
                    {
                      label: "Internet access",
                      data: summary,
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternetChart;
