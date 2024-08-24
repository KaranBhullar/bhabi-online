function generate(strLen) {
  let code = '';
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsetLen = charset.length
  for(let i = 0; i < strLen; i++) {
    code += charset.charAt(Math.floor(Math.random() * charsetLen));

  }
  console.log('this is the code ' + code)
  return code
}

export default generate;