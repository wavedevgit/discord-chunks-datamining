/** Chunk was on web.js **/
/** chunk id: 897345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => u,
  u: () => c
});
var Chunk674180 = require("./674180.js"),
  Chunk994592 = require("./994592.js"),
  Chunk164670 = require("./164670.js"),
  Chunk652515 = require("./652515.js"),
  Chunk550951 = require("./550951.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = (0, o.RF)(null == e ? true : e.id, "channel_list"),
    n = (0, i.mY)(null == e ? true : e.id),
    c = (0, s.g)(e, "channel_list"),
    {
      shouldHideGuildPurchaseEntryPoints: u
    } = (0, r.uP)(null == e ? true : e.id);
  return null != e && !u && (e.features.has(l.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (0, a.w)(e) || t && n || c)
}

function u(e, t) {
  let n = (0, o.C4)(null == e ? true : e.id, "channel_list"),
    r = (0, i.on)(null == e ? true : e.id, t);
  return null != e && (e.features.has(l.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (0, a.w)(e) || n && r)
}