const removeCart = (itemList,id) =>{
    return itemList.filter(item=> item.id !== id);
}

export default removeCart;