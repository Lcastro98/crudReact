import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const {register, formState: {errors}, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);
    setValue('email', props.currentUser.email);

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
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
            <label>Email</label>
            <input 
                {...register("email", {
                    required: "Campo Requerido"
                })}
                type="email"/>
            {
                errors.email &&
                <div>
                    {errors.email.message}
                </div>
            }
            <button>Edit user</button>
        </form>
     );
}
 
export default EditUserForm;