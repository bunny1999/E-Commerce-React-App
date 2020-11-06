import React, { useContext,useReducer } from 'react'
import {ProductContext, CartContext} from '../context/context';
import {Container, Row, Col} from 'reactstrap'
import {ADD_PRODUCT} from '../context/actions.types'
import ProductCard from './product_card';

const Products = ({})=>{
    const {products} = useContext(ProductContext);
    const {dispatchItems} = useContext(CartContext);

    const addToCart = product =>{
        dispatchItems({
            type:ADD_PRODUCT,
            payload:product
        });
    }

    return (
        <Container fluid>
            <h2>Products</h2>
            <Row>
                {
                    products.map(product=>(
                        <Col md={4} key={product.id}>
                            <ProductCard product={product} addToCart={addToCart}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Products;