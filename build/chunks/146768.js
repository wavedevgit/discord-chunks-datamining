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
  } = e, m = (0, r.e7)([o.Z, c.Z], () => {
    var e;
    return o.Z.getGuild(null == (e = c.Z.getChannel(n)) ? true : e.getGuildId())
  }, [n]), h = (0, r.e7)([a.Z], () => a.Z.getStageInstanceByChannel(n), [n]), p = (0, i.w8)(n, l.pV.SPEAKER), v = (0, i.Rk)(n), j = null != h ? p : u, x = (null != h ? v : d) - j.length;
  return {
    channelId: n,
    guild: null != m ? m : t,
    stage: null != h ? h : s,
    speakers: j,
    audienceCount: x,
    context: g
  }
}