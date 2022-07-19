import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // let checkedLocalStorage={}
  const [data, setData] = useState("Loading...");
  // const [checkedUser, setCheckedUser] = useState(getLocalCheckboxStatus());
  useEffect(() => {
    const url = "https://run.mocky.io/v3/e521013e-bfb8-45aa-8406-a1d37cbbd717";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
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
        // console.log(listItems);
        // window.localStorage.clear();
        // localStorage.setItem('data',json)
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
  
  

  // function getLocalCheckboxStatus (){
  //   const checkboxStat={}
  //   for(let i=0;i<localStorage.length;i++){

  //      checkboxStat[localStorage.key(i)] = window.localStorage.getItem(localStorage.key(i));
  //   }
  //   console.log(checkboxStat);
  //   // console.log(localStorage.key(1));
  // }
  
  function setCheckbox(e, key) {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      // let updatedCheckedUser={...checkedUser}
      // updatedCheckedUser[key]=true
      // setCheckedUser(...checkedUser)
      // localStorage.setItem(checkedLocalStorage[key], true);
      localStorage.setItem(key, true);
    } else {
      // localStorage.setItem(checkedLocalStorage[key], false);
      localStorage.setItem(key, false);
    }
  }
  
  function isChecked(key) {
    const checkboxStat = window.localStorage.getItem(key);
    // console.log(e);
    if (checkboxStat === 'true') {
      // console.log(checkboxStat);
      console.log(Boolean(checkboxStat),key);
      return true;
    } 
    else {
      // console.log(key, checkboxStat);
      return false;
    }
  }
}


export default App;
