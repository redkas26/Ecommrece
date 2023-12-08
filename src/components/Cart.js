import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { clear, deleteFromCart } from './RTK/slices/cart_Slice';

function Cart() {

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0)
  return (
    <Container>
        <h1 className='py-5'>Welcome to Cart</h1>
      <Row>
        <Col>
            <Button variant='warning' className='mb-3' onClick={() => dispatch(clear())}>Clear All</Button>
        </Col>
        <Col md = {{span :2}}>
            <h5>Total Price : {totalPrice.toFixed(2)} €</h5>
        </Col>
      </Row>

     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Actions</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
           <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image src={product.image} alt={product.title} style={{width: '100px', height: '100px'}}></Image></td>
          <td>{product.price} €</td>
          <td>{product.quantity}</td>
          <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(product))} >Delete</Button></td>
        </tr>
        ))}
       
      </tbody>
    </Table>
    </Container>
  )
}

export default Cart
