//  listen to the html actions like click
document.addEventListener('DOMContentLoaded', () =>{
    //create a function for update the total price
    const updatedTotal = () =>{
        //select the cart-items
        const cartItems = document.querySelectorAll('.cart-item')
        //intialize the total
        let total = 0

        //select from the cartitems the item and its value
        cartItems.forEach(item =>{
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', '').trim());
            const quantity = parseInt(item.querySelector('.quantity').textContent);

            //caltulate the total price
            total += price * quantity;
        })
        //Update the total price
        document.querySelector('.total').textContent = `${total}$`
    }
    //select the cart-item
    const cartItems = document.querySelectorAll('.cart-item')
    //loop item in items 
    cartItems.forEach(item =>{
        //select the btns
        const plus = item.querySelector('.plus')
        const sub = item.querySelector('.sub')
        const fav = item.querySelector('.fav')
        const del = item.querySelector('.del')

        //add quantity element
        const quantityE = item.querySelector('.quantity')

        //listen to the plus btn
        plus.addEventListener('click', () =>{
            //update the quantity content + 1
            quantityE.textContent = parseInt(quantityE.textContent) + 1
            //call the func to update the total           
            updatedTotal()
        })

        //listen to the sub btn 
        sub.addEventListener('click', () =>{
            //update the quantity content  
            const currentQ = parseInt(quantityE.textContent)
            //add condition if
            if(currentQ > 1){
                quantityE.textContent = currentQ - 1
            }
            //call the func to update the total
            updatedTotal()
        })

        //listen to fav btn
        fav.addEventListener('click', () => {
            //change the color btn when i click
            //know the classList.toggle!!!!!
            fav.classList.toggle('active')
        })
            
        //listen the delete btn
        del.addEventListener('click', () => {
            //delete the item
            item.remove()
            updatedTotal()
        })
    })
    updatedTotal();
})
