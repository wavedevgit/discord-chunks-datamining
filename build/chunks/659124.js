/** Chunk was on web.js **/
/** chunk id: 659124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk140081 = require("./140081.js");
let i = RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i"),
  o = 1,
  a = 5,
  s = 2,
  l = 3,
  c = 4;
class u {
  groupNumberMonth;
  groupNumberDay;
  constructor(e) {
    this.groupNumberMonth = e ? l : s, this.groupNumberDay = e ? s : l
  }
  pattern() {
    return i
  }
  extract(e, t) {
    let n = t.index + t[o].length,
      i = t.index + t[0].length - t[a].length;
    if (n > 0 && e.text.substring(0, n).match("\\d/?$") || i < e.text.length && e.text.substring(i).match("^/?\\d")) return;
    let s = e.text.substring(n, i);
    if (s.match(/^\d\.\d$/) || s.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/) || !t[c] && 0 > s.indexOf("/")) return;
    let l = e.createParsingResult(n, s),
      u = parseInt(t[this.groupNumberMonth]),
      d = parseInt(t[this.groupNumberDay]);
    if ((u < 1 || u > 12) && u > 12)
      if (!(d >= 1) || !(d <= 12) || !(u <= 31)) return null;
      else [d, u] = [u, d];
    if (d < 1 || d > 31) return null;
    if (l.start.assign("day", d), l.start.assign("month", u), t[c]) {
      let e = parseInt(t[c]),
        n = (0, r.y)(e);
      l.start.assign("year", n)
    } else {
      let t = (0, r.r)(e.refDate, d, u);
      l.start.imply("year", t)
    }
    return l.addTag("parser/SlashDateFormatParser")
  }
}