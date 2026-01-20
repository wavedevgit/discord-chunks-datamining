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
  let [e, t] = i.useState(0), [n, c] = i.useState(4), [u, d] = i.useState(2), [f, p] = i.useState(s.NZ.LIGHT), [_, h] = i.useState(s.yB.BLUE), [m, g] = i.useState("darkslategray"), [E, b] = i.useState("blanchedalmond"), [y, O] = i.useState("pink"), v = i.useMemo(() => Object.entries(s.NZ).map(e => {
    let [t, n] = e;
    return {
      id: n,
      label: t,
      value: n
    }
  }), []), S = i.useMemo(() => Object.entries(s.yB).map(e => {
    let [t, n] = e;
    return {
      id: n,
      label: t,
      value: n
    }
  }), []);
  return (0, r.jsxs)(l.pg, {
    children: [(0, r.jsx)(s.ZP, {
      progress: u,
      minimum: e,
      maximum: n,
      weight: f,
      variant: _,
      override: {
        default: {
          background: m,
          gradientStart: E,
          gradientEnd: y
        }
      }
    }), (0, r.jsx)(l.dv, {}), (0, r.jsx)(l.BZ, {
      children: (0, r.jsx)(o.oil, {
        type: "number",
        value: u.toString(),
        onChange: t => {
          d((0, a.clamp)(+t, e, n))
        },
        label: "Progress ( ".concat(e, " - ").concat(n, " ) ")
      })
    }), (0, r.jsx)(l.BZ, {
      children: (0, r.jsx)(o.oil, {
        type: "number",
        value: e.toString(),
        onChange: e => {
          !(0 > +e) && (+e >= n || (u < +e && d(+e), t(+e)))
        },
        label: "Minimum Value"
      })
    }), (0, r.jsx)(l.BZ, {
      children: (0, r.jsx)(o.oil, {
        type: "number",
        value: n.toString(),
        onChange: t => {
          !(+t <= e) && (1 > +t || (u > +t && d(+t), c(+t)))
        },
        label: "Maximum Value"
      })
    }), (0, r.jsx)(l.BZ, {
      children: (0, r.jsx)(o.PhF, {
        label: "Variant",
        hideLabel: true,
        placeholder: "Variant",
        onSelectionChange: e => {
          null !== e && h(e)
        },
        value: _,
        options: S,
        selectionMode: "single",
        fullWidth: true
      })
    }), (0, r.jsx)(l.BZ, {
      children: (0, r.jsx)(o.PhF, {
        label: "Weight",
        selectionMode: "single",
        placeholder: "Weight",
        onSelectionChange: e => {
          null !== e && p(e)
        },
        value: f,
        options: v
      })
    }), (0, r.jsx)(l.dv, {}), (0, r.jsx)(o.Text, {
      variant: "text-lg/semibold",
      color: "text-feedback-critical",
      children: "To use overrides, the variant must be set to UNSET"
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: 'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes'
    }), (0, r.jsx)(l.BZ, {
      children: (0, r.jsx)(o.oil, {
        value: m,
        onChange: e => {
          g(e)
        },
        label: "Background (optional)"
      })
    }), (0, r.jsx)(l.BZ, {
      children: (0, r.jsx)(o.oil, {
        value: E,
        onChange: e => {
          b(e)
        },
        label: "Gradient Start"
      })
    }), (0, r.jsx)(l.BZ, {
      children: (0, r.jsx)(o.oil, {
        value: y,
        onChange: e => {
          O(e)
        },
        label: "Gradient End"
      })
    })]
  })
}