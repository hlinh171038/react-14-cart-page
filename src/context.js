import React,{useContext,useState,useReducer,useEffect} from 'react'
import data from './data'
import reducer from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const initialValue={
    loading:false,
    cart:data,
    total:0,
    amount:0
}
const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialValue)

    const clearAllCarts =()=>{
        dispatch({type:'CLEAR_ALL_CARTS'})
    }
    const cartRemoveItem=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id});
    }
    const increseAmount = (id)=>{
        dispatch({type:"INCRESE_AMOUNT",payload:id})
    }
    const decreseAmount = (id)=>{
        dispatch({type:"DECRESE_AMOUNT",payload:id})
    }
    const toggle =(id,type) =>{
        dispatch({type:"TOGGLE_AMOUNT",payload:{id,type}})
    }
    const fetchingApi = async()=>{
        dispatch({type:"LOADING"})
        let response = await fetch(url);
        let cartApi = await response.json();
        dispatch({type:"DISPLAY_CARTS",payload:cartApi})
    }
    useEffect(()=>{
        dispatch({type:"GET_TOTALS"})
    },[state.cart])

    useEffect(()=>{
        fetchingApi()
    },[])

   return  <AppContext.Provider 
            value={{
            ...state,
            clearAllCarts,
            cartRemoveItem,
            increseAmount,
            decreseAmount,
            toggle
            }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
