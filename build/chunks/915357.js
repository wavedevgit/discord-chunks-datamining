/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  Z: () => c
});
var r = n(996106),
  i = n(631467),
  l = n(76238),
  o = n(186901),
  a = n(981631);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends l.Z {
  send(e) {
    var t;
    null === (t = this.onSendingToRPCClient) || void 0 === t || t.call(this, e, this.id), this.postMessageToRPCClient([i.Z.FRAME, e], this.origin)
  }
  close(e, t) {
    this.closed || this.postClose(this.origin, {
      code: e,
      message: t
    }, this.postMessageToRPCClient), this.closed = !0
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
    if (super(o.He.POST_MESSAGE, i, l), s(this, "origin", void 0), s(this, "frameId", void 0), s(this, "postMessageToRPCClient", void 0), s(this, "logger", void 0), s(this, "postClose", void 0), s(this, "onSendingToRPCClient", void 0), s(this, "closed", void 0), -1 === ["etf", "json"].indexOf(l)) throw new r.Z({
      closeCode: a.$VG.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(l));
    if ("etf" === l) throw new r.Z({
      closeCode: a.$VG.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this.origin = e, this.postMessageToRPCClient = t, this.frameId = n, this.logger = c, this.postClose = u, this.onSendingToRPCClient = d, this.closed = !1
  }
}