

// arrays
let cart = []

// add item function
function add_item(item) {
   cart = cart.push(item)
   return cart
}

// add many items
function add_items(item_list) {
    cart = cart.concat(item_list)
    return cart
}


// remove item function
function remove_item(item) {
    cart.splice( cart.indexOf(item), 1 )
}


// get all items length
function get_length() {
    return cart.length
}


// check if item exists
function exists(item) {
   return cart.indexOf(item) > -1
   // OR
   // return cart.includes(item)
}


// classes and objects


let cart_amazon = []