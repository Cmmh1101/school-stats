import { result } from "lodash";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Loading from "../loading/Loading";

// const data = require("../../data.json");

const FamSchoolSupChart = () => {
  const [loading, setLoading] = useState(true);
  const [valuesFamSup, setValuesFamSup] = useState([]);
  const [labelsFamSup, setLabelsFamSup] = useState([]);
  const [labelsSchoolSup, setLabelsSchoolSup] = useState([]);
  const [valuesSchoolSup, setValuesSchoolSup] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/famschoolsup")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         console.log("GOT IT", result);
  //         setLabelsFamSup(result.labelsFamSup);
  //         setValuesFamSup(result.valuesFamSup);
  //         setLabelsSchoolSup(result.labelsSchoolSup);
  //         setValuesSchoolSup(result.valuesSchoolSup);
  //         setLoading(false);
  //       },
  //       (error) => {
  //         console.log("error", error);
  //       }
  //     );
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
                How{" "}
                <span className="span_bold">families and Schools Support</span>{" "}
                impact students academic performance?
              </h2>
            </div>
            <div className="col-md-8 card shadow mx-auto">
              <Bar
                className="base_chart"
                data={{
                  // labels: labelsFamSup,
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
                  <em>Yes = Support</em>
                </p>
                <p>
                  <i className="fa fa-dot-circle-o" aria-hidden="true" />{" "}
                  <em>No = No support</em>
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
