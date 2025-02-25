const cart = {}
const cartItems = document.querySelector('#cart-items')
const priceBox = document.querySelector('#cart-total h3')
let totalPrice = 0.00
const setPrice = ()=>{
    totalPrice = Number(totalPrice.toFixed(2))
    priceBox.innerHTML = `Total: $${totalPrice}`
}
const addToCart = (name, price)=>{
    if(cart[name]){
        cart[name]()
    }else{
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')
        const nameSpan = document.createElement('span')
        nameSpan.innerHTML = name
        const quantityControls = document.createElement('div')
        quantityControls.classList.add('quantity-controls')
        const minusBtn = document.createElement('button')
        const plusBtn = document.createElement('button')
        const quantitySpan = document.createElement('span')
        const removeBtn = document.createElement('button')
        
        let quantity = 1
        minusBtn.innerHTML= '-'
        plusBtn.innerHTML= '+'
        removeBtn.innerHTML= 'Remove'
        quantityControls.append(minusBtn, quantitySpan, plusBtn, removeBtn)
        
        const setQuantity =  ()=>{
            quantitySpan.innerHTML= quantity
        }
        totalPrice += price
        const removeAll =  ()=>{
            cartItem.remove()
            delete cart[name]
            totalPrice -= price * quantity
            setPrice()

            if(Object.keys(cart).length===0){
                cartItems.innerHTML = '<div class="empty-cart">Cart is empty</div>'
            }
        }
        minusBtn.addEventListener('click', ()=>{
            quantity -= 1
            totalPrice -= price
            if(quantity===0){
                removeAll()
            }else{
                setQuantity()
                setPrice()
            }
        })
        const addItem = ()=>{
            totalPrice += price
            quantity +=1
            setQuantity()
            setPrice()
        }
        plusBtn.addEventListener('click', addItem)
        removeBtn.addEventListener('click', removeAll)
        cart[name] = addItem
        cartItem.appendChild(nameSpan)
        cartItem.appendChild(quantityControls)
        if(Object.keys(cart).length===1 && quantity===1){
            cartItems.innerHTML = ''
        }
        cartItems.appendChild(cartItem)
        setQuantity()
        setPrice()
    }
}