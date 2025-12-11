/** Chunk was on 7654 **/
/** chunk id: 277364, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => r
});
var Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function r(e) {
  let t = (0, l.e7)([i.Z], () => i.Z.can(s.Plq.KICK_MEMBERS, e), [e]),
    n = !!((null == e ? true : e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null == e ? true : e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)));
  return {
    canCreateApplicationBypassInvites: n && t,
    isManualApprovalGuild: n
  }
}