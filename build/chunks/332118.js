/** Chunk was on 21738 **/
/** chunk id: 332118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk299091 = require("./299091.js"),
  Chunk408213 = require("./408213.js"),
  Chunk212455 = require("./212455.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let [t, n] = r.useState(true), c = (0, i.bG)([s.A], () => null != e ? s.A.getJoinRequestGuild(e) : true), u = r.useCallback(async e => {
    try {
      let t = l.A.getInviteKeyForGuildId(e);
      null != t && await a.Ay.fetchVerificationForm(e, t)
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