/** Chunk was on web.js **/
/** chunk id: 261744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk687476 = require("./687476.js"),
  Chunk293810 = require("./293810.js");

function a() {
  let [e] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [Chunk687476.Z], t = module.getGuildIdsWithPurchasableRoles(), n = false;
  return (exports.forEach(t => {
    e.getUserSubscriptionRoles(t).size > 0 && (n = true)
  }), require) ? Chunk293810.PY.SUBSCRIBED : 0 === exports.size ? Chunk293810.PY.NONE : Chunk293810.PY.IN_SUBSCRIPTION_SERVER
}

function s() {
  return (0, Chunk442837.e7)([Chunk687476.Z], () => a([Chunk687476.Z]))
}