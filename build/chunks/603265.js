/** Chunk was on 21738 **/
/** chunk id: 603265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk636401 = require("./636401.js"),
  Chunk440454 = require("./440454.js"),
  Chunk313731 = require("./313731.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk313731.A {
  send(e) {
    var t;
    null == (t = this.onSendingToRPCClient) || t.call(this, e, this.id), this.postMessageToRPCClient([i.A.FRAME, e], this.origin)
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
    if (super(a.z4.POST_MESSAGE, i, l), o(this, "origin", true), o(this, "frameId", true), o(this, "postMessageToRPCClient", true), o(this, "logger", true), o(this, "postClose", true), o(this, "onSendingToRPCClient", true), o(this, "closed", true), false === ["etf", "json"].indexOf(l)) throw new r.A({
      closeCode: s.YI$.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(l));
    if ("etf" === l) throw new r.A({
      closeCode: s.YI$.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this.origin = e, this.postMessageToRPCClient = t, this.frameId = n, this.logger = c, this.postClose = u, this.onSendingToRPCClient = d, this.closed = false
  }
}