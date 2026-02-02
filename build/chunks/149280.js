/** Chunk was on 98700 **/
/** chunk id: 149280, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk367727 = require("./367727.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk937161 = require("./937161.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  var n, t, c;
  let E = (0, l.bG)([u.A], () => u.A.can(a.xBc.ADMINISTRATOR, e)),
    d = (0, l.bG)([s.A], () => null != e && s.A.getNumRoles(e.id) > 1),
    {
      enabled: _
    } = o.A.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPermissionMigrationNotificationAvailable"
    }),
    A = null != (n = null == e ? true : e.features.has(a.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
    I = null != (t = null == e ? true : e.features.has(a.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
    S = (0, r.cN)(i.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, null != (c = null == e ? true : e.id) ? c : a.dJq);
  return d && E && (!A || !I) && !S && !_
}