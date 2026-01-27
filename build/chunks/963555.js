/** Chunk was on 96430 **/
/** chunk id: 963555, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk349435 = require("./349435.js");

function a(t, e) {
  return (0, r.bG)([i.Ay], () => i.Ay.getChannelSafetyWarnings(t), [t]).filter(t => t.type === e).find(t => null == t.dismiss_timestamp && ((null == t ? true : t.expiry) == null || Date.parse(t.expiry) > Date.now()))
}