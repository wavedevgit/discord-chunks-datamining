/** Chunk was on 67564 **/
/** chunk id: 199285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk821124 = require("./821124.js"),
  Chunk212455 = require("./212455.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let t = null == e ? true : e.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
    n = (0, r.bG)([a.A, i.default, l.Ay], () => {
      if (null == e) return;
      let t = a.A.getRequest(e.id),
        n = i.default.getCurrentUser();
      if (null == n || null == t || t.userId !== n.id) return;
      let r = l.Ay.getMember(e.id, t.userId);
      if (!(null != r && !r.isPending) || (0, s.Oe)(t)) return t.applicationStatus
    }, [e]);
  return t ? n : true
}