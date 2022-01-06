import TopBar from './Components/TopBar/TopBar'
import Feed from './Pages/Feed/Feed';
import Manage from './Pages/Manage/Manage'
import { Routes, Route } from "react-router-dom";
import Trending from './Pages/Trending/Trending';
import AddWallet from './Pages/AddWallet/AddWallet';

import {useSelector, useDispatch}from "react-redux";
import {bindActionCreators} from "redux";
import { actionCreators } from "./store/index"
import Settings from './Pages/Settings/Settings';

function App() {
    
  // const account = useSelector ((state) =>state.account)
  // const dispatch = useDispatch()

  // const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators,dispatch);
  // //console.log(AC)

  // // ada error di sini...
  // const depositHandler=()=>{
  //   depositMoney(1000);
  // }
  return (
    <>
    
    {/* <h1>{account}</h1> */}
    {/* <button onClick={depositHandler}> Deposit</button>
    <button onClick={() => withdrawMoney(1000)}>Withdraw</button> */}
      <TopBar/>
      <Routes>
        <Route path="/" element={ <Feed/>} />
        <Route path="/manage" element={<Manage/>} /> 
        <Route path="/manage/wallet" element={<AddWallet/>} /> 
        <Route path="/trending" element={<Trending/>} />     
        <Route path="/settings" element={<Settings/>} />     
      
      
      </Routes>
      


    </>
  );
}

export default App;

//6QSMK6YW9M17TJVG1ZTYEMRIUUUWQHER8Q
//1438269973
//1610143998