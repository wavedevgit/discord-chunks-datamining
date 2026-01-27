/** Chunk was on 92917 **/
/** chunk id: 734771, original params: e,t,n (module,exports,require) **/
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
      usernameHook: o,
      otherUser: c,
      otherUsernameHook: u,
      compact: d,
      channel: p
    } = e,
    m = (0, i.Ay)(s),
    f = m.nick,
    g = o(m),
    h = (0, i.d8)(c, p);
  if (null != h && null != u) {
    let e = u(h);
    t = a.intl.format(a.t.L2FyVq, {
      username: f,
      usernameHook: g,
      otherUsername: h.nick,
      otherUsernameHook: e
    })
  } else t = a.intl.format(a.t["5v2xa8"], {
    username: f,
    usernameHook: g
  });
  return (0, r.jsx)(l.A, {
    icon: n(884797),
    timestamp: s.timestamp,
    compact: d,
    children: t
  })
}