/** Chunk was on 95140 **/
/** chunk id: 194201, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk409513 = require("./409513.js"),
  Chunk605236 = require("./605236.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  var n, t, c;
  let d = (0, l.e7)([s.Z], () => s.Z.can(u.Plq.ADMINISTRATOR, e)),
    p = (0, l.e7)([o.Z], () => null != e && o.Z.getNumRoles(e.id) > 0),
    {
      enabled: g
    } = a.Z.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPermissionMigrationNotificationAvailable"
    }),
    O = null != (n = null == e ? true : e.features.has(u.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
    f = null != (t = null == e ? true : e.features.has(u.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
    h = g ? i.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
    b = (0, r.OA)(h, null != (c = null == e ? true : e.id) ? c : u.lds);
  return p && d && (!O || !f && g) && !b
}