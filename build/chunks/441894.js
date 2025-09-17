/** Chunk was on 74379 **/
/** chunk id: 441894, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  J: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk760373 = require("./760373.js");

function s(e) {
  let {
    channelId: n
  } = e;
  return (0, r.e7)([l.Z, i.Z], () => (function(e) {
    var n;
    let [t, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.Z, i.Z];
    if (null == e || t.getChannelId() !== e) returnfalse;
    let s = r.getChannel(e);
    if (null == s || s.isGuildStageVoice()) returnfalse;
    let a = null == (n = t.getSecureFramesState()) ? true : n.version;
    return null != a && a !== o.Eg
  })(n, [l.Z, i.Z]), [n])
}