/** Chunk was on web.js **/
/** chunk id: 36902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk46973 = require("./46973.js"),
  Chunk909766 = require("./909766.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = 1e3;
class c {
  start() {
    this.connection.on(a.Sh.Stats, this.sampleStats)
  }
  stop() {
    this.connection.off(a.Sh.Stats, this.sampleStats)
  }
  getPttQueueLatencyStats() {
    let e = this.pttQueueLatencyHistogram.getReport([50, 95]);
    return {
      ptt_queue_latency_max: e.max,
      ptt_queue_latency_mean: e.mean,
      ptt_queue_latency_p50: e.percentiles["50"],
      ptt_queue_latency_p95: e.percentiles["95"],
      ptt_queue_latency_samples: e.samples
    }
  }
  constructor(e) {
    s(this, "connection", true), s(this, "pttQueueLatencyHistogram", true), s(this, "sampleStats", true), this.connection = e, this.sampleStats = e => {
      null != e && i().forEach(e.rtp.outbound, e => {
        if ("audio" === e.type) {
          var t;
          for (let n of null != (t = e.pttQueueLatencyMicrosSamples) ? t : []) {
            let e = n / l;
            this.pttQueueLatencyHistogram.addSample(e)
          }
        }
      })
    }, this.pttQueueLatencyHistogram = new o.b
  }
}