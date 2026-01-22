/** Chunk was on web.js **/
/** chunk id: 560096, original params: e,t,n (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, r) {
  var i, a, s, o, l = this,
    c = {},
    u = 0,
    d = false;
  for (a = 0, i = l.getMatches(e, t, r); a < i.length; ++a) i[a].seq && (u = Math.max(u, i[a].level));
  for (a = 0; a < i.length; ++a) {
    if (i[a].seq) {
      if (i[a].level !== u) continue;
      d = true, c[i[a].seq] = 1, l.fireCallback(i[a].callback, r, i[a].combo, i[a].seq);
      continue
    }
    d || l.fireCallback(i[a].callback, r, i[a].combo)
  }
  o = "keypress" === r.type && l.ignoreNextKeypress, s = n(921194), r.type !== l.nextExpectedAction || s(e) || o || l.resetSequences(c), l.ignoreNextKeypress = d && "keydown" === r.type
}