/** Chunk was on web.js **/
/** chunk id: 313232, original params: e,t,n (module,exports,re quire) **/
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
  r: () => i
}), require("./388685.js");
class i {
  update(e) {
    for (let t in e.rtp.inbound)
      for (let n of e.rtp.inbound[t])
        if ("video" === n.type) {
          let e = this.getInboundBytesRecevierCalculator(n),
            t = this.getInboundFrameDecodeRateCalculator(n);
          n.bitrate = e.calculate(n), n.frameRateDecode = t.calculate(n)
        } for (let t of e.rtp.outbound)
      if ("video" === t.type) {
        let e = this.getOutboundBytesSentCalculator(t),
          n = this.getOutboundEncodeRateCalculator(t);
        t.bitrate = e.calculate(t), t.frameRateEncode = n.calculate(t)
      }
  }
  static getCalculatorOrCreate(e, t, n, r) {
    let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 0,
      a = e[t.ssrc];
    return null == a && (a = new s(n, r, i), e[t.ssrc] = a), a
  }
  getInboundBytesRecevierCalculator(e) {
    return i.getCalculatorOrCreate(this.inboundVideoBitrate, e, "bytesReceived", "timestamp", 3)
  }
  getInboundFrameDecodeRateCalculator(e) {
    return i.getCalculatorOrCreate(this.inboundDecodeFps, e, "framesDecoded", "timestamp", 5)
  }
  getOutboundBytesSentCalculator(e) {
    return i.getCalculatorOrCreate(this.outboundVideoBitrate, e, "bytesSent", "timestamp", 3)
  }
  getOutboundEncodeRateCalculator(e) {
    return i.getCalculatorOrCreate(this.outboundEncodeFps, e, "framesEncoded", "timestamp", 5)
  }
  constructor() {
    r(this, "inboundVideoBitrate", {}), r(this, "inboundDecodeFps", {}), r(this, "outboundVideoBitrate", {}), r(this, "outboundEncodeFps", {})
  }
}
var a = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.MILLISECONDS_FROM_SECONDS = 1] = "MILLISECONDS_FROM_SECONDS", e[e.BYTES_TO_BITS = 2] = "BYTES_TO_BITS", e[e.ROUND = 4] = "ROUND", e
}(a || {});
let o = {
  0: {
    multiplier: 1
  },
  1: {
    postfix: "_in_ms",
    multiplier: 1e3
  },
  2: {
    bitrate: true,
    postfix: "",
    multiplier: 8
  }
};
class s {
  calculate(e) {
    let t = this.previous;
    if (this.previous = e, null == t) return;
    let n = e.timestamp - t.timestamp;
    if (n <= 0 || "number" != typeof n) return;
    let r = t[this.accumulativeMetricKey],
      i = e[this.accumulativeMetricKey];
    if ("number" != typeof r || "number" != typeof i) return;
    let a = t[this.samplesMetricKey],
      o = e[this.samplesMetricKey];
    if ("number" != typeof a || "number" != typeof o) return;
    let s = (i - r) / (o - a) * this.multiplier;
    return this.round ? Math.round(s) : s
  }
  constructor(e, t, n = 0) {
    for (let l in r(this, "accumulativeMetricKey", true), r(this, "samplesMetricKey", true), r(this, "previous", true), r(this, "multiplier", true), r(this, "round", true), this.accumulativeMetricKey = e, this.samplesMetricKey = t, this.multiplier = 1, this.round = false, a) {
      var i, s;
      let e = Number(l);
      !isNaN(e) && (n & e) != 0 && l in o && (this.multiplier *= null != (s = null == (i = o[l]) ? true : i.multiplier) ? s : 1)
    }
    this.round = (4 & n) != 0
  }
}