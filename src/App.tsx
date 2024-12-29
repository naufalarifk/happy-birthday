import { Balloons } from './components/balloons/Balloons'
import ScrollTriggered from './components/scrollTriggered'

function App() {


  return (
    <main className='pt-12 pb-12'>
      <Balloons 
    count={10}
    hangOnTop={true}
    loop
    msgText=''
    popVolumeLevel={1}
  colors={["red", "green", "blue",]}/>
    <ScrollTriggered/>
    </main>
  )
}

export default App
