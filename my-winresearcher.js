function winResearcher(srcText, preserveNumbers) {
  // replace and reorder WinResearcher font ASCII
  // result is Myanmar Unicode text and numbers
  var replacements = [
    [/OD/g, 'ဦ'],
    [/aj(.)/g, '$1ြေ'],
    [/aM(.)/g, '$1ြေ'],

    [/\`(.)/g, '$1ြ'],
    [/\&/g, 'ရ'],
    [/\*/g, 'ဂ'],
    [/ñ/g, 'ည'],
    [/¾/g, 'ဂ္ဂ'],
    [/\#/g, 'ဋ'],
    [/®/g, '္မ'],
    [/Ö/g, '္ဏ'],
    [/Ó/g, 'ဉာ'],
    [/é/g, '္န'],
    [/½/g, 'ရ'],
    [/ö/g, '္စ'],
    [/Ü/g, '္ပ'],
    [/(.)Ð/g, 'င်္$1ီ'],
    // -
    // =
    [/q/g, 'ဆ'],
    [/w/g, 'တ'],
    [/e/g, 'န'],
    [/r/g, 'မ'],
    [/t/g, 'အ'],
    [/y/g, 'ပ'],
    [/u/g, 'က'],
    [/i/g, 'င'],
    [/o/g, 'သ'],
    [/p/g, 'စ'],
    [/\[/g, 'ဟ'],
    [/\\/g, '၏'],

    [/a(.)/g, '$1ေ'],
    [/s/g, 'ျ'],
    [/d/g, 'ိ'],
    [/f/g, '်'],
    [/g/g, 'ါ'],
    [/h/g, '့'], // ?
    [/j(.)/g, '$1ြ'], //?
    [/k/g, 'ု'],
    [/l/g, 'ူ'], // ?
    [/;/g, 'း'],
    [/\'/g, 'ဒ'],

    [/z/g, 'ဖ'],
    [/x/g, 'ထ'],
    [/c/g, 'ခ'],
    [/v/g, 'လ'],
    [/b/g, 'ဘ'],
    [/n/g, 'ည'],
    [/m/g, 'ာ'],
    [/\,/g, 'ယ'],
    [/\./g, '့'],
    [/\//g, '။'],
    [/\^/g, '/'],

    [/Q/g, 'ှ'],
    [/W/g, 'ှ'],
    [/E/g, 'န'],
    [/R/g, 'ျွ'],
    [/T/g, 'ွှ'],
    [/Y/g, '့'],
    [/U/g, '့'],
    [/I/g, 'ှု'],
    [/O/g, 'ဥ'],

    [/P/g, 'ဏ'],
    [/\{/g, 'ဧ'], // looks like c in ၏
    [/\}/g, '\''],
    [/\|/g, 'ဠ'],

    [/A/g, 'ဗ'],
    [/S/g, 'ှ'],
    [/D/g, 'ီ'],
    [/F/g, 'င်္'],
    [/G/g, 'ွ'],
    [/H/g, 'ံ'],
    [/J/g, 'ဲ'],
    [/K/g, 'ု'],
    [/L/g, 'ူ'],
    [/:/g, 'ါ်'],
    [/"/g, 'ဓ'],
    [/Z/g, 'ဇ'],
    [/X/g, 'ဌ'],
    [/C/g, 'ဃ'],
    [/V/g, 'ဠ'],
    [/B(.)/g, '$1ြ'],
    [/N(.)/g, '$1ြ'],
    [/M(.)/g, '$1ြ'],
    [/\<(.)/g, '$1ြွ'],
    [/\>(.)/g, '$1ြွ'],
    [/\?/g, '၊'],
    [/\]/g, '\''],
    [/´/g, '္ဒ'],
    [/Å|å/g, '္တ'],
    [/ú/g, '္က'],
    [/¬/g,  '္ထ'],
    [/©/g,  '္ခ'],
    [/§/g, 'ှ'],
    [/Á/g,  '္ဗ'],
    [/Æ/g, '္ဇ']

    // still unplaced?
    //  ၎    ဩ ဿ  ဈ
  ];

  // by default, replace numbers
  if (!preserveNumbers) {
    replacements = replacements.concat([
      [/1/g, '၁'],
      [/2/g, '၂'],
      [/3/g, '၃'],
      [/4/g, '၄'],
      [/5/g, '၅'],
      [/6/g, '၆'],
      [/7/g, '၇'],
      [/8/g, '၈'],
      [/9/g, '၉'],
      [/0/g, 'ဝ']
    ]);
  }

  for (var r = 0; r < replacements.length; r++) {
    srcText = srcText.replace(replacements[r][0], replacements[r][1]);
  }

  // at this point you have all diacritics, but they may be out of order
  // go through each char to sort
  var outText = '';
  var diacritics = [
    'ြ',
    'ျ',
    'ွ',
    'ှ',
    'ျ',
    'ေ',
    'ဲ',
    'ာ',
    'ိ',
    'ူ',
    'ု',
    'ံ',
    '်',
    '့',
    'း'
  ];

  var diacriticBuffer = [];
  for (var c = 0; c < srcText.length; c++) {
    if (diacritics.indexOf(srcText[c]) === -1) {
      if (diacriticBuffer.length) {
        diacriticBuffer.sort(function (a, b) {
          return diacritics.indexOf(a) - diacritics.indexOf(b);
        });
        outText += diacriticBuffer.join("");
        diacriticBuffer = [];
      }
      outText += srcText[c];
    } else if (diacriticBuffer.indexOf(srcText[c]) === -1) {
      diacriticBuffer.push(srcText[c]);
    }
  }
  outText += diacriticBuffer.join("");

  // this final Pali character was giving me some trouble
  return outText.replace(/(\W)င်္/g, 'င်္$1');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = winResearcher;
}
