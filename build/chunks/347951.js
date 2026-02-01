/** Chunk was on 49438 **/
/** chunk id: 347951, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fi: () => s,
  Ig: () => u,
  Wr: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk610136 = require("./610136.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return (0, l.bG)([a.A], () => null != e && a.A.can(i.xBc.MANAGE_GUILD, e), [e])
}

function o(e) {
  let t = (0, l.bG)([r.A], () => null != e ? r.A.getGuildIncident(e.id) : null);
  return (null == e ? true : e.features.has(i.GuildFeatures.INVITES_DISABLED)) || (null == t ? true : t.invitesDisabledUntil) != null && new Date(t.invitesDisabledUntil) > new Date
}

function u(e) {
  let t = s(e),
    n = o(e);
  return t && n
}