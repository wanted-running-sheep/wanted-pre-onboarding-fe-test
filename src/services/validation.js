import {
  ERROR_PASSWORD_LENGTH,
  ERROR_UPPERCASE_TEXT,
  ERROR_SPECIAL_TEXT,
} from '../constants';

export function checkEmailValidation(email) {
  const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])+$/;
  const isValid = regex.test(email);
  return isValid;
}

export function checkPasswordValidation(password) {
  const errorCodes = [];

  // [1] 비밀번호 길이 8자리 이상
  if (password.length < 8) {
    errorCodes.push(ERROR_PASSWORD_LENGTH);
  }

  // [2] 대문자 포함 여부
  if (password.search(/[A-Z]/) < 0) {
    errorCodes.push(ERROR_UPPERCASE_TEXT);
  }

  // [3] 특수문자 포함 여부
  if (password.search(/[!@#$%^&*]/) < 0) {
    errorCodes.push(ERROR_SPECIAL_TEXT);
  }

  return errorCodes;
}
