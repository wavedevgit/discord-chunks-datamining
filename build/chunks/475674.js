/** Chunk was on 48615 **/
/** chunk id: 475674, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./642613.js");
var Chunk442837 = require("./442837.js"),
  Chunk458725 = require("./458725.js"),
  Chunk915525 = require("./915525.js");
let a = {
  [Chunk458725.u.STREAM_SOUNDSHARE_FAILED]: 0,
  [Chunk458725.u.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
  [Chunk458725.u.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
  [Chunk458725.u.STREAM_SEND_LOW_FPS]: 2,
  [Chunk458725.u.STREAM_VIEW_LOW_FPS]: 2,
  [Chunk458725.u.STREAM_BAD_NETWORK_QUALITY]: 3
};

function o(e) {
  let t = e.id;
  return (0, r.e7)([l.Z], () => {
    let e = Array.from(l.Z.getActiveErrors().values()).filter(e => "streamKey" in e && e.streamKey === t && null != a[e.type]).sort((e, t) => {
      var n, r;
      return (null != (n = a[e.type]) ? n : 0) - (null != (r = a[t.type]) ? r : 0)
    })[0];
    return null == e ? true : e.type
  }, [t])
}