import './App.css';
import { React, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Users } from './components/Users';
import ClsComp from './components/ClsComp';
import NestedComp from './components/NestedComp';
import ClickEvent from './components/ClickEvent';
import GtInpBxVlu from "./components/GtInpBxVlu";
import Form from './components/Form';
import CndtnlRndrng from './components/CndtnlRndrng';
import BasicFormValid from './components/BasicFormValid';
import FxnAsPropLifcyclmthd from './components/FxnAsPropLifcyclmthd';
import ShldCompUpdt from './components/ShldCompUpdt';
import Welcome from './components/Welcome';
import StateWthFxnlComp from './components/StateWthFxnlComp';
import PropsWthFxnlComp from './components/PropsWthFxnlComp';
import CnstrctrRndrlfcycl from './components/CnstrctrRndrlfcycl';
import CompDidMntUpdtLfcycl from './components/CompDidMntUpdtLfcycl';
import CompWlUnmunt from './components/CompWlUnmunt';
import Hooks from './components/Hooks';
import UseEffect from './components/UseEffect';
import UseEffectWthCondi from './components/UseEffectWthCondi';
// import style from './customstyle.module.css';     // using custom created css
// import { Button, Alert } from 'react-bootstrap';     // using bootstrap we installed 
import HandleArrayAndList from './components/HandleArrayAndList';
import ReuseComponent from './components/ReuseComponent';
import Fragments from './components/Fragments';
import SndDataToParentComp from './components/SndDataToParentComp';
import SndDataChild from './components/SndDataChild';
import PureCompOnStat from './components/PureCompOnStat';
import PureCompOnProps from './components/PureCompOnProps';
import PureCompOnPropsChild from './components/PureCompOnPropsChild';
import UseMemo from './components/UseMemo';
import Ref from './components/Ref';
import UseRefFxnlComp from './components/UseRefFxnlComp';
import ForwardRef from './components/ForwardRef';
import ForwardRefChild from './components/ForwardRefChild';
import ControlledComp  from './components/ControlledComp';
import UnControlledComp  from './components/UnControlledComp';
import HighOrderComp from './components/HighOrderComp';
import ReactLinks from './components/ReactLinks';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  const [newCount, setnewCount] = useState(0);
  const [newData, setnewData] = useState('Deepak');

  const users = [
    // { name: 'Ravi', contact: 9283847657, email: 'Ravi@gmail.com' },
    // { name: 'Dilawar', contact: 8749823749, email: 'Dilawar@gmail.com' },
    // { name: 'Anil', contact: 7349832748, email: 'Anil@gmail.com' },
    { name: 'Gautam', contact: 8739483784, email: 'Gautam@gmail.com' },
    { name: 'Kirti', contact: 2837489228 }
  ]

  return (
    <div>
      {/* <h2 style={{backgroundColor: 'blue'}}> REACT </h2>      <--- INLINE CSS */}
      {/* <h2 className={style.backcolor}>REACT JS</h2>     <--- USING customstyle.css */}
      <BrowserRouter>
        <Navbar />
        <Routes>
            {/* function name */}
          <Route path="/" element={<Welcome />} />
          <Route path="/User" element={<Users />} />
          <Route path="/ClassComponent" element={<ClsComp />} />
          <Route path="/NestedComponent" element={<NestedComp />} />
          <Route path="/ClickEvent" element={<ClickEvent />} />
          <Route path="/StateWthFxnlComp" element={<StateWthFxnlComp />} />
          <Route path="/PropsWthFxnlComp" element={<PropsWthFxnlComp name='Ishita Gautam' age='19' other={{ address: 'Lucknow', mobile: '1000' }} />} />

          <Route path="/GtInpBxVlu" element={<GtInpBxVlu />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/BasicFormValid" element={<BasicFormValid />} />
          <Route path="/CndtnlRndrng" element={<CndtnlRndrng />} />
          <Route path="/FxnAsPropLifcyclmthd" element={<FxnAsPropLifcyclmthd />} />
          <Route path="/CnstrctrRndrlfcycl" element={<CnstrctrRndrlfcycl />} />
          <Route path="/CompDidMntUpdtLfcycl" element={<CompDidMntUpdtLfcycl />} />
          <Route path="/ShldCompUpdt" element={<ShldCompUpdt />} />
          <Route path="/CompWlUnmunt" element={<CompWlUnmunt />} />
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/UseEffectWthCondi" element={<UseEffectWthCondi nwCount={newCount} nwData={newData} />} />
          <Route path="/HandleArrayAndList" element={<HandleArrayAndList />} />
          <Route path="/ReuseComponent" element={<ReuseComponent/>} />
          <Route path="/Fragments" element={<Fragments/>} />
          <Route path="/SndDataToParentComp" element={<SndDataToParentComp/>} />
          <Route path="/SndDataChild" element={<SndDataChild/>} />
          <Route path="/PureCompOnStat" element={<PureCompOnStat/>} />
          <Route path="/PureCompOnProps" element={<PureCompOnProps/>} />
          <Route path="/PureCompOnPropsChild" element={<PureCompOnPropsChild/>} />
          <Route path="/UseMemo" element={<UseMemo/>} />
          <Route path="/Ref" element={<Ref/>} />
          <Route path="/UseRefFxnlComp" element={<UseRefFxnlComp/>} />
          <Route path="/ForwardRef" element={<ForwardRef/>} />
          <Route path="/ForwardRefChild" element={<ForwardRefChild/>}></Route>
          <Route path="/ControlledComp" element={<ControlledComp/>}></Route>
          <Route path="/UnControlledComp" element={<UnControlledComp/>}></Route>
          <Route path="/HighOrderComp" element={<HighOrderComp/>}></Route>
          <Route path='/ReactLinks' element={<ReactLinks/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Link ></Link> */}


      {/* <PropsWthFxnlComp name='Deepak Gautam' email='ds095536@gmail.com' other={{ address: 'Nainital', mobile: '0000' }} /> */}

      {/* <h4>Props : {newCount}</h4>    props passed from App.js */}
      {/* <h4>Props : {newData}</h4>     props passed from App.js */}

      {/* USING INSTALLED BOOTSTRAP */}
      <hr className='my-5'/>
      <button onClick={() => setnewCount(newCount + 1)} className='btn btn-primary'>Update newCount</button>
      <button onClick={() => setnewData('Javascript')} className='btn btn-success'>Update newData</button>

      {
        users.map((item,i)=>
          // item.name 
          <ReuseComponent id={i+1} name={item.name} email={item.email} contact={item.contact}/>
        )
      }


      
      
      
    </div>
  )
}
