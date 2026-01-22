/** Chunk was on web.js **/
/** chunk id: 701153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk501459 = require("./501459.js"),
  Chunk364242 = require("./364242.js");
let a = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i,
  s = 1,
  o = 2,
  l = 3,
  c = 4,
  u = 5,
  d = 6;
class f {
  pattern() {
    return a
  }
  extract(e, t) {
    let n = parseInt((0, r.Zp)(t[u])),
      a = parseInt((0, r.Zp)(t[d])),
      f = e.createParsingComponents({
        day: a,
        month: n
      });
    if (t[s] && t[s].match("同|今|本") && f.assign("year", e.reference.getDateWithAdjustedTimezone().getFullYear()), t[o]) {
      let e = t[c],
        n = "元" == e ? 1 : parseInt((0, r.Zp)(e));
      "令和" == t[l] ? n += 2018 : "平成" == t[l] ? n += 1988 : "昭和" == t[l] && (n += 1925), f.assign("year", n)
    } else {
      let t = (0, i.Y)(e.refDate, a, n);
      f.imply("year", t)
    }
    return f
  }
}