/** Chunk was on 93886 **/
/** chunk id: 190263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => c,
  o: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk818083 = require("./818083.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");
let c = (0, Chunk818083.B)({
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

function u(e) {
  var t;
  let n = (0, r.e7)([a.Z], () => a.Z.can(s.Plq.ADMINISTRATOR, e)),
    l = c.useExperiment({
      guildId: null == e ? true : e.id,
      location: "useIsPinPermissionMigrationNotificationAvailable"
    }).enabled,
    u = null == e ? true : e.features.has(s.oNc.PIN_PERMISSION_MIGRATION_COMPLETE),
    d = (0, o.OA)(i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, null != (t = null == e ? true : e.id) ? t : s.lds);
  return n && l && !u && !d
}