/** Chunk was on 15647 **/
/** chunk id: 492162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk938475 = require("./938475.js"),
  Chunk853856 = require("./853856.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return (0, r.cj)([l.ZP, i.Z, o.Z], () => {
    if (e !== a.I_8) return l.ZP.getVoiceStates(e);
    let t = o.Z.getFavoriteChannels(),
      n = {};
    for (let e in t) {
      let t = i.Z.getChannel(e);
      null != t && (n[e] = l.ZP.getVoiceStatesForChannel(t))
    }
    return n
  }, [e])
}