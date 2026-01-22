/** Chunk was on 20601 **/
/** chunk id: 942658, original params: e,t,l (module,exports,require) **/
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
  return (0, n.bG)([s.A, r.A], () => {
    var e;
    let l = s.A.get(t),
      n = null == l ? true : l.guild,
      a = r.A.getGuild(t),
      o = null == a ? true : a.verificationLevel,
      c = null == n ? true : n.verification_level;
    return null != (e = null != o ? o : c) ? e : i.PvD.NONE
  }, [t])
}