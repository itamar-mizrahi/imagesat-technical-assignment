import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("Loading...");
  useEffect(() => {
    const url = "https://run.mocky.io/v3/e521013e-bfb8-45aa-8406-a1d37cbbd717";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const listItems = json.records.map((records, key) => (
          <div key={key}>
            <input
              type="checkbox"
              defaultChecked={isChecked(key)}
              onChange={(e) => setCheckbox(e, key)}
              key={key + "name"}
            ></input>
            <label>
              {" "}
              {key} : {records.ship.name}
            </label>
            <li key={key + "callsign"}>{records.ship.callsign}</li>
            <li key={key + "country"}>{records.ship.country}</li>
            <li key={key + "width"}>{records.ship.width}</li>
            <li key={key + "space"} style={{ listStyle: "none" }}>
              ________
            </li>
          </div>
        ));
        setData(listItems);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="list App-header">
      <ul>{data}</ul>
    </div>
  );

  function setCheckbox(e, key) {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      localStorage.setItem(key, true);
    } else {
      localStorage.setItem(key, false);
    }
  }

  function isChecked(key) {
    const checkboxStat = window.localStorage.getItem(key);

    if (checkboxStat === "true") {
      console.log(Boolean(checkboxStat), key);
      return true;
    } else {
      return false;
    }
  }
}

export default App;
