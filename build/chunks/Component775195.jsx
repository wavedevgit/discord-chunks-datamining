/** Chunk was on 53950 **/
/** chunk id: 775195, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211644 = require("./211644.js"),
  Chunk699867 = require("./699867.jsx");

function o(e) {
  let {
    searchQuery: t = ""
  } = e, n = (0, l.ZP)(e => e.recentlyShown).map(e => r.z[e]).filter(e => e.toLowerCase().includes(t.toLowerCase()));
  return 0 === n.length ? null : (0, a.jsx)(i.C3N, {
    label: "Recently Shown",
    children: (0, a.jsx)(s.Z, {
      items: n
    })
  })
}