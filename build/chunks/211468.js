/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  dO: () => l,
  pq: () => p
}), n(47120);
var r = n(688619),
  i = n.n(r);

function o(e, t, n) {
  let [r, i] = e, [o, a] = t, s = (r + i) / 2, l = s;
  return n === s ? l : n < s ? o + (n - r) / (s - r) * (l - o) : l + (n - s) / (i - s) * (a - l)
}

function a(e, t, n) {
  let [r, i] = e, [o, a] = t;
  return o + (n - r) / (i - r) * (a - o)
}
let s = [0, 2];

function l(e, t, n) {
  let r = i()(e);
  if ("background" !== t) return r.set("hsl.s", "*".concat(n)).hex();
  {
    let e = a([0, 1], [.25, 1], n);
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
      return i()(e).set("hsl.l", "*".concat(o(s, "light" === n ? u : c, r))).hex();
    case "text":
      return i()(e).set("hsl.l", "*".concat(o(s, "light" === n ? f : d, r))).hex();
    default:
      return e
  }
}