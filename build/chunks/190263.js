/** Chunk was on 98206 **/
/** chunk id: 190263, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  D: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk605236 = require("./605236.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  var n;
  let t = (0, r.e7)([o.Z], () => o.Z.can(c.Plq.ADMINISTRATOR, e)),
    l = null == e ? true : e.features.has(c.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE),
    s = (0, a.OA)(i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, null != (n = null == e ? true : e.id) ? n : c.lds);
  return t && !l && !s
}