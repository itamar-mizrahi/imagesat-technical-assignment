import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("Loading...");
  const [selectedItem, setSelectedItem] = useState("nothing selected");
  useEffect(() => {
    const url = "https://run.mocky.io/v3/e521013e-bfb8-45aa-8406-a1d37cbbd717";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const listItems = json.records.map((records, key) => (
          <tr key={key}>
              <td>
              <input
                type="checkbox"
                defaultChecked={isChecked(key)}
                onChange={(e) => setCheckbox(e, key)}
                key={key + "name"}
              ></input>
                {" "}
                {key} : {records.ship.name}
              </td>

              <td key={key + "callsign"}>{records.ship.callsign}</td>
              <td key={key + "country"}>{records.ship.country}</td>
              <td key={key + "width"}>{records.ship.width}</td>
              {/* <li key={key + "space"} style={{ listStyle: "none" }}>
              ________
            </li> */}
          </tr>
        ));
        setData(listItems);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <div className="list App-header">
      <table >
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Country</th>
          <th>Contact</th>
        </tr>
        {data}
      </table>
      <div className="selected-item">
      {selectedItem}
      </div>
    </div>
  );

  function setCheckbox(e, key) {
    if (e.target.checked === true) {
      localStorage.setItem(key, true);
    } else {
      localStorage.setItem(key, false);
    }
  }

  function isChecked(key) {
    const checkboxStat = window.localStorage.getItem(key);

    if (checkboxStat === "true") {
      return true;
    } else {
      return false;
    }
  }
}

export default App;
