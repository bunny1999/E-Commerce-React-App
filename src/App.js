import React,{useEffect,useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'reactstrap'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import Axios from 'axios'
import './App.css';
import {ProductReducer,CartReducer} from './context/reducer';
import {ProductContext, CartContext} from './context/context';
import {random,commerce} from 'faker'
import Products from './components/Products';
import Cart from './components/Cart'

function App() {
  const [products,dispatchProducts] = useReducer(ProductReducer,[]);
  const [items, dispatchItems] = useReducer(CartReducer, [])


  var url = "https://api.jsonbin.io/b/5fa2283bce4aa228955583d5";

  const featch= async ()=>{
    const responce = await Axios.get(url);
    const {data} = responce;
    const {photos} = data;
    const products=photos.map(photo=>({
        "name":random.word(),
        "id":random.uuid(),
        "photo":{
          "small":photo.src.medium,
          "tiny":photo.src.tiny
        },
        "price":commerce.price()
      })
    );
    dispatchProducts({
      payload:products
    })
  }

  useEffect(() => {
    featch();
  }, [])

  return (
    <div className="App">
      <ToastContainer/>
      <ProductContext.Provider value={{products}}>
        <CartContext.Provider value={{items,dispatchItems}}>
          <Row>
            <Col md={8}>
              <Products/>
            </Col>
            <Col md={4}>
              <Cart/>
            </Col>
          </Row>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
