/** Chunk was on 55150 **/
/** chunk id: 259374, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  k: () => s
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js");

function s(e) {
  let {
    channelId: n
  } = e;
  return (0, l.bG)([i.A, r.A], () => (function(e) {
    var n;
    let [t, l] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A, r.A];
    if (null == e || t.getChannelId() !== e) returnfalse;
    let s = l.getChannel(e);
    if (null == s || s.isGuildStageVoice()) returnfalse;
    let a = null == (n = t.getSecureFramesState()) ? true : n.version;
    return null != a && 0 !== a
  })(n, [i.A, r.A]), [n])
}
require("./603266.js")