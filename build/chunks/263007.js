/** Chunk was on web.js **/
/** chunk id: 263007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk610388 = require("./610388.js"),
  Chunk649793 = require("./649793.js"),
  Chunk822632 = require("./822632.js");
let a = {
  read: s
};

function s(e, t) {
  let n = {};
  for (let a = 0; a < t.length; a++) {
    let s = r.Z.getLongAt(e, t[a] + i.zi),
      f = (0, o.oH)(e, t[a] + i.Ic, i.Gj);
    f === i.oT ? (n["Pixels Per Unit X"] = l(e, t[a], s), n["Pixels Per Unit Y"] = c(e, t[a], s), n["Pixel Units"] = u(e, t[a], s)) : f === i.ZN && (n["Modify Date"] = d(e, t[a], s))
  }
  return n
}

function l(e, t, n) {
  let o = 0;
  if (!f(e, t, n, 0, 4)) return;
  let a = r.Z.getLongAt(e, t + i.vx + o);
  return {
    value: a,
    description: "" + a
  }
}

function c(e, t, n) {
  let o = 4;
  if (!f(e, t, n, 4, 4)) return;
  let a = r.Z.getLongAt(e, t + i.vx + o);
  return {
    value: a,
    description: "" + a
  }
}

function u(e, t, n) {
  let o = 8;
  if (!f(e, t, n, 8, 1)) return;
  let a = r.Z.getByteAt(e, t + i.vx + o);
  return {
    value: a,
    description: 1 === a ? "meters" : "Unknown"
  }
}

function d(e, t, n) {
  if (!f(e, t, n, 0, 7)) return;
  let o = r.Z.getShortAt(e, t + i.vx),
    a = r.Z.getByteAt(e, t + i.vx + 2),
    s = r.Z.getByteAt(e, t + i.vx + 3),
    l = r.Z.getByteAt(e, t + i.vx + 4),
    c = r.Z.getByteAt(e, t + i.vx + 5),
    u = r.Z.getByteAt(e, t + i.vx + 6);
  return {
    value: [o, a, s, l, c, u],
    description: `${p(o,4)}-${p(a,2)}-${p(s,2)} ${p(l,2)}:${p(c,2)}:${p(u,2)}`
  }
}

function f(e, t, n, r, o) {
  return r + o <= n && t + i.vx + r + o <= e.byteLength
}

function p(e, t) {
  return `${"0".repeat(t-(""+e).length)}${e}`
}