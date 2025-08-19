/** Chunk was on 91173 **/
/** chunk id: 587737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    message: t,
    channel: o,
    targetUser: s,
    actorUsernameHook: c,
    targetUsernameHook: u,
    compact: d
  } = e, p = (0, i.ZP)(t), m = (0, i.Sw)(s, o), f = c(p), g = u(null != m ? m : true), _ = a.intl.format(a.t.tusv2t, {
    actorName: p.nick,
    actorHook: f,
    targetName: null == m ? true : m.nick,
    targetHook: g
  });
  return (0, r.jsx)(l.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: d,
    children: _
  })
}