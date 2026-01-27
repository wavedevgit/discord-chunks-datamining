/** Chunk was on 77870 **/
/** chunk id: 64071, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk519480 = require("./519480.js"),
  Chunk370876 = require("./370876.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js");

function o(e) {
  return (0, r.bG)([l.A, s.Ay], () => {
    var t;
    if (null == e) return 0;
    let n = s.Ay.ackMessageId(e.id);
    if (null == n) return 0;
    let r = Object.values(null != (t = l.A.getDirectoryEntries(e.id)) ? t : {}).filter(e => new Date(e.createdAt).getTime() > a.default.extractTimestamp(n));
    return Math.min(i.zP, r.length)
  }, [e])
}