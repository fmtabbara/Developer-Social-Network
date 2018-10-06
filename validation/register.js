const Validator = require('validator');
const isEmpty = require('./isEmpty');
module.exports = function validateRegistrationInput(data) {
  let errors = {};

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Names must be between 2 and 30 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
