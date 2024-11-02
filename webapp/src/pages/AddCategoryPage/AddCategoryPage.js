import React, { useState } from 'react';
import {Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddCategoryPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCategory = { nombre: categoryName };
    const response = await fetch('http://localhost:3002/categorias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCategory)
    });
    if (response.ok) {
      navigate('/categories');  // Assuming you have a route to go back to categories list
    }
  };

  return (
    <div className="container mt-5 Lexend-Deca">
      <h1 className="mb-4">Add New Category</h1>
      <Form className='mx-5' onSubmit={handleSubmit}>
        <Form.Group controlId="categoryName" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            style={{
              borderColor: 'rgba(97, 62, 104, 0.3)',
              borderRadius: '30px',
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          style={{
            backgroundColor: '#613E68',
            borderRadius: '30px',
            border: 'none',
          }}
        >
          Save Category
        </Button>
      </Form>
    </div>
  );
};

export default AddCategoryPage;
