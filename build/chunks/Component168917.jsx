/** Chunk was on 5606 **/
/** chunk id: 168917, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    errors: t,
    pendingNick: n,
    currentNick: g,
    username: f,
    user: b,
    guild: h
  } = e, A = null != n ? n : g, E = (0, i.bG)([c.A], () => c.A.can(u.xBc.CHANGE_NICKNAME, h) || c.A.can(u.xBc.MANAGE_NICKNAMES, h)), x = (0, s.L)(p.PremiumTypes.TIER_2);
  return (0, r.jsxs)(a.A, {
    title: _.intl.string(_.t.me1lRk),
    errors: t,
    children: [(0, r.jsx)(l.ksK, {
      value: null != A ? A : "",
      placeholder: f,
      maxLength: u.d0r,
      onChange: function(e) {
        (0, d.o_)(e, g)
      },
      disabled: !E,
      helperText: E ? true : _.intl.string(_.t.gzjxQi)
    }), x && (0, r.jsx)(o.A, {
      user: b,
      guildId: h.id,
      className: m.F
    })]
  })
}