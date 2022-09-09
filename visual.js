//https://itnext.io/how-to-build-a-floating-label-input-field-f9b21669fe2f
const floatInput = document.querySelector('input')
const float = document.querySelector('.float')

floatInput.addEventListener('focus', () => {
  float.classList.add('active');
});
floatInput.addEventListener('blur', () => {
  float.classList.remove('active');
}); 

//ERRO: O CSS SO ALTERA 1 LABEL