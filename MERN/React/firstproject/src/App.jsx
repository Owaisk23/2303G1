import MyName from "./components/MyName";

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
  return (
    <>
      <div className="container-fluid bg-warning">
        {/* <h1 className="heading">Hello in React Project</h1> */}
        {/* <h1>{userData[1].name}</h1>
        <h1>{userData[3].age}</h1>
        <h1>{userData[2].name}</h1> */}
        {/* <MyName name={"Owais Ahmed"} age={"20"} />
        <MyName name={"Ashar Ahmed"} age={"23"} />
        <MyName name={"Talha Sohail"} age={"25"} />
        <MyName name={"Ali Masood"} age={"27"} /> */}
        {
          userData.map((item, index) => {
          return <MyName key={index} name={item.name} age={item.age} />
            })
        }
      
      
      </div>
    </>
  );
}

export default App;
