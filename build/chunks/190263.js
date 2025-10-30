/** Chunk was on 95140 **/
/** chunk id: 190263, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  D: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  var n;
  let t = (0, l.e7)([r.Z], () => r.Z.can(o.Plq.ADMINISTRATOR, e)),
    s = null == e ? true : e.features.has(o.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE),
    c = (0, a.OA)(i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, null != (n = null == e ? true : e.id) ? n : o.lds);
  return t && !s && !c
}