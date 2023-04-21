import react, { useState } from "react";
import "./App.css";

function App() {
  const [bmi, setBmi] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [warning, setWarning] = useState ('')

  const [data, setData] = useState({
    Years: "0000",
    Month: "00",
    Day:'00',
  });
  
 

  const calBmi = (e) => {
    e.preventDefault()
       if (weight === '' || height ===  '') {
       // alert('Enter valid number') 
        setWarning('Input valid Weight and height') 
       } else {
        let bmi = (weight / (height * height) * 703)
        setBmi(bmi.toFixed(1))
       }

       if (bmi < 25){
        setWarning('Underweight')
       }else if (bmi > 25){
        setWarning('Overweight')
       }

   }

   const reset = () =>{
    setHeight('')
    setWeight('')
    setBmi('')
    setWarning('...')
   } 

  

  return (
    <div className="app__bmi-container">
      <div className="app__bmi-header">
        <p>BMI CALCULATOR</p>
      </div>

      <div className="app__bmi-age">
        <div>
          <input type="number" />
          <label>Years</label>
        </div>

        <div>
          <input type="number" />
          <label>Months</label>
        </div>

        <div>
          <input type="number" />
          <label>Days</label>
        </div>
      </div>
      

      <form onSubmit={calBmi}>
        <div className="app__bmi-weigth-heigth">
          <p>Weigth</p>
          <div>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <label>Centimetre(cm)</label>
          </div>

          <p>Height</p>
          <div className="app__bmi-weight">
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <label>Kilogram(kg)</label>
          </div>
        </div>

        <button className="app__bmi-btn" onClick={calBmi}>
          Get BMI
        </button>

        <div className="app__bmi-message">
          <div className="app__bmi-result">
      <p> {bmi} </p> 
            <p><b>{warning}</b></p>
          </div>
        </div>
      </form>

      <button className="app__bmi-reset" onClick={reset}>RESET</button>
        <div>
          <p className="app__bmi-design">Designed by Paul Ola</p>
        </div>
    </div>
  );
}

export default App;
