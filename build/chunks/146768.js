/** Chunk was on 56236 **/
/** chunk id: 146768, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk427679 = require("./427679.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js");

function s(e) {
  let {
    id: n,
    data: {
      guild: t,
      instance: s,
      speakers: u,
      participantCount: d
    },
    context: g
  } = e, p = (0, i.e7)([a.Z, c.Z], () => {
    var e;
    return a.Z.getGuild(null == (e = c.Z.getChannel(n)) ? true : e.getGuildId())
  }, [n]), f = (0, i.e7)([o.Z], () => o.Z.getStageInstanceByChannel(n), [n]), h = (0, r.w8)(n, l.pV.SPEAKER), v = (0, r.Rk)(n), m = null != f ? h : u, j = (null != f ? v : d) - m.length;
  return {
    channelId: n,
    guild: null != p ? p : t,
    stage: null != f ? f : s,
    speakers: m,
    audienceCount: j,
    context: g
  }
}