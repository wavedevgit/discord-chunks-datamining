/** Chunk was on web.js **/
/** chunk id: 3554, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => u
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk661975 = require("./661975.js"),
  Chunk982125 = require("./982125.jsx"),
  Chunk595824 = require("./595824.jsx"),
  Chunk483566 = require("./483566.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk415957 = require("./415957.js");

function u(e) {
  let {
    onChange: t,
    options: n,
    label: u,
    disabled: d,
    selectedValues: f
  } = e, _ = (0, l.A)("CheckboxGroup"), p = e => {
    null == t || t(e)
  }, h = (e, n) => {
    let r = n ? [...f, e] : f.filter(t => t !== e);
    null == t || t(r)
  };
  return (0, r.jsx)(s.g, {
    label: u,
    role: "group",
    children: _ ? (0, r.jsx)(i.cO, {
      className: c.group,
      value: f.map(String),
      onChange: p,
      "data-mana-component": "checkbox-group",
      isDisabled: d,
      children: n.map(e => (0, r.jsx)(a.C, {
        disabled: d || e.disabled,
        checked: f.includes(e.value),
        label: e.label,
        value: e.value,
        description: e.description,
        leadingIcon: e.leadingIcon
      }, String(e.value)))
    }) : (0, r.jsx)("div", {
      className: c.group,
      children: n.map(e => (0, r.jsx)("div", {
        className: c.backwardsCompatibleCheckbox,
        children: (0, r.jsx)(o.h, {
          disabled: d || e.disabled,
          checked: f.includes(e.value),
          label: e.label,
          description: e.description,
          leadingIcon: e.leadingIcon,
          onChange: t => h(e.value, t)
        })
      }, String(e.value)))
    })
  })
}