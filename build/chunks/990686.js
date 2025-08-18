/** Chunk was on 36605 **/
/** chunk id: 990686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944163 = require("./944163.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    guildId: t
  } = e;
  return (0, r.e7)([l.Z, i.Z], () => {
    var e;
    let n = l.Z.get(t),
      r = null == n ? true : n.guild,
      s = i.Z.getGuild(t),
      a = null == s ? true : s.verificationLevel,
      c = null == r ? true : r.verification_level;
    return null != (e = null != a ? a : c) ? e : o.sFg.NONE
  }, [t])
}