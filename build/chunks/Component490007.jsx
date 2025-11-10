/** Chunk was on 99904 **/
/** chunk id: 490007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk488922 = require("./488922.jsx"),
  Chunk595925 = require("./595925.jsx"),
  Chunk451429 = require("./451429.js"),
  Chunk226800 = require("./226800.js");
let p = [{
    id: "virtual-currency",
    name: "Virtual Current (Orb) Components"
  }, {
    id: "nitro",
    name: "Nitro Components"
  }],
  h = {
    "virtual-currency": Chunk595925.O,
    nitro: Chunk488922.X
  };

function x() {
  let [e, t] = Chunk647438.useState("virtual-currency"), n = Chunk647438.useMemo(() => h[module], [module]);
  return (0, Chunk951288.jsxs)("div", {
    className: l()(Chunk451429.panel, Chunk226800.container),
    children: [(0, Chunk951288.jsx)(Chunk481060.njP, {
      className: Chunk226800.tabBar,
      selectedItem: module,
      onItemSelect: exports,
      look: "brand",
      type: "top",
      orientation: "horizontal",
      children: p.map(e => (0, a.jsx)(o.njP.Item, {
        id: e.id,
        children: e.name
      }, e.id))
    }), (0, Chunk951288.jsx)(Chunk793030.w0Z, {
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk226800.content,
        children: (0, Chunk951288.jsx)(require, {})
      })
    })]
  })
}