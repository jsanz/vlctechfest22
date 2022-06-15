import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import slidesText from 'bundle-text:./slides.md';


document.addEventListener('DOMContentLoaded', function(){
   let slidesTemplate = document.getElementById('slides-content');
   slidesTemplate.textContent = slidesText;

   let deck = new Reveal({
      slideNumber: 'c/t',
      hashOneBasedIndex: true,
      hash: true,
      loop: true,
      transition: 'fade',
      showNotes: false,
      plugins: [ Markdown ]
   })
   deck.initialize();
});
