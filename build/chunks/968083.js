/** Chunk was on 4670 **/
/** chunk id: 968083, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  I: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let u = (0, Chunk419954.zD)(Chunk780964.X.GATEWAY_LOGS, {
  useTitle: () => "Log Gateway Events",
  useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
  useValue: () => (0, n.bG)([r.default], () => r.default.isLoggingGatewayEvents),
  setValue: e => (0, l.x)({
    logGatewayEvents: e
  })
})