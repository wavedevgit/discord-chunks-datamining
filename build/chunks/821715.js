/** Chunk was on 31748 **/
/** chunk id: 821715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./638769.js");
var Chunk311907 = require("./311907.js"),
  Chunk487329 = require("./487329.js"),
  Chunk161518 = require("./161518.js");
let a = {
  [Chunk487329.iy.STREAM_SOUNDSHARE_FAILED]: 0,
  [Chunk487329.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
  [Chunk487329.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
  [Chunk487329.iy.STREAM_SEND_LOW_FPS]: 2,
  [Chunk487329.iy.STREAM_VIEW_LOW_FPS]: 2,
  [Chunk487329.iy.STREAM_BAD_NETWORK_QUALITY]: 3
};

function o(e) {
  let t = e.id;
  return (0, r.bG)([i.A], () => {
    let e = Array.from(i.A.getActiveErrors().values()).filter(e => "streamKey" in e && e.streamKey === t && null != a[e.type]).sort((e, t) => {
      var n, r;
      return (null != (n = a[e.type]) ? n : 0) - (null != (r = a[t.type]) ? r : 0)
    })[0];
    return null == e ? true : e.type
  }, [t])
}