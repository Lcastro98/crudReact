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
  const [users, setUser] = useState(usersData);

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUser([
      ...users,
      user
    ])
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
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
