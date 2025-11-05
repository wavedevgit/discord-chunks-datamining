/** Chunk was on 1272 **/
/** chunk id: 748635, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk857192 = require("./857192.js"),
  Chunk901077 = require("./901077.js"),
  Chunk915357 = require("./915357.js"),
  Chunk981631 = require("./981631.js");
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
  return new l.Z({
    origin: t,
    postMessageToRPCClient: n,
    frameId: s,
    version: o,
    encoding: c,
    logger: u,
    postClose: d,
    onSendingToRPCClient: (e, t) => {
      (r.default.isLoggingOverlayEvents || e.cmd !== a.Etm.OVERLAY && e.evt !== a.zMe.OVERLAY) && u.info("Socket Emit: ".concat(t), (0, i.Z)(e))
    }
  })
}