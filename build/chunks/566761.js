/** Chunk was on 28979 **/
/** chunk id: 566761, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  u: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk926919 = require("./926919.js"),
  Chunk419954 = require("./419954.js"),
  Chunk111162 = require("./111162.js"),
  Chunk780964 = require("./780964.js");
let a = (0, Chunk419954.zD)(Chunk780964.X.REQUEST_TRACING, {
  useTitle: () => "Enable Tracing Requests",
  useSubtitle: () => "Force trace all client requests with APM.",
  useValue: () => (0, n.bG)([r.default], () => r.default.isTracingRequests),
  setValue: t => (0, l.x)({
    trace: t
  })
})