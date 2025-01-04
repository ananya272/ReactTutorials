import './App.css'

function App() {
  
  function handleClick(){
    alert("I m Clicked");
  }

  function handleMouseOver(){
    alert("Para k upar mouse lekar aye ho")
  }

  function handleInputChange(e){
    // console.log("Input m value change hui h");
    console.log("Value till now: ",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form submit krdu kya");
  }

  return (
    <div>
      {/* <button onClick={alert("Immediate Invoke")}> Click me</button> */}
      {/* <button onClick={() => alert("Button click hua h")}> Click me</button> */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
      <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}> I m a para
        </p>
        <button onClick={handleClick}>
      Click me</button>
      </div>
  )
}

export default App
