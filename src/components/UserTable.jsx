import React from 'react'
import swal from 'sweetalert';

const UserTable = (props) => {

    const deleteAlert = (user) => {
        swal({
            title: "Delete",
            text: "Are you sure you want to delete this user?",
            icon: "warning",
            buttons: ["No", "Yes"],
        }).then(respuesta => {
            if(respuesta){
                swal({text: "The user was successfully deleted",
                icon: "success"})
                props.deleteUser(user.id)
            }
            return respuesta
        })
    }

    return ( 
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                            <button 
                                className="button muted-button"
                                onClick={() => props.editRow(user)}
                            >
                                Edit
                            </button>
                            <button 
                                className="button muted-button"
                                onClick={() => deleteAlert(user)}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )
                }
            
            </tbody>
        </table>
     );
}
 
export default UserTable;