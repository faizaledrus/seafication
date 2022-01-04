
import './App.css';
import TopBar from './Components/TopBar/TopBar'
import Feed from './Pages/Feed/Feed';
import Manage from './Pages/Manage/Manage'
import { Routes, Route } from "react-router-dom";
import Trending from './Pages/Trending/Trending';
import AddWallet from './Pages/AddWallet/AddWallet';




function App() {
  return (
    <>
      <TopBar/>
      <Routes>
        <Route path="/" element={ <Feed/>} />
        <Route path="/manage" element={<Manage/>} /> 
        <Route path="/manage/wallet" element={<AddWallet/>} /> 
        <Route path="/trending" element={<Trending/>} />     
      
      
      </Routes>
      


    </>
  );
}

export default App;

//6QSMK6YW9M17TJVG1ZTYEMRIUUUWQHER8Q
//1438269973
//1610143998