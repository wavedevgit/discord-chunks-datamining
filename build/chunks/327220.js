/** Chunk was on 89311 **/
/** chunk id: 327220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk9156 = require("./9156.js");

function s(e) {
  let t = (0, i.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
    n = (0, i.e7)([l.Z], () => l.Z.getMutableDMsByUserIds(), [t]),
    s = (0, i.e7)([a.ZP], () => a.ZP.getMutedChannels(null)),
    o = r.useMemo(() => {
      let e = new Set;
      for (let t in n) {
        let r = n[t];
        null != r && s.has(r) && e.add(t)
      }
      return e
    }, [n, s]);
  return r.useMemo(() => null == e ? true : e.filter(e => {
    for (let t of e.participants)
      if (o.has(t)) returnfalse;
    returntrue
  }), [e, o])
}