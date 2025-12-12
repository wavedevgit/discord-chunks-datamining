/** Chunk was on web.js **/
/** chunk id: 897345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => c,
  u: () => l
});
var Chunk674180 = require("./674180.js"),
  Chunk994592 = require("./994592.js"),
  Chunk652515 = require("./652515.js"),
  Chunk550951 = require("./550951.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = (0, a.RF)(null == e ? true : e.id, "channel_list"),
    n = (0, i.mY)(null == e ? true : e.id),
    l = (0, o.g)(e, "channel_list"),
    {
      shouldHideGuildPurchaseEntryPoints: c
    } = (0, r.uP)(null == e ? true : e.id);
  return null != e && !c && (e.features.has(s.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || t && n || l)
}

function c(e, t) {
  let n = (0, a.C4)(null == e ? true : e.id, "channel_list"),
    r = (0, i.on)(null == e ? true : e.id, t);
  return null != e && (e.features.has(s.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && r)
}