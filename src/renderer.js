const marked = require('marked');

const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');
const newFileButton = document.querySelector('#new-file');
const openFileButton = document.querySelector('#open-file');
const saveMarkdownButton = document.querySelector('#save-markdown');
const revertButton = document.querySelector('#revert');
const saveHtmlButton = document.querySelector('#save-html');
const showFileButton = document.querySelector('#show-file');
const openInDefaultButton = document.querySelector('#open-in-default');

const renderMarkdownToHtml = markdown => {
  htmlView.innerHTML = marked.marked(markdown);
  // console.log(marked.Parser('# Marked in Node.js\n\nRendered by **marked**.'))
  // console.log(marked.marked(markdown));
};

markdownView.addEventListener('keyup', event => {
  const currentContent = event.target.value;
  renderMarkdownToHtml(currentContent);
  // console.log(currentContent);
});