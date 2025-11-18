/** Chunk was on web.js **/
/** chunk id: 938151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624968 = require("./624968.jsx"),
  Chunk29594 = require("./29594.jsx"),
  Chunk330569 = require("./330569.js");
let u = () => {
  let [e, t] = Chunk473749.useState(10), [n, u] = Chunk473749.useState(12), d = Chunk473749.useMemo(() => [...Array(module)].map((e, t) => (0, r.jsx)(o.P3F, {
    className: c.child,
    onClick: () => console.log(t + 1),
    children: t + 1
  }, t)), [module]);
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsx)(Chunk624968.Z, {
      gap: require,
      children: d
    }), (0, Chunk54381.jsx)(Chunk29594.dv, {}), (0, Chunk54381.jsx)(Chunk29594.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        type: "number",
        min: 0,
        value: module.toString(),
        onChange: e => {
          t((0, a.clamp)(+e, 0, 100))
        },
        label: "Children Count"
      })
    }), (0, Chunk54381.jsx)(Chunk29594.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        type: "number",
        min: 0,
        value: require.toString(),
        onChange: e => {
          u(+e)
        },
        label: "Children Gap"
      })
    })]
  })
}