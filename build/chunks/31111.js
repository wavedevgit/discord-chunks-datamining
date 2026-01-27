/** Chunk was on web.js **/
/** chunk id: 31111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk360345 = require("./360345.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js"),
  Chunk1673 = require("./1673.js"),
  Chunk322811 = require("./322811.js");
let l = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${(0,Chunk476858.uJ)(Chunk360345.CV)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i"),
  c = 1,
  u = 2,
  d = 3;
class f extends Chunk355418.c {
  innerPattern() {
    return l
  }
  innerExtract(e, t) {
    let n, i = t[c],
      a = t[d],
      l = i || a;
    l = (l = l || "").toLowerCase();
    let f = null;
    "last" == l || "past" == l ? f = "last" : "next" == l ? f = "next" : "this" == l && (f = "this");
    let p = t[u].toLowerCase();
    if (true !== r.CV[p]) n = r.CV[p];
    else if ("weekend" == p) n = "last" == f ? s.Bw.SUNDAY : s.Bw.SATURDAY;
    else {
      if ("weekday" != p) return null;
      let t = e.reference.getDateWithAdjustedTimezone().getDay();
      t == s.Bw.SUNDAY || t == s.Bw.SATURDAY ? n = "last" == f ? s.Bw.FRIDAY : s.Bw.MONDAY : (n = t - 1, n = (n = "last" == f ? n - 1 : n + 1) % 5 + 1)
    }
    return (0, o.Y5)(e.reference, n, f)
  }
}