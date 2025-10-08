/** Chunk was on web.js **/
/** chunk id: 709867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => s
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk42650 = require("./42650.js"),
  Chunk793030 = require("./793030.js"),
  Chunk675042 = require("./675042.js");

function s(e) {
  let {
    onChange: t,
    options: n,
    label: s,
    disabled: l,
    selectedValues: c
  } = e, u = e => {
    null == t || t(e)
  };
  return (0, r.jsx)(a.gNt, {
    label: s,
    role: "group",
    children: (0, r.jsx)(i.cO, {
      className: o.group,
      value: c.map(String),
      onChange: u,
      "data-mana-component": "checkbox-group",
      isDisabled: l,
      children: n.map(e => (0, r.jsx)(a.Cnq, {
        disabled: l || e.disabled,
        checked: c.includes(e.value),
        label: e.label,
        value: e.value,
        description: e.description,
        leadingIcon: e.leadingIcon
      }, String(e.value)))
    })
  })
}