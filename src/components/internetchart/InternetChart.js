import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Loading from "../loading/Loading";

const InternetChart = () => {
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/internet")
      .then((res) => res.json())
      .then(
        (result) => {
          setLabels(result.labels);
          setValues(result.values);
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
            <div className="col-md-8 card shadow mx-auto chart_card">
              <Pie
                className="base_chart"
                data={{
                  labels: labels,
                  datasets: [
                    {
                      label: "Internet access",
                      data: values,
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
                  },
                }}
              />
              <div className="leyend">
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>Yes = Internet Access</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>No = No Internet Access</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternetChart;
