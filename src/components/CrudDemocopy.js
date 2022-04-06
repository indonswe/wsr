
import { Counter } from '../reduxComponents/counter';

import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import CategoryService from '../service/CategoryService';
import { useSelector, useDispatch } from 'react-redux'
//import styles from './Counter.module.css'

/*export function Persons() {
  const count = useSelector(state => state.persons.value)
  const dispatch = useDispatch()
}*/

const CrudDemoCopy = () => {
    const [categories,setCategories] = useState([]);
    const [message, setMessage] = useState({value: '', type: ''});

    const [reload, setReload] = useState(false);
    //const count = useSelector(state => state.persons.value)
    const dispatch = useDispatch()

    // useEffect 
    useEffect(()=>{
        // call API
        const categoryService = new CategoryService();
        categoryService.findAll().then((res)=>{
            console.log("Res: " + res);
            if(res.status === 200){
                console.log("RES:", res);
                setCategories(res.data);
                console.log("Categories: " + res.data);
                setMessage({value: 'Operation is Done!', type: 'success'});
                //dispatch(incrementByAmount(persons.length));
                console.log("Length: " + categories.length);
            } else {
                // display error message
                setMessage({value: 'Operation is Failed!', type: 'danger'});
            }
        });

        // update the state
    },[reload]);

    const TableHeader = ()=> {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    
                </tr>
            </thead>
            )
    };

    const TableRow = ()=> {
        
        return (
            <tbody>
               {
                categories.map( (category)=> (
                    <tr key={category.recipeCategoryId}>
                        <td>{category.recipeCategoryId}</td>
                        <td>{category.category} </td>
                        
                        
                    </tr>
                ))   
               }                     
            </tbody>
        )
    };

    return(
        <div className="container">
            <table className="table table-striped">
                <TableHeader/>
                <TableRow />
            </table>
        </div>
        );


    /*return(
        <div className="container">
        <div>Home: </div>
        <Counter/>
        </div>
            )*/
} 

export default CrudDemoCopy;