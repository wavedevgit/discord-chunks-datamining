/** Chunk was on 43694 **/
/** chunk id: 845080, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk901461 = require("./901461.js"),
  Chunk464891 = require("./464891.jsx");
let c = Chunk647438.memo(Chunk464891.ZP);

function s(e) {
  let {
    message: t,
    channel: a,
    author: n,
    compact: r,
    animateAvatar: s,
    guildId: l,
    isGroupStart: _ = true,
    roleIcon: d,
    hideTimestamp: p,
    hideGuildTag: m,
    preview: u
  } = e;
  return !(0, i.Z)(t) && (_ || r) ? (0, o.jsx)(c, {
    message: t,
    channel: a,
    author: n,
    guildId: l,
    compact: r,
    animate: s,
    roleIcon: d,
    hideTimestamp: p,
    hideGuildTag: m,
    preview: u
  }) : true
}