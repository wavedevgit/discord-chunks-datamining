/** Chunk was on 55150 **/
/** chunk id: 259374, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  k: () => a
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js");

function a(e) {
  let {
    channelId: n
  } = e;
  return (0, l.bG)([i.A, r.A], () => (function(e) {
    var n;
    let [t, l] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A, r.A];
    if (null == e || t.getChannelId() !== e) returnfalse;
    let a = l.getChannel(e);
    if (null == a || a.isGuildStageVoice()) returnfalse;
    let s = null == (n = t.getSecureFramesState()) ? true : n.version;
    return null != s && 0 !== s
  })(n, [i.A, r.A]), [n])
}
require("./603266.js")