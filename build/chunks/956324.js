/** Chunk was on 33213 **/
/** chunk id: 956324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let {
    canManageGuild: t,
    canManageRoles: n,
    canBanMembers: l,
    canManageNicknames: a,
    canCreateEmojisAndStickers: c,
    canManageEmojisAndStickers: o,
    canManageWebhooks: u,
    canViewAuditLog: d
  } = (0, i.cj)([r.Z], () => ({
    canManageGuild: r.Z.can(s.Plq.MANAGE_GUILD, e),
    canManageRoles: r.Z.can(s.Plq.MANAGE_ROLES, e),
    canBanMembers: r.Z.can(s.Plq.BAN_MEMBERS, e),
    canManageNicknames: r.Z.can(s.Plq.MANAGE_NICKNAMES, e),
    canCreateEmojisAndStickers: r.Z.can(s.Plq.CREATE_GUILD_EXPRESSIONS, e),
    canManageEmojisAndStickers: r.Z.can(s.Plq.MANAGE_GUILD_EXPRESSIONS, e),
    canManageWebhooks: r.Z.can(s.Plq.MANAGE_WEBHOOKS, e),
    canViewAuditLog: r.Z.can(s.Plq.VIEW_AUDIT_LOG, e)
  }), [e]);
  return t || n || l || a || c || o || u || d
}