/** Chunk was on 97368 **/
/** chunk id: 194201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk409513 = require("./409513.js"),
  Chunk605236 = require("./605236.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk110259 = require("./110259.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  var t, n, u;
  let g = (0, i.e7)([c.Z], () => c.Z.can(d.Plq.ADMINISTRATOR, e)),
    b = (0, i.e7)([o.Z], () => null != e && o.Z.getNumRoles(e.id) > 1),
    {
      enabled: f
    } = s.Z.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPermissionMigrationNotificationAvailable"
    }),
    {
      enabled: p
    } = a.Z.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPermissionMigrationNotificationAvailable"
    }),
    h = null != (t = null == e ? true : e.features.has(d.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && t,
    j = null != (n = null == e ? true : e.features.has(d.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && n,
    y = p ? r.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : r.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
    O = (0, l.OA)(y, null != (u = null == e ? true : e.id) ? u : d.lds);
  return b && g && (!h || !j && p) && !O && !f
}