/** Chunk was on 82124 **/
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
    p = false,
    f = false,
    h = (0, i.e7)([o.Z], () => o.Z.getChannelId()),
    g = null == (t = (0, l.Z)()) ? true : t.guild_id,
    m = null != g && c.includes(g),
    b = (0, i.e7)([s.Z], () => null != h && s.Z.hasVideo(h), [h]),
    y = (0, i.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
  return u && (d = !b, p = b, f = null != y && null != y.guildId && c.includes(y.guildId)), r.useMemo(() => ({
    audio: d,
    video: p,
    screenshare: f,
    liveStage: m,
    isCurrentUserConnected: u
  }), [d, p, f, m, u])
}