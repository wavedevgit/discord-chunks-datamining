/** Chunk was on web.js **/
/** chunk id: 880527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => f
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk701785 = require("./701785.js"),
  Chunk65995 = require("./65995.js"),
  Chunk707167 = require("./707167.js"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js");

function f(e, t) {
  var n, f;
  let p = s.A.getGuild(e),
    _ = i.A.getChannel(t);
  return null != p && null != _ && (0, c.A)(p) && p.features.has(u.GuildFeatures.GUILD_SERVER_GUIDE) && !r.Lt(null != (n = null == (f = a.Ay.getSelfMember(p.id)) ? true : f.flags) ? n : 0, d.D.COMPLETED_HOME_ACTIONS) && o.h.hasMemberAction(p.id, _.id) && !l.A.hasCompletedActionForChannel(p.id, _.id)
}