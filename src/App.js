import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [advice,setAdvice] = useState('');

  let getAdvice = async () => {
    let response = await axios.get('https://api.adviceslip.com/advice');
    let {advice} = response.data.slip;
    setAdvice(advice);
    console.log(advice);
  };

  useEffect(()=>{
    getAdvice();
  },[]);

  return (
    <div className='container'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='next-advice' onClick={getAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
