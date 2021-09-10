import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const data = require("../../data.json");

const AbsenceChart = () => {
  // state
  // const [chartData, setChartData] = useState({});

  // const chart = () => {
  //   setChartData({
  //     labels: finals,
  //     datasets: [
  //       {
  //         label: "internet",
  //         data: interYes,
  //         backgroundColor: ["rgba(75, 192, 192, 0.6)"],
  //       },
  //     ],
  //   });
  // };

  // useEffect(() => {
  //   chart();
  // }, []);
  // ///////////////////////////////////

  var totalYes = 0;
  var totalNo = 0;
  var notaFinalYes = 0;
  var notaFinalNo = 0;

  data.forEach((student) => {
    if (student.internet === "yes") {
      totalYes++;
      notaFinalYes = notaFinalYes + student.G3;
    } else if (student.internet === "no") {
      totalNo++;
      notaFinalNo = notaFinalNo + student.G3;
    }
  });

  const interYes = data.map((student) => {
    if (student.internet === "yes") {
      //return console.log(student.);
    }
  });
  const interNo = data.map((student) => {
    if (student.internet === "no") {
      //return console.log(student.internet);
    }
  });

  const finals = data.map((student) => {
    return student.G3;
  });

  const summary = [notaFinalYes / totalYes, notaFinalNo / totalNo];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>How students absences impact their academic performance?</h1>
          </div>
          <div></div>
          <div>
            {/* {data.map((student) => {
              return <h1>{student.age}</h1>;
            })} */}
            {/* {data.map((student) => {
              if (student.age <= 15) {
                return <h1>{student.age}</h1>;
              }
            })} */}
          </div>
          {/* <div className="col-8 card shadow mx-auto">
            <Bar data={chart} />
          </div> */}
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
    </>
  );
};

export default AbsenceChart;
