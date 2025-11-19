/** Chunk was on 86127 **/
/** chunk id: 897769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk359119 = require("./359119.js");

function l(e, t) {
  return (0, i.e7)([a.ZP], () => a.ZP.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp && ((null == e ? true : e.expiry) == null || Date.parse(e.expiry) > Date.now()))
}