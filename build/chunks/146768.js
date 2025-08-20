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
  } = e, p = (0, r.e7)([o.Z, a.Z], () => {
    var e;
    return o.Z.getGuild(null == (e = a.Z.getChannel(n)) ? true : e.getGuildId())
  }, [n]), h = (0, r.e7)([c.Z], () => c.Z.getStageInstanceByChannel(n), [n]), m = (0, i.w8)(n, l.pV.SPEAKER), v = (0, i.Rk)(n), j = null != h ? m : u, f = (null != h ? v : d) - j.length;
  return {
    channelId: n,
    guild: null != p ? p : t,
    stage: null != h ? h : s,
    speakers: j,
    audienceCount: f,
    context: g
  }
}