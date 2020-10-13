import React from "react";
import { Radar } from "react-chartjs-2";
import { toCapitalCase } from "../util/typography";

const Stats = ({ stats }) => {
  const labels = [];

  const dataset = {
    label: "Base Stats",
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "rgba(179,181,198,1)",
    pointBackgroundColor: "rgba(179,181,198,1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(179,181,198,1)",
    data: [],
  };

  const datasets = [dataset];

  const data = stats.reduce(
    (dataObj, stat) => {
      dataObj.labels.push(toCapitalCase(stat.stat.name));
      dataObj.datasets[0].data.push(stat.base_stat);
      return dataObj;
    },
    { labels, datasets }
  );

  const options = {
    scale: {
      ticks: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default Stats;
