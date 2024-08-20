
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Membre from './Membre';
import InsererMembre from './InsererMembre';
import UpdateMembre from './UpdateMembre';
import DeleteMembre from './DeleteMembre';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Membre />} />
        <Route path='/Formulaire' element={<InsererMembre />} />
        <Route path='/update/:NUMERO' element={<UpdateMembre />} />
        <Route path='/delete/:NUMERO' element = {<DeleteMembre />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
