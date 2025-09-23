/** Chunk was on 47387 **/
/** chunk id: 441894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => o
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk760373 = require("./760373.js");

function o(e) {
  let {
    channelId: t
  } = e;
  return (0, r.e7)([i.Z, l.Z], () => (function(e) {
    var t;
    let [n, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.Z, l.Z];
    if (null == e || n.getChannelId() !== e) returnfalse;
    let o = r.getChannel(e);
    if (null == o || o.isGuildStageVoice()) returnfalse;
    let u = null == (t = n.getSecureFramesState()) ? true : t.version;
    return null != u && u !== a.Eg
  })(t, [i.Z, l.Z]), [t])
}