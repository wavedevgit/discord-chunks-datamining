/** Chunk was on 97492 **/
/** chunk id: 305928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk354583 = require("./354583.js"),
  Chunk616356 = require("./616356.js"),
  Chunk383501 = require("./383501.js"),
  Chunk977997 = require("./977997.js");

function c(e) {
  var t;
  let n = (0, l.bG)([s.A], () => s.A.getGuildId()),
    c = e.children.map(e => e.id),
    u = null != n && c.includes(n),
    d = false,
    f = false,
    p = false,
    h = (0, l.bG)([s.A], () => s.A.getChannelId()),
    b = null == (t = (0, i.A)()) ? true : t.guild_id,
    g = null != b && c.includes(b),
    m = (0, l.bG)([o.A], () => null != h && o.A.hasVideo(h), [h]),
    A = (0, l.bG)([a.A], () => a.A.getCurrentUserActiveStream());
  return u && (d = !m, f = m, p = null != A && null != A.guildId && c.includes(A.guildId)), r.useMemo(() => ({
    audio: d,
    video: f,
    screenshare: p,
    liveStage: g,
    isCurrentUserConnected: u
  }), [d, f, p, g, u])
}