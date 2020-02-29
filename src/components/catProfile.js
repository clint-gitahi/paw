import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import api from '../utils/api';
import key from '../utils/key.js';

const CatProfile = routerInfo => {
  console.log(routerInfo);

  const [cat, setCat] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    async function fetchCat() {
      const response = await api.get(`/images/${routerInfo.match.params.id}`, {
        headers: { 'x-api-key': key.apiKey }
      });
      console.log(response);
      if (response.data.breeds) {
        const {
          name,
          temperament,
          origin,
          description,
          life_span,
          wikipedia_url,
          alt_names
        } = response.data.breeds[0];
        const obj = {
          name,
          temperament,
          origin,
          description,
          life_span,
          wikipedia_url,
          alt_names
        };
        setCat(obj);
      }

      setLink(response.data.url);
    }

    fetchCat();
  }, [routerInfo.match.params.id]);
  return (
    <Card style={{ width: '30rem', height: '100%' }}>
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Text>{cat.name}</Card.Text>
        <Card.Text>Origin: {cat.origin ? cat.origin : 'N/A'}</Card.Text>
        <Card.Text>
          Life Span: {cat.life_span ? cat.life_span : 'N/A'}
        </Card.Text>
        <Card.Text>
          Characteristics: {cat.temperament ? cat.temperament : 'N/A'}
        </Card.Text>
        <Card.Text>{cat.description}</Card.Text>
        <Card.Text>{cat.alt_names}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CatProfile;
