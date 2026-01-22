/** Chunk was on 44476 **/
/** chunk id: 753562, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk303527 = require("./303527.js");
let r = {
  ordinalNumber: (0, require("./722023.js").A)({
    matchPattern: /^(\d+)e?/i,
    parsePattern: /\d+/i,
    valueCallback: function(e) {
      return parseInt(e, 10)
    }
  }),
  era: (0, Chunk303527.A)({
    matchPatterns: {
      narrow: /^([vn]\.? ?C\.?)/,
      abbreviated: /^([vn]\. ?Chr\.?)/,
      wide: /^((voor|na) Christus)/
    },
    defaultMatchWidth: "wide",
    parsePatterns: {
      any: [/^v/, /^n/]
    },
    defaultParseWidth: "any"
  }),
  quarter: (0, Chunk303527.A)({
    matchPatterns: {
      narrow: /^[1234]/i,
      abbreviated: /^K[1234]/i,
      wide: /^[1234]e kwartaal/i
    },
    defaultMatchWidth: "wide",
    parsePatterns: {
      any: [/1/i, /2/i, /3/i, /4/i]
    },
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1
    }
  }),
  month: (0, Chunk303527.A)({
    matchPatterns: {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
      wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
    },
    defaultMatchWidth: "wide",
    parsePatterns: {
      narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
      any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
    },
    defaultParseWidth: "any"
  }),
  day: (0, Chunk303527.A)({
    matchPatterns: {
      narrow: /^[zmdwv]/i,
      short: /^(zo|ma|di|wo|do|vr|za)/i,
      abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
      wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
    },
    defaultMatchWidth: "wide",
    parsePatterns: {
      narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i],
      any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]
    },
    defaultParseWidth: "any"
  }),
  dayPeriod: (0, Chunk303527.A)({
    matchPatterns: {
      any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i
    },
    defaultMatchWidth: "any",
    parsePatterns: {
      any: {
        am: /^am/i,
        pm: /^pm/i,
        midnight: /^middernacht/i,
        noon: /^het middaguur/i,
        morning: /ochtend/i,
        afternoon: /middag/i,
        evening: /avond/i,
        night: /nacht/i
      }
    },
    defaultParseWidth: "any"
  })
}