## my-winresearcher

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

## License

Open source, MIT license
