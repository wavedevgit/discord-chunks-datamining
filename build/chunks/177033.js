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
  let e = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getPrivateChannelsVersion()),
    t = (0, Chunk442837.Wu)([Chunk592125.Z, Chunk355298.Z], () => {
      let e = Chunk592125.Z.getMutablePrivateChannels(),
        t = Array.from(Chunk355298.Z.getMessageRequestChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, Chunk900255.x)(exports)
    }, [module]),
    n = (0, Chunk442837.cj)([Chunk594174.default], () => {
      let e = {};
      return exports.forEach(t => {
        let n = a.default.getUser(t.recipients[0]);
        null != n && (e[t.id] = n)
      }), module
    }, [exports]);
  return Chunk473749.useMemo(() => exports.map(e => ({
    channel: e,
    user: n[e.id]
  })), [exports, require])
}