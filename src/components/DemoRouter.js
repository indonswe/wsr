//import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CrudDemo from './CrudDemo';
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



const DemoRouter = () => {

    const [persons,setPersons] = useState([]);
    const [reload, setReload] = useState(false);
    const [message, setMessage] = useState({value: '', type: ''});
    /*const count = useSelector(state => state.persons.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        // call API
        const personService = new PersonService();
        personService.findAll().then((res)=>{
            console.log("Res: " + res);
            if(res.status === 200){
                setPersons(res.data);
                console.log("Persons: " + res.data);
                setMessage({value: 'Operation is Done!', type: 'success'});
                dispatch(incrementByAmount(persons.length));
                console.log("Length: " + persons.length);
            } else {
                // display error message
                setMessage({value: 'Operation is Failed!', type: 'danger'});
            }
        });

        // update the state
    },[reload]);*/

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
                        <Route path="/details/:id" component={PersonDetails} />
                        <Route path="/updates/:id" component={UpdateThePerson} />

                        <Route component={NotFound} />
                    </Switch>
                </div>
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
const About = () => <b>About Us Page</b>;


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
                    <Link className="navbar-brand" to="/person">Person</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/crud">CRUD</Link>
                </li>
            </ul>
            <form>
                <Link className="btn btn-primary" to="/person">Sign Up</Link>
            </form>
        </div>

    </nav>
)
};

export default DemoRouter;