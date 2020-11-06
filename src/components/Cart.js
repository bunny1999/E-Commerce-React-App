import React,{useContext,useEffect,useState} from 'react'
import { Container, Row, Col, Card, CardText,CardBody,Button,CardTitle, ListGroup } from 'reactstrap'
import { CartContext } from '../context/context';
import { REMOVE_PRODUCT, EMPTY_CART } from '../context/actions.types';
import {toast} from 'react-toastify'
import CartCard from './cart_card';

const Cart = ()=>{

    const {items,dispatchItems} = useContext(CartContext)
    const [total,setTotal] = useState(0.0);

    const removeFromCart = item =>{
        dispatchItems({
            type:REMOVE_PRODUCT,
            payload:item.id
        })
    }

    const emptyCart =()=>{
        if(items.length<1){
            toast("Cart Empty!",{type:"warning"})
            return;
        }
        dispatchItems({
          type:EMPTY_CART  
        })
        toast("Purchase Done!")
    }

    useEffect(()=>{
        let val=0.0;
        items.forEach((item)=>{
           val += Number(item.price) 
        })
        setTotal(val);
    },[items])

    return (
        <Container fluid>
            <h2>Buy Cart</h2>
            <Card>
                <CardBody>
                    <Row>
                        <Col md={8}>
                            <CardText>Price: ${total}</CardText>
                        </Col>
                        <Col md={4}>
                            <Button color="primary" onClick={emptyCart}>Payment</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <br/>
            <ListGroup>
                {
                    items.map(item=>(
                        <CartCard key={item.id} item={item} removeFromCart={removeFromCart}></CartCard>
                    ))
                }
            </ListGroup>
        </Container>
    )
}

export default Cart;