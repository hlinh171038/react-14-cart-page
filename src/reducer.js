const reducer = (state,action) =>{
    if(action.type ==='CLEAR_ALL_CARTS'){
        return {...state,cart:state.cart = []}
    }
    if(action.type ==="REMOVE_ITEM"){
        return {...state, cart:state.cart.filter(cartItem =>cartItem.id !== action.payload)}
    }
    if(action.type ==="INCRESE_AMOUNT"){
        let tempCart =state.cart.map(item=>{
            if(item.id ===action.payload){
                return {...item,amount:item.amount+1}
            }
            return item
        });
        return {...state,cart:tempCart}
    
    }
    if(action.type==="DECRESE_AMOUNT"){
        return {...state,cart:state.cart.map(item=>{
            if(item.id === action.payload){
                return {...item,amount:item.amount -1}
            }
            return item
        }).filter(item=>item.amount >0)}
    }
    if(action.type === "GET_TOTALS"){
        let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
            const {price,amount} = cartItem;
            cartTotal.amount +=amount;
            cartTotal.total +=price*amount;
            return cartTotal
        },{
            total:0,
            amount:0
        })
        total = parseFloat(total.toFixed(2))
        return {...state,total,amount}
    }
    if(action.type ==="LOADING"){
        return {...state,loading:true}
    }
    if(action.type === "DISPLAY_CARTS"){
        return {...state,cart:action.payload,loading:false}
    }
    if(action.type ==="TOGGLE_AMOUNT"){
        let tempCart = state.cart.map(cartItem =>{
            if(cartItem.id ===action.payload.id){
                if(action.payload.type ==='inc'){
                    return {...cartItem,amount:cartItem.amount +1}
                }
                if(action.payload.type ==='dec'){
                    return {...cartItem,amount:cartItem.amount -1}
                }
            }
            return cartItem
        }).filter(item =>item.amount>0)
        return {...state,cart:tempCart}
    }
    if(action.type ==="UPDATE_PRICE_ITEM"){
        let tempCart = state.cart.map(item=>{
            if(item.id === action.payload){
                const tempPrice = 500;
                return {...item,price:tempPrice}
            }
        })
        return {...state,cart:tempCart}
    }
    return state
}
export default reducer