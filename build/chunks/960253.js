/** Chunk was on web.js **/
/** chunk id: 960253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Oh: () => p,
  l8: () => f,
  vz: () => _
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk491026 = require("./491026.js"),
  Chunk936555 = require("./936555.js"),
  Chunk465932 = require("./465932.js"),
  Chunk164956 = require("./164956.js"),
  Chunk71393 = require("./71393.js"),
  Chunk217976 = require("./217976.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let [t, n] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [l.A, o.A], r = t.getGuild(e);
  if (null == r) returnfalse;
  let i = (0, a.w)(r),
    s = r.features.has(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  return !!(i && s || n.isViewingServerShop(e))
}

function f(e, t) {
  return !!d(e) || (0, c.I)(e, t)
}

function p(e) {
  let t = (0, c.A)(e),
    n = (0, r.bG)([l.A, o.A], () => d(e, [l.A, o.A]), [e]),
    {
      shouldHideGuildPurchaseEntryPoints: i
    } = (0, s.MH)(e);
  return !i && (n || t)
}

function _(e) {
  let t = p(e),
    n = (0, i.YZ)(e, "useShowRoleSubscriptionsInChannelList");
  return t && !n
}