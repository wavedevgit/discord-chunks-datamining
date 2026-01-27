/** Chunk was on 92917 **/
/** chunk id: 939344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let t, {
      message: s,
      compact: o,
      missed: c,
      joinable: u,
      usernameHook: d,
      onClickJoinCall: p
    } = e,
    m = (0, i.Ay)(s),
    f = m.nick,
    g = d(m),
    h = null != (t = null != s.call ? s.call.duration : null) ? t.humanize() : null;
  return c ? (0, r.jsx)(l.A, {
    icon: n(130158),
    timestamp: s.timestamp,
    compact: o,
    children: null != h ? a.intl.format(a.t.AcqBmO, {
      username: f,
      usernameHook: g,
      callDuration: h
    }) : a.intl.format(a.t["43phHx"], {
      username: f,
      usernameHook: g
    })
  }) : (0, r.jsxs)(l.A, {
    icon: n(175476),
    timestamp: s.timestamp,
    compact: o,
    children: [null != h ? a.intl.format(a.t["7TeC1P"], {
      username: f,
      usernameHook: g,
      callDuration: h
    }) : a.intl.format(a.t.LuB5RD, {
      username: f,
      usernameHook: g
    }), u ? (0, r.jsx)(l.A.Action, {
      onClick: p,
      children: a.intl.string(a.t.oa9mvZ)
    }) : null]
  })
}