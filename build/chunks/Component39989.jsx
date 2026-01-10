/** Chunk was on 84249 **/
/** chunk id: 39989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk704088 = require("./704088.jsx"),
  Chunk663618 = require("./663618.js"),
  Chunk902012 = require("./902012.js");
let m = [{
    id: "private_browsing_perk",
    name: "Privacy Perk Components"
  }],
  p = {
    private_browsing_perk: Chunk704088.U
  },
  h = () => {
    let [e, t] = r.useState("private_browsing_perk"), n = r.useMemo(() => p[e], [e]);
    return (0, a.jsxs)("div", {
      className: l()(d.panel, u.container),
      children: [(0, a.jsx)(o.njP, {
        className: u.tabBar,
        selectedItem: e,
        onItemSelect: t,
        look: "brand",
        type: "top",
        orientation: "horizontal",
        children: m.map(e => (0, a.jsx)(o.njP.Item, {
          id: e.id,
          children: e.name
        }, e.id))
      }), (0, a.jsx)(s.w0Z, {
        children: (0, a.jsx)("div", {
          className: u.content,
          children: (0, a.jsx)(n, {})
        })
      })]
    })
  }