/** Chunk was on web.js **/
/** chunk id: 23836, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk615339 = require("./615339.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk476858 = require("./476858.js");
let o = RegExp(`(questo|ultimo|scorso|prossimo|dopo\\s*questo|questa|ultima|scorsa|prossima\\s*questa)\\s*(${(0,Chunk476858.uJ)(Chunk615339.EB)})(?=\\s*)(?=\\W|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      a = t[c].toLowerCase(),
      s = r.EB[a];
    if ("prossimo" == n || n.startsWith("dopo")) {
      let t = {};
      return t[s] = 1, i.BP.createRelativeFromReference(e.reference, t)
    }
    if ("prima" == n || "precedente" == n) {
      let t = {};
      return t[s] = false, i.BP.createRelativeFromReference(e.reference, t)
    }
    let o = e.createParsingComponents(),
      u = new Date(e.reference.instant.getTime());
    return a.match(/settimana/i) ? (u.setDate(u.getDate() - u.getDay()), o.imply("day", u.getDate()), o.imply("month", u.getMonth() + 1), o.imply("year", u.getFullYear())) : a.match(/mese/i) ? (u.setDate(1), o.imply("day", u.getDate()), o.assign("year", u.getFullYear()), o.assign("month", u.getMonth() + 1)) : a.match(/anno/i) && (u.setDate(1), u.setMonth(0), o.imply("day", u.getDate()), o.imply("month", u.getMonth() + 1), o.assign("year", u.getFullYear())), o
  }
}