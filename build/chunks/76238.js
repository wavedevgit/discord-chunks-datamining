/** Chunk was on 1272 **/
/** chunk id: 76238, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk996106 = require("./996106.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  checkRpcVersion(e) {
    if (null == e || e > a.X6Q || e < 1) throw new l.Z({
      closeCode: a.$VG.INVALID_VERSION
    }, "Invalid Version: ".concat(e))
  }
  constructor(e, t, n) {
    s(this, "transport", true), s(this, "version", true), s(this, "encoding", true), s(this, "id", true), s(this, "authorization", true), s(this, "application", true), s(this, "abortController", true), this.transport = e, this.version = t, this.encoding = n, this.id = i().uniqueId(), this.authorization = {
      authing: false,
      scopes: [],
      accessToken: null,
      expires: new Date(0)
    }, this.application = {
      id: null,
      name: null,
      icon: null
    }, this.abortController = new AbortController, this.checkRpcVersion(t)
  }
}