/** Chunk was on web.js **/
/** chunk id: 539451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk722872 = require("./722872.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = 500,
  s = 150;
class o {
  getCurrentValue() {
    if (null == this.animationDetails) return this.value;
    let e = performance.now() - this.animationDetails.animationStart,
      t = this.value < this.animationDetails.lastValue ? s : a;
    return e > t ? (this.animationDetails = null, this.value) : this.value < this.animationDetails.lastValue ? r.easeOutQuint(e, this.animationDetails.lastValue, this.value, t) : r.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4)
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