/** Chunk was on 28532 **/
/** chunk id: 227157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211644 = require("./211644.js"),
  Chunk98460 = require("./98460.js"),
  Chunk699867 = require("./699867.jsx");

function c(e) {
  let {
    searchQuery: t = ""
  } = e, n = (0, l.ZP)(e => e.recentlyShown), [c, d] = (0, s.Z)(), u = c.filter(e => e.toLowerCase().includes(t.toLowerCase())).filter(e => !n.includes(r.z[e]));
  return 0 === u.length ? null : (0, a.jsx)(i.C3N, {
    label: "Recent Overrides",
    children: (0, a.jsx)(o.Z, {
      items: u
    })
  })
}