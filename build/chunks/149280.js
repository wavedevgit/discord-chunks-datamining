/** Chunk was on 98700 **/
/** chunk id: 149280, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk386849 = require("./386849.js"),
  Chunk367727 = require("./367727.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk937161 = require("./937161.js"),
  Chunk652215 = require("./652215.js");

function E(e) {
  var n, t, E;
  let d = (0, l.bG)([u.A], () => u.A.can(c.xBc.ADMINISTRATOR, e)),
    I = (0, l.bG)([o.A], () => null != e && o.A.getNumRoles(e.id) > 1),
    {
      enabled: _
    } = a.A.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPermissionMigrationNotificationAvailable"
    }),
    {
      enabled: A
    } = r.A.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPermissionMigrationNotificationAvailable"
    }),
    S = null != (n = null == e ? true : e.features.has(c.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
    O = null != (t = null == e ? true : e.features.has(c.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
    N = A ? i.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : i.M.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
    g = (0, s.cN)(N, null != (E = null == e ? true : e.id) ? E : c.dJq);
  return I && d && (!S || !O && A) && !g && !_
}