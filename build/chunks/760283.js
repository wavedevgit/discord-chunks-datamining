/** Chunk was on web.js **/
/** chunk id: 760283, original params: e,t,n (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, r) {
  var i, o, a, s, l = this,
    c = {},
    u = 0,
    d = false;
  for (o = 0, i = l.getMatches(e, t, r); o < i.length; ++o) i[o].seq && (u = Math.max(u, i[o].level));
  for (o = 0; o < i.length; ++o) {
    if (i[o].seq) {
      if (i[o].level !== u) continue;
      d = true, c[i[o].seq] = 1, l.fireCallback(i[o].callback, r, i[o].combo, i[o].seq);
      continue
    }
    d || l.fireCallback(i[o].callback, r, i[o].combo)
  }
  s = "keypress" === r.type && l.ignoreNextKeypress, a = n(64e3), r.type !== l.nextExpectedAction || a(e) || s || l.resetSequences(c), l.ignoreNextKeypress = d && "keydown" === r.type
}