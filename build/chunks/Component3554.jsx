/** Chunk was on web.js **/
/** chunk id: 3554, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => d
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk661975 = require("./661975.js"),
  Chunk982125 = require("./982125.jsx"),
  Chunk595824 = require("./595824.jsx"),
  Chunk483566 = require("./483566.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk415957 = require("./415957.js");

function d(e) {
  var t, n;
  let {
    onChange: d,
    options: f,
    label: _,
    disabled: p,
    selectedValues: h
  } = e, m = i.useContext(c.KJ), g = null == m || null == (n = m.experiments) || null == (t = n.enabledExperiments) ? true : t.includes("mana-toggle-inputs"), E = e => {
    null == d || d(e)
  }, b = (e, t) => {
    let n = t ? [...h, e] : h.filter(t => t !== e);
    null == d || d(n)
  };
  return (0, r.jsx)(l.g, {
    label: _,
    role: "group",
    children: g ? (0, r.jsx)(a.cO, {
      className: u.group,
      value: h.map(String),
      onChange: E,
      "data-mana-component": "checkbox-group",
      isDisabled: p,
      children: f.map(e => (0, r.jsx)(o.C, {
        disabled: p || e.disabled,
        checked: h.includes(e.value),
        label: e.label,
        value: e.value,
        description: e.description,
        leadingIcon: e.leadingIcon
      }, String(e.value)))
    }) : (0, r.jsx)("div", {
      className: u.group,
      children: f.map(e => (0, r.jsx)("div", {
        className: u.backwardsCompatibleCheckbox,
        children: (0, r.jsx)(s.h, {
          disabled: p || e.disabled,
          checked: h.includes(e.value),
          label: e.label,
          description: e.description,
          leadingIcon: e.leadingIcon,
          onChange: t => b(e.value, t)
        })
      }, String(e.value)))
    })
  })
}