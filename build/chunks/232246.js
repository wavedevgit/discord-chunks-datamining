/** Chunk was on 86317 **/
/** chunk id: 232246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk233993 = require("./233993.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js");

function s(e) {
  var t;
  let n = null != (t = null == e ? true : e.id) ? t : null;
  return (0, l.yK)([i.Ay, a.A], () => i.Ay.getChannels(n)[i.vM].reduce((e, t) => {
    let n = t.channel;
    return n.isGuildStageVoice() && function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.A;
      return !!e.isGuildStageVoice() && t.can(r.QY, e)
    }(t.channel, a.A) && e.push(n), e
  }, []), [n])
}