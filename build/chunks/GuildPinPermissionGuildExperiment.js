/** Chunk was on 93886 **/
/** chunk id: 190263, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  D: () => s,
  o: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk818083 = require("./818083.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let s = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-06_guild_pin_permission",
  label: "Guild Pin Permission",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Allows use of the Pin Messages permission",
    config: {
      enabled: true
    }
  }]
});

function d(e) {
  var n;
  let t = (0, r.e7)([o.Z], () => o.Z.can(c.Plq.ADMINISTRATOR, e)),
    a = s.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPinPermissionMigrationNotificationAvailable"
    }).enabled,
    d = null == e ? true : e.features.has(c.oNc.PIN_PERMISSION_MIGRATION_COMPLETE),
    u = (0, l.OA)(i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, null != (n = null == e ? true : e.id) ? n : c.lds);
  return t && a && !d && !u
}