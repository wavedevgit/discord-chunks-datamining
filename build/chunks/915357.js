/** Chunk was on 1272 **/
/** chunk id: 915357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk996106 = require("./996106.js"),
  Chunk631467 = require("./631467.js"),
  Chunk76238 = require("./76238.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk76238.Z {
  send(e) {
    var t;
    null == (t = this.onSendingToRPCClient) || t.call(this, e, this.id), this.postMessageToRPCClient([i.Z.FRAME, e], this.origin)
  }
  close(e, t) {
    this.closed || this.postClose(this.origin, {
      code: e,
      message: t
    }, this.postMessageToRPCClient), this.closed = true
  }
  constructor({
    origin: e,
    postMessageToRPCClient: t,
    frameId: n,
    version: i,
    encoding: l,
    logger: c,
    postClose: u,
    onSendingToRPCClient: d
  }) {
    if (super(a.He.POST_MESSAGE, i, l), o(this, "origin", true), o(this, "frameId", true), o(this, "postMessageToRPCClient", true), o(this, "logger", true), o(this, "postClose", true), o(this, "onSendingToRPCClient", true), o(this, "closed", true), false === ["etf", "json"].indexOf(l)) throw new r.Z({
      closeCode: s.$VG.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(l));
    if ("etf" === l) throw new r.Z({
      closeCode: s.$VG.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this.origin = e, this.postMessageToRPCClient = t, this.frameId = n, this.logger = c, this.postClose = u, this.onSendingToRPCClient = d, this.closed = false
  }
}