/** Chunk was on web.js **/
/** chunk id: 607889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk217942 = require("./217942.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = 500,
  o = 150;
class s {
  getCurrentValue() {
    if (null == this.animationDetails) return this.value;
    let e = performance.now() - this.animationDetails.animationStart,
      t = this.value < this.animationDetails.lastValue ? o : a;
    return module > exports ? (this.animationDetails = null, this.value) : this.value < this.animationDetails.lastValue ? Chunk217942.easeOutQuint(module, this.animationDetails.lastValue, this.value, exports) : Chunk217942.easeOutBack(module, this.animationDetails.lastValue, this.value, exports, 4)
  }
  animateTo(e) {
    this.isReset = false, this.value !== e && (this.animationDetails = {
      lastValue: this.value,
      animationStart: performance.now()
    }, this.value = e)
  }
  isAnimating() {
    return null != this.animationDetails
  }
  reset() {
    this.animateTo(0), this.isReset = true
  }
  constructor(e) {
    i(this, "value", true), i(this, "animationDetails", true), i(this, "isReset", true), this.value = e, this.animationDetails = null, this.isReset = false
  }
}