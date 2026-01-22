/** Chunk was on web.js **/
/** chunk id: 244287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk384684 = require("./384684.js"),
  Chunk2242 = require("./2242.js");

function s() {
  let [e] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [i.A], t = e.getGuildIdsWithPurchasableRoles(), n = false;
  return (t.forEach(t => {
    e.getUserSubscriptionRoles(t).size > 0 && (n = true)
  }), n) ? a.M_.SUBSCRIBED : 0 === t.size ? a.M_.NONE : a.M_.IN_SUBSCRIPTION_SERVER
}

function o() {
  return (0, r.bG)([i.A], () => s([i.A]))
}