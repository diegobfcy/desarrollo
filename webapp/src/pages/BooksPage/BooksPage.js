import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:3002/libros');
    const data = await response.json();
    setBooks(data);
  };

  const deleteBook = async (id) => {
    const response = await fetch(`http://localhost:3002/libros/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      fetchBooks(); // Recarga los libros después de eliminar
    }
  };

  return (
    <div className="container mt-5">
      <h1 className='Lexend-Deca'>Books</h1>
      <Button onClick={() => navigate('/add-book')} style={{ marginBottom: '10px' }}>
        Add Book
      </Button>
      <Table borderless className="align-middle mx-4">
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>
                <div className='Lexend-Deca' style={{ color: '#613E68', fontWeight: 'bold' }}>{book.titulo}</div>
                <small className="text-muted Lexend-Deca">{book.categoria}</small>
              </td>
              <td className="text-end">
                <FaEdit style={{ color: '#613E68', cursor: 'pointer', marginRight: '10px' }} onClick={() => navigate(`/edit-book/${book.id}`)} />
                <FaTrash style={{ color: '#613E68', cursor: 'pointer' }} onClick={() => deleteBook(book.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BooksPage;
