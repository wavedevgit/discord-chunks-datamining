/** Chunk was on 98206 **/
/** chunk id: 194201, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk409513 = require("./409513.js"),
  Chunk605236 = require("./605236.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  var n, t, u;
  let d = (0, r.e7)([l.Z], () => l.Z.can(s.Plq.ADMINISTRATOR, e)),
    h = (0, r.e7)([c.Z], () => null != e && c.Z.getNumRoles(e.id) > 0),
    {
      enabled: g
    } = a.Z.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPermissionMigrationNotificationAvailable"
    }),
    f = null != (n = null == e ? true : e.features.has(s.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
    _ = null != (t = null == e ? true : e.features.has(s.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
    p = g ? i.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
    v = (0, o.OA)(p, null != (u = null == e ? true : e.id) ? u : s.lds);
  return h && d && (!f || !_ && g) && !v
}