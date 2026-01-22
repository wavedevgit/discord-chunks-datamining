/** Chunk was on 7453 **/
/** chunk id: 961022, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js"),
  Chunk446600 = require("./446600.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js");

function o(e) {
  let {
    id: n,
    data: {
      guild: t,
      instance: o,
      speakers: u,
      participantCount: d
    },
    context: m
  } = e, g = (0, r.bG)([c.A, a.A], () => {
    var e;
    return c.A.getGuild(null == (e = a.A.getChannel(n)) ? true : e.getGuildId())
  }, [n]), h = (0, r.bG)([s.A], () => s.A.getStageInstanceByChannel(n), [n]), j = (0, l.E5)(n, i.ip.SPEAKER), x = (0, l.zy)(n), v = null != h ? j : u, p = (null != h ? x : d) - v.length;
  return {
    channelId: n,
    guild: null != g ? g : t,
    stage: null != h ? h : o,
    speakers: v,
    audienceCount: p,
    context: m
  }
}