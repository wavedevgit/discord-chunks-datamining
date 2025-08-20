/** Chunk was on 26434 **/
/** chunk id: 4305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk352736 = require("./352736.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    message: t,
    usernameHook: s,
    compact: c
  } = e, u = (0, l.ZP)(t), d = s(u), p = i.Z.getSystemMessageUserJoin(t.id), m = a.intl.format(p, {
    username: u.nick,
    usernameHook: d
  });
  return (0, r.jsx)(o.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: c,
    children: m
  })
}