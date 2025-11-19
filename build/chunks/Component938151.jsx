/** Chunk was on web.js **/
/** chunk id: 938151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624968 = require("./624968.jsx"),
  Chunk29594 = require("./29594.jsx"),
  Chunk152928 = require("./152928.js");
let u = [{
    label: "xxs",
    value: "xxs"
  }, {
    label: "xs",
    value: "xs"
  }, {
    label: "sm",
    value: "sm"
  }, {
    label: "md",
    value: "md"
  }, {
    label: "lg",
    value: "lg"
  }, {
    label: "xl",
    value: "xl"
  }, {
    label: "xxl",
    value: "xxl"
  }, {
    label: "0px",
    value: 0
  }, {
    label: "4px",
    value: 4
  }, {
    label: "6px",
    value: 6
  }, {
    label: "8px",
    value: 8
  }, {
    label: "12px",
    value: 12
  }, {
    label: "16px",
    value: 16
  }, {
    label: "20px",
    value: 20
  }, {
    label: "24px",
    value: 24
  }, {
    label: "32px",
    value: 32
  }, {
    label: "40px",
    value: 40
  }],
  d = () => {
    let [e, t] = Chunk473749.useState(15), [n, d] = Chunk473749.useState(12), [f, _] = Chunk473749.useState("xl"), p = Chunk473749.useMemo(() => [...Array(module)].map((e, t) => (0, r.jsx)(o.P3F, {
      className: c.child,
      onClick: () => console.log(t),
      children: t
    }, t)), [module]);
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk624968.Z, {
        gap: require,
        edgeFade: f,
        children: p
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
            d(+e)
          },
          label: "Children Gap"
        })
      }), (0, Chunk54381.jsx)(Chunk29594.BZ, {
        children: (0, Chunk54381.jsx)(Chunk481060.q4e, {
          value: f,
          options: u,
          onChange: e => _(e),
          label: "Edge Fade Space"
        })
      })]
    })
  }