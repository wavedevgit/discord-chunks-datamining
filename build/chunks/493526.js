/** Chunk was on web.js **/
/** chunk id: 493526, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n, r, i) {
  var a, o = this;
  o.directMap[e + ":" + n] = t;
  var s = (e = e.replace(/\s+/g, " ")).split(" ");
  s.length > 1 ? o.bindSequence(e, s, t, n) : (a = o.getKeyInfo(e, n), o.callbacks[a.key] = o.callbacks[a.key] || [], o.getMatches(a.key, a.modifiers, {
    type: a.action
  }, r, e, i), o.callbacks[a.key][r ? "unshift" : "push"]({
    callback: t,
    modifiers: a.modifiers,
    action: a.action,
    seq: r,
    level: i,
    combo: e
  }))
}