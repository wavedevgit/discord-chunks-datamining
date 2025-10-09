/** Chunk was on 18259 **/
/** chunk id: 1493, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30856 = require("./30856.js");

function l(t) {
  let {
    onConfirm: e,
    onClose: n,
    validationText: l,
    errorText: c,
    header: d,
    className: u,
    cancelText: x,
    confirmText: p,
    instructionText: h,
    transitionState: m,
    children: j
  } = t, [b, f] = a.useState(""), [g, v] = a.useState(null), C = a.Children.count(j) > 0 ? (0, r.jsx)(i.Zbd, {
    type: i.Zbd.Types.WARNING,
    className: o.card,
    children: (0, r.jsx)(i.Text, {
      color: "currentColor",
      variant: "text-md/normal",
      children: j
    })
  }) : null;
  return (0, r.jsx)(i.Y0X, {
    transitionState: m,
    className: u,
    parentComponent: "TextEntryConfirm",
    children: (0, r.jsxs)("form", {
      onSubmit: function(t) {
        if (t.preventDefault(), b.toLowerCase() !== l.toLowerCase()) return void v(c);
        null == e || e(), n()
      },
      children: [(0, r.jsx)(i.xBx, {
        separator: false,
        children: (0, r.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: d
        })
      }), (0, r.jsxs)(i.hzk, {
        children: [C, (0, r.jsxs)("div", {
          className: o.spacing,
          children: [(0, r.jsx)(i.oil, {
            id: "text-entry-confirm",
            type: "text",
            label: h,
            value: b,
            autoComplete: "off",
            onChange: f,
            autoFocus: true
          }), null != g && "" !== g ? (0, r.jsx)(i.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: o.error,
            children: g
          }) : null]
        })]
      }), (0, r.jsx)(i.mzw, {
        children: (0, r.jsxs)(i.ButtonGroup, {
          direction: "horizontal-reverse",
          children: [(0, r.jsx)(i.Button, {
            variant: "critical-primary",
            text: null != p ? p : s.intl.string(s.t["cY+Ooa"]),
            type: "submit"
          }), (0, r.jsx)(i.Button, {
            variant: "secondary",
            text: null != x ? x : s.intl.string(s.t["ETE/oK"]),
            onClick: n
          })]
        })
      })]
    })
  })
}