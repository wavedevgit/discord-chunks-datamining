/** Chunk was on 23032 **/
/** chunk id: 811534, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk665352 = require("./665352.js"),
  Chunk181568 = require("./181568.js"),
  Chunk605700 = require("./605700.js"),
  Chunk372528 = require("./372528.js"),
  Chunk560281 = require("./560281.js"),
  Chunk37484 = require("./37484.js");

function u(e, t, r) {
  if (e = (0, n.Z)(e), 2 == arguments.length && "object" === (0, c.dt)(arguments[1])) {
    let t = arguments[1];
    for (let r in t) u(e, r, t[r])
  } else {
    "function" == typeof r && (r = r((0, o.Z)(e, t)));
    let {
      space: n,
      index: c
    } = a.Z.resolveCoord(t, e.space), u = (0, s.Z)(e, n);
    u[c] = r, (0, i.Z)(e, n, u)
  }
  return e
}
u.returns = "color"