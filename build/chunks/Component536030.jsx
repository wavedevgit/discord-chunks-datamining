/** Chunk was on web.js **/
/** chunk id: 536030, original params: e,t,n (module,exports,re quire) **/
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
  let {
    message: t,
    channel: o,
    targetUser: l,
    actorUsernameHook: c,
    targetUsernameHook: u,
    compact: d
  } = e, f = (0, i.Ay)(t), p = (0, i.d8)(l, o), _ = c(f), h = u(null != p ? p : true), m = s.intl.format(s.t["32QI5/"], {
    actorName: f.nick,
    actorHook: _,
    targetName: null == p ? true : p.nick,
    targetHook: h
  });
  return (0, r.jsx)(a.A, {
    icon: n(884797),
    timestamp: t.timestamp,
    compact: d,
    children: m
  })
}