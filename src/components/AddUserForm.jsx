import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
                {...register("name", {
                    required: "Campo Requerido"
                })}
                type="text"/>
            {
                errors.name &&
                <div>
                    {errors.name.message}
                </div>
            }
            <label>Username</label>
            <input 
                {...register("username", {
                    required: "Campo Requerido"
                })}
                type="text"/>
            {
                errors.username &&
                <div>
                    {errors.username.message}
                </div>
            }
            <button>Add new user</button>
        </form>
     );
}
 
export default AddUserForm;