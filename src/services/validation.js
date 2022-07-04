export function checkEmailValidation(email) {
  const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])+$/;
  const isValid = regex.test(email);
  return isValid;
}

export function checkPasswordValidation(password) {
  const errorCodes = []; 

  // [1] 비밀번호 길이 8자리 이상
  if (password.length < 8) {
    errorCodes.push(1);
  }

  // [2] 대문자 포함 여부
  if (password.search(/[A-Z]/) < 0) {
    errorCodes.push(2);
  }
  
  // [3] 특수문자 포함 여부
  if (password.search(/[!@#$%^&*]/) < 0) {
    errorCodes.push(3);
  }

  return errorCodes;
} 

export const passwordErrorCodes = {
  1: '비밀번호는 8글자 이상',
  2: '영문 대문자 최소 1글자 이상 포함',
  3: '특수문자 최소 1글자 이상 포함'
}