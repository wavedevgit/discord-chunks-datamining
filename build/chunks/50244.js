/** Chunk was on web.js **/
/** chunk id: 50244, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => f
}), require("./997841.js");
var Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk630388 = require("./630388.js"),
  Chunk563534 = require("./563534.js"),
  Chunk846121 = require("./846121.js"),
  Chunk199689 = require("./199689.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js");

function f(e, t) {
  var n, f;
  let _ = a.Z.getGuild(e),
    p = r.Z.getChannel(t);
  return null != _ && null != p && (0, c.Z)(_) && _.features.has(u.GuildFeatures.GUILD_SERVER_GUIDE) && !o.yE(null != (f = null == (n = i.ZP.getSelfMember(_.id)) ? true : n.flags) ? f : 0, d.q.COMPLETED_HOME_ACTIONS) && s.Z.hasMemberAction(_.id, p.id) && !l.Z.hasCompletedActionForChannel(_.id, p.id)
}