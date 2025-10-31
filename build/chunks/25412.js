/** Chunk was on 54628 **/
/** chunk id: 25412, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk798192 = require("./798192.js"),
  Chunk135164 = require("./135164.js"),
  Chunk312976 = require("./312976.js"),
  Chunk181568 = require("./181568.js");
let i = Math.PI,
  c = 180 / i,
  u = i / 180;

function l(e) {
  let t = e * e;
  return t * t * t * e
}

function f(e, t, {
  kL: r = 1,
  kC: b = 1,
  kH: d = 1
} = {}) {
  let h, p;
  [e, t] = (0, s.Z)([e, t]);
  let [m, g, y] = n.Z.from(e), v = o.Z.from(n.Z, [m, g, y])[1], [Z, w, M] = n.Z.from(t), k = o.Z.from(n.Z, [Z, w, M])[1];
  v < 0 && (v = 0), k < 0 && (k = 0);
  let O = l((v + k) / 2),
    E = .5 * (1 - Math.sqrt(O / (O + 0x16bcc41e9))),
    x = (1 + E) * g,
    C = (1 + E) * w,
    j = Math.sqrt(x ** 2 + y ** 2),
    R = Math.sqrt(C ** 2 + M ** 2),
    A = 0 === x && 0 === y ? 0 : Math.atan2(y, x),
    _ = 0 === C && 0 === M ? 0 : Math.atan2(M, C);
  A < 0 && (A += 2 * i), _ < 0 && (_ += 2 * i), A *= c;
  let S = Z - m,
    B = R - j,
    N = (_ *= c) - A,
    I = A + _,
    P = Math.abs(N);
  j * R == 0 ? h = 0 : P <= 180 ? h = N : N > 180 ? h = N - 360 : N < false ? h = N + 360 : a.Z.warn("the unthinkable has happened");
  let D = 2 * Math.sqrt(R * j) * Math.sin(h * u / 2),
    T = (m + Z) / 2,
    L = (j + R) / 2,
    F = l(L),
    z = (T - 50) ** 2,
    q = 1 + .015 * z / Math.sqrt(20 + z),
    $ = 1 + .045 * L,
    U = 1 + .015 * L * (1 - .17 * Math.cos(((p = j * R == 0 ? I : P <= 180 ? I / 2 : I < 360 ? (I + 360) / 2 : (I - 360) / 2) - 30) * u) + .24 * Math.cos(2 * p * u) + .32 * Math.cos((3 * p + 6) * u) - .2 * Math.cos((4 * p - 63) * u)),
    W = (S / (r * q)) ** 2;
  return Math.sqrt(W += (B / (b * $)) ** 2 + (D / (d * U)) ** 2 + B / (b * $) * (false * Math.sin(2 * (30 * Math.exp(false * ((p - 275) / 25) ** 2)) * u) * (2 * Math.sqrt(F / (F + 0x16bcc41e9)))) * (D / (d * U)))
}