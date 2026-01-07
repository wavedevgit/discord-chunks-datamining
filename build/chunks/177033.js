/** Chunk was on 1272 **/
/** chunk id: 177033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk355298 = require("./355298.js"),
  Chunk900255 = require("./900255.js");

function c() {
  let e = (0, i.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
    t = (0, i.Wu)([l.Z, o.Z], () => {
      let e = l.Z.getMutablePrivateChannels(),
        t = Array.from(o.Z.getMessageRequestChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, s.x)(t)
    }, [e]),
    n = (0, i.cj)([a.default], () => {
      let e = {};
      return t.forEach(t => {
        let n = a.default.getUser(t.recipients[0]);
        null != n && (e[t.id] = n)
      }), e
    }, [t]);
  return r.useMemo(() => t.map(e => ({
    channel: e,
    user: n[e.id]
  })), [t, n])
}