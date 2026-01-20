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
  Chunk261538 = require("./261538.jsx"),
  Chunk222065 = require("./222065.js");
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
  d = () => {
    let [e, t] = i.useState(15), [n, d] = i.useState(8), [f, p] = i.useState("xl"), [_, h] = i.useState(true), m = i.useMemo(() => [...Array(e)].map((e, t) => (0, r.jsx)(o.P3F, {
      className: c.child,
      onClick: () => console.log(t),
      children: t
    }, t)), [e]);
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Z, {
        gap: n,
        edgeFade: f,
        hideActionsWhenDisabled: _,
        children: m
      }), (0, r.jsx)(l.dv, {}), (0, r.jsxs)(l.BZ, {
        children: [(0, r.jsx)(o.Checkbox, {
          checked: _,
          onChange: () => h(!_),
          label: "Hide Actions When Disabled"
        }), (0, r.jsx)(o.oil, {
          type: "number",
          min: 0,
          value: e.toString(),
          onChange: e => {
            t((0, a.clamp)(+e, 0, 100))
          },
          label: "Children Count"
        })]
      }), (0, r.jsx)(l.BZ, {
        children: (0, r.jsx)(o.PhF, {
          value: n,
          options: u,
          onSelectionChange: d,
          label: "Children Gap",
          selectionMode: "single",
          fullWidth: true
        })
      }), (0, r.jsx)(l.BZ, {
        children: (0, r.jsx)(o.PhF, {
          value: f,
          options: u,
          onSelectionChange: p,
          label: "Edge Fade Space",
          selectionMode: "single",
          fullWidth: true
        })
      })]
    })
  }