//Learning props / components / JSX
import UserCard from "./components/UserCard"
import pic from "./assets/pic.jpg"
function App() {
  

  return (
    <div className="container">
      <UserCard name="Nature" desc="desc1" image={pic} style={{"border-radius":"10px"}}/>
      <UserCard name="Beauty" desc="desc2" image={pic} style={{"border-radius":"10px"}}/>
      <UserCard name="Greenery" desc="desc3" image={pic} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
