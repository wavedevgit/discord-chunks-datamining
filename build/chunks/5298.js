/** Chunk was on 54469 **/
/** chunk id: 5298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let {
    canManageGuild: t,
    canManageRoles: n,
    canBanMembers: l,
    canManageNicknames: a,
    canCreateEmojisAndStickers: o,
    canManageEmojisAndStickers: c,
    canManageWebhooks: u,
    canViewAuditLog: d
  } = (0, i.cf)([r.A], () => ({
    canManageGuild: r.A.can(s.xBc.MANAGE_GUILD, e),
    canManageRoles: r.A.can(s.xBc.MANAGE_ROLES, e),
    canBanMembers: r.A.can(s.xBc.BAN_MEMBERS, e),
    canManageNicknames: r.A.can(s.xBc.MANAGE_NICKNAMES, e),
    canCreateEmojisAndStickers: r.A.can(s.xBc.CREATE_GUILD_EXPRESSIONS, e),
    canManageEmojisAndStickers: r.A.can(s.xBc.MANAGE_GUILD_EXPRESSIONS, e),
    canManageWebhooks: r.A.can(s.xBc.MANAGE_WEBHOOKS, e),
    canViewAuditLog: r.A.can(s.xBc.VIEW_AUDIT_LOG, e)
  }), [e]);
  return t || n || l || a || o || c || u || d
}