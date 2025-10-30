/** Chunk was on web.js **/
/** chunk id: 322065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk684758 = require("./684758.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js"),
  Chunk334633 = require("./334633.js"),
  Chunk894186 = require("./894186.js");
let l = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${(0,Chunk800911.q3)(Chunk684758.LN)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i"),
  c = 1,
  u = 2,
  d = 3;
class f extends Chunk727916.Z {
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
    let _ = t[u].toLowerCase();
    if (true !== r.LN[_]) n = r.LN[_];
    else if ("weekend" == _) n = "last" == f ? s.OG.SUNDAY : s.OG.SATURDAY;
    else {
      if ("weekday" != _) return null;
      let t = e.reference.getDateWithAdjustedTimezone().getDay();
      t == s.OG.SUNDAY || t == s.OG.SATURDAY ? n = "last" == f ? s.OG.FRIDAY : s.OG.MONDAY : (n = t - 1, n = (n = "last" == f ? n - 1 : n + 1) % 5 + 1)
    }
    return (0, o.Rv)(e.reference, n, f)
  }
}