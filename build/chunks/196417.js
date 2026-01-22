/** Chunk was on web.js **/
/** chunk id: 196417, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk355418 = require("./355418.js"),
  Chunk322811 = require("./322811.js"),
  Chunk658809 = require("./658809.js");
let s = 1,
  o = 2;
class l extends Chunk355418.c {
  innerPattern(e) {
    return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = t[s].toLowerCase(),
      r = t[o].toLowerCase(),
      l = e.createParsingComponents(),
      c = e.refDate;
    switch (n) {
      case "gisteren":
        let u = new Date(c.getTime());
        u.setDate(u.getDate() - 1), (0, a.Pl)(l, u);
        break;
      case "van":
        (0, a.Pl)(l, c);
        break;
      case "morgen":
        let d = new Date(c.getTime());
        d.setDate(d.getDate() + 1), (0, a.Pl)(l, d), (0, a.A4)(l, d)
    }
    switch (r) {
      case "ochtend":
        l.imply("meridiem", i.FF.AM), l.imply("hour", 6);
        break;
      case "middag":
        l.imply("meridiem", i.FF.AM), l.imply("hour", 12);
        break;
      case "namiddag":
        l.imply("meridiem", i.FF.PM), l.imply("hour", 15);
        break;
      case "avond":
        l.imply("meridiem", i.FF.PM), l.imply("hour", 20)
    }
    return l
  }
}