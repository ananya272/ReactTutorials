import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  //sabhi childe m state ko sync karwaenge
  const [name, setName] = useState('');
  return (
    <div>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      {/* <p>I m inside Parent Component and value of name is {name}</p> */}
    </div>
  )
}

export default App
