
// defining

let object_name = {
    age: 24,
    property_name_2: 'value'
}

// access

// console.log(object_name.property_name_2)
// console.log(object_name['age'])


// var -- global 
// let -- bock

// function fx() {
//     let name = 'me'
// }
// name

var user = {
    age: 23, 
    name: 'someone',
    password: 'someone123',
    major: 'APT',
    likes: [ 'music', 'booze' ],
    hates: [ 'classes' ],

    is_authed: false,

    login: function() {
        console.log('login user ', this.name)
    },
    authenticate: function(name, password) {
        this.is_authed = name == this.name && password == this.password
    }
}

// let name = "yusuf"
// console.log(`${name} likes music`)

// console.log(user.likes)

// user.likes.map((like)=> {
//     // console.log('likes ', like)
//     console.log(`likes #${like}`)
// })

let user_likes_hashtags = user.likes.map((like)=> {
    return `#${like}`
})

// console.log(user_likes_hashtags)
// user_likes_hashtags.forEach((hashtag)=> {
//     get_tweets(hashtag),
//     get_feeds(hashtag)
// })

//  let is_authed = user.authenticate('someone', 'someo56ne123')

//  if( is_authed ) {
//      console.log('suceess logiin in');
     
//  }else{
//      console.log('go away');
     
//  }
 

let User = function(username, userpassword, userage) {
    
    this.age = userage
    this.name = username
    this.password = userpassword
    this.major = 'apt'

    is_authed = false

}

let yusuf = new User('yusuf yusuf', '123', 45) 
console.log(yusuf.name)


let cart = {

    items: [],

    add: function(item) {
        this.items.push(item)
    },

    add_many: function(item_list) {
        this.items = this.items.concat(item_list)
    },

    delete: function(item) {
        this.items.splice(this.items.indexOf(item), 1)  
    },

    all: function(item) {
        return this.items
    },

    exists: function(item) {
        return this.items.includes(item)
        // return this.items.indexOf(item) > -1
    }

}


const ShoppingCart = function() {

   this.items = []

   // add
   this.add = function(item) {
        this.items.push(item)
    }
   
   
   // delete 
    this.delete = function(item) {
        this.items.splice(this.items.indexOf(item), 1)  
    }

   // get all 
   this.all = function(item) {
        return this.items
    }


   // check if exists 
   this.exists= function(item) {
        return this.items.includes(item)
        // return this.items.indexOf(item) > -1
    }


}


let shopping_cart = new ShoppingCart()

console.log('starting tests..');

(shopping_cart.all().length == 0) ? console.log('passed 1') : console.log('failed 1')

shopping_cart.add("laptop")

shopping_cart.all().length == 1 ? console.log('passed 2') : console.log('failed 2')


shopping_cart.exists("laptop") == true ? console.log('passed 3') : console.log('failed 3')

shopping_cart.delete("laptop")

shopping_cart.all().length == 0 ? console.log('passed 4') : console.log('failed 4')

shopping_cart.exists("laptop") == false ? console.log('passed 5') : console.log('failed 5')



// assert( shopping_cart.all().length == 0 )

// shopping_cart.add("laptop")

// assert( shopping_cart.all().length == 1 )

// assert( shopping_cart.exists("laptop") == true )

// shopping_cart.delete("laptop")

// assert( shopping_cart.all().length == 0 )
// assert( shopping_cart.exists("laptop") == false )

console.log('tests completed');
