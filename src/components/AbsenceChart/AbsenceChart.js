import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const AbsenceChart = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>How students abcenses impact their performance at school?</h1>
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
                ],
              }}
              height={400}
              width={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AbsenceChart;