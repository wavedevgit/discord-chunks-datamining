/** Chunk was on 7453 **/
/** chunk id: 961022, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js"),
  Chunk446600 = require("./446600.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js");

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
  } = e, p = (0, l.bG)([c.A, o.A], () => {
    var e;
    return c.A.getGuild(null == (e = o.A.getChannel(n)) ? true : e.getGuildId())
  }, [n]), m = (0, l.bG)([a.A], () => a.A.getStageInstanceByChannel(n), [n]), v = (0, r.E5)(n, i.ip.SPEAKER), f = (0, r.zy)(n), h = null != m ? v : u, b = (null != m ? f : d) - h.length;
  return {
    channelId: n,
    guild: null != p ? p : t,
    stage: null != m ? m : s,
    speakers: h,
    audienceCount: b,
    context: g
  }
}