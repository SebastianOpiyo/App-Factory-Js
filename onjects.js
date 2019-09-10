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

    delete: function(item) {
        this.items  
    },

    all: function(item) {
        
    }

}

