import React, { useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './RTK/slices/product_Slice';

function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Container className='py-5'>
      <Row>
        {products.map((product) => (
           <Col key={product.id} >
          <Card style={{ width: '15rem', height: '22rem', padding:'1rem', margin:'1rem'}}>
            <Card.Img style={{Height: '100px'}} variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Text>
                {product.price} $
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        ))}
       
      </Row>
    </Container>
    
  )
}

export default Products
