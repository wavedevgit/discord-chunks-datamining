/** Chunk was on web.js **/
/** chunk id: 620695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk322811 = require("./322811.js"),
  Chunk355418 = require("./355418.js"),
  Chunk658809 = require("./658809.js");
class o extends Chunk355418.c {
  innerPattern(e) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = e.refDate,
      r = t[2].toLowerCase(),
      i = e.createParsingComponents();
    return (0, a.A4)(i, n), o.extractTimeComponents(i, r)
  }
  static extractTimeComponents(e, t) {
    switch (t) {
      case "morgen":
        e.imply("hour", 6), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.FF.AM);
        break;
      case "vormittag":
        e.imply("hour", 9), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.FF.AM);
        break;
      case "mittag":
      case "mittags":
        e.imply("hour", 12), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.FF.AM);
        break;
      case "nachmittag":
        e.imply("hour", 15), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.FF.PM);
        break;
      case "abend":
        e.imply("hour", 18), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.FF.PM);
        break;
      case "nacht":
        e.imply("hour", 22), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.FF.PM);
        break;
      case "mitternacht":
        e.get("hour") > 1 && e.addDurationAsImplied({
          day: 1
        }), e.imply("hour", 0), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.FF.AM)
    }
    return e
  }
}