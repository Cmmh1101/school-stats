import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const data = require("../../data.json");

const TravelTimeChart = () => {
  var lessThanFifteen = 0;
  var lessThanThirty = 0;
  var lessThanHour = 0;
  var moreThanHour = 0;

  //
  var finalGradeLessThanFifteen = 0;
  var finalGradeLessThanThirty = 0;
  var finalGradeLessThanHour = 0;
  var finalGradeMoreThanHour = 0;

  //   G1 grade

  data.forEach((student) => {
    if (student.traveltime === 1) {
      lessThanFifteen++;
      finalGradeLessThanFifteen = finalGradeLessThanFifteen + student.G3;
    } else if (student.traveltime === 2) {
      lessThanThirty++;
      finalGradeLessThanThirty = finalGradeLessThanThirty + student.G3;
    } else if (student.traveltime === 3) {
      lessThanHour++;
      finalGradeLessThanHour = finalGradeLessThanHour + student.G3;
    } else if (student.traveltime === 4) {
      moreThanHour++;
      finalGradeMoreThanHour = finalGradeMoreThanHour + student.G3;
    }
  });

  //   console.log(lessThanFifteen, finalGradeLessThanFifteen / lessThanFifteen);
  //   console.log(lessThanThirty, finalGradeLessThanThirty / lessThanThirty);
  //   console.log(lessThanHour, finalGradeLessThanHour / lessThanHour);

  //   console.log(moreThanHour, finalGradeMoreThanHour / moreThanHour);

  const summaryFinal = [
    finalGradeLessThanFifteen / lessThanFifteen,
    finalGradeLessThanThirty / lessThanThirty,
    finalGradeLessThanHour / lessThanHour,
    finalGradeMoreThanHour / moreThanHour,
  ];

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
            <div className="col-8 card shadow mx-auto">
              <Line
                data={{
                  labels: ["< 15min", "15 to 30 min", "30 to 1hr", "> 1hr"],
                  datasets: [
                    {
                      label: "Final / Travel Time",
                      data: summaryFinal,
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
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

export default TravelTimeChart;
