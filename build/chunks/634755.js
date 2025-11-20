/** Chunk was on 20598 **/
/** chunk id: 634755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ij: () => c,
  MQ: () => s,
  O4: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk487419 = require("./487419.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return (0, r.e7)([i.Z], () => null != e && i.Z.can(a.Plq.MANAGE_GUILD, e), [e])
}

function o(e) {
  let t = (0, r.e7)([l.Z], () => null != e ? l.Z.getGuildIncident(e.id) : null);
  return (null == e ? true : e.features.has(a.GuildFeatures.INVITES_DISABLED)) || (null == t ? true : t.invitesDisabledUntil) != null && new Date(t.invitesDisabledUntil) > new Date
}

function c(e) {
  let t = s(e),
    n = o(e);
  return t && n
}