import Typed from 'typed.js';

let options = {
  strings: ['Je suis créatif', 'Je suis altruiste', 'Je suis enthousiaste', 'Je suis un peu fou parfois...', 'Je suis toujours plein d\'idées', 'Je suis curieux', 'Je suis passionné'],
  typeSpeed: 50,
  smartBackspace: true, // Default value
  loop: true
};

let typed = new Typed('.element', options);
