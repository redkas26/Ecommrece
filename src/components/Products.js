import React, { useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './RTK/slices/product_Slice';
import { addToCart } from './RTK/slices/cart_Slice';
import { Link, NavLink } from 'react-router-dom';

function Products() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Container fluid className='py-5'>
      <Row xs='auto' style={{ display:'flex', justifyContent:'space-around'}}>
        {products.map((product) => (
           <Col key={product.id} >
          <Card style={{ width: '15rem', height: '25rem', padding:'1rem', margin:'1rem'}}>
           <NavLink to={product.id}><Card.Img style={{height: '200px', width: '200px'}} variant="top" src={product.image} /></NavLink> 
            <Card.Body>
              <Card.Title style={{  overflow: 'hidden', textOverflow: 'ellipsis', width: '200px',  whiteSpace: 'nowrap'}}>{product.title}</Card.Title>
              <Card.Text style={{  overflow: 'hidden', textOverflow: 'ellipsis', width: '200px',  whiteSpace: 'nowrap'}}>
                {product.description}
              </Card.Text>
              <Card.Text>
                {product.price} €
              </Card.Text>
              <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        ))}
       
      </Row>
    </Container>
    
  )
}

export default Products;
