/** Chunk was on web.js **/
/** chunk id: 878374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => h
});
var r, i, Chunk73153 = require("./73153.js"),
  Chunk365971 = require("./365971.js"),
  Chunk318093 = require("./318093.js"),
  Chunk936674 = require("./936674.js"),
  Chunk354382 = require("./354382.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = null != (r = window.requestIdleCallback) ? r : e => {
    let t = Date.now();
    return setTimeout(() => {
      e({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
      })
    }, 1)
  },
  f = null != (i = window.cancelIdleCallback) ? i : clearTimeout;

function p(e) {
  return null == e ? new c.oS(c.vr, true) : new c.oS(e.timeRemaining(), e.didTimeout)
}
class _ extends Chunk318093.f {
  _queueIdleCallback() {
    if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
    this.telemetry.time(l.YE.TIME_TO_FIRE_IDLE_CALLBACK), this._scheduleRequestIdleCallback(e => {
      var t;
      if (null == e ? true : e.didTimeout) {
        this.telemetry.track(l.KQ.FIRED_DUE_TO_MAX_TIMEOUT), this.telemetry.clearTime(l.YE.TIME_TO_FIRE_IDLE_CALLBACK), this._processWorkCallback();
        return
      }
      if (this.telemetry.timeEnd(l.YE.TIME_TO_FIRE_IDLE_CALLBACK), (null != (t = null == e ? true : e.timeRemaining()) ? t : c.vr) < c.vr) this.telemetry.time(l.YE.TIME_TO_FIRE_IDLE_CALLBACK), this._scheduleRequestIdleCallback(e => {
        this.telemetry.timeEnd(l.YE.TIME_TO_FIRE_IDLE_CALLBACK);
        let t = p(e),
          n = null == t ? true : t.timeRemaining();
        null != n && this.telemetry.timeTrack(l.YE.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t)
      }, {
        timeout: 200
      });
      else {
        this.telemetry.timeEnd(l.YE.TIME_TO_FIRE_IDLE_CALLBACK);
        let t = p(e),
          n = null == t ? true : t.timeRemaining();
        null != n && this.telemetry.timeTrack(l.YE.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t)
      }
    }, {
      timeout: 1e3
    })
  }
  _scheduleRequestIdleCallback(e, t) {
    this._flushIdleHandler = d(t => {
      this._clearIdleCallback(), e(t)
    }), (null == t ? true : t.timeout) != null && this._scheduleMaxIdleCallback(t.timeout)
  }
  _scheduleMaxIdleCallback(e) {
    null != this._flushIdleMaxTimeoutHandler && clearTimeout(this._flushIdleMaxTimeoutHandler), this._flushIdleMaxTimeoutHandler = setTimeout(() => {
      this._clearIdleCallback(), this._processWorkCallback()
    }, e)
  }
  _clearIdleCallback() {
    null != this._flushIdleHandler && (f(this._flushIdleHandler), this._flushIdleHandler = null), null != this._flushIdleMaxTimeoutHandler && (clearTimeout(this._flushIdleMaxTimeoutHandler), this._flushIdleMaxTimeoutHandler = null)
  }
  constructor() {
    super(), u(this, "_flushIdleMaxTimeoutHandler", null), a.h.subscribe("WINDOW_VISIBILITY_CHANGE", e => {
      let {
        visible: t,
        windowId: n
      } = e;
      n === (0, s.Xg)() && this._trackAppBackgrounded(!t)
    })
  }
}

function h() {
  return new _
}