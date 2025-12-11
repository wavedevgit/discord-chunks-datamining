/** Chunk was on 97368 **/
/** chunk id: 194201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk409513 = require("./409513.js"),
  Chunk605236 = require("./605236.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  var t, n, d;
  let u = (0, i.e7)([c.Z], () => c.Z.can(s.Plq.ADMINISTRATOR, e)),
    g = (0, i.e7)([o.Z], () => null != e && o.Z.getNumRoles(e.id) > 1),
    {
      enabled: b
    } = a.Z.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPermissionMigrationNotificationAvailable"
    }),
    f = null != (t = null == e ? true : e.features.has(s.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && t,
    p = null != (n = null == e ? true : e.features.has(s.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && n,
    h = b ? r.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : r.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
    j = (0, l.OA)(h, null != (d = null == e ? true : e.id) ? d : s.lds);
  return g && u && (!f || !p && b) && !j
}