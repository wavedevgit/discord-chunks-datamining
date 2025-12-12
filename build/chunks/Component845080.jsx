/** Chunk was on web.js **/
/** chunk id: 845080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk901461 = require("./901461.js"),
  Chunk464891 = require("./464891.jsx");
let s = Chunk473749.memo(Chunk464891.ZP);

function l(e) {
  let {
    message: t,
    channel: n,
    author: i,
    compact: o,
    animateAvatar: l,
    guildId: c,
    isGroupStart: u = true,
    roleIcon: d,
    hideTimestamp: f,
    hideGuildTag: p,
    preview: _
  } = e;
  return !(0, a.Z)(t) && (u || o) ? (0, r.jsx)(s, {
    message: t,
    channel: n,
    author: i,
    guildId: c,
    compact: o,
    animate: l,
    roleIcon: d,
    hideTimestamp: f,
    hideGuildTag: p,
    preview: _
  }) : true
}