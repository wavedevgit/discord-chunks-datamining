/** Chunk was on 21738 **/
/** chunk id: 233959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk111162 = require("./111162.js"),
  Chunk84002 = require("./84002.js"),
  Chunk603265 = require("./603265.js"),
  Chunk652215 = require("./652215.js");
let s = e => {
  let {
    origin: t,
    postMessageToRPCClient: n,
    frameId: s,
    version: o,
    encoding: c,
    logger: u,
    postClose: d
  } = e;
  return new l.A({
    origin: t,
    postMessageToRPCClient: n,
    frameId: s,
    version: o,
    encoding: c,
    logger: u,
    postClose: d,
    onSendingToRPCClient: (e, t) => {
      (r.default.isLoggingOverlayEvents || e.cmd !== a.e$_.OVERLAY && e.evt !== a.ZE4.OVERLAY) && u.info("Socket Emit: ".concat(t), (0, i.A)(e))
    }
  })
}