/** Chunk was on 71287 **/
/** chunk id: 963555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => r
});
var Chunk311907 = require("./311907.js"),
  Chunk349435 = require("./349435.js");

function r(e, t) {
  return (0, i.bG)([a.Ay], () => a.Ay.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp && ((null == e ? true : e.expiry) == null || Date.parse(e.expiry) > Date.now()))
}