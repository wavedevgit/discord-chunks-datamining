/** Chunk was on 82124 **/
/** chunk id: 897769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk359119 = require("./359119.js");

function l(e, t) {
  return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp && ((null == e ? true : e.expiry) == null || Date.parse(e.expiry) > Date.now()))
}