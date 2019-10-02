const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};
  const emptyFieldError = ' field is required';

  data.title =   !isEmpty(data.title)   ?  data.title : '';
  data.company = !isEmpty(data.company) ?  data.company : '';
  data.from =    !isEmpty(data.from)    ?  data.from : '';

  if(Validator.isEmpty(data.title)) errors.title = 'Title' + emptyFieldError;
  if(Validator.isEmpty(data.company)) errors.company = 'Company' + emptyFieldError;
  if(Validator.isEmpty(data.from)) errors.from = 'From' + emptyFieldError;

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
