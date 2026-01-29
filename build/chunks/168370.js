/** Chunk was on 4670 **/
/** chunk id: 168370, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  J: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let u = (0, Chunk419954.zD)(Chunk780964.X.OVERLAY_RPC_LOGS, {
  useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
  useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
  useValue: () => (0, n.bG)([r.default], () => r.default.isLoggingOverlayEvents),
  setValue: e => (0, l.x)({
    logOverlayEvents: e
  })
})