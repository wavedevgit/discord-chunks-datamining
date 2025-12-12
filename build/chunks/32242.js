/** Chunk was on web.js **/
/** chunk id: 32242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk140081 = require("./140081.js"),
  Chunk654323 = require("./654323.js");
let o = RegExp("([0-9０-９]{4}[\\/|\\／])?([0-1０-１]{0,1}[0-9０-９]{1})(?:[\\/|\\／]([0-3０-３]{0,1}[0-9０-９]{1}))", "i"),
  a = 1,
  s = 2,
  l = 3;
class c {
  pattern() {
    return o
  }
  extract(e, t) {
    let n = e.createParsingComponents(),
      o = parseInt((0, i.dj)(t[s])),
      c = parseInt((0, i.dj)(t[l]));
    if (o < 1 || o > 12 || c < 1 || c > 31) return null;
    if (n.assign("day", c), n.assign("month", o), t[a]) {
      let e = parseInt((0, i.dj)(t[a])),
        o = (0, r.y)(e);
      n.assign("year", o)
    } else {
      let t = (0, r.r)(e.reference.instant, c, o);
      n.imply("year", t)
    }
    return n
  }
}