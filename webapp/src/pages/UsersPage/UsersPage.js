import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const UsersPage = () => {
  // Estado para los usuarios
  const [users, setUsers] = useState([]);

  // Cargar los usuarios desde la API cuando el componente se monte
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3002/usuarios'); // Asegúrate de que la URL sea correcta
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="Lexend-Deca">Users</h1>
      <Table className="align-middle mx-4" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid rgba(97, 62, 104, 0.25)' }}>Username</th>
            <th className="text-center" style={{ borderBottom: '1px solid rgba(97, 62, 104, 0.25)' }}>Correo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ borderBottom: '1px solid rgba(97, 62, 104, 0.25)' }}>
                <div className="Lexend-Deca" style={{ color: '#613E68', fontWeight: 'bold' }}>
                  {user.nombre}
                </div>
              </td>
              <td className="text-center" style={{ borderBottom: '1px solid rgba(97, 62, 104, 0.25)' }}>
                <small className="text-muted Lexend-Deca">{user.correo}</small>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersPage;
