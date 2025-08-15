/** Chunk was on 66866 **/
/** chunk id: 789267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    message: t,
    compact: o,
    missed: s,
    joinable: c,
    usernameHook: u,
    onClickJoinCall: d
  } = e, p = (0, i.ZP)(t), m = p.nick, f = u(p), _ = function(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null
  }(t);
  return s ? (0, r.jsx)(l.Z, {
    icon: n(154239),
    timestamp: t.timestamp,
    compact: o,
    children: null != _ ? a.intl.format(a.t.AcqBmJ, {
      username: m,
      usernameHook: f,
      callDuration: _
    }) : a.intl.format(a.t["43phHx"], {
      username: m,
      usernameHook: f
    })
  }) : (0, r.jsxs)(l.Z, {
    icon: n(344163),
    timestamp: t.timestamp,
    compact: o,
    children: [null != _ ? a.intl.format(a.t["7TeC1N"], {
      username: m,
      usernameHook: f,
      callDuration: _
    }) : a.intl.format(a.t.LuB5RE, {
      username: m,
      usernameHook: f
    }), c ? (0, r.jsx)(l.Z.Action, {
      onClick: d,
      children: a.intl.string(a.t.oa9mvb)
    }) : null]
  })
}