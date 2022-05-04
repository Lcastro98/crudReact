import React, { useEffect, useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Lorena', username: 'Anezoldyck' },
    { id: uuidv4(), name: 'Felipe', username: 'Nirsch' },
    { id: uuidv4(), name: 'Hernán', username: 'Crown' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    const data = localStorage.getItem('Data');
    if (data) {
      setUsers(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(users))
  });

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

  //Editar usuarios
  const [editing, setEditing] = useState(false);

  const [currentUser, serCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    serCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser}
            editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
