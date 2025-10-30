/** Chunk was on 39297 **/
/** chunk id: 490007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk488922 = require("./488922.jsx"),
  Chunk191767 = require("./191767.jsx"),
  Chunk595925 = require("./595925.jsx"),
  Chunk451429 = require("./451429.js"),
  Chunk226800 = require("./226800.js");
let h = [{
    id: "virtual-currency",
    name: "Virtual Current (Orb) Components"
  }, {
    id: "payment",
    name: "Payment Components"
  }, {
    id: "nitro",
    name: "Nitro Components"
  }],
  x = {
    "virtual-currency": Chunk595925.O,
    payment: Chunk191767.f,
    nitro: Chunk488922.X
  };

function g() {
  let [e, t] = Chunk647438.useState("virtual-currency"), n = Chunk647438.useMemo(() => x[module], [module]);
  return (0, Chunk951288.jsxs)("div", {
    className: i()(Chunk451429.panel, Chunk226800.container),
    children: [(0, Chunk951288.jsx)(Chunk481060.njP, {
      className: Chunk226800.tabBar,
      selectedItem: module,
      onItemSelect: exports,
      look: "brand",
      type: "top",
      orientation: "horizontal",
      children: h.map(e => (0, a.jsx)(s.njP.Item, {
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