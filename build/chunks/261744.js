/** Chunk was on 75708 **/
/** chunk id: 261744, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk687476 = require("./687476.js"),
  Chunk293810 = require("./293810.js");

function a() {
  return (0, Chunk442837.e7)([Chunk687476.Z], () => (function() {
    let [e] = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [Chunk687476.Z], t = module.getGuildIdsWithPurchasableRoles(), n = false;
    return (exports.forEach(t => {
      e.getUserSubscriptionRoles(t).size > 0 && (n = true)
    }), require) ? Chunk293810.PY.SUBSCRIBED : 0 === exports.size ? Chunk293810.PY.NONE : Chunk293810.PY.IN_SUBSCRIPTION_SERVER
  })([Chunk687476.Z]))
}