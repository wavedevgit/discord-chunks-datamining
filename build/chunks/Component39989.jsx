/** Chunk was on 91394 **/
/** chunk id: 39989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk704088 = require("./704088.jsx"),
  Chunk451429 = require("./451429.js"),
  Chunk129847 = require("./129847.js");
let m = [{
    id: "private_browsing_perk",
    name: "Privacy Perk Components"
  }],
  p = {
    private_browsing_perk: Chunk704088.U
  },
  h = () => {
    let [e, t] = Chunk473749.useState("private_browsing_perk"), n = Chunk473749.useMemo(() => p[module], [module]);
    return (0, Chunk54381.jsxs)("div", {
      className: r()(Chunk451429.panel, Chunk129847.container),
      children: [(0, Chunk54381.jsx)(Chunk481060.njP, {
        className: Chunk129847.tabBar,
        selectedItem: module,
        onItemSelect: exports,
        look: "brand",
        type: "top",
        orientation: "horizontal",
        children: m.map(e => (0, a.jsx)(o.njP.Item, {
          id: e.id,
          children: e.name
        }, e.id))
      }), (0, Chunk54381.jsx)(Chunk793030.w0Z, {
        children: (0, Chunk54381.jsx)("div", {
          className: Chunk129847.content,
          children: (0, Chunk54381.jsx)(require, {})
        })
      })]
    })
  }