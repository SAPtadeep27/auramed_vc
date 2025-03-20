const adjs = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','z'
];

const nouns = [
  'wat', 'ri', 'br', 'mo', 'ra', 'wi', 'se', 'mor',
  'sno', 'la', 'su', 'pdi', 'sha', 'le', 'da', 'gli',
  'fo', 'hi', 'clo', 'mea', 'su', 'gla', 'bi', 'b',
  'bu', 'bsh', 'de', 'du', 'fid', 'fre', 'owr', 'fiy',
  
];

module.exports = () => {
  const adj = adjs[Math.floor(Math.random() * adjs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const MIN = 1000;
  const MAX = 9999;
  const num = Math.floor(Math.random() * ((MAX + 1) - MIN)) + MIN;

  return `${adj}${noun}${num}`;
};
