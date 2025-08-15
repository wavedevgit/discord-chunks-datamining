/** Chunk was on 80125 **/
/** chunk id: 441894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk760373 = require("./760373.js");

function c(e) {
  let {
    channelId: t
  } = e;
  return (0, r.e7)([o.Z, i.Z], () => (function(e) {
    var t;
    let [n, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.Z, i.Z];
    if (null == e || n.getChannelId() !== e) returnfalse;
    let c = r.getChannel(e);
    if (null == c || c.isGuildStageVoice()) returnfalse;
    let a = null == (t = n.getSecureFramesState()) ? true : t.version;
    return null != a && a !== l.Eg
  })(t, [o.Z, i.Z]), [t])
}