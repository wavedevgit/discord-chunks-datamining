/** Chunk was on 55150 **/
/** chunk id: 963555, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  F: () => i
});
var Chunk311907 = require("./311907.js"),
  Chunk349435 = require("./349435.js");

function i(e, n) {
  return (0, l.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e]).filter(e => e.type === n).find(e => null == e.dismiss_timestamp && ((null == e ? true : e.expiry) == null || Date.parse(e.expiry) > Date.now()))
}