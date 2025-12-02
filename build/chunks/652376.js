/** Chunk was on 64271 **/
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
  let n = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
    c = e.children.map(e => e.id),
    u = null != n && c.includes(n),
    d = false,
    f = false,
    h = false,
    p = (0, i.e7)([a.Z], () => a.Z.getChannelId()),
    g = null == (t = (0, l.Z)()) ? true : t.guild_id,
    m = null != g && c.includes(g),
    b = (0, i.e7)([s.Z], () => null != p && s.Z.hasVideo(p), [p]),
    _ = (0, i.e7)([o.Z], () => o.Z.getCurrentUserActiveStream());
  return u && (d = !b, f = b, h = null != _ && null != _.guildId && c.includes(_.guildId)), r.useMemo(() => ({
    audio: d,
    video: f,
    screenshare: h,
    liveStage: m,
    isCurrentUserConnected: u
  }), [d, f, h, m, u])
}