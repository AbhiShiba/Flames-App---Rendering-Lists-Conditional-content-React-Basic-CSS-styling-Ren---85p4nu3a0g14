import React, { useState } from "react";

function Flame() {

    const [input1Text,setInput1Text] = useState("");
    const input1Handler = (e) => {
      
        setInput1Text(e.target.value);
    }

    const [input2Text,setInput2Text] = useState("");
    const input2Handler = (e) => {
      
        setInput2Text(e.target.value);
    }
    const [outputElement,setOutputElement] = useState("");

    const handleEventCalculate = () => {
        let arrInput1 = input1Text.split("");
        let arrInput2 = input2Text.split("");
        let letterCount = 0;
        for(let i=0;i<arrInput1.length;i++){
            for(let j=0;j<arrInput2.length;j++){
                if(arrInput1[i] === arrInput2[j]){
                    letterCount++;
                    arrInput2[j] = ""
                    arrInput1[i] = "1"
                }
            }
        }

        const result = ((arrInput1.length - letterCount) + (arrInput2.length - letterCount)) % 6;

        let output = "";

        switch(result) {
            case 0: 
                output = "Siblings";
                break;
            case 1:
                output = "Friends";
                break;
            case 2:
                output = "Love";
                break;
            case 3:
                output = "Affection";
                break;
            case 4:
                output = "Marriage";
                break;
            case 5:
                output = "Enemy";
                break
        }
        setOutputElement(output);
        console.log(output)
    }

    const clearEvent = () => {
        setInput1Text("");
        setInput2Text("");
        setOutputElement("");
    }
  return (
    <div>
      <label>First Name: </label>
      <input type="text" data-testid="input1" onChange={input1Handler} value={input1Text}/>
      <br />
      <br />
      <label>Second Name: </label>
      <input type="text" data-testid="input2" onChange={input2Handler} value={input2Text}/>
      <br />
      <br />
      <button type="button" data-testid="calculate_relationship" onClick={handleEventCalculate}>Calculate</button>
      <button type="button" data-testid="clear" onClick={clearEvent}>Clear</button>
      <h3 data-testid="answer">{outputElement}</h3>
    </div>
  );
}

export default Flame;
