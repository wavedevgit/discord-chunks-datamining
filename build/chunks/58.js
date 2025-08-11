/** Chunk was on web.js **/
/** chunk id: 58, original params: e,t,n (module,exports,re quire) **/
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
  Z: () => a
}), require("./539854.js");
let i = 5;
class o {
  recordStartHeadlessTask(e) {
    this.headlessTasks.length >= i && this.headlessTasks.shift(), this.headlessTasks.push(e), this.latestHeadlessTaskRunOn = Date.now()
  }
  getLatestTaskRunOn() {
    return this.latestHeadlessTaskRunOn
  }
  getHeadlessTasks() {
    return this.headlessTasks
  }
  clear() {
    this.headlessTasks = [], this.latestHeadlessTaskRunOn = null
  }
  constructor() {
    r(this, "headlessTasks", []), r(this, "latestHeadlessTaskRunOn", null)
  }
}
let a = new o