/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(325008),
  i = n(34924),
  o = n(733669),
  a = n(24033),
  s = n(966606),
  l = TypeError,
  c = Object.defineProperty,
  u = Object.getOwnPropertyDescriptor,
  d = "enumerable",
  f = "configurable",
  p = "writable";
t.f = r ? o ? function(e, t, n) {
  if (a(e), t = s(t), a(n), "function" == typeof e && "prototype" === t && "value" in n && p in n && !n[p]) {
    var r = u(e, t);
    r && r[p] && (e[t] = n.value, n = {
      configurable: f in n ? n[f] : r[f],
      enumerable: d in n ? n[d] : r[d],
      writable: !1
    })
  }
  return c(e, t, n)
} : c : function(e, t, n) {
  if (a(e), t = s(t), a(n), i) try {
    return c(e, t, n)
  } catch (e) {}
  if ("get" in n || "set" in n) throw l("Accessors not supported");
  return "value" in n && (e[t] = n.value), e
}