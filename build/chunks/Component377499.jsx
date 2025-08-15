/** Chunk was on 66866 **/
/** chunk id: 377499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let t, {
      message: o,
      usernameHook: s,
      otherUser: c,
      otherUsernameHook: u,
      compact: d,
      channel: p
    } = e,
    m = (0, i.ZP)(o),
    f = m.nick,
    _ = s(m),
    g = (0, i.Sw)(c, p);
  if (null != g && null != u) {
    let e = u(g);
    t = a.intl.format(a.t.L2FyVl, {
      username: f,
      usernameHook: _,
      otherUsername: g.nick,
      otherUsernameHook: e
    })
  } else t = a.intl.format(a.t["5v2xa2"], {
    username: f,
    usernameHook: _
  });
  return (0, r.jsx)(l.Z, {
    icon: n(474019),
    timestamp: o.timestamp,
    compact: d,
    children: t
  })
}