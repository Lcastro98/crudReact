import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const {register, formState: {errors}, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

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
            <button>Edit user</button>
        </form>
     );
}
 
export default EditUserForm;