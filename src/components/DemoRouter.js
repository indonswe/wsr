//import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CrudDemo from './CrudDemo';
import CrudRedux from './CrudRedux';
import PersonDetails from './PersonDetails';
import UpdateThePerson from './UpdateThePerson';
import { Counter } from '../reduxComponents/counter';
import { Persons } from '../reduxComponents/persons';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import PersonService from '../service/PersonService';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../reduxComponents/thePersonSlice'
import 'primereact/resources/themes/lara-light-indigo/theme.css';    //theme
import 'primereact/resources/primereact.min.css';                    //core css
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import "./App.css";
import { UpdateFooter } from "../reduxComponents/updateFooter";
import { setTextValue } from "../reduxComponents/updateFooterSlice";



const DemoRouter = () => {

    const [persons,setPersons] = useState([]);
    const [reload, setReload] = useState(false);
    const [message, setMessage] = useState({value: '', type: ''});

    
    

    return (
        <Fragment>
            <Router>
                <Header />
                
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/home" component={Home} />
                        <Route path="/person" component={Person} />
                        <Route path="/about" component={About} />
                        <Route path="/crud" component={CrudDemo} />
                        <Route path="/crudRedux" component={CrudRedux} />
                        <Route path="/details/:id" component={PersonDetails} />
                        <Route path="/updates/:id" component={UpdateThePerson} />

                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </Fragment>
    );

};

const GetThePerson = () => {
    const [persons,setPersons] = useState([]);
    const personService = new PersonService();
    const dispatch = useDispatch()
        personService.findAll().then((res)=>{
            setPersons(res.data);
            dispatch(incrementByAmount(persons.length));
            })
            return(null)
        
} 

const Welcome = () => {
    return(
        <div className="container">
        <div>Welcome: </div>
        <Counter/>
        </div>
            )
    
}
const Home = () => {
    return(
        <div className="container">
        <div>Home: </div>
        <Counter/>
        </div>
            )
} 
const About = () => {
    const [text,setText] = useState();
    //<form className="form-control m-2 p-3" onSubmit={handleSubmit(savePerson)}></form>
    //const toastRef = useRef();
    const dispatch = useDispatch()
    const handleClick = () => {
        console.log("Handle: " + text)
        dispatch(setTextValue(text));
    }
    return(
        <div className="container">
        <div>About </div>
        <InputText value ={text} onChange={e =>setText(e.target.value)}/>
        <Button type ="button" label="Submit" icon="pi pi-check" onClick={handleClick}></Button>
        </div>
            )
    }

const Person = () => {
    
    return(
        <div className="container">
           <div>Amount of persons</div>
           <GetThePerson/>
            <Persons/>
        </div>
        
            )
} 
const NotFound = () => <b>Page Not Found</b>;

const Header = () => {
return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/">Welcome</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/person">Amount</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/crud">CRUD</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/crudRedux">CRUDREDUX</Link>
                </li>
            </ul>
            <form>
                <Link className="btn btn-primary" to="/person">Sign Up</Link>
            </form>
        </div>

    </nav>
)
};

const Footer = () => {
    console.log("Footer: ")
    return (
<div className="App">
    
    <footer className="footer">
    <p>This is react sticky footer!!</p>
    <UpdateFooter/>
  
  </footer>
  </div>
        /*<footer className="footer">
    <p>This is react sticky footer!!</p>
  
  </footer>*/
/*<div className="bg-light text-center text-lg-start">
  
  <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  </div>*/
  
    )
};

export default DemoRouter;