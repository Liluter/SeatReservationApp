import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { Room } from './features/room/Room';
import { Summary } from './features/Summary/Summary';
import {Layout} from 'antd'
import './App.css';



function App() {

  

  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Layout className="Container" style={{height:"100vh"}} >
      <Routes>
        <Route path="/" element={<Counter isChecked={checked} handleChange={handleChange} />}/>
        <Route path="/room" element={<Room isChecked={checked} />}/>
        <Route path="/summary" element={<Summary />}/>
      </Routes>
    </Layout>
  );
}

export default App;
