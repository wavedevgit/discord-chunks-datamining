/** Chunk was on 91173 **/
/** chunk id: 845080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk901461 = require("./901461.js"),
  Chunk464891 = require("./464891.jsx");
let a = Chunk647438.memo(Chunk464891.ZP);

function s(e) {
  let {
    message: t,
    channel: n,
    author: i,
    compact: o,
    animateAvatar: s,
    guildId: c,
    isGroupStart: u = true,
    roleIcon: d,
    hideTimestamp: p,
    hideGuildTag: m,
    preview: f
  } = e;
  return !(0, l.Z)(t) && (u || o) ? (0, r.jsx)(a, {
    message: t,
    channel: n,
    author: i,
    guildId: c,
    compact: o,
    animate: s,
    roleIcon: d,
    hideTimestamp: p,
    hideGuildTag: m,
    preview: f
  }) : true
}