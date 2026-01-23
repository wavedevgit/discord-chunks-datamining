/** Chunk was on 78580 **/
/** chunk id: 317910, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk526132 = require("./526132.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    canManageChannels: n,
    canManageRoles: t,
    canManageWebhooks: d,
    canAccessChannel: b,
    canUnlinkChannel: f
  } = (0, i.cf)([o.A], () => ({
    canManageChannels: o.A.can(s.xBc.MANAGE_CHANNELS, e),
    canManageRoles: o.A.can(s.xBc.MANAGE_ROLES, e),
    canManageWebhooks: o.A.can(s.xBc.MANAGE_WEBHOOKS, e),
    canAccessChannel: o.A.can(e.accessPermissions, e),
    canUnlinkChannel: (0, l.n)(e, o.A)
  }), [e]);
  return !__OVERLAY__ && b && (n || t || d || f) ? (0, r.jsx)(a.Drp, {
    id: "edit-channel",
    label: e.type === s.rbe.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs9) : u.intl.string(u.t["3gUsJb"]),
    action: () => c.Ay.open(e.id)
  }) : null
}