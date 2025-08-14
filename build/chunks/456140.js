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
  [e, t] = (0, s.Z)([e, t]);
  let [l, u, f] = a.Z.from(e), [, b, d] = n.Z.from(a.Z, [l, u, f]), [h, p, m] = a.Z.from(t), g = n.Z.from(a.Z, [h, p, m])[1];
  b < 0 && (b = 0), g < 0 && (g = 0);
  let y = l - h,
    v = b - g,
    Z = u - p,
    w = f - m,
    M = .511;
  l >= 16 && (M = .040975 * l / (1 + .01765 * l));
  let k = .0638 * b / (1 + .0131 * b) + .638;
  Number.isNaN(d) && (d = 0);
  let O = Math.pow(b, 4),
    E = Math.sqrt(O / (O + 1900)),
    C = k * (E * (d >= 164 && d <= 345 ? .56 + Math.abs(.2 * Math.cos((d + 168) * o)) : .36 + Math.abs(.4 * Math.cos((d + 35) * o))) + 1 - E),
    x = (y / (r * M)) ** 2;
  return Math.sqrt(x += (v / (c * k)) ** 2 + (Z ** 2 + w ** 2 - v ** 2) / C ** 2)
}