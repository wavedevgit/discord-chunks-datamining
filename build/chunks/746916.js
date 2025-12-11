/** Chunk was on 51235 **/
/** chunk id: 746916, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk881952 = require("./881952.js"),
  Chunk937111 = require("./937111.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = null == e ? true : e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
    n = (0, r.e7)([o.Z, l.default, i.ZP], () => {
      if (null == e) return;
      let t = o.Z.getRequest(e.id),
        n = l.default.getCurrentUser();
      if (null == n || null == t || t.userId !== n.id) return;
      let r = i.ZP.getMember(e.id, t.userId);
      if (!(null != r && !r.isPending) || (0, a.oP)(t)) return t.applicationStatus
    }, [e]);
  return t ? n : true
}