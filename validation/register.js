const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  const LengthError = " length must be between ";
  const emptyFieldError = ' field is required';
  const invalidFieldError = ' is invalid';

  data.name = !isEmpty(data.name) ?  data.name : '';
  data.email = !isEmpty(data.email) ?  data.email : '';
  data.password = !isEmpty(data.password) ?  data.password : '';
  data.password2 = !isEmpty(data.password2) ?  data.password2 : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) errors.name = 'Name' + LengthError + '2 and 30';
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) errors.password = 'Password' + LengthError + '6 and 30';

  if(Validator.isEmpty(data.name)) errors.name = 'Name' + emptyFieldError;
  if(Validator.isEmpty(data.email)) errors.email = 'Email' + emptyFieldError;
  if(!Validator.isEmail(data.email)) errors.email = 'Email' + invalidFieldError;
  if(Validator.isEmpty(data.password)) errors.password = 'Password' + emptyFieldError;

  if(!Validator.equals(data.password, data.password2)) { errors.password2 = 'Passwords must match';}

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
