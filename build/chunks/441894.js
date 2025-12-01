/** Chunk was on 33397 **/
/** chunk id: 441894, original params: e,t,r (module,exports,require) **/
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
  return (0, n.e7)([u.Z, l.Z], () => (function(e) {
    var t;
    let [r, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [u.Z, l.Z];
    if (null == e || r.getChannelId() !== e) returnfalse;
    let c = n.getChannel(e);
    if (null == c || c.isGuildStageVoice()) returnfalse;
    let o = null == (t = r.getSecureFramesState()) ? true : t.version;
    return null != o && o !== i.Eg
  })(t, [u.Z, l.Z]), [t])
}