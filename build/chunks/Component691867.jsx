/** Chunk was on 23736 **/
/** chunk id: 691867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk581612 = require("./581612.js"),
  Chunk91311 = require("./91311.js"),
  Chunk431135 = require("./431135.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk91311.Z], () => Chunk91311.Z.allWithDescriptions(), [], Chunk442837.pF),
    t = Chunk473749.useMemo(() => module.map(e => {
      let [t, n, r] = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(l.rsf, {
          label: r,
          description: t,
          checked: n,
          onChange: e => (0, s.Z)(t, e)
        }, t), (0, a.jsx)(l.izJ, {
          gap: 16
        })]
      })
    }), [module]);
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk431135.container,
    children: [(0, Chunk54381.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk431135.button,
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: "Clear all",
        onClick: Chunk581612.q,
        fullWidth: true
      })
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk431135.rowsContainer,
      children: exports
    })]
  })
}