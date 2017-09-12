## my-winresearcher

[![Greenkeeper badge](https://badges.greenkeeper.io/mapmeld/my-winresearcher.svg)](https://greenkeeper.io/)

Myanmar-WinResearcher is a simple NodeJS module for inputting text
that uses ASCII characters and the WinResearcher font to appear as Myanmar text,
and outputting it as Unicode-compatible Myanmar text.

## Usage

Available for browser and NodeJS.

After loading the script:

```javascript
// convert all characters and numbers
var myTownship = winResearcher('vSnf;ul;');
> 'လှည်းကူး'

var myAddress = winResearcher('101 aumhu&dwf vSnf;ul;');
> '၁ဝ၁ ကော့ကရိတ် လှည်းကူး'

// avoid converting numbers
myAddress = winResearcher('101 aumhu&dwf vSnf;ul;', true);
> '101 ကော့ကရိတ် လှည်းကူး'
```

For NodeJS:

```javascript
var winResearcher = require('my-winresearcher');
var myTownship = winResearcher('vSnf;ul;');
```

For command line:

```bash
npm install -g my-winresearcher
winresearcher input.txt output.txt

# output directly to command line
winresearcher input.txt
> လှည်းကူး
```

Test it out on the web:

http://mapmeld.github.io/my-winresearcher/

## License

Open source, MIT license
