/** Chunk was on web.js **/
/** chunk id: 119966, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  G: () => i
}), require("./65821.js");
class i extends Error {
  constructor(e, t) {
    super(t), r(this, "errorCode", true), r(this, "closeCode", true), r(this, "code", true), r(this, "message", true), r(this, "name", true), "closeCode" in e ? (this.code = e.closeCode, this.closeCode = e.closeCode) : (this.code = e.errorCode, this.errorCode = e.errorCode), this.message = t, this.name = "RPCError"
  }
}