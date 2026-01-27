/** Chunk was on 92917 **/
/** chunk id: 840233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    message: t,
    channel: s,
    targetUser: o,
    actorUsernameHook: c,
    targetUsernameHook: u,
    compact: d
  } = e, p = (0, i.Ay)(t), m = (0, i.d8)(o, s), f = c(p), g = u(null != m ? m : true), h = a.intl.format(a.t.tusv2h, {
    actorName: p.nick,
    actorHook: f,
    targetName: null == m ? true : m.nick,
    targetHook: g
  });
  return (0, r.jsx)(l.A, {
    icon: n(394803),
    timestamp: t.timestamp,
    compact: d,
    children: h
  })
}