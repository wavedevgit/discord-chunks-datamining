/** Chunk was on web.js **/
/** chunk id: 147687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk668459 = require("./668459.js"),
  Chunk234291 = require("./234291.js"),
  Chunk643479 = require("./643479.js");
let o = {
  read: s
};

function s(e, t) {
  let n = {};
  for (let o = 0; o < t.length; o++) {
    let s = r.A.getLongAt(e, t[o] + i.vW),
      f = (0, a.hT)(e, t[o] + i.XU, i.LV);
    f === i.eZ ? (n["Pixels Per Unit X"] = l(e, t[o], s), n["Pixels Per Unit Y"] = c(e, t[o], s), n["Pixel Units"] = u(e, t[o], s)) : f === i.J$ && (n["Modify Date"] = d(e, t[o], s))
  }
  return n
}

function l(e, t, n) {
  let a = 0;
  if (!f(e, t, n, 0, 4)) return;
  let o = r.A.getLongAt(e, t + i.LO + a);
  return {
    value: o,
    description: "" + o
  }
}

function c(e, t, n) {
  let a = 4;
  if (!f(e, t, n, 4, 4)) return;
  let o = r.A.getLongAt(e, t + i.LO + a);
  return {
    value: o,
    description: "" + o
  }
}

function u(e, t, n) {
  let a = 8;
  if (!f(e, t, n, 8, 1)) return;
  let o = r.A.getByteAt(e, t + i.LO + a);
  return {
    value: o,
    description: 1 === o ? "meters" : "Unknown"
  }
}

function d(e, t, n) {
  if (!f(e, t, n, 0, 7)) return;
  let a = r.A.getShortAt(e, t + i.LO),
    o = r.A.getByteAt(e, t + i.LO + 2),
    s = r.A.getByteAt(e, t + i.LO + 3),
    l = r.A.getByteAt(e, t + i.LO + 4),
    c = r.A.getByteAt(e, t + i.LO + 5),
    u = r.A.getByteAt(e, t + i.LO + 6);
  return {
    value: [a, o, s, l, c, u],
    description: `${p(a,4)}-${p(o,2)}-${p(s,2)} ${p(l,2)}:${p(c,2)}:${p(u,2)}`
  }
}

function f(e, t, n, r, a) {
  return r + a <= n && t + i.LO + r + a <= e.byteLength
}

function p(e, t) {
  return `${"0".repeat(t-(""+e).length)}${e}`
}