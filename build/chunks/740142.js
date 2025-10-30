/** Chunk was on web.js **/
/** chunk id: 740142, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk894186 = require("./894186.js"),
  Chunk727916 = require("./727916.js"),
  Chunk424046 = require("./424046.js");
class o extends Chunk727916.Z {
  innerPattern(e) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = e.refDate,
      r = t[2].toLowerCase(),
      i = e.createParsingComponents();
    return (0, a.hO)(i, n), o.extractTimeComponents(i, r)
  }
  static extractTimeComponents(e, t) {
    switch (t) {
      case "morgen":
        e.imply("hour", 6), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.AM);
        break;
      case "vormittag":
        e.imply("hour", 9), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.AM);
        break;
      case "mittag":
      case "mittags":
        e.imply("hour", 12), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.AM);
        break;
      case "nachmittag":
        e.imply("hour", 15), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.PM);
        break;
      case "abend":
        e.imply("hour", 18), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.PM);
        break;
      case "nacht":
        e.imply("hour", 22), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.PM);
        break;
      case "mitternacht":
        e.get("hour") > 1 && e.addDurationAsImplied({
          day: 1
        }), e.imply("hour", 0), e.imply("minute", 0), e.imply("second", 0), e.imply("meridiem", r.GG.AM)
    }
    return e
  }
}