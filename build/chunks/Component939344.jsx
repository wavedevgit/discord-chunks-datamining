/** Chunk was on 9753 **/
/** chunk id: 939344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk502197 = require("./502197.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    message: t,
    compact: o,
    missed: c,
    joinable: u,
    usernameHook: d,
    onClickJoinCall: p
  } = e, m = (0, i.Ay)(t), f = m.nick, g = d(m), _ = (0, a.K)(t);
  return c ? (0, r.jsx)(l.A, {
    icon: n(130158),
    timestamp: t.timestamp,
    compact: o,
    children: null != _ ? s.intl.format(s.t.AcqBmO, {
      username: f,
      usernameHook: g,
      callDuration: _
    }) : s.intl.format(s.t["43phHx"], {
      username: f,
      usernameHook: g
    })
  }) : (0, r.jsxs)(l.A, {
    icon: n(175476),
    timestamp: t.timestamp,
    compact: o,
    children: [null != _ ? s.intl.format(s.t["7TeC1P"], {
      username: f,
      usernameHook: g,
      callDuration: _
    }) : s.intl.format(s.t.LuB5RD, {
      username: f,
      usernameHook: g
    }), u ? (0, r.jsx)(l.A.Action, {
      onClick: p,
      children: s.intl.string(s.t.oa9mvZ)
    }) : null]
  })
}