import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const data = require("../../data.json");

const HealthChart = () => {
  var veryBad = 0;
  var bad = 0;
  var regular = 0;
  var good = 0;
  var veryGood = 0;
  //
  var finalGradeVerybad = 0;
  var finalGradeBad = 0;
  var finalGradeRegular = 0;
  var finalGradeGood = 0;
  var finalGradeVeryGood = 0;
  //   G1 grade
  var g1GradeVerybad = 0;
  var g1GradeBad = 0;
  var g1GradeRegular = 0;
  var g1GradeGood = 0;
  var g1GradeVeryGood = 0;
  //   G2
  var g2GradeVerybad = 0;
  var g2GradeBad = 0;
  var g2GradeRegular = 0;
  var g2GradeGood = 0;
  var g2GradeVeryGood = 0;

  data.forEach((student) => {
    if (student.health <= 1) {
      veryBad++;
      finalGradeVerybad = finalGradeVerybad + student.G3;
      g1GradeVerybad = g1GradeVerybad + student.G1;
      g2GradeVerybad = g2GradeVerybad + student.G2;
    } else if (student.health === 2) {
      bad++;
      finalGradeBad = finalGradeBad + student.G3;
      g1GradeBad = g1GradeBad + student.G1;
      g2GradeBad = g2GradeBad + student.G2;
    } else if (student.health === 3) {
      regular++;
      finalGradeRegular = finalGradeRegular + student.G3;
      g1GradeRegular = g1GradeRegular + student.G1;
      g2GradeRegular = g2GradeRegular + student.G2;
    } else if (student.health === 4) {
      good++;
      finalGradeGood = finalGradeGood + student.G3;
      g1GradeGood = g1GradeGood + student.G1;
      g2GradeGood = g2GradeGood + student.G2;
    } else if (student.health === 5) {
      veryGood++;
      finalGradeVeryGood = finalGradeVeryGood + student.G3;
      g1GradeVeryGood = g1GradeVeryGood + student.G1;
      g2GradeVeryGood = g2GradeVeryGood + student.G2;
    }
  });

  //   console.log(
  //     veryBad,
  //     finalGradeVerybad / veryBad,
  //     g1GradeVerybad / veryBad,
  //     g2GradeVerybad / veryBad
  //   );
  //   console.log(bad, finalGradeBad / bad, g1GradeBad / bad, g2GradeBad / bad);
  //   console.log(regular);
  //   console.log(good);
  //   console.log(veryGood, finalGradeVeryGood / veryGood);
  //   console.log(veryBad + bad + regular + good + veryGood);

  const summaryFinal = [
    finalGradeVerybad / veryBad,
    finalGradeBad / bad,
    finalGradeRegular / regular,
    finalGradeGood / good,
    finalGradeVeryGood / veryGood,
  ];
  const summaryG1 = [
    g1GradeVerybad / veryBad,
    g1GradeBad / bad,
    g1GradeRegular / regular,
    g1GradeGood / good,
    g1GradeVeryGood / veryGood,
  ];
  const summaryG2 = [
    g2GradeVerybad / veryBad,
    g2GradeBad / bad,
    g2GradeRegular / regular,
    g2GradeGood / good,
    g2GradeVeryGood / veryGood,
  ];

  return (
    <>
      <section className="stats_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                How <span className="span_bold">student's overall health</span>{" "}
                impacts their academic performance?
              </h1>
            </div>
            <div className="col-8 card shadow mx-auto">
              <Bar
                data={{
                  labels: ["very bad", "bad", "regular", "good", "very good"],
                  datasets: [
                    {
                      label: "G1 / Health",
                      data: summaryG1,
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
                    {
                      label: "G2 / Health",
                      data: summaryG2,
                      backgroundColor: [
                        "rgba(255, 60, 132, 0.2)",
                        "rgba(54, 90, 235, 0.2)",
                        "rgba(255, 150, 86, 0.2)",
                        "rgba(75, 230, 192, 0.2)",
                        "rgba(153, 50, 255, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 60, 132, 1)",
                        "rgba(54, 90, 235, 1)",
                        "rgba(255, 150, 86, 1)",
                        "rgba(75, 230, 192, 1)",
                        "rgba(153, 50, 255, 1)",
                      ],
                      borderWidth: 1,
                    },
                    {
                      label: "Final / Health",
                      data: summaryFinal,
                      backgroundColor: [
                        "rgba(230, 99, 132, 0.2)",
                        "rgba(154, 162, 235, 0.2)",
                        "rgba(240, 206, 86, 0.2)",
                        "rgba(175, 192, 192, 0.2)",
                        "rgba(113, 102, 255, 0.2)",
                      ],
                      borderColor: [
                        "rgba(230, 99, 132, 1)",
                        "rgba(154, 162, 235, 1)",
                        "rgba(240, 206, 86, 1)",
                        "rgba(175, 192, 192, 1)",
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthChart;
