/** Chunk was on web.js **/
/** chunk id: 54605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk136722 = require("./136722.js"),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk80739 = require("./80739.js");
let c = 5;

function u(e) {
  let {
    error: t,
    selectedGuildId: n,
    onGuildChange: u,
    guilds: d,
    disabled: f = false
  } = e, p = d.filter(e => i.zy(e.permissions, o.xBc.MANAGE_GUILD)).map(e => ({
    id: e.id,
    value: e.id,
    label: e.name
  }));
  return (0, r.jsx)("div", {
    className: l.g,
    children: (0, r.jsx)(a.ZiE, {
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