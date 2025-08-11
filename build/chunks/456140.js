/** Chunk was on 67244 **/
/** chunk id: 456140, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk135164 = require("./135164.js"),
  Chunk312976 = require("./312976.js"),
  Chunk181568 = require("./181568.js");
let o = Math.PI / 180;

function i(e, t, {
  l: r = 2,
  c = 1
} = {}) {
  let l;
  [e, t] = (0, s.Z)([e, t]);
  let [u, f, b] = a.Z.from(e), [, d, h] = n.Z.from(a.Z, [u, f, b]), [p, m, g] = a.Z.from(t), y = n.Z.from(a.Z, [p, m, g])[1];
  d < 0 && (d = 0), y < 0 && (y = 0);
  let v = u - p,
    Z = d - y,
    w = f - m,
    M = b - g,
    k = .511;
  u >= 16 && (k = .040975 * u / (1 + .01765 * u));
  let O = .0638 * d / (1 + .0131 * d) + .638;
  Number.isNaN(h) && (h = 0);
  let E = Math.pow(d, 4),
    C = Math.sqrt(E / (E + 1900)),
    x = O * (C * (h >= 164 && h <= 345 ? .56 + Math.abs(.2 * Math.cos((h + 168) * o)) : .36 + Math.abs(.4 * Math.cos((h + 35) * o))) + 1 - C),
    j = (v / (r * k)) ** 2;
  return Math.sqrt(j += (Z / (c * O)) ** 2 + (w ** 2 + M ** 2 - Z ** 2) / x ** 2)
}