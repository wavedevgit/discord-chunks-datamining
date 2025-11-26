/** Chunk was on 1272 **/
/** chunk id: 850493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk701190 = require("./701190.js"),
  Chunk863249 = require("./863249.js"),
  Chunk937111 = require("./937111.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let [t, n] = r.useState(true), c = (0, i.e7)([s.Z], () => null != e ? s.Z.getJoinRequestGuild(e) : true), u = r.useCallback(async e => {
    try {
      let t = l.Z.getInviteKeyForGuildId(e);
      null != t && await a.ZP.fetchVerificationForm(e, t)
    } finally {
      n(false)
    }
  }, []);
  return r.useEffect(() => {
    null == e ? n(false) : (n(true), u(e))
  }, [e, u]), {
    canReapply: null != c && c.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
    isLoading: t
  }
}