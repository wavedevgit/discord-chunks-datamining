/** Chunk was on web.js **/
/** chunk id: 845080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk901461 = require("./901461.js"),
  Chunk464891 = require("./464891.jsx");
let s = Chunk647438.memo(Chunk464891.ZP);

function l(e) {
  let {
    message: t,
    channel: n,
    author: i,
    compact: a,
    animateAvatar: l,
    guildId: c,
    isGroupStart: u = true,
    roleIcon: d,
    hideTimestamp: f,
    hideGuildTag: _,
    preview: p
  } = e;
  return !(0, o.Z)(t) && (u || a) ? (0, r.jsx)(s, {
    message: t,
    channel: n,
    author: i,
    guildId: c,
    compact: a,
    animate: l,
    roleIcon: d,
    hideTimestamp: f,
    hideGuildTag: _,
    preview: p
  }) : true
}