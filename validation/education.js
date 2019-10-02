const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};
  const emptyFieldError = ' field is required';

  data.school =   !isEmpty(data.school)   ?  data.school : '';
  data.degree = !isEmpty(data.degree) ?  data.degree : '';
  data.from =    !isEmpty(data.from)    ?  data.from : '';
  data.fieldofstudy =    !isEmpty(data.fieldofstudy)    ?  data.fieldofstudy : '';

  if(Validator.isEmpty(data.school)) errors.school = 'School' + emptyFieldError;
  if(Validator.isEmpty(data.degree)) errors.degree = 'Degree' + emptyFieldError;
  if(Validator.isEmpty(data.from)) errors.from = 'From' + emptyFieldError;
  if(Validator.isEmpty(data.fieldofstudy)) errors.fieldofstudy = 'fieldofstudy' + emptyFieldError;

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
