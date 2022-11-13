
import './App.css';
import pho from './required.jpg'
import Btn from './btn'
import './index.css'
import Content from './content'
import New from './newbtn'
import Abt from './abt'
import Socials from './socials'
function App() {
  return (
    <div className="container">
      <img src={pho} alt="not found"></img> 
      <Content />
      <div className='contains'>
      <Btn />
      <New />
      </div>
      <div className='mbt'><Abt /></div>
    <Socials/>
    </div> 
  );
}

export default App;
