/** Chunk was on web.js **/
/** chunk id: 168917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk757036 = require("./757036.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk180020 = require("./180020.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk684732 = require("./684732.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk131025 = require("./131025.js");

function h(e) {
  let {
    errors: t,
    pendingNick: n,
    currentNick: h,
    username: m,
    user: g,
    guild: E
  } = e, y = null != n ? n : h, b = (0, i.bG)([c.A], () => c.A.can(d.xBc.CHANGE_NICKNAME, E) || c.A.can(d.xBc.MANAGE_NICKNAMES, E)), O = (0, s.L)(f.PremiumTypes.TIER_2);

  function v(e) {
    (0, u.o_)(e, h)
  }
  return (0, r.jsxs)(o.A, {
    title: p.intl.string(p.t.me1lRk),
    errors: t,
    children: [(0, r.jsx)(a.ksK, {
      value: null != y ? y : "",
      placeholder: m,
      maxLength: d.d0r,
      onChange: v,
      disabled: !b,
      helperText: b ? true : p.intl.string(p.t.gzjxQi)
    }), O && (0, r.jsx)(l.A, {
      user: g,
      guildId: E.id,
      className: _.F
    })]
  })
}