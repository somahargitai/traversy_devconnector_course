const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  const emptyFieldError = ' field is required';
  const invalidFieldError = ' is invalid';

  data.email = !isEmpty(data.email) ?  data.email : '';
  data.password = !isEmpty(data.password) ?  data.password : '';

  if(!Validator.isEmail(data.email)) errors.email = 'Email' + invalidFieldError;
  if(Validator.isEmpty(data.email)) errors.email = 'Email' + emptyFieldError;
  if(Validator.isEmpty(data.password)) errors.password = 'Password' + emptyFieldError;

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
