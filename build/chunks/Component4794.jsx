/** Chunk was on 36878 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk206403 = require("./206403.jsx"),
  Chunk750165 = require("./750165.js");
let d = Chunk73800.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: l,
    useSubtitle: d
  } = t, [f, m] = o.useState(false), x = null == n ? true : n(f), g = null == d ? true : d();
  return (0, i.jsxs)("div", {
    className: u.accordion,
    children: [(0, i.jsx)(c.x, {
      title: x,
      description: f ? true : g,
      secondaryTrailingElement: (0, i.jsx)(a.sXD, {
        className: r()(u.icon, {
          [u.iconClosed]: !f
        })
      }),
      onClick: () => m(!f)
    }), f && l.map(e => (0, i.jsx)(s.Z, {
      node: e
    }, e.key))]
  })
})