# Brad Traversy's Mongo + Express tutorial

## How to run

Create a `config/keys.js` file like:

``` javascript
module.exports = {
  mongoURI: 'mongodb+srv://soma:PASSWORD@devconnector-abcde.mongodb.net/test?retryWrites=true&w=majority',
  secretOrKey: 'secret'
};
```

Go to mongoDB Atlas cloud, clusters, click connect API and copy connection string to `mongoURI`. Then write your password into it.
