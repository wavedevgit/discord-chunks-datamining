/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var r = n(859209),
  i = n(581031),
  o = n(714050),
  a = n(202934),
  s = URLSearchParams,
  l = s.prototype,
  c = i(l.getAll),
  u = i(l.has),
  d = new s("a=1");
(d.has("a", 2) || !d.has("a", void 0)) && r(l, "has", function(e) {
  var t = arguments.length,
    n = t < 2 ? void 0 : arguments[1];
  if (t && void 0 === n) return u(this, e);
  var r = c(this, e);
  a(t, 1);
  for (var i = o(n), s = 0; s < r.length;)
    if (r[s++] === i) return !0;
  return !1
}, {
  enumerable: !0,
  unsafe: !0
})