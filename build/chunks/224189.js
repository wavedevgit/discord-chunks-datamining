/** Chunk was on web.js **/
/** chunk id: 224189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk812206 = require("./812206.js"),
  Chunk307643 = require("./307643.js"),
  Chunk973616 = require("./973616.js"),
  Chunk592125 = require("./592125.js"),
  Chunk566620 = require("./566620.js"),
  Chunk969345 = require("./969345.js");
async function c(e, t) {
  var n;
  let c = r.Z.getApplication(e);
  if (u(c)) return c;
  let d = null == (n = a.Z.getChannel(t)) ? true : n.guild_id,
    {
      activityConfigs: f,
      applications: p
    } = await (0, s.w1)({
      guildId: d
    }),
    _ = (0, l.Z)({
      applicationId: e,
      activityConfigs: f,
      applications: p
    });
  if (u(null == _ ? true : _.application)) return null == _ ? true : _.application;
  {
    let t = await (0, i.UM)(e);
    return o.ZP.createFromServer(t)
  }
}

function u(e) {
  return null != e && null != e.embeddedActivityConfig
}