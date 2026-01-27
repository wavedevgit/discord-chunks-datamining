/** Chunk was on web.js **/
/** chunk id: 260364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk731738 = require("./731738.js"),
  Chunk183636 = require("./183636.js"),
  Chunk831062 = require("./831062.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 3e4,
  u = .1;
class d {
  clearTimeoutTimer() {
    null != this.timeoutTimer && (clearTimeout(this.timeoutTimer), this.timeoutTimer = null)
  }
  sendMetric(e, t, n) {
    Math.random() > u || (a.A.distribution({
      name: r.K.QUEST_BAR_RENDER_DELAY,
      tags: ["quest_id:".concat(e), "timeout:".concat(t)]
    }, n), o.default.track(s.HAw.QUEST_BAR_RENDER_DELAY, {
      quest_id: e,
      timeout: t,
      duration: n
    }))
  }
  startTracking(e) {
    this.clearTracking(), this.startTime = performance.now(), this.questId = e, this.timeoutTimer = setTimeout(() => {
      this.stopTracking(e, true)
    }, c)
  }
  stopTracking(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (null !== this.startTime && this.questId === e) {
      if ("focused" === i.A.getState()) {
        let n = Math.min(t ? c : Math.round(performance.now() - this.startTime), c);
        this.sendMetric(e, t, n)
      }
      this.clearTracking()
    }
  }
  clearTracking() {
    this.clearTimeoutTimer(), this.startTime = null, this.questId = null
  }
  constructor() {
    l(this, "startTime", null), l(this, "questId", null), l(this, "timeoutTimer", null)
  }
}
let f = new d