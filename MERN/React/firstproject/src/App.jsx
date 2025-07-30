import MyName from "./components/MyName";

function App() {
  return (
    <>
      <div className="container-fluid bg-warning">
        <h1 className="heading">Hello in React Project</h1>
        <MyName />
        <MyName />
        <MyName />
        <MyName />
      </div>
    </>
  );
}

export default App;
