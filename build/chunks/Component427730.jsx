/** Chunk was on web.js **/
/** chunk id: 427730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk527685 = require("./527685.jsx"),
  Chunk261538 = require("./261538.jsx");
let c = () => {
  let [e, t] = Chunk473749.useState(0), [n, c] = Chunk473749.useState(4), [u, d] = Chunk473749.useState(2), [f, _] = Chunk473749.useState(Chunk527685.y.BLUE), [p, h] = Chunk473749.useState("darkslategray"), [m, g] = Chunk473749.useState("blanchedalmond"), [E, b] = Chunk473749.useState("pink"), y = Chunk473749.useMemo(() => Object.entries(Chunk527685.y).map(e => {
    let [t, n] = e;
    return {
      label: t,
      value: n
    }
  }), []);
  return (0, Chunk54381.jsxs)(Chunk261538.pg, {
    children: [(0, Chunk54381.jsx)(Chunk527685.Z, {
      progress: u,
      minimum: module,
      maximum: require,
      variant: f,
      override: {
        default: {
          background: p,
          gradientStart: m,
          gradientEnd: E
        }
      }
    }), (0, Chunk54381.jsx)(Chunk261538.dv, {}), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        type: "number",
        value: u.toString(),
        onChange: t => {
          d((0, a.clamp)(+t, e, n))
        },
        label: "Progress ( ".concat(module, " - ").concat(require, " ) ")
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        type: "number",
        value: module.toString(),
        onChange: e => {
          !(0 > +e) && (+e >= n || (u < +e && d(+e), t(+e)))
        },
        label: "Minimum Value"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        type: "number",
        value: require.toString(),
        onChange: t => {
          !(+t <= e) && (1 > +t || (u > +t && d(+t), c(+t)))
        },
        label: "Maximum Value"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.PhF, {
        placeholder: "Variant",
        select: e => {
          _(e)
        },
        isSelected: e => f === e,
        serialize: e => e,
        options: y,
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
        value: p,
        onChange: e => {
          h(e)
        },
        label: "Background"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        value: m,
        onChange: e => {
          g(e)
        },
        label: "Gradient Start"
      })
    }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        value: E,
        onChange: e => {
          b(e)
        },
        label: "Gradient End"
      })
    })]
  })
}