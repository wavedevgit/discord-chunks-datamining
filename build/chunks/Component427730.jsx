/** Chunk was on web.js **/
/** chunk id: 427730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk527685 = require("./527685.jsx"),
  Chunk261538 = require("./261538.jsx");
let u = () => {
  let [e, t] = Chunk473749.useState(0), [n, u] = Chunk473749.useState(4), [d, f] = Chunk473749.useState(2), [p, _] = Chunk473749.useState(Chunk527685.y.BLUE), [m, h] = Chunk473749.useState("darkslategray"), [g, E] = Chunk473749.useState("blanchedalmond"), [b, y] = Chunk473749.useState("pink"), O = Chunk473749.useMemo(() => Object.entries(Chunk527685.y).map(e => {
    let [t, n] = e;
    return {
      label: t,
      value: n
    }
  }), []);
  return (0, Chunk54381.jsxs)(Chunk261538.pg, {
    children: [(0, Chunk54381.jsx)(Chunk527685.Z, {
      progress: d,
      minimum: module,
      maximum: require,
      variant: p,
      override: {
        default: {
          background: m,
          gradientStart: g,
          gradientEnd: b
        }
      }
    }), (0, Chunk54381.jsx)(Chunk261538.dv, {}), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        type: "number",
        value: d.toString(),
        onChange: t => {
          f((0, a.clamp)(+t, e, n))
        },
        label: "Progress ( ".concat(module, " - ").concat(require, " ) ")
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        type: "number",
        value: module.toString(),
        onChange: e => {
          !(0 > +e) && (+e >= n || (d < +e && f(+e), t(+e)))
        },
        label: "Minimum Value"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        type: "number",
        value: require.toString(),
        onChange: t => {
          !(+t <= e) && (1 > +t || (d > +t && f(+t), u(+t)))
        },
        label: "Maximum Value"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk199849.B6, {
        placeholder: "Variant",
        select: e => {
          _(e)
        },
        isSelected: e => p === e,
        serialize: e => e,
        options: O,
        label: "Variant"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.dv, {}), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-lg/semibold",
      color: "status-danger",
      children: "To use overrides, the variant must be set to UNSET"
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: 'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes'
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        value: m,
        onChange: e => {
          h(e)
        },
        label: "Background"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        value: g,
        onChange: e => {
          E(e)
        },
        label: "Gradient Start"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        value: b,
        onChange: e => {
          y(e)
        },
        label: "Gradient End"
      })
    })]
  })
}