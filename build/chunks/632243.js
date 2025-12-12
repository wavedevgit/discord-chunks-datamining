/** Chunk was on web.js **/
/** chunk id: 632243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./415506.js");
var Chunk710845 = require("./710845.js"),
  Chunk358085 = require("./358085.js"),
  Chunk579806 = require("./579806.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Chunk710845.Z("ProgressBarManager");
class l {
  setProgress(e, t) {
    if (!(0, i.isDesktop)()) throw Error("cannot set progress from non-native");
    if (null != this.taskID && this.taskID !== e) return void s.warn("".concat(this.taskID, " is already running. cannot set ").concat(e));
    this.taskID = e, a.Z.window.setProgressBar(t)
  }
  clearProgress(e) {
    if (!(0, i.isDesktop)()) throw Error("cannot clear progress from non-native");
    return null == this.taskID ? void s.warn("cannot clear progress. No current progress running.") : this.taskID !== e ? void s.warn("cannot clear progress of ".concat(e, " when ").concat(this.taskID, " is running")) : void(this.taskID = null, a.Z.window.setProgressBar(false))
  }
  constructor() {
    o(this, "taskID", true)
  }
}
let c = new l