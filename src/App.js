import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Platfom from './Pages/HomePage/TempoIncome/Platfom/Platfom';
import VipMember from './Pages/HomePage/TempoIncome/VipMember/VipMember';
import Cooperation from './Pages/HomePage/TempoIncome/Cooperation/Cooperation';
import Certificate from './Pages/HomePage/TempoIncome/Certificate/Certificate';
import TempoIncome from './Pages/HomePage/TempoIncome/TempoIncome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tempoIncome' element={<TempoIncome></TempoIncome>}></Route>
        <Route path='/platfom' element={<Platfom></Platfom>}></Route>
        <Route path='/vipMember' element={<VipMember></VipMember>}></Route>
        <Route path='/cooperation' element={<Cooperation></Cooperation>}></Route>
        <Route path='/certificate' element={<Certificate></Certificate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
