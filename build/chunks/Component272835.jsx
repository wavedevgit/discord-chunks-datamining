/** Chunk was on web.js **/
/** chunk id: 272835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk397927 = require("./397927.js"),
  Chunk252561 = require("./252561.jsx"),
  Chunk720462 = require("./720462.jsx"),
  Chunk309587 = require("./309587.js");
let u = [{
    id: "xxs",
    label: "xxs",
    value: "xxs"
  }, {
    id: "xs",
    label: "xs",
    value: "xs"
  }, {
    id: "sm",
    label: "sm",
    value: "sm"
  }, {
    id: "md",
    label: "md",
    value: "md"
  }, {
    id: "lg",
    label: "lg",
    value: "lg"
  }, {
    id: "xl",
    label: "xl",
    value: "xl"
  }, {
    id: "xxl",
    label: "xxl",
    value: "xxl"
  }, {
    id: "none",
    label: "0px",
    value: 0
  }, {
    id: "4px",
    label: "4px",
    value: 4
  }, {
    id: "6px",
    label: "6px",
    value: 6
  }, {
    id: "8px",
    label: "8px",
    value: 8
  }, {
    id: "12px",
    label: "12px",
    value: 12
  }, {
    id: "16px",
    label: "16px",
    value: 16
  }, {
    id: "20px",
    label: "20px",
    value: 20
  }, {
    id: "24px",
    label: "24px",
    value: 24
  }, {
    id: "32px",
    label: "32px",
    value: 32
  }, {
    id: "40px",
    label: "40px",
    value: 40
  }],
  d = {
    name: "Interactive H Scroll",
    id: "interactive-h-scroll",
    component: () => {
      let [e, t] = i.useState(15), [n, d] = i.useState(8), [f, p] = i.useState("xl"), [_, h] = i.useState(true), m = i.useMemo(() => [...Array(e)].map((e, t) => (0, r.jsx)(o.DUT, {
        className: c.j,
        onClick: () => console.log(t),
        children: (0, r.jsxs)(o.BJc, {
          direction: "vertical",
          justify: "space-between",
          align: "center",
          children: [(0, r.jsx)("div", {
            children: t
          }), t % 3 == 0 && (0, r.jsx)(o.Button, {
            onClick: () => console.log("clicked button ".concat(t)),
            text: "Click Me"
          })]
        })
      }, t)), [e]);
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.A, {
          gap: n,
          edgeFade: f,
          hideActionsWhenDisabled: _,
          children: m
        }), (0, r.jsx)(s.nB, {}), (0, r.jsxs)(s.MG, {
          children: [(0, r.jsx)(o.Checkbox, {
            checked: _,
            onChange: () => h(!_),
            label: "Hide Actions When Disabled"
          }), (0, r.jsx)(o.ksK, {
            type: "number",
            min: 0,
            value: e.toString(),
            onChange: e => {
              t((0, a.clamp)(+e, 0, 100))
            },
            label: "Children Count"
          })]
        }), (0, r.jsx)(s.MG, {
          children: (0, r.jsx)(o.l6P, {
            value: n,
            options: u,
            onSelectionChange: d,
            label: "Children Gap",
            selectionMode: "single",
            fullWidth: true
          })
        }), (0, r.jsx)(s.MG, {
          children: (0, r.jsx)(o.l6P, {
            value: f,
            options: u,
            onSelectionChange: p,
            label: "Edge Fade Space",
            selectionMode: "single",
            fullWidth: true
          })
        })]
      })
    },
    controls: {}
  }