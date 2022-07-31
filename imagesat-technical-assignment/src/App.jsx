import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const myContainer = useRef(null);
  // const [value, setValue] = useState('black');
  const [data, setData] = useState("Loading...");
  const [selectedItem, setSelectedItem] = useState("nothing selected");
  useEffect(() => {
    const url = "https://run.mocky.io/v3/e521013e-bfb8-45aa-8406-a1d37cbbd717";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const listItems = json.records.map((records, key) => (
          <tr key={key} style={{backgroundColor:isChecked(key)?'black':''}}
          // style={{background: value}}
          >
            <td>
              <input
                type="checkbox"
                defaultChecked={isChecked(key)}
                // onClick={() => {setValue('salmon'); console.log(value);}}
                onChange={(e) => {
                  setCheckbox(e, key,records.ship)}}
                key={key + "name"}
              ></input> {" "}
              {key + 1} : {records.ship.name}
            </td>
            {records.ship.details}
            <td key={key + "callsign"}>{records.ship.callsign}</td>
            <td key={key + "country"}>{records.ship.country}</td>
            <td key={key + "width"}>{records.ship.width}</td>
          </tr>
        ));
        setData(listItems);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <div className="list App-header">
      {/* {value} */}
      <table>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Country</th>
          <th>Contact</th>
        </tr>
        {data}
      </table>
      <div className="selected-item">{selectedItem}</div>
    </div>
  );

  function setCheckbox(e, key, shipDetails) {
    if (e.target.checked === true) {
      localStorage.setItem(key, true);
      console.log(e.currentTarget.parentElement);
      e.currentTarget.parentElement.parentElement.style.backgroundColor='blue';
    } else {
      localStorage.setItem(key, false);
      e.currentTarget.parentElement.parentElement.style.backgroundColor='';
    }
    setSelectedItem(()=>{
      return Object.entries(shipDetails).map((row, key)=><div key={key}>{row[0]+' : '+row[1]}</div>)})
  }

  function isChecked(key) {
    const checkboxStat = window.localStorage.getItem(key);

    if (checkboxStat === "true") {
      //  e.currentTarget.parentElement.parentElement.style.backgroundColor='blue';
      return true;
    } else {
      
      return false;
    }
  }
}

export default App;
