/** Chunk was on 24753 **/
/** chunk id: 884746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => c
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk146085 = require("./146085.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js");

function c(e) {
  var t;
  let n = null != (t = null == e ? true : e.id) ? t : null;
  return (0, l.Wu)([i.ZP, a.Z], () => i.ZP.getChannels(n)[i.Zb].reduce((e, t) => {
    let n = t.channel;
    return n.isGuildStageVoice() && function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.Z;
      return !!e.isGuildStageVoice() && t.can(r.yP, e)
    }(t.channel, a.Z) && e.push(n), e
  }, []), [n])
}