import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import content from 'bundle-text:./content.md';


document.addEventListener('DOMContentLoaded', function(){

   let introTemplate = document.getElementById('slides-content');
   introTemplate.textContent = content;

   let deck = new Reveal({
      slideNumber: 'c/t',
      hashOneBasedIndex: true,
      hash: true,
      loop: true,
      transition: 'fade',
      showNotes: false,
      plugins: [ Markdown, Notes]
   })
   deck.initialize();
});
