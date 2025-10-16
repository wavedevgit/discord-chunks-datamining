/** Chunk was on web.js **/
/** chunk id: 709867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => l
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk661975 = require("./661975.js"),
  Chunk793030 = require("./793030.js"),
  Chunk877371 = require("./877371.js"),
  Chunk675042 = require("./675042.js");

function l(e) {
  let {
    onChange: t,
    options: n,
    label: l,
    disabled: c,
    selectedValues: u
  } = e, d = (0, o.A)("CheckboxGroup"), f = e => {
    null == t || t(e)
  }, _ = (e, n) => {
    let r = n ? [...u, e] : u.filter(t => t !== e);
    null == t || t(r)
  };
  return (0, r.jsx)(a.gNt, {
    label: l,
    role: "group",
    children: d ? (0, r.jsx)(i.cO, {
      className: s.group,
      value: u.map(String),
      onChange: f,
      "data-mana-component": "checkbox-group",
      isDisabled: c,
      children: n.map(e => (0, r.jsx)(a.Cnq, {
        disabled: c || e.disabled,
        checked: u.includes(e.value),
        label: e.label,
        value: e.value,
        description: e.description,
        leadingIcon: e.leadingIcon
      }, String(e.value)))
    }) : (0, r.jsx)("div", {
      className: s.group,
      children: n.map(e => (0, r.jsx)("div", {
        className: s.backwardsCompatibleCheckbox,
        children: (0, r.jsx)(a.h7S, {
          disabled: c || e.disabled,
          checked: u.includes(e.value),
          label: e.label,
          description: e.description,
          leadingIcon: e.leadingIcon,
          onChange: t => _(e.value, t)
        })
      }, String(e.value)))
    })
  })
}