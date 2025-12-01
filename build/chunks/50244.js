/** Chunk was on web.js **/
/** chunk id: 50244, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => f
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk563534 = require("./563534.js"),
  Chunk846121 = require("./846121.js"),
  Chunk199689 = require("./199689.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js");

function f(e, t) {
  var n, f;
  let p = o.Z.getGuild(e),
    _ = i.Z.getChannel(t);
  return null != p && null != _ && (0, c.Z)(p) && p.features.has(u.GuildFeatures.GUILD_SERVER_GUIDE) && !r.yE(null != (f = null == (n = a.ZP.getSelfMember(p.id)) ? true : n.flags) ? f : 0, d.q.COMPLETED_HOME_ACTIONS) && s.Z.hasMemberAction(p.id, _.id) && !l.Z.hasCompletedActionForChannel(p.id, _.id)
}