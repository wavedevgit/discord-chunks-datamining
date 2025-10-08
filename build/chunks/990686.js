/** Chunk was on 11324 **/
/** chunk id: 990686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944163 = require("./944163.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  let {
    guildId: t
  } = e;
  return (0, r.e7)([i.Z, l.Z], () => {
    var e;
    let n = i.Z.get(t),
      r = null == n ? true : n.guild,
      a = l.Z.getGuild(t),
      o = null == a ? true : a.verificationLevel,
      c = null == r ? true : r.verification_level;
    return null != (e = null != o ? o : c) ? e : s.sFg.NONE
  }, [t])
}