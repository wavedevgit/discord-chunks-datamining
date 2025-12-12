/** Chunk was on web.js **/
/** chunk id: 467484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk894186 = require("./894186.js"),
  Chunk727916 = require("./727916.js"),
  Chunk424046 = require("./424046.js");
let a = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class s extends Chunk727916.Z {
  innerPattern() {
    return a
  }
  innerExtract(e, t) {
    let n = e.refDate,
      i = e.createParsingComponents();
    switch (t[1].toLowerCase()) {
      case "pomeriggio":
        i.imply("meridiem", r.GG.PM), i.imply("hour", 15);
        break;
      case "sera":
      case "notte":
        i.imply("meridiem", r.GG.PM), i.imply("hour", 20);
        break;
      case "mezzanotte":
        let a = new Date(n.getTime());
        a.setDate(a.getDate() + 1), (0, o.cz)(i, a), (0, o.hO)(i, a), i.imply("hour", 0), i.imply("minute", 0), i.imply("second", 0);
        break;
      case "mattina":
        i.imply("meridiem", r.GG.AM), i.imply("hour", 6);
        break;
      case "mezzogiorno":
        i.imply("meridiem", r.GG.AM), i.imply("hour", 12)
    }
    return i
  }
}