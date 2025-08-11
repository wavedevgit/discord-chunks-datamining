/** Chunk was on web.js **/
/** chunk id: 482239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    message: t,
    channel: s,
    targetUser: l,
    actorUsernameHook: c,
    targetUsernameHook: u,
    compact: d
  } = e, f = (0, i.ZP)(t), _ = (0, i.Sw)(l, s), p = c(f), h = u(null != _ ? _ : true), m = a.intl.format(a.t["32QI5+"], {
    actorName: f.nick,
    actorHook: p,
    targetName: null == _ ? true : _.nick,
    targetHook: h
  });
  return <o.Z icon={n(474019)} timestamp={t.timestamp} compact={d}>{m}</o.Z>
}