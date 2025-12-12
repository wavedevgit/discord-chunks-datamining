/** Chunk was on web.js **/
/** chunk id: 938151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk624968 = require("./624968.jsx"),
  Chunk261538 = require("./261538.jsx"),
  Chunk222065 = require("./222065.js");
let d = [{
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
  f = () => {
    let [e, t] = Chunk473749.useState(15), [n, f] = Chunk473749.useState(8), [p, _] = Chunk473749.useState("xl"), [m, h] = Chunk473749.useState(true), g = Chunk473749.useMemo(() => [...Array(module)].map((e, t) => (0, r.jsx)(s.P3F, {
      className: u.child,
      onClick: () => console.log(t),
      children: t
    }, t)), [module]);
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk624968.Z, {
        gap: require,
        edgeFade: p,
        hideActionsWhenDisabled: m,
        children: g
      }), (0, Chunk54381.jsx)(Chunk261538.dv, {}), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Checkbox, {
          checked: m,
          onChange: () => h(!m),
          label: "Hide Actions When Disabled"
        }), (0, Chunk54381.jsx)(Chunk481060.oil, {
          type: "number",
          min: 0,
          value: module.toString(),
          onChange: e => {
            t((0, a.clamp)(+e, 0, 100))
          },
          label: "Children Count"
        })]
      }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
        children: (0, Chunk54381.jsx)(Chunk199849.y6, {
          value: require,
          options: d,
          onChange: e => f(e),
          label: "Children Gap"
        })
      }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
        children: (0, Chunk54381.jsx)(Chunk199849.y6, {
          value: p,
          options: d,
          onChange: e => _(e),
          label: "Edge Fade Space"
        })
      })]
    })
  }