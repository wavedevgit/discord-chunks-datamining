/** Chunk was on 21738 **/
/** chunk id: 313731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk636401 = require("./636401.js"),
  Chunk652215 = require("./652215.js");

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
    if (null == e || e > a.dL4 || e < 1) throw new l.A({
      closeCode: a.YI$.INVALID_VERSION
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