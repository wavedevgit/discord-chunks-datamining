/** Chunk was on web.js **/
/** chunk id: 909766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => a
}), require("./539854.js"), require("./388685.js");
var Chunk508385 = require("./508385.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  addSample(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1;
    this.total += e * t, this.totalWeight += t, this.samples++, r.TDigest.prototype.push.call(this.digest, e, t), this.digest.check_continuous()
  }
  getReport() {
    var e, t, n, r;
    let i = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
      a = {};
    for (let t of i) a[t] = null != (e = this.digest.percentile(t / 100)) ? e : 0;
    return {
      min: null != (t = this.digest.percentile(0)) ? t : 0,
      max: null != (n = this.digest.percentile(1)) ? n : 0,
      count: null != (r = this.digest.size()) ? r : 0,
      percentiles: a,
      mean: this.totalWeight > 0 ? this.total / this.totalWeight : 0,
      samples: this.samples
    }
  }
  constructor() {
    i(this, "digest", new r.Digest), i(this, "total", 0), i(this, "samples", 0), i(this, "totalWeight", 0)
  }
}