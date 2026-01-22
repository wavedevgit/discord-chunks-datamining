/** Chunk was on 97492 **/
/** chunk id: 963555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => i
});
var Chunk311907 = require("./311907.js"),
  Chunk349435 = require("./349435.js");

function i(e, t) {
  return (0, r.bG)([l.Ay], () => l.Ay.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp && ((null == e ? true : e.expiry) == null || Date.parse(e.expiry) > Date.now()))
}