import React from 'react'
// import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">REACT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Content
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Home</a></li>
                                <li><a className="dropdown-item" href="/User">Function Based Comp</a></li>
                                <li><a className="dropdown-item" href="/ClassComponent">Class Based Comp</a></li>
                                <li><a className="dropdown-item" href="/NestedComponent">Nested Component</a></li>
                                <li><a className="dropdown-item" href="/ClickEvent">Click Event</a></li>
                                <li><a className="dropdown-item" href="/StateWthFxnlComp">State with Fxnl Comp</a></li>
                                <li><a className="dropdown-item" href="/PropsWthFxnlComp">Props with Fxnl Comp</a></li>
                                <li><a className="dropdown-item" href="/GtInpBxVlu">Get I/P Box Value</a></li>
                                <li><a className="dropdown-item" href="/Form">Form</a></li>
                                <li><a className="dropdown-item" href="/BasicFormValid">BasicFormValid</a></li>
                                <li><a className="dropdown-item" href="/CndtnlRndrng">Condi. Rendring</a></li>
                                <li><a className="dropdown-item" href="/FxnAsPropLifcyclmthd">Fxn as Prop Lifcycl</a></li>
                                <li><a className="dropdown-item" href="/Cnstrctr_rndrlfcycl">Constructor Rndr Lifcycl</a></li>
                                <li><a className="dropdown-item" href="/CompDidMntUpdtLfcycl">Comp. Did Update Lfcycl</a></li>
                                <li><a className="dropdown-item" href="/ShldCompUpdt">Should Comp. Update</a></li>
                                <li><a className="dropdown-item" href="/CompWlUnmunt">Comp. Will Unmount</a></li>
                                <li><a className="dropdown-item" href="/Hooks">Hooks</a></li>
                                <li><a className="dropdown-item" href="/UseEffect">UseEffect</a></li>
                                <li><a className="dropdown-item" href="/UseEffectWthCondi">UseEffectWthCondi</a></li>
                                <li><a className="dropdown-item" href="/HandleArrayAndList">Handle Array And List</a></li>
                                <li><a className="dropdown-item" href="/ReuseComponent">Reusing Component</a></li>
                                <li><a className="dropdown-item" href="/Fragments">Fragments</a></li>
                                <li><a className="dropdown-item" href="/SndDataToParentComp">SendDataToParentComp.</a></li>
                                {/* <li><a className="dropdown-item" href="/SndDataChild">SendDataChildComp</a></li> */}
                                <li><a className="dropdown-item" href="/PureCompOnStat">PureCompOnState</a></li>
                                <li><a className="dropdown-item" href="/PureCompOnProps">PureCompOnProps</a></li>
                                <li><a className="dropdown-item" href="/PureCompOnPropsChild">PureCompOnPropsChild</a></li>
                                <li><a className="dropdown-item" href="/UseMemo">UseMemo</a></li>
                                <li><a className="dropdown-item" href="/Ref">RefInClassComp</a></li>
                                <li><a className="dropdown-item" href="/UseRefFxnlComp">UseRefFxnlComp</a></li>
                                <li><a className="dropdown-item" href="/ForwardRef">ForwardRef</a></li>
                                <li><a className="dropdown-item" href="/ForwardRefChild">ForwardRefChild</a></li>
                                <li><a className="dropdown-item" href="/ControlledComp">ControlledComp</a></li>
                                <li><a className="dropdown-item" href="/UnControlledComp">UnControlledComp</a></li>
                                <li><a className="dropdown-item" href="/HighOrderComp">HighOrderComp</a></li>
                                <li><a className="dropdown-item" href="/ReactLinks">Links.</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
