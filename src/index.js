import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';


import content from 'bundle-text:./content.md';

// Loaded as a script in the index.html
const EmbedTweet = window.RevealEmbedTweet;

document.addEventListener('DOMContentLoaded', function(){

   let introTemplate = document.getElementById('slides-content');
   introTemplate.textContent = content;

   let deck = new Reveal({
      slideNumber: 'c/t',
      hashOneBasedIndex: true,
      hash: true,
      transition: 'fade',
      showNotes: false,
      plugins: [ Markdown, Notes, Highlight, EmbedTweet]
   })
   deck.initialize();
});
