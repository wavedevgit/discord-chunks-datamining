/** Chunk was on web.js **/
/** chunk id: 817636, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk587895 = require("./587895.js"),
  Chunk337095 = require("./337095.js"),
  Chunk611010 = require("./611010.js"),
  Chunk734057 = require("./734057.js"),
  Chunk795816 = require("./795816.js"),
  Chunk692957 = require("./692957.js");
async function c(e, t) {
  var n;
  let c = r.A.getApplication(e);
  if (u(c)) return c;
  let d = null == (n = s.A.getChannel(t)) ? true : n.guild_id,
    {
      activityConfigs: f,
      applications: p
    } = await (0, o.LV)({
      guildId: d
    }),
    _ = (0, l.A)({
      applicationId: e,
      activityConfigs: f,
      applications: p
    });
  if (u(null == _ ? true : _.application)) return null == _ ? true : _.application;
  {
    let t = await (0, i.TA)(e);
    return a.Ay.createFromServer(t)
  }
}

function u(e) {
  return null != e && null != e.embeddedActivityConfig
}