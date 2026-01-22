/** Chunk was on 33818 **/
/** chunk id: 259374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => o
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js");

function o(e) {
  let {
    channelId: t
  } = e;
  return (0, r.bG)([i.A, l.A], () => (function(e) {
    var t;
    let [n, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A, l.A];
    if (null == e || n.getChannelId() !== e) returnfalse;
    let o = r.getChannel(e);
    if (null == o || o.isGuildStageVoice()) returnfalse;
    let a = null == (t = n.getSecureFramesState()) ? true : t.version;
    return null != a && 0 !== a
  })(t, [i.A, l.A]), [t])
}
require("./603266.js")