/** Chunk was on web.js **/
/** chunk id: 587737, original params: e,t,n (module,exports,re quire) **/
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
  let {
    message: t,
    channel: s,
    targetUser: l,
    actorUsernameHook: c,
    targetUsernameHook: u,
    compact: d
  } = e, f = (0, i.ZP)(t), p = (0, i.Sw)(l, s), _ = c(f), m = u(null != p ? p : true), h = o.intl.format(o.t.tusv2h, {
    actorName: f.nick,
    actorHook: _,
    targetName: null == p ? true : p.nick,
    targetHook: m
  });
  return (0, r.jsx)(a.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: d,
    children: h
  })
}