/** Chunk was on 99905 **/
/** chunk id: 852245, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk685929 = require("./685929.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(n) {
  let {
    canManageChannels: e,
    canManageRoles: t,
    canManageWebhooks: d,
    canAccessChannel: b,
    canUnlinkChannel: E
  } = (0, l.cj)([a.Z], () => ({
    canManageChannels: a.Z.can(u.Plq.MANAGE_CHANNELS, n),
    canManageRoles: a.Z.can(u.Plq.MANAGE_ROLES, n),
    canManageWebhooks: a.Z.can(u.Plq.MANAGE_WEBHOOKS, n),
    canAccessChannel: a.Z.can(n.accessPermissions, n),
    canUnlinkChannel: (0, o.C)(n, a.Z)
  }), [n]);
  return !__OVERLAY__ && b && (e || t || d || E) ? (0, r.jsx)(i.sNh, {
    id: "edit-channel",
    label: n.type === u.d4z.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs7) : s.intl.string(s.t["3gUsJS"]),
    action: () => c.ZP.open(n.id)
  }) : null
}