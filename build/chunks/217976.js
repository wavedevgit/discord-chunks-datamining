/** Chunk was on web.js **/
/** chunk id: 217976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  I: () => c
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null == e ? null : a.Ay.getMember(e, i.default.getId()),
    [r] = arguments.length > 3 && true !== arguments[3] ? arguments[3] : [o.A],
    s = r.getGuild(e);
  if (null == s || null == n || !s.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) returnfalse;
  for (let e of n.roles) {
    var c;
    let n = null == t ? true : t[e];
    if ((null == n || null == (c = n.tags) ? true : c.subscription_listing_id) != null) returntrue
  }
  returnfalse
}

function u(e) {
  let t = (0, r.bG)([i.default, a.Ay], () => null == e ? null : a.Ay.getMember(e, i.default.getId()));
  return (0, r.bG)([o.A, s.A], () => c(e, null != e ? s.A.getRolesSnapshot(e) : true, t, [o.A]), [e, t])
}