/** Chunk was on web.js **/
/** chunk id: 709638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk53851 = require("./53851.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk800911 = require("./800911.js");
let s = RegExp(`(questo|ultimo|scorso|prossimo|dopo\\s*questo|questa|ultima|scorsa|prossima\\s*questa)\\s*(${(0,Chunk800911.q3)(Chunk53851.pS)})(?=\\s*)(?=\\W|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      o = t[c].toLowerCase(),
      a = r.pS[o];
    if ("prossimo" == n || n.startsWith("dopo")) {
      let t = {};
      return t[a] = 1, i.L.createRelativeFromReference(e.reference, t)
    }
    if ("prima" == n || "precedente" == n) {
      let t = {};
      return t[a] = false, i.L.createRelativeFromReference(e.reference, t)
    }
    let s = e.createParsingComponents(),
      u = new Date(e.reference.instant.getTime());
    return o.match(/settimana/i) ? (u.setDate(u.getDate() - u.getDay()), s.imply("day", u.getDate()), s.imply("month", u.getMonth() + 1), s.imply("year", u.getFullYear())) : o.match(/mese/i) ? (u.setDate(1), s.imply("day", u.getDate()), s.assign("year", u.getFullYear()), s.assign("month", u.getMonth() + 1)) : o.match(/anno/i) && (u.setDate(1), u.setMonth(0), s.imply("day", u.getDate()), s.imply("month", u.getMonth() + 1), s.assign("year", u.getFullYear())), s
  }
}