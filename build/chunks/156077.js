/** Chunk was on web.js **/
/** chunk id: 156077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => c,
  jL: () => u
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = 10;
class s extends Chunk442837.yh {
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
    if (this.videoStatsEnabled.has(e) && this.videoStatsEnabled.delete(e), this.videoStatsEnabled.set(e, t), this.videoStatsEnabled.size > a) {
      let e = this.videoStatsEnabled.size - a,
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
    super(...e), o(this, "videoStatsEnabled", new Map)
  }
}
let l = new s(Chunk570140.Z, {}),
  c = l;

function u(e) {
  l.toggleVideoStats(e)
}