/** Chunk was on 33213 **/
/** chunk id: 956324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    canManageGuild: t,
    canManageRoles: n,
    canBanMembers: s,
    canManageNicknames: o,
    canCreateEmojisAndStickers: a,
    canManageEmojisAndStickers: c,
    canManageWebhooks: u,
    canViewAuditLog: d
  } = (0, i.cj)([r.Z], () => ({
    canManageGuild: r.Z.can(l.Plq.MANAGE_GUILD, e),
    canManageRoles: r.Z.can(l.Plq.MANAGE_ROLES, e),
    canBanMembers: r.Z.can(l.Plq.BAN_MEMBERS, e),
    canManageNicknames: r.Z.can(l.Plq.MANAGE_NICKNAMES, e),
    canCreateEmojisAndStickers: r.Z.can(l.Plq.CREATE_GUILD_EXPRESSIONS, e),
    canManageEmojisAndStickers: r.Z.can(l.Plq.MANAGE_GUILD_EXPRESSIONS, e),
    canManageWebhooks: r.Z.can(l.Plq.MANAGE_WEBHOOKS, e),
    canViewAuditLog: r.Z.can(l.Plq.VIEW_AUDIT_LOG, e)
  }), [e]);
  return t || n || s || o || a || c || u || d
}