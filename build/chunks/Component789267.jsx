/** Chunk was on 91173 **/
/** chunk id: 789267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    message: t,
    compact: a,
    missed: s,
    joinable: c,
    usernameHook: u,
    onClickJoinCall: d
  } = e, p = (0, i.ZP)(t), m = p.nick, f = u(p), g = function(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null
  }(t);
  return s ? (0, r.jsx)(l.Z, {
    icon: n(154239),
    timestamp: t.timestamp,
    compact: a,
    children: null != g ? o.intl.format(o.t.AcqBmJ, {
      username: m,
      usernameHook: f,
      callDuration: g
    }) : o.intl.format(o.t["43phHx"], {
      username: m,
      usernameHook: f
    })
  }) : (0, r.jsxs)(l.Z, {
    icon: n(344163),
    timestamp: t.timestamp,
    compact: a,
    children: [null != g ? o.intl.format(o.t["7TeC1N"], {
      username: m,
      usernameHook: f,
      callDuration: g
    }) : o.intl.format(o.t.LuB5RE, {
      username: m,
      usernameHook: f
    }), c ? (0, r.jsx)(l.Z.Action, {
      onClick: d,
      children: o.intl.string(o.t.oa9mvb)
    }) : null]
  })
}