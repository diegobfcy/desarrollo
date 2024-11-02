import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:3002/categorias');
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleAddCategory = () => {
    navigate('/add-category');
  };

  return (
    <div className="container mt-5">
      <h1 className="Lexend-Deca">Categories</h1>

      <Table className="align-middle mx-4" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid rgba(97, 62, 104, 0.25)' }}>ID</th>
            <th style={{ borderBottom: '1px solid rgba(97, 62, 104, 0.25)' }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td style={{ borderBottom: '1px solid rgba(97, 62, 104, 0.25)' }}>
                {category.id}
              </td>
              <td className="text-center" style={{ borderBottom: '1px solid rgba(97, 62, 104, 0.25)' }}>
                {category.nombre}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center mt-4">
        <Button className="Lexend-Deca" style={{ backgroundColor: '#613E68', borderColor: '#613E68' }} onClick={handleAddCategory}>
          Add Category
        </Button>
      </div>
    </div>
  );
};

export default CategoryPage;
