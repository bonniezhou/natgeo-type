import {MDCTextField} from '@material/textfield';
import MDCTypography from './typography';

// for index.html
const headlines = document.querySelectorAll('.natgeo-headline');
headlines.forEach(headlineElement => new MDCTypography(headlineElement));

// for main.html
const typography = new MDCTypography(document.querySelector('.natgeo-headline'));
new MDCTextField(document.querySelector('.mdc-text-field'));
const input = document.getElementById('article-title-input');
input.addEventListener('keydown', (evt) => {
  if ((evt.key === 'Enter' || evt.keyCode === 13) && input.value !== '') {
    typography.text = input.value;
    input.value = '';
  }
});
