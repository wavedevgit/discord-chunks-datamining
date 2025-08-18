/** Chunk was on 91173 **/
/** chunk id: 377499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t, {
      message: a,
      usernameHook: s,
      otherUser: c,
      otherUsernameHook: u,
      compact: d,
      channel: p
    } = e,
    m = (0, i.ZP)(a),
    f = m.nick,
    g = s(m),
    _ = (0, i.Sw)(c, p);
  if (null != _ && null != u) {
    let e = u(_);
    t = o.intl.format(o.t.L2FyVl, {
      username: f,
      usernameHook: g,
      otherUsername: _.nick,
      otherUsernameHook: e
    })
  } else t = o.intl.format(o.t["5v2xa2"], {
    username: f,
    usernameHook: g
  });
  return (0, r.jsx)(l.Z, {
    icon: n(474019),
    timestamp: a.timestamp,
    compact: d,
    children: t
  })
}