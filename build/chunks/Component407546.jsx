/** Chunk was on web.js **/
/** chunk id: 407546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk149765 = require("./149765.js"),
  Chunk993365 = require("./993365.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990199 = require("./990199.js");
let d = 5;

function f(e) {
  let {
    error: t,
    selectedGuildId: n,
    onGuildChange: f,
    guilds: p,
    disabled: _ = false
  } = e, m = p.filter(e => i.e$(e.permissions, l.Plq.MANAGE_GUILD)).map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, r.jsxs)("div", {
    className: u.selectorGroup,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-deprecated-12/semibold",
      className: u.sectionLabel,
      children: c.intl.string(c.t["1DXFFd"])
    }), null != t && "" !== t ? (0, r.jsx)(a.x, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: t
    }) : null, (0, r.jsx)(o.d, {
      wrapperClassName: u.select,
      maxVisibleItems: d,
      placeholder: c.intl.string(c.t.oM4E1A),
      options: m,
      onChange: f,
      isDisabled: _,
      value: n
    }), (0, r.jsx)(a.x, {
      variant: "text-xs/medium",
      color: "text-default",
      className: u.label,
      children: c.intl.format(c.t.t9Jm9o, {})
    })]
  })
}