/** Chunk was on web.js **/
/** chunk id: 407546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk149765 = require("./149765.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk829478 = require("./829478.js");
let c = 5;

function u(e) {
  let {
    error: t,
    selectedGuildId: n,
    onGuildChange: u,
    guilds: d,
    disabled: f = false
  } = e, p = d.filter(e => i.e$(e.permissions, o.Plq.MANAGE_GUILD)).map(e => ({
    id: e.id,
    value: e.id,
    label: e.name
  }));
  return (0, r.jsx)("div", {
    className: l.selector,
    children: (0, r.jsx)(a.VcW, {
      label: s.intl.string(s.t["1DXFFd"]),
      helperText: s.intl.format(s.t.t9Jm9o, {}),
      errorMessage: t,
      selectionMode: "single",
      maxOptionsVisible: c,
      placeholder: s.intl.string(s.t.oM4E1A),
      options: p,
      onSelectionChange: u,
      disabled: f,
      value: null != n ? n : true
    })
  })
}