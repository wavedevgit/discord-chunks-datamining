/** Chunk was on web.js **/
/** chunk id: 507962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t, {
      message: s,
      usernameHook: l,
      otherUser: c,
      otherUsernameHook: u,
      compact: d,
      channel: f
    } = e,
    p = (0, i.ZP)(s),
    _ = p.nick,
    m = l(p),
    h = (0, i.Sw)(c, f);
  if (null != h && null != u) {
    let e = u(h);
    t = o.intl.format(o.t.L2FyVq, {
      username: _,
      usernameHook: m,
      otherUsername: h.nick,
      otherUsernameHook: e
    })
  } else t = o.intl.format(o.t["5v2xa8"], {
    username: _,
    usernameHook: m
  });
  return (0, r.jsx)(a.Z, {
    icon: n(474019),
    timestamp: s.timestamp,
    compact: d,
    children: t
  })
}