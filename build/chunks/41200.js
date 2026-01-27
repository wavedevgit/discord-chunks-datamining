/** Chunk was on web.js **/
/** chunk id: 41200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => c,
  r: () => l
});
var Chunk465932 = require("./465932.js"),
  Chunk960253 = require("./960253.js"),
  Chunk491026 = require("./491026.js"),
  Chunk486418 = require("./486418.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let t = (0, a.YZ)(null == e ? true : e.id, "channel_list"),
    n = (0, i.Oh)(null == e ? true : e.id),
    l = (0, o.P)(e, "channel_list"),
    {
      shouldHideGuildPurchaseEntryPoints: c
    } = (0, r.MH)(null == e ? true : e.id);
  return null != e && !c && (e.features.has(s.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || t && n || l)
}

function c(e, t) {
  let n = (0, a.p9)(null == e ? true : e.id, "channel_list"),
    r = (0, i.l8)(null == e ? true : e.id, t);
  return null != e && (e.features.has(s.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && r)
}