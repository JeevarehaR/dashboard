import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faChartLine,
  faCoins,
  faDollar,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { StackChart } from "./StackChart";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { BasicTable } from "./Table";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

function Dashboard() {
  const profit = {
    number: "22,534",
    text: "Monthly profit",
    subText: "Excepteur sint occaecat cupidatat non proident.",
    icon: faChartLine,
    PercentProgress: [
      { time: "This Month", percent: 75, color: "rgb(135,96,251)" },
      { time: "Last Month", percent: 50, color: "#03c895" },
    ],
    performance: "up",
    type: "money",
  };
  return (
    <div className="dashboard">
      <SummaryBoxList />
      <Profit data={profit} />
      <Overview />
      <BasicTable />
    </div>
  );
}

function Overview() {
  const [alignment, setAlignment] = useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="overview-container">
      <div className="overview-spec">
        <div>
          <p className="profit-box-text">Overview of Sales Win/Lost</p>
          <p className="profit-box-subText">Compared to last month sales</p>
        </div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="month">Month</ToggleButton>
          <ToggleButton value="year">Year</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <StackChart />
    </div>
  );
}

function Profit({ data }) {
  return (
    <div className="profit-box-container">
      <p className="profit-box-text">{data.text}</p>
      <p className="profit-box-subText">{data.subText}</p>

      <h2 className="profit-box-number">
        {data.type === "money" ? "$" : "null"}
        {data.number}
      </h2>
      <div className="percent-progress-container">
        {data.PercentProgress.map((dt) => (
          <PercentProgress data={dt} />
        ))}
      </div>
    </div>
  );
}

function PercentProgress({ data }) {
  const CustomProgress = styled(LinearProgress)(({ theme }) => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[300],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: data.color,
    },
  }));
  return (
    <div>
      <div className="profit-box-time">
        <p>{data.time}</p>
        <p>{data.percent}%</p>
      </div>
      <CustomProgress variant="determinate" value={data.percent} />
    </div>
  );
}

function SummaryBoxList() {
  const dataList = [
    {
      number: "568",
      percent: 0.7,
      icon: faChartLine,
      text: "Number of Sales",
      time: "Last Month",
      iconColor: "rgb(135,96,251)",
      performance: "up",
      type: "count",
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
    },
    {
      number: 789,
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
    },
  ];
  return (
    <div className="SummaryBoxList">
      {dataList.map((dt) => (
        <SummaryBox data={dt} />
      ))}
    </div>
  );
}

function SummaryBox({ data }) {
  const CustomProgress = styled(LinearProgress)(({ theme }) => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[300],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: data.iconColor,
    },
  }));
  return (
    <div className="summary-box-container">
      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        <FontAwesomeIcon style={{ color: data.iconColor }} icon={data.icon} />
      </div>
      <h2 className="summary-box-number">
        {data.type === "money" ? "$" : null}
        {data.number}
      </h2>
      <CustomProgress variant="determinate" value={50} />
      <div className="summary-box-time">
        <p>{data.time}</p>
        <p>
          <FontAwesomeIcon
            style={{
              color:
                data.performance === "up" ? "rgb(3,200,149)" : "rgb(255,71,61)",
            }}
            icon={data.performance === "up" ? faCaretUp : faCaretDown}
          />{" "}
          {data.percent}%
        </p>
      </div>
    </div>
  );
}

export default App;
