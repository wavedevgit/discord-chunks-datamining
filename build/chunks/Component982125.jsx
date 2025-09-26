/** Chunk was on web.js **/
/** chunk id: 982125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk42650 = require("./42650.js"),
  Chunk499339 = require("./499339.js"),
  Chunk155127 = require("./155127.js"),
  Chunk657707 = require("./657707.js"),
  Chunk777207 = require("./777207.jsx"),
  Chunk726550 = require("./726550.js");

function d(e) {
  let {
    inputRef: t,
    checked: n,
    defaultChecked: d,
    onChange: f,
    disabled: _ = false,
    displayOnly: p,
    label: h,
    labeledBy: m,
    labelSize: g = "medium",
    value: E
  } = e, b = i.useRef(null), y = i.useRef(null), O = true !== t ? t : y, v = null != h && "" !== h;
  return (0, r.jsx)(s.tE, {
    focusTarget: O,
    ringTarget: b,
    children: (0, r.jsx)(a.XZ, {
      inputRef: O,
      "aria-hidden": p || true,
      "aria-labelledby": m,
      isSelected: n,
      defaultSelected: d,
      onChange: f,
      isDisabled: _,
      isReadOnly: p,
      "data-mana-component": "checkbox",
      className: u.checkboxWrapper,
      value: E,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          ref: b,
          className: u.checkbox,
          style: {
            width: 24,
            height: 24
          },
          children: (0, r.jsx)(l.kSu, {
            size: "sm",
            "aria-hidden": true,
            color: "currentColor"
          })
        }), v && (0, r.jsx)(o._, {
          className: u.label,
          children: (0, r.jsx)(c.x, {
            variant: "small" === g ? "text-sm/normal" : "text-md/normal",
            children: h
          })
        })]
      })
    })
  })
}