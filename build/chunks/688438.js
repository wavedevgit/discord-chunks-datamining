/** Chunk was on 51235 **/
/** chunk id: 688438, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk273387 = require("./273387.js"),
  Chunk975984 = require("./975984.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js");

function s(e) {
  return (0, r.e7)([i.Z, a.ZP], () => {
    var t;
    if (null == e) return 0;
    let n = a.ZP.ackMessageId(e.id);
    if (null == n) return 0;
    let r = Object.values(null != (t = i.Z.getDirectoryEntries(e.id)) ? t : {}).filter(e => new Date(e.createdAt).getTime() > o.default.extractTimestamp(n));
    return Math.min(l._N, r.length)
  }, [e])
}