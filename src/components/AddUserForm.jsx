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
                type="text"
                placeholder='Enter your name'
                />
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
                type="text"
                placeholder='Enter your username'
                />
            {
                errors.username &&
                <div>
                    {errors.username.message}
                </div>
            }
            <label>Email</label>
            <input 
                {...register("email", {
                    required: "Campo Requerido"
                })}
                type="email"
                placeholder='Enter your email'
                />
            {
                errors.email &&
                <div>
                    {errors.email.message}
                </div>
            }
            <button>Add new user</button>
        </form>
     );
}
 
export default AddUserForm;