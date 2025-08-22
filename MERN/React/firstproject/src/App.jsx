import Cards from "./components/Cards";
import MyName from "./components/MyName";
import Navbar from "./components/Navbar";
import ShirtImg from "./assets/shirt.jpg"
import { useState } from "react";
import Todo from "./components/Todo";
import ApiFetch from "./components/ApiFetch";


function App() {
  let userData = [
    {
      name: "Owais",
      age: 23
    },
    {
      name: "Adeel",
      age: 17
    },
    {
      name: "Tayyaba",
      age: 34
    },
    {
      name: "Laiba",
      age: 12
    },
  ];


  let cardData = [
    {
      image: "https://fastly.picsum.photos/id/133/200/300.jpg?hmac=eJnFxvIwHgkkHHPb2ppK_QqUG4mmom1XpVG0MLQcdTE",
      title: "Random Image",
      description: "This is a random img description"
    },
    {
      image: "https://fastly.picsum.photos/id/51/200/301.jpg?hmac=5gwglF78bvfclNI3TOIFKKDc6ag6bvbz44R8r5veXDc",
      title: "Car Image",
      description: "This is a random img description"
    },
    {
      image: "https://fastly.picsum.photos/id/628/200/302.jpg?hmac=VzC_f96MYFyqk3X7QF4wdFuTrhZEIPEw4ATWVcOIqRk",
      title: "Juice Image",
      description: "This is a random img description"
    },
    {
      image: "https://fastly.picsum.photos/id/431/200/304.jpg?hmac=gIcmEH2eY9G8u2YKE1oieHLVS9oPPMccM7KykLQM8q0",
      title: "Tea Image",
      description: "This is a random img description"
    },
  ]
  console.log("App Component")
  // let count = 0;
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name: "Owais", age: 24, profession: "Software Developer"});


  // function handleIncerementCount(){
  //   // count++;
  //   setCount(count + 1);
  //   console.log(count);
  // }

  const handleIncerementCount = () => {
    // count++;
    setCount(count + 1);
    console.log(count);
  }

  const updateUser = () => {
    setUser({...user, name: "Owais Ahmed Khan"})
  }

  return (
    <>
      <div className="container-fluid">
        <Navbar />
        {/* <h1 className="heading">Hello in React Project</h1> */}
        {/* <h1>{userData[1].name}</h1>
        <h1>{userData[3].age}</h1>
        <h1>{userData[2].name}</h1> */}
        {/* <MyName name={"Owais Ahmed"} age={"20"} />
        <MyName name={"Ashar Ahmed"} age={"23"} />
        <MyName name={"Talha Sohail"} age={"25"} />
        <MyName name={"Ali Masood"} age={"27"} /> */}
        {/* {
          userData.map((item, index) => {
          return <MyName key={index} name={item.name} age={item.age} />
            })
        }
       */}
        {/* <Cards image={cardData[0].image} title={cardData[0].title} description={cardData[0].description}/> */}


       {/* <div className="d-flex justify-content-around mt-3">
       {
          cardData.map((item, index) => {
          return <Cards key={index} image={item.image} title={item.title} description={item.description} />
            })
        }
       </div>
       
       <img src={ShirtImg} alt="" width={150} height={200} /> */}

       {/* USESTATE */}

       {/* <h1>{count}</h1> */}

       {/* <button className="btn btn-primary" onClick={() => {setCount(count + 1)}}>Increment({count})</button> */}
       {/* <button className="btn btn-primary" onClick={handleIncerementCount}>Increment({count})</button> */}

       {/* <h2>User Name: {user.name} User Age: {user.age}</h2>

       <button className="btn btn-warning" onClick={updateUser}>Update User</button> */}

       {/* <Todo/> */}

       <ApiFetch />


      </div>
    </>
  );
}

export default App;


//useState is a React hook that allow functional components to have local state. It enables components to store & update values overtime without requiring class components.


//How useState Works
//useState(initialValue) returns an array with two values
//State variable (e.g count)
//setter function to update the state (e.g setCount)
//The setter function rerenders the component when the state changes.
