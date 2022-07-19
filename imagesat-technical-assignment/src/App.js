import './App.css';
import  { useEffect } from "react";

function App() {
  useEffect(() => {
    const url = "https://run.mocky.io/v3/e521013e-bfb8-45aa-8406-a1d37cbbd717";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
