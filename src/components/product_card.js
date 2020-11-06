import React from 'react';
import {Card,CardBody,CardText, Button, CardTitle, CardImg} from 'reactstrap'

const ProductCard = ({product,addToCart})=>{
    return (
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" src={product.photo.small}/>
            <CardBody className="text-center">
                <CardTitle>{product.name}</CardTitle>
                <CardText className="secondary">Price: ${product.price}</CardText>
                <Button color="success" onClick={()=>addToCart(product)}>Buy Now</Button>
            </CardBody>
        </Card>
    )
}

export default ProductCard;