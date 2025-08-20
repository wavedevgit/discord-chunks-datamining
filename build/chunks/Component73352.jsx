/** Chunk was on 26434 **/
/** chunk id: 73352, original params: e,t,n (module,exports,require) **/
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
    otherUsername: a,
    usernameHook: s,
    otherUsernameHook: c,
    compact: u
  } = e, {
    nick: d
  } = (0, i.ZP)(t), p = s(), m = c(), f = o.intl.format(o.t.MMN2Ji, {
    username: d,
    usernameHook: p,
    otherUsername: a,
    otherUsernameHook: m
  });
  return (0, r.jsx)(l.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: u,
    children: f
  })
}