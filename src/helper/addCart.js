import { toast } from 'react-toastify';

const addCart = (itemList,item) => {
    var val=itemList.findIndex(function(itm){
        return item.id === itm.id;
    });
    if(val!==-1){
        toast("Item Added",{type:"error"})   
        return itemList
    }
    return [...itemList,item];
}
 
export default addCart;