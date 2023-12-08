// import React, {useEffect} from 'react';
// import {Container, Row, Col, Image} from 'react-bootstrap';
// import {useSelector, useDispatch} from 'react-redux';
// import { fetchProducts } from './RTK/slices/product_Slice';
// function Product() {
//     const products = useSelector((state) => state.products)

//     const dispatch = useDispatch();

//     useEffect(() => {
//       dispatch(fetchProducts())
//     }, [])
//   return (
//     <Container className='py-5'>
//         {products.map((product) =>(
//              <Row>
//             <Col>
//                 <Image src={product.image} style={{width: '300px', height: '300px'}}></Image> 
//             </Col>
//             <Col>
//                 <h5>{product.title}</h5>
//             </Col>
//       </Row>
//         ))}
       
//     </Container>
      
//   )
// }

// export default Product
