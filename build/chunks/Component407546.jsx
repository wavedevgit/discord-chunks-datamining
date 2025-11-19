/** Chunk was on web.js **/
/** chunk id: 407546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk149765 = require("./149765.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990199 = require("./990199.js");
let u = 5;

function d(e) {
  let {
    error: t,
    selectedGuildId: n,
    onGuildChange: d,
    guilds: f,
    disabled: _ = false
  } = e, p = f.filter(e => i.e$(e.permissions, s.Plq.MANAGE_GUILD)).map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, r.jsxs)("div", {
    className: c.selectorGroup,
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-deprecated-12/semibold",
      className: c.sectionLabel,
      children: l.intl.string(l.t["1DXFFd"])
    }), null != t && "" !== t ? (0, r.jsx)(a.x, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: t
    }) : null, (0, r.jsx)(o.VcW, {
      wrapperClassName: c.select,
      maxVisibleItems: u,
      placeholder: l.intl.string(l.t.oM4E1A),
      options: p,
      onChange: d,
      isDisabled: _,
      value: n
    }), (0, r.jsx)(a.x, {
      variant: "text-xs/medium",
      color: "header-secondary",
      className: c.label,
      children: l.intl.format(l.t.t9Jm9o, {})
    })]
  })
}