import { createContext,useEffect,useState } from "react";
import axios from "axios"
import { message } from "antd"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = `http://localhost:4000`
    const [token,setToken] = useState("")
    const [food_list,setFoodList] = useState([])
    const [category, setCategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState(null)

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
            message.success("Item Add successfully")
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            message.success("Item Add successfully")
        }

        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }

    }
    const findItem = async (searchTerm) => {
        const response = await axios.post(url+`/api/food/search?name=${searchTerm}`);
        if(response.data.success){
            const food = response.data.food.map(item => item.name)
            setCategory(food.join(', '))
        }else{
            console.log("Failed to fetch food list")
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
            message.success("Item removed successfully")
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item];
                
                
            }

        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        if(response.data.success){
            setFoodList(response.data.data)
        }else{
            console.log("Failed to fetch food list")
        }
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+`/api/cart/get`,{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        fetchFoodList();
        async function loadData(){
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[]);

    const contexValue = {
        category,
        searchTerm, setSearchTerm,
        setCategory,
        findItem,
        food_list,
        cartItems,
        addToCart,
        setCartItems,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,setToken

    }

    return (
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
