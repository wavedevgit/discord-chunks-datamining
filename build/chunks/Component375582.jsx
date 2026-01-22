/** Chunk was on 22477 **/
/** chunk id: 375582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk63415 = require("./63415.jsx"),
  Chunk661251 = require("./661251.js"),
  Chunk737740 = require("./737740.js");
let m = [{
    id: "private_browsing_perk",
    name: "Privacy Perk Components"
  }],
  p = {
    private_browsing_perk: Chunk63415.p
  },
  h = () => {
    let [e, t] = l.useState("private_browsing_perk"), n = l.useMemo(() => p[e], [e]);
    return (0, a.jsxs)("div", {
      className: r()(d.nd, u.kL),
      children: [(0, a.jsx)(o.VQ0, {
        className: u.$H,
        selectedItem: e,
        onItemSelect: t,
        look: "brand",
        type: "top",
        orientation: "horizontal",
        children: m.map(e => (0, a.jsx)(o.VQ0.Item, {
          id: e.id,
          children: e.name
        }, e.id))
      }), (0, a.jsx)(s.ArX, {
        children: (0, a.jsx)("div", {
          className: u.Qs,
          children: (0, a.jsx)(n, {})
        })
      })]
    })
  }