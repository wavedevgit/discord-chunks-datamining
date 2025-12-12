/** Chunk was on web.js **/
/** chunk id: 994592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j0: () => _,
  mY: () => p,
  on: () => f
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk652515 = require("./652515.js"),
  Chunk200876 = require("./200876.js"),
  Chunk674180 = require("./674180.js"),
  Chunk160404 = require("./160404.js"),
  Chunk430824 = require("./430824.js"),
  Chunk772021 = require("./772021.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.Z, s.Z], r = t.getGuild(e);
  if (null == r) returnfalse;
  let i = (0, o.l)(r),
    a = r.features.has(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  return !!(i && a || n.isViewingServerShop(e))
}

function f(e, t) {
  return !!d(e) || (0, c.U)(e, t)
}

function p(e) {
  let t = (0, c.Z)(e),
    n = (0, r.e7)([l.Z, s.Z], () => d(e, [l.Z, s.Z]), [e]),
    {
      shouldHideGuildPurchaseEntryPoints: i
    } = (0, a.uP)(e);
  return !i && (n || t)
}

function _(e) {
  let t = p(e),
    n = (0, i.RF)(e, "useShowRoleSubscriptionsInChannelList");
  return t && !n
}