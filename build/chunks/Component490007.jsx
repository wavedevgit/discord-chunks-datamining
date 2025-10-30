/** Chunk was on 87665 **/
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
  Chunk866403 = require("./866403.js"),
  Chunk744769 = require("./744769.js");
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
    className: i()(Chunk866403.panel, Chunk744769.container),
    children: [(0, Chunk951288.jsx)(Chunk481060.njP, {
      className: Chunk744769.tabBar,
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
        className: Chunk744769.content,
        children: (0, Chunk951288.jsx)(require, {})
      })
    })]
  })
}