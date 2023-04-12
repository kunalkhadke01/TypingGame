import "./styles.css";
import { useEffect, useState } from "react";
import Typingspeed from "./typingspeed";
const detail = [
  { name: "sushil", age: "32 years" },
  { name: "Dinesh", age: "33 years" },
  { name: "kunal", age: "34 years" },
  { name: "kushal", age: "35 years" },
  { name: "hello", age: "38 years" }
];

export default function App() {
  const [employe, setEmploye] = useState(detail);
  const [searchinput, setSearchinput] = useState();

  const handleChange = (e) => {
    var search = e.target.value;
    setSearchinput(search);
    e.preventDefault();
  };

  useEffect(() => {
    const searchoutput = employe.filter((val, index) => {
      return val.name == searchinput;
    });
    if (searchinput && searchinput.length > 4) {
      setTimeout(() => {
        setEmploye(searchoutput);
      }, 2000);
    } else {
      setEmploye(detail);
    }
  }, [searchinput]);

  return (
    <div className="App">
      <Typingspeed />
      <div className="serchengin">
        <label>Search</label>:
        <input
          type="text"
          value={searchinput}
          placeholder="Please enter the name"
          onChange={(e) => handleChange(e)}
        />
        <section>
          {employe.map((val, i) => {
            return (
              <div class="card">
                <div class="container">
                  <h4>
                    <b> {val.name}</b>
                  </h4>
                  <p> {val.age}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
