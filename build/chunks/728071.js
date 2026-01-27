/** Chunk was on web.js **/
/** chunk id: 728071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./65821.js");
var Chunk626584 = require("./626584.js"),
  Chunk723702 = require("./723702.js"),
  Chunk77729 = require("./77729.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Chunk626584.A("ProgressBarManager");
class l {
  setProgress(e, t) {
    if (!(0, i.isDesktop)()) throw Error("cannot set progress from non-native");
    null != this.taskID && this.taskID !== e ? s.warn("".concat(this.taskID, " is already running. cannot set ").concat(e)) : (this.taskID = e, a.A.window.setProgressBar(t))
  }
  clearProgress(e) {
    if (!(0, i.isDesktop)()) throw Error("cannot clear progress from non-native");
    null == this.taskID ? s.warn("cannot clear progress. No current progress running.") : this.taskID !== e ? s.warn("cannot clear progress of ".concat(e, " when ").concat(this.taskID, " is running")) : (this.taskID = null, a.A.window.setProgressBar(false))
  }
  constructor() {
    o(this, "taskID", true)
  }
}
let c = new l