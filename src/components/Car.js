
import { Counter } from '../reduxComponents/counter';

import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import CarService from '../service/CarService';
import { useSelector, useDispatch } from 'react-redux'
//import styles from './Counter.module.css'

/*export function Persons() {
  const count = useSelector(state => state.persons.value)
  const dispatch = useDispatch()
}*/

const Car = () => {
    const [categories,setCategories] = useState([]);
    const [message, setMessage] = useState({value: '', type: ''});

    const [reload, setReload] = useState(false);
    //const count = useSelector(state => state.persons.value)
    const dispatch = useDispatch()

    // useEffect 
    useEffect(()=>{
        // call API
        const categoryService = new CarService();
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

    const Table = () => {
    
    const TableHeader = ()=> {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Year</th>
                </tr>
            </thead>
            )
    };

    const TableRow = ()=> {
        
        return (
            <tbody>
               {
                categories.map( (category)=> (
                    <tr key={category.carOneId}>
                        <td>{category.carOneId}</td>
                        <td>{category.carName} </td>
                        <td>{category.carYear} </td>
                        
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
    }

        const Form = () => {

            const {register, handleSubmit, reset, formState: {errors} } = useForm();
    
            const saveCar = (data) => {
                console.log(data);
                // call  API
                const service = new CarService();
                service.saveCar(data).then(res => {
                    if(res.status === 201){
                        // show message
                        setMessage({value: 'Operation is done for car Id:' + res.data.id , type: 'success'});
                         // update the state = reload the useEffect
                         setReload(!reload);
                    }else {
                        // show error message
                        setMessage({value: 'Error:'+ res.status, type: 'danger'});
                    }
                    console.log("Res at saveCar", res);
                });
               
            }
    
    
            return(
                <Fragment>
                    <form className="form-control m-2 p-3" onSubmit={handleSubmit(saveCar)}>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input type="text" className="form-control" {...register("carName", {required: true})} placeholder="Enter CarName" />
                                {errors.carName && <span className="text-danger">CarName is Required!</span>}
                            </div>
                            <div className="col-6">
                                <input type="number" className="form-control" {...register("carYear", {required: true})} placeholder="Enter year" />
                                {errors.lastName && <span className="text-danger">Year is Required!</span>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="number" className="form-control" {...register("carKilometre", {required: true})} placeholder="Enter kilometre" />
                                {errors.email && <span className="text-danger">Kilometre is Required!</span>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="number" className="form-control" {...register("carPrice")} placeholder="Enter Price" />
                            </div>
                        </div>  
                        <button type="submit" className="btn btn-success">Add</button>
                        <button type="button" className="btn btn-danger" onClick={()=> reset() }>Reset</button>
                    </form>
                </Fragment>
            );
        };
    
        return (
            <div className="container">
                {message && <div className={'alert alert-' + message.type}>{message.value}</div> }
                <Form />
                <Table />
            </div>
        );
} 

export default Car;