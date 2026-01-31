/** Chunk was on 17534 **/
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
  let n = (0, l.bG)([a.A], () => a.A.getGuildId()),
    c = e.children.map(e => e.id),
    u = null != n && c.includes(n),
    d = false,
    h = false,
    p = false,
    g = (0, l.bG)([a.A], () => a.A.getChannelId()),
    f = null == (t = (0, i.A)()) ? true : t.guild_id,
    m = null != f && c.includes(f),
    b = (0, l.bG)([o.A], () => null != g && o.A.hasVideo(g), [g]),
    A = (0, l.bG)([s.A], () => s.A.getCurrentUserActiveStream());
  return u && (d = !b, h = b, p = null != A && null != A.guildId && c.includes(A.guildId)), r.useMemo(() => ({
    audio: d,
    video: h,
    screenshare: p,
    liveStage: m,
    isCurrentUserConnected: u
  }), [d, h, p, m, u])
}