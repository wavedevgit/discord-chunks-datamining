/** Chunk was on web.js **/
/** chunk id: 772021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => c,
  Z: () => u
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null == e ? null : o.ZP.getMember(e, i.default.getId()),
    [r] = arguments.length > 3 && true !== arguments[3] ? arguments[3] : [s.Z],
    a = r.getGuild(e);
  if (null == a || null == n || !a.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) returnfalse;
  for (let e of n.roles) {
    var c;
    let n = null == t ? true : t[e];
    if ((null == n || null == (c = n.tags) ? true : c.subscription_listing_id) != null) returntrue
  }
  returnfalse
}

function u(e) {
  let t = (0, r.e7)([i.default, o.ZP], () => null == e ? null : o.ZP.getMember(e, i.default.getId()));
  return (0, r.e7)([s.Z, a.Z], () => c(e, null != e ? a.Z.getRolesSnapshot(e) : true, t, [s.Z]), [e, t])
}