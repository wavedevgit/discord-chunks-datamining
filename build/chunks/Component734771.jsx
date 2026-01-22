/** Chunk was on web.js **/
/** chunk id: 734771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let t, {
      message: o,
      usernameHook: l,
      otherUser: c,
      otherUsernameHook: u,
      compact: d,
      channel: f
    } = e,
    p = (0, i.Ay)(o),
    _ = p.nick,
    h = l(p),
    m = (0, i.d8)(c, f);
  if (null != m && null != u) {
    let e = u(m);
    t = s.intl.format(s.t.L2FyVq, {
      username: _,
      usernameHook: h,
      otherUsername: m.nick,
      otherUsernameHook: e
    })
  } else t = s.intl.format(s.t["5v2xa8"], {
    username: _,
    usernameHook: h
  });
  return (0, r.jsx)(a.A, {
    icon: n(884797),
    timestamp: o.timestamp,
    compact: d,
    children: t
  })
}