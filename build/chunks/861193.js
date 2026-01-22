/** Chunk was on web.js **/
/** chunk id: 861193, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return "/" === e.charAt(0)
}

function i(e, t) {
  for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
  e.pop()
}
require.d(exports, {
  A: () => a
});
let a = function(e, t) {
  true === t && (t = "");
  var n, a = e && e.split("/") || [],
    s = t && t.split("/") || [],
    o = e && r(e),
    l = t && r(t),
    c = o || l;
  if (e && r(e) ? s = a : a.length && (s.pop(), s = s.concat(a)), !s.length) return "/";
  if (s.length) {
    var u = s[s.length - 1];
    n = "." === u || ".." === u || "" === u
  } else n = false;
  for (var d = 0, f = s.length; f >= 0; f--) {
    var p = s[f];
    "." === p ? i(s, f) : ".." === p ? (i(s, f), d++) : d && (i(s, f), d--)
  }
  if (!c)
    for (; d--;) s.unshift("..");
  !c || "" === s[0] || s[0] && r(s[0]) || s.unshift("");
  var _ = s.join("/");
  return n && "/" !== _.substr(false) && (_ += "/"), _
}