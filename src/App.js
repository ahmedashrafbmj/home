import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [createinput, setCreateinput] = useState([]);

  function create() {
    setCreateinput([...createinput, { name: "" }]);
  }

  function deletes(e) {
    // const newArr = createinput.filter((x,i)=> i !== e)
    // console.log(e)
    // console.log(createinput)
    // createinput.splice(e,1)
    const rows = [...createinput];
    rows.splice(e, 1);

    setCreateinput([...rows]);
  }
  // console.log(createinput, "createinput");

  function addname(i, val) {
    console.log(`index${i},,val${val} `);
    const newarr = [...createinput];
    console.log(newarr[i]);
    const obj = newarr[i];
    obj.name = val;
    newarr[i] = obj;
    setCreateinput([...newarr]);
  }

  console.log(createinput, "bef rom fun");

  function RemoveVal(i) {
    console.log(`index ${i}  `);
    const newArr = [...createinput];
   
    console.log(newArr[i]);
    const obj = newArr[i];
    obj.name = "";
    newArr[i] = obj;
    setCreateinput([...newArr]);

  }



  

  console.log(createinput);
  return (
    <div className="App">
     <img src="https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg" className="img-fluid"/>

    </div>
  );
}

export default App;
