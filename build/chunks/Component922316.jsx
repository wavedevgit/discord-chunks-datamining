/** Chunk was on 65298 **/
/** chunk id: 922316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk234560 = require("./234560.jsx"),
  Chunk613912 = require("./613912.jsx"),
  Chunk661251 = require("./661251.js"),
  Chunk288198 = require("./288198.js");
let p = [{
    id: "virtual-currency",
    name: "Virtual Current (Orb) Components"
  }, {
    id: "nitro",
    name: "Nitro Components"
  }],
  h = {
    "virtual-currency": Chunk613912.B,
    nitro: Chunk234560.$
  };

function x() {
  let [e, t] = l.useState("virtual-currency"), n = l.useMemo(() => h[e], [e]);
  return (0, a.jsxs)("div", {
    className: i()(u.nd, m.kL),
    children: [(0, a.jsx)(o.VQ0, {
      className: m.$H,
      selectedItem: e,
      onItemSelect: t,
      look: "brand",
      type: "top",
      orientation: "horizontal",
      children: p.map(e => (0, a.jsx)(o.VQ0.Item, {
        id: e.id,
        children: e.name
      }, e.id))
    }), (0, a.jsx)(s.ArX, {
      children: (0, a.jsx)("div", {
        className: m.Qs,
        children: (0, a.jsx)(n, {})
      })
    })]
  })
}