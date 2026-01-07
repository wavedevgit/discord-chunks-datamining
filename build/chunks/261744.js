/** Chunk was on web.js **/
/** chunk id: 261744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk687476 = require("./687476.js"),
  Chunk293810 = require("./293810.js");

function o() {
  let [e] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [i.Z], t = e.getGuildIdsWithPurchasableRoles(), n = false;
  return (t.forEach(t => {
    e.getUserSubscriptionRoles(t).size > 0 && (n = true)
  }), n) ? a.PY.SUBSCRIBED : 0 === t.size ? a.PY.NONE : a.PY.IN_SUBSCRIPTION_SERVER
}

function s() {
  return (0, r.e7)([i.Z], () => o([i.Z]))
}