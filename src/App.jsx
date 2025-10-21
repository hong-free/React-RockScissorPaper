import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Box from './component/Box'

const choice={
  rock:{ 
    name:"Rock",
    img:"https://i.pinimg.com/736x/fe/0e/82/fe0e8236b49946995e7af8e02976e243.jpg"
  },
  scissor:{
    name:"Scissor",
    img:"https://i.pinimg.com/736x/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://i.pinimg.com/736x/15/c4/d7/15c4d790bc41f466f3e210d3840c849d.jpg"
  }
};
function App() {
  const [userSelect,setUserSelect]=useState(null)
  const play=(userChoice)=>{
   setUserSelect(choice[userChoice])
  }

  return (
    <div>
      <div className='container'>
       <div className='game'>
       <h1 className='tittle'>Rock Scissor  Paper Game</h1>
       <div className='main'>
        <Box tittle="You" item={userSelect}/>
       <Box tittle="Computer"/>
       </div>
       <div className='main'>
      <button onClick={()=>play("scissor")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
       </div>
      </div>
      </div>
  
    </div>
   )
}

export default App
