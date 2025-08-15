/** Chunk was on 89311 **/
/** chunk id: 327220, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk9156 = require("./9156.js");

function o(e) {
  let t = (0, a.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
    r = (0, a.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
    o = (0, a.e7)([l.ZP], () => l.ZP.getMutedChannels(null)),
    s = n.useMemo(() => {
      let e = new Set;
      for (let t in r) {
        let n = r[t];
        null != n && o.has(n) && e.add(t)
      }
      return e
    }, [r, o]);
  return n.useMemo(() => null == e ? true : e.filter(e => {
    for (let t of e.participants)
      if (s.has(t)) returnfalse;
    returntrue
  }), [e, s])
}