/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  B8: () => a,
  Jn: () => c,
  L_: () => d,
  Ym: () => l,
  g7: () => f,
  m4: () => s,
  sA: () => p,
  wb: () => u
});
var r = "[-+]?\\d*\\.?\\d+",
  i = r + "%";

function o() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
var a = RegExp("rgb" + o(r, r, r)),
  s = RegExp("rgba" + o(r, r, r, r)),
  l = RegExp("hsl" + o(r, i, i)),
  c = RegExp("hsla" + o(r, i, i, r)),
  u = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  f = /^#([0-9a-fA-F]{6})$/,
  p = /^#([0-9a-fA-F]{8})$/