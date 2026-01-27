/** Chunk was on 20601 **/
/** chunk id: 942658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk60175 = require("./60175.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  let {
    guildId: t
  } = e;
  return (0, r.bG)([i.A, l.A], () => {
    var e;
    let n = i.A.get(t),
      r = null == n ? true : n.guild,
      a = l.A.getGuild(t),
      o = null == a ? true : a.verificationLevel,
      c = null == r ? true : r.verification_level;
    return null != (e = null != o ? o : c) ? e : s.PvD.NONE
  }, [t])
}