import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// import { csv } from "d3";
import * as d3 from "d3";
import data from "../../data.csv";

const AbsenceChart = () => {
  // useEffect(() => {
  //   csv("data.csv").then((data) => {
  //     console.log(data);
  //   });

  // }, []);

  d3.csv(data)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      throw err;
    });

  // d3.csv(data, function (data) {
  //   console.log(data);
  // });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>How students absences impact their performance at school?</h1>
          </div>
          <div className="col-8 mx-auto">
            <Bar
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
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
                  {
                    label: "Quantity",
                    data: [100, 104, 67, 508, 200, 400],
                    backgroundColor: "orange",
                    borderColor: "red",
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
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AbsenceChart;
