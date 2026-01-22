/** Chunk was on web.js **/
/** chunk id: 669393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => l,
  yq: () => p
}), require("./896048.js");
var Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784);

function a(e, t, n) {
  let [r, i] = e, [a, s] = t, o = (r + i) / 2, l = o;
  return n === o ? l : n < o ? a + (n - r) / (o - r) * (l - a) : l + (n - o) / (i - o) * (s - l)
}

function s(e, t, n) {
  let [r, i] = e, [a, s] = t;
  return a + (n - r) / (i - r) * (s - a)
}
let o = [0, 2];

function l(e, t, n) {
  let r = i()(e);
  if ("background" !== t) return r.set("hsl.s", "*".concat(n)).hex();
  {
    let e = s([0, 1], [.25, 1], n);
    return r.set("hsl.s", "*".concat(e)).hex()
  }
}
let c = [1.3, .7],
  u = [.98, 1],
  d = [.75, 1.5],
  f = [1.45, .45];

function p(e, t, n, r) {
  switch (t) {
    case "background":
    case "border":
      return i()(e).set("hsl.l", "*".concat(a(o, "light" === n ? u : c, r))).hex();
    case "text":
      return i()(e).set("hsl.l", "*".concat(a(o, "light" === n ? f : d, r))).hex();
    default:
      return e
  }
}