/** Chunk was on 66866 **/
/** chunk id: 73352, original params: e,t,n (module,exports,require) **/
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
    otherUsername: o,
    usernameHook: s,
    otherUsernameHook: c,
    compact: u
  } = e, {
    nick: d
  } = (0, i.ZP)(t), p = s(), m = c(), f = a.intl.format(a.t.MMN2Ji, {
    username: d,
    usernameHook: p,
    otherUsername: o,
    otherUsernameHook: m
  });
  return (0, r.jsx)(l.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: u,
    children: f
  })
}