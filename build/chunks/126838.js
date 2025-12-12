/** Chunk was on web.js **/
/** chunk id: 126838, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n, r, i) {
  var a, o = this;
  o.directMap[e + ":" + n] = t;
  var s = (e = e.replace(/\s+/g, " ")).split(" ");
  if (s.length > 1) return void o.bindSequence(e, s, t, n);
  a = o.getKeyInfo(e, n), o.callbacks[a.key] = o.callbacks[a.key] || [], o.getMatches(a.key, a.modifiers, {
    type: a.action
  }, r, e, i), o.callbacks[a.key][r ? "unshift" : "push"]({
    callback: t,
    modifiers: a.modifiers,
    action: a.action,
    seq: r,
    level: i,
    combo: e
  })
}