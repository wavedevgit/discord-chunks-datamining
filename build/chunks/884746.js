/** Chunk was on 82758 **/
/** chunk id: 884746, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => a
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk146085 = require("./146085.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js");

function a(e) {
  var t;
  let r = null != (t = null == e ? true : e.id) ? t : null;
  return (0, n.Wu)([s.ZP, i.Z], () => s.ZP.getChannels(r)[s.Zb].reduce((e, t) => {
    let r = t.channel;
    return r.isGuildStageVoice() && function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z;
      return !!e.isGuildStageVoice() && t.can(l.yP, e)
    }(t.channel, i.Z) && e.push(r), e
  }, []), [r])
}