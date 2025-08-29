import Cards from "./components/Cards";
import MyName from "./components/MyName";
import Navbar from "./components/Navbar";
import ShirtImg from "./assets/shirt.jpg";
import { useState } from "react";
import Todo from "./components/Todo";
import ApiFetch from "./components/ApiFetch";
import axios from "axios";
import { useEffect } from "react";
import Footer from "./components/Footer";

import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Link, Routes, Route } from "react-router";
import Parent from "./components/Parent";

function App() {
  let userData = [
    {
      name: "Owais",
      age: 23,
    },
    {
      name: "Adeel",
      age: 17,
    },
    {
      name: "Tayyaba",
      age: 34,
    },
    {
      name: "Laiba",
      age: 12,
    },
  ];

  
  console.log("App Component");
  // let count = 0;
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Owais",
    age: 24,
    profession: "Software Developer",
  });

  //useEffects
  useEffect(() => {
    console.log("Component rendered");
    getProducts();
  }, []);
  //useEffects end

  //functions
  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // function handleIncerementCount(){
  //   // count++;
  //   setCount(count + 1);
  //   console.log(count);
  // }

  const handleIncerementCount = () => {
    // count++;
    setCount(count + 1);
    console.log(count);
  };

  const updateUser = () => {
    setUser({ ...user, name: "Owais Ahmed Khan" });
  };

  return (
    <>
      <div className="container-fluid">
        {/* <Navbar /> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

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

        

        {/* <img src={ShirtImg} alt="" width={150} height={200} /> */}

        {/* USESTATE */}

        {/* <h1>{count}</h1> */}

        {/* <button className="btn btn-primary" onClick={() => {setCount(count + 1)}}>Increment({count})</button> */}
        {/* <button className="btn btn-primary" onClick={handleIncerementCount}>Increment({count})</button> */}

        {/* <h2>User Name: {user.name} User Age: {user.age}</h2>

       <button className="btn btn-warning" onClick={updateUser}>Update User</button> */}

        {/* <Todo/> */}

        {/* <ApiFetch /> */}

        <Footer />





        <Routes>
          <Route path="/" element={<Parent/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
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
