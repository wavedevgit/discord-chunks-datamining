/** Chunk was on 43600 **/
/** chunk id: 577710, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => r
});
var Chunk311907 = require("./311907.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function r(e) {
  let t = (0, l.bG)([i.A], () => i.A.can(s.xBc.KICK_MEMBERS, e), [e]),
    n = !!((null == e ? true : e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null == e ? true : e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)));
  return {
    canCreateApplicationBypassInvites: n && t,
    isManualApprovalGuild: n
  }
}