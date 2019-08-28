# Brad Traversy's Mongo + Express tutorial

_This demo app follows Brad Traversy's training series called [MERN Stack Front To Back: Full Stack React, Redux & Node.js](https://www.udemy.com/mern-stack-front-to-back/?couponCode=TRAVERSYMEDIA), see its demo video [here](https://youtu.be/B1wDyQBBafQ)_.

## How to run

Create a `config/keys.js` file like:

``` javascript
module.exports = {
  mongoURI: 'mongodb+srv://soma:PASSWORD@devconnector-abcde.mongodb.net/test?retryWrites=true&w=majority',
  secretOrKey: 'secret'
};
```

Go to your MongoDB Atlas Cluster [you've created](https://youtu.be/KKyag6t98g8), click connect API and copy connection string to `mongoURI` field in `key.js`. Then write your password into it.
