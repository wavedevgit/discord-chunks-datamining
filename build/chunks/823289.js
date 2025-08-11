/** Chunk was on web.js **/
/** chunk id: 823289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk286379 = require("./286379.js"),
  Chunk797614 = require("./797614.js"),
  Chunk626135 = require("./626135.js"),
  Chunk446276 = require("./446276.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 3e4,
  d = .1;
class f {
  isEligible() {
    return (0, Chunk446276.M)(Chunk46140.dr.QUESTS_BAR)
  }
  clearTimeoutTimer() {
    null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), this.timeoutTimer = null)
  }
  sendMetric(e, t, n) {
    Math.random() > d || (i.Z.distribution({
      name: r.V.QUEST_BAR_RENDER_DELAY,
      tags: ["quest_id:".concat(e), "timeout:".concat(t)]
    }, n), o.default.track(l.rMx.QUEST_BAR_RENDER_DELAY, {
      quest_id: e,
      timeout: t,
      duration: n
    }))
  }
  startTracking(e) {
    this.isEligible() && (this.clearTracking(), this.startTime = performance.now(), this.questId = e, this.timeoutTimer = setTimeout(() => {
      this.stopTracking(e, true)
    }, u))
  }
  stopTracking(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (!this.isEligible() || null === this.startTime || this.questId !== e) return;
    let n = t ? u : Math.round(performance.now() - this.startTime);
    this.clearTracking(), this.sendMetric(e, t, n)
  }
  clearTracking() {
    this.clearTimeoutTimer(), this.startTime = null, this.questId = null
  }
  constructor() {
    c(this, "startTime", null), c(this, "questId", null), c(this, "timeoutTimer", null)
  }
}
let _ = new f