/** Chunk was on web.js **/
/** chunk id: 953584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => c,
  FM: () => u
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 10;
class o extends Chunk311907.il {
  isVideoStatsEnabled(e) {
    var t;
    return null != (t = this.videoStatsEnabled.get(e)) && t
  }
  toggleVideoStats(e) {
    let t = this.isVideoStatsEnabled(e);
    this.setVideoStats(e, !t)
  }
  setVideoStats(e, t) {
    if (!t) {
      this.videoStatsEnabled.delete(e) && this.emitChange();
      return
    }
    if (this.videoStatsEnabled.has(e) && this.videoStatsEnabled.delete(e), this.videoStatsEnabled.set(e, t), this.videoStatsEnabled.size > s) {
      let e = this.videoStatsEnabled.size - s,
        t = this.videoStatsEnabled.keys();
      for (let n = 0; n < e; n++) {
        let e = t.next().value;
        null != e && this.videoStatsEnabled.delete(e)
      }
    }
    this.emitChange()
  }
  clearVideoStats(e) {
    this.videoStatsEnabled.delete(e) && this.emitChange()
  }
  constructor(...e) {
    super(...e), a(this, "videoStatsEnabled", new Map)
  }
}
let l = new o(Chunk73153.h, {}),
  c = l;

function u(e) {
  l.toggleVideoStats(e)
}