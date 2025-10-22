import { use, useState } from 'react'
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
    name:"Scissors",
    img:"https://i.pinimg.com/736x/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://i.pinimg.com/736x/15/c4/d7/15c4d790bc41f466f3e210d3840c849d.jpg"
  }
};
function App() {
  const [userSelect,setUserSelect]=useState(null)
  const [computerSelect, setComputerSelect] = useState(null);
  const [result,setResult]=useState("")

  const play=(userChoice)=>{
   setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  }
const randomChoice=()=>{
  let itemArray=Object.keys(choice)
  let randomItem = Math.floor(Math.random() * itemArray.length);
  console.log(Math.random())
  let final=itemArray[randomItem]
return choice[final]
}
 const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  return (
    <div>
      <div className='container'>
       <div className='game'>
        <h1 className='tittle'>Rock Scissor  Paper Game</h1>
        <div className='main'>
         <Box title="You" item={userSelect} result={result}/>
         <p className="vs">vs</p>
        <Box title="Computer" item={computerSelect} result={result}/>
        
       </div>
       
       <div className='play-button'>
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
