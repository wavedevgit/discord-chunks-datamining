/** Chunk was on web.js **/
/** chunk id: 330406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk42650 = require("./42650.js"),
  Chunk499339 = require("./499339.js"),
  Chunk481060 = require("./481060.js"),
  Chunk31471 = require("./31471.js");

function c(e) {
  let {
    inputRef: t,
    checked: n,
    defaultChecked: c,
    onChange: u,
    disabled: d = false,
    displayOnly: f,
    label: _,
    labeledBy: p,
    labelSize: h = "medium"
  } = e, m = i.useRef(null), g = i.useRef(null), E = true !== t ? t : g, b = null != _ && "" !== _;
  return (0, r.jsx)(s.tEY, {
    focusTarget: E,
    ringTarget: m,
    children: (0, r.jsx)(a.XZ, {
      inputRef: E,
      "aria-hidden": f || true,
      "aria-labelledby": p,
      isSelected: n,
      defaultSelected: c,
      onChange: u,
      isDisabled: d,
      isReadOnly: f,
      "data-mana-component": "checkbox",
      className: l.checkboxWrapper,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          ref: m,
          className: l.checkbox,
          style: {
            width: 24,
            height: 24
          },
          children: (0, r.jsx)(s.kSu, {
            size: "sm",
            "aria-hidden": true,
            color: "currentColor"
          })
        }), b && (0, r.jsx)(o._, {
          className: l.label,
          children: (0, r.jsx)(s.Text, {
            variant: "small" === h ? "text-sm/normal" : "text-md/normal",
            children: _
          })
        })]
      })
    })
  })
}