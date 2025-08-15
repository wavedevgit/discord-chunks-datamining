/** Chunk was on 66866 **/
/** chunk id: 845080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk901461 = require("./901461.js"),
  Chunk464891 = require("./464891.jsx");
let o = Chunk73800.memo(Chunk464891.ZP);

function s(e) {
  let {
    message: t,
    channel: n,
    author: i,
    compact: a,
    animateAvatar: s,
    guildId: c,
    isGroupStart: u = true,
    roleIcon: d,
    hideTimestamp: p,
    hideGuildTag: m,
    preview: f
  } = e;
  return !(0, l.Z)(t) && (u || a) ? (0, r.jsx)(o, {
    message: t,
    channel: n,
    author: i,
    guildId: c,
    compact: a,
    animate: s,
    roleIcon: d,
    hideTimestamp: p,
    hideGuildTag: m,
    preview: f
  }) : true
}