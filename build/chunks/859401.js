/** Chunk was on web.js **/
/** chunk id: 859401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./539854.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = [];
class s {
  static create() {
    let e = new s;
    return o.push(e), e.record
  }
  getTotalBytes() {
    return i().sum(Object.values(this.bytes))
  }
  constructor() {
    a(this, "bytes", {}), a(this, "record", e => {
      if (null != e) {
        for (let t in e.rtp.inbound)
          for (let n of e.rtp.inbound[t]) {
            let e = "inbound-".concat(t, "-").concat(n.type);
            e in this.bytes || (this.bytes[e] = 0), this.bytes[e] = n.bytesReceived
          }
        for (let t of e.rtp.outbound) {
          let e = "outbound-".concat(t.type);
          e in this.bytes || (this.bytes[e] = 0), this.bytes[e] = t.bytesSent
        }
      }
    })
  }
}