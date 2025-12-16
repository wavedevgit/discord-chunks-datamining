/** Chunk was on 29725 **/
/** chunk id: 490007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk488922 = require("./488922.jsx"),
  Chunk595925 = require("./595925.jsx"),
  Chunk663618 = require("./663618.js"),
  Chunk13408 = require("./13408.js");
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

function f() {
  let [e, t] = Chunk473749.useState("virtual-currency"), n = Chunk473749.useMemo(() => h[module], [module]);
  return (0, Chunk54381.jsxs)("div", {
    className: i()(Chunk663618.panel, Chunk13408.container),
    children: [(0, Chunk54381.jsx)(Chunk481060.njP, {
      className: Chunk13408.tabBar,
      selectedItem: module,
      onItemSelect: exports,
      look: "brand",
      type: "top",
      orientation: "horizontal",
      children: p.map(e => (0, a.jsx)(o.njP.Item, {
        id: e.id,
        children: e.name
      }, e.id))
    }), (0, Chunk54381.jsx)(Chunk793030.w0Z, {
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk13408.content,
        children: (0, Chunk54381.jsx)(require, {})
      })
    })]
  })
}