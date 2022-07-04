// 비밀번호 검사 관련
export const ERROR_PASSWORD_LENGTH = 'ERROR_PASSWORD_LENGTH';
export const ERROR_UPPERCASE_TEXT = 'ERROR_UPPERCASE_TEXT';
export const ERROR_SPECIAL_TEXT = 'ERROR_SPECIAL_TEXT';

// export const passwordErrorCodes = {
//   [ERROR_PASSWORD_LENGTH]: '비밀번호는 8글자 이상',
//   [ERROR_UPPERCASE_TEXT]: '영문 대문자 최소 1글자 이상 포함',
//   [ERROR_SPECIAL_TEXT]: '특수문자 최소 1글자 이상 포함',
// };
export const passwordErrorMsg = [
  '비밀번호는 8글자 이상',
  '영문 대문자 최소 1글자 이상 포함',
  '특수문자 최소 1글자 이상 포함',
];
// 어드민 계정 관련
export const adminAccountInfo = {
  email: 'test@test.com',
  password: 'HelloWorld!',
};
