/** Chunk was on 41753 **/
/** chunk id: 652376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk623633 = require("./623633.js"),
  Chunk199902 = require("./199902.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js");

function c(e) {
  var t;
  let n = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
    c = e.children.map(e => e.id),
    u = null != n && c.includes(n),
    d = false,
    h = false,
    p = false,
    f = (0, i.e7)([s.Z], () => s.Z.getChannelId()),
    g = null == (t = (0, l.Z)()) ? true : t.guild_id,
    m = null != g && c.includes(g),
    b = (0, i.e7)([a.Z], () => null != f && a.Z.hasVideo(f), [f]),
    O = (0, i.e7)([o.Z], () => o.Z.getCurrentUserActiveStream());
  return u && (d = !b, h = b, p = null != O && null != O.guildId && c.includes(O.guildId)), r.useMemo(() => ({
    audio: d,
    video: h,
    screenshare: p,
    liveStage: m,
    isCurrentUserConnected: u
  }), [d, h, p, m, u])
}