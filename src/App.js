import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Lorena', username: 'Anezoldyck' },
    { id: uuidv4(), name: 'Felipe', username: 'Nirsch' },
    { id: uuidv4(), name: 'Hernán', username: 'Crown' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
