import React from 'react';
import {Button, ListGroupItem,Row, Col} from 'reactstrap'

const CartCard = ({item,removeFromCart})=>{
    return (
        <ListGroupItem>
            <Row>
                <Col>
                    <img height={80} src={item.photo.tiny}/>
                </Col>
                <Col className="text-center">
                    <div className="text-primary">
                        {item.name}
                    </div>
                    <span>Price: ${item.price}</span>
                    <Button color="danger" size="sm" onClick={()=>removeFromCart(item)}>Remove</Button>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

export default CartCard;