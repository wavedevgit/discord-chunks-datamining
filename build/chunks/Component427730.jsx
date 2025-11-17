/** Chunk was on web.js **/
/** chunk id: 427730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk527685 = require("./527685.jsx"),
  Chunk29594 = require("./29594.jsx");
let c = () => {
  let [e, t] = Chunk647438.useState(0), [n, c] = Chunk647438.useState(4), [u, d] = Chunk647438.useState(2), [f, _] = Chunk647438.useState(Chunk527685.y.BLUE), [p, h] = Chunk647438.useState("darkslategray"), [m, g] = Chunk647438.useState("blanchedalmond"), [E, b] = Chunk647438.useState("pink"), y = Chunk647438.useMemo(() => Object.entries(Chunk527685.y).map(e => {
    let [t, n] = e;
    return {
      label: t,
      value: n
    }
  }), []);
  return (0, Chunk951288.jsxs)(Chunk29594.pg, {
    children: [(0, Chunk951288.jsx)(Chunk527685.Z, {
      progress: u,
      minimum: module,
      maximum: require,
      variant: f,
      override: {
        background: p,
        gradientStart: m,
        gradientEnd: E
      }
    }), (0, Chunk951288.jsx)(Chunk29594.dv, {}), (0, Chunk951288.jsx)(Chunk29594.BZ, {
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        type: "number",
        value: u.toString(),
        onChange: t => {
          d((0, a.clamp)(+t, e, n))
        },
        label: "Progress ( ".concat(module, " - ").concat(require, " ) ")
      })
    }), (0, Chunk951288.jsx)(Chunk29594.BZ, {
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        type: "number",
        value: module.toString(),
        onChange: e => {
          !(0 > +e) && (+e >= n || (u < +e && d(+e), t(+e)))
        },
        label: "Minimum Value"
      })
    }), (0, Chunk951288.jsx)(Chunk29594.BZ, {
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        type: "number",
        value: require.toString(),
        onChange: t => {
          !(+t <= e) && (1 > +t || (u > +t && d(+t), c(+t)))
        },
        label: "Maximum Value"
      })
    }), (0, Chunk951288.jsx)(Chunk29594.BZ, {
      children: (0, Chunk951288.jsx)(Chunk481060.PhF, {
        placeholder: "Variant",
        select: e => {
          _(e)
        },
        isSelected: e => f === e,
        serialize: e => e,
        options: y,
        label: "Variant"
      })
    }), (0, Chunk951288.jsx)(Chunk29594.dv, {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/semibold",
      children: "To use overrides, the variant must be set to UNSET"
    }), (0, Chunk951288.jsx)(Chunk29594.BZ, {
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        value: p,
        onChange: e => {
          h(e)
        },
        label: "Background"
      })
    }), (0, Chunk951288.jsx)(Chunk29594.BZ, {
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        value: m,
        onChange: e => {
          g(e)
        },
        label: "Gradient Start"
      })
    }), (0, Chunk951288.jsx)(Chunk29594.BZ, {
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        value: E,
        onChange: e => {
          b(e)
        },
        label: "Gradient End"
      })
    })]
  })
}