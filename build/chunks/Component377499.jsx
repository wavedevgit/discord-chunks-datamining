/** Chunk was on web.js **/
/** chunk id: 377499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    _ = (0, i.ZP)(s),
    p = _.nick,
    h = l(_),
    m = (0, i.Sw)(c, f);
  if (null != m && null != u) {
    let e = u(m);
    t = a.intl.format(a.t.L2FyVl, {
      username: p,
      usernameHook: h,
      otherUsername: m.nick,
      otherUsernameHook: e
    })
  } else t = a.intl.format(a.t["5v2xa2"], {
    username: p,
    usernameHook: h
  });
  return (0, r.jsx)(o.Z, {
    icon: n(474019),
    timestamp: s.timestamp,
    compact: d,
    children: t
  })
}