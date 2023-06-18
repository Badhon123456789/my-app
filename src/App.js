import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
let style1 = {
  color: "black",
  backgroundColor: "blue",
};

function App() {
  let person1 = {
    Name: "Hero Alom",
    Position: "1st",
  };
  let person2 = {
    Name: "Dr. Mahfuz",
    Position: "2nd",
  };
  const friendsName = ['Joshim','Alomgir','Bapparaj','Razzak']
  const arrayProduct = [
    {Name:'Adobe',Price:'$69.09'},
    {Name:'Illustrator',Price:'$60.99'},
    {Name:'PDF Reader',Price:'$6.009'},
    {Name:'Adobe XD',Price:'$40.19'}
  ]

  const friends = friendsName.map(e => e)
  console.log(friends);

  const products = arrayProduct.map(a=> a.Name)
  console.log(products);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My First React Paragraph</p>

        <Counter></Counter>

        <Users></Users>

        <h1>My Estimation: {(20 + 30) * 2 - 6 / 2}</h1>
        <h2 style={style1}>Singer1 : {`${person1.Name} [${person1.Position}]`}</h2>

        <h2 style={{ background: "red", color: "green" }}>Singer2 : {person2.Name + " [" + person2.Position + "]"}</h2>
      </header>
      <Person nayok="Manna" nayika="Bobita" job="Acting"></Person>
      <Person nayok="Elius" nayika="Shabana" food="Vath"></Person>
      <Person nayok="Joshim" nayika="Kobori"></Person>
      <Person nayok="Rajjak" nayika="Shushmita"></Person>

      <Product title="Microsoft XL" price="40"></Product>
      <Product title="Microsoft Ps" price="100"></Product>
      <Product title="Microsoft Power Point" price="70"></Product>
      <Product title="Microsoft Word" price="50"></Product>
  
   {
    arrayProduct.map( product=><Bad array= {product}></Bad>)
   }

  <ul>
    {
      friendsName.map(element => <li>{element}</li>)
    }

    {
      arrayProduct.map(el=><li>{el.Name}</li>)
    }
    
  </ul>
  
  
    </div>
  );
}

function Person(props) {
  const styleComponent = {
    color: "gray",
    backgroundColor: "cyan",
    border: "2px solid green",
    margin: "30px",
  };
  
  return (
    <div style={styleComponent}>
      <h1>The Hero: {props.nayok} </h1>
      <h3>The Heroine: {props.nayika} </h3>
    </div>
  );
}
 let style = {
    border: "2px solid green",
    borderRadius: "10px",
    margin: "30px",
    width: "270px",
    height: "200px",
    background: "gray",
    float: "left",
  };
function Product(props) {
 
  return (
    <div style={style}>
      <h3>{props.title}</h3>
      <h1>${props.price}</h1>
      <button>Buy now</button>
    </div>
  );
}

function Bad(myProps){
  const {Name,Price} = myProps.array//{myProps.array = Name:'...',Price:'...'}
  return(
    <div style={style}>
      <h3>{Name}</h3>
      <h1>Price:{Price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [Count, setCount] = useState(0)
  const handlerIncrease = ()=>setCount(Count+1)
return(
  <div>
    <h1>Count: {Count}</h1>
    <button onClick={handlerIncrease}>Increase</button>
    <button onClick={()=>setCount(Count-1)}>Decrease</button>
  </div>
)
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  console.log(users);
  return(
  <div>
    <h2>User Count: {users.length}</h2>
    {
      users.map(el=><li>{el.email}</li>)
    }
  </div>
  )
}
export default App;
