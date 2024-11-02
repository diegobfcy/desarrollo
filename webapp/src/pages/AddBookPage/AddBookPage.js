import React, { useState, useEffect } from 'react';
import { Form, Button, Dropdown, Row, Col } from 'react-bootstrap';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3002/categorias');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBook = { titulo: title, precio: price, stock: stock, categoria_id: category };
    const response = await fetch('http://localhost:3002/libros', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook)
    });
    if (response.ok) {
      alert('Book added successfully');
      // Optionally, redirect or clear form here
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add New Book</h1>
      <Form className='mx-5' onSubmit={handleSubmit}>
        <Form.Group controlId="bookName" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter book name"
            style={{
              borderColor: 'rgba(97, 62, 104, 0.3)',
              borderRadius: '30px',
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="price">
              <Form.Control
                type="number"
                placeholder="Enter price"
                style={{
                  borderColor: 'rgba(97, 62, 104, 0.3)',
                  borderRadius: '30px',
                }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="stock">
              <Form.Control
                type="number"
                placeholder="Enter stock"
                style={{
                  borderColor: 'rgba(97, 62, 104, 0.3)',
                  borderRadius: '30px',
                }}
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Dropdown onSelect={(eventKey) => setCategory(eventKey)}>
              <Dropdown.Toggle
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(97, 62, 104, 0.3)',
                  borderRadius: '30px',
                  color: '#613E68',
                }}
                id="dropdown-basic"
              >
                {category ? categories.find(c => c.id === parseInt(category)).nombre : 'Select a Category'}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {categories.map((cat) => (
                  <Dropdown.Item key={cat.id} eventKey={cat.id}>{cat.nombre}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>        
        <Button type="submit" className="w-100" style={{ backgroundColor: '#613E68', borderRadius: '30px', border: 'none' }}>
          Save Book
        </Button>
      </Form>
    </div>
  );
};

export default AddBookPage;
