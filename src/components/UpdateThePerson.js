import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PersonService from '../service/PersonService';

const UpdateThePerson = () => {

    const Form = () => {

        const {register, handleSubmit, reset, formState: {errors} } = useForm();

        const savePerson = (data) => {
            console.log(data);
            // call  API
            const service = new PersonService();
            service.savePerson(data).then(res => {
                if(res.status === 201){
                    // show message
                    setMessage({value: 'Operation is done for person Id:' + res.data.id , type: 'success'});
                     // update the state = reload the useEffect
                     setReload(!reload);
                }else {
                    // show error message
                    setMessage({value: 'Error:'+ res.status, type: 'danger'});
                }
            });
           
        }


        return(
            <Fragment>
                <form className="form-control m-2 p-3" onSubmit={handleSubmit(savePerson)}>
                    <div className="row mb-3">
                        <div className="col-6">
                            <input type="text" className="form-control" {...register("firstName", {required: true})} placeholder="Enter FirstName" />
                            {errors.firstName && <span className="text-danger">FirstName is Required!</span>}
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" {...register("lastName", {required: true})} placeholder="Enter LastName" />
                            {errors.lastName && <span className="text-danger">LastName is Required!</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" {...register("email", {required: true})} placeholder="Enter Email" />
                            {errors.email && <span className="text-danger">Email is Required!</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" {...register("title")} placeholder="Enter Title" />
                        </div>
                    </div>  
                    <button type="submit" className="btn btn-success">Add</button>
                    <button type="button" className="btn btn-danger" onClick={()=> reset() }>Reset</button>
                </form>
            </Fragment>
        );
    };

    return (
        <div>
           <Form/> 
        </div>
    );
};

export default UpdateThePerson;