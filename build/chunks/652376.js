/** Chunk was on 82477 **/
/** chunk id: 652376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk623633 = require("./623633.js"),
  Chunk199902 = require("./199902.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js");

function c(e) {
  var t;
  let n = (0, i.e7)([o.Z], () => o.Z.getGuildId()),
    c = e.children.map(e => e.id),
    u = null != n && c.includes(n),
    d = false,
    f = false,
    h = false,
    p = (0, i.e7)([o.Z], () => o.Z.getChannelId()),
    g = null == (t = (0, l.Z)()) ? true : t.guild_id,
    b = null != g && c.includes(g),
    m = (0, i.e7)([s.Z], () => null != p && s.Z.hasVideo(p), [p]),
    y = (0, i.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
  return u && (d = !m, f = m, h = null != y && null != y.guildId && c.includes(y.guildId)), r.useMemo(() => ({
    audio: d,
    video: f,
    screenshare: h,
    liveStage: b,
    isCurrentUserConnected: u
  }), [d, f, h, b, u])
}