import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Platfom from './Pages/HomePage/TempoIncome/Platfom/Platfom';
import VipMember from './Pages/HomePage/TempoIncome/VipMember/VipMember';
import Cooperation from './Pages/HomePage/TempoIncome/Cooperation/Cooperation';
import Certificate from './Pages/HomePage/TempoIncome/Certificate/Certificate';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/platfom' element={<Platfom></Platfom>}></Route>
        <Route path='/vipMember' element={<VipMember></VipMember>}></Route>
        <Route path='/cooperation' element={<Cooperation></Cooperation>}></Route>
        <Route path='/certificate' element={<Certificate></Certificate>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
