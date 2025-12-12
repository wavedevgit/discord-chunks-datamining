/** Chunk was on web.js **/
/** chunk id: 206776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => m
});
var r, i, Chunk570140 = require("./570140.js"),
  Chunk830917 = require("./830917.js"),
  Chunk692401 = require("./692401.js"),
  Chunk459005 = require("./459005.js"),
  Chunk398463 = require("./398463.js");

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
        timeRemaining() {
          let e = Date.now() - t;
          return Math.max(0, c.Ls - e)
        }
      })
    }, 1)
  },
  f = null != (i = window.cancelIdleCallback) ? i : clearTimeout;

function p(e) {
  return null == e ? new c.Lj(c.HO, true) : new c.Lj(e.timeRemaining(), e.didTimeout)
}
class _ extends Chunk692401.W {
  _queueIdleCallback() {
    if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
    this.telemetry.time(Chunk459005.JV.TIME_TO_FIRE_IDLE_CALLBACK), this._scheduleRequestIdleCallback(e => {
      var t;
      if (null == e ? true : e.didTimeout) {
        this.telemetry.track(l.ug.FIRED_DUE_TO_MAX_TIMEOUT), this.telemetry.clearTime(l.JV.TIME_TO_FIRE_IDLE_CALLBACK), this._processWorkCallback();
        return
      }
      if (this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK), (null != (t = null == e ? true : e.timeRemaining()) ? t : c.HO) < c.HO) this.telemetry.time(l.JV.TIME_TO_FIRE_IDLE_CALLBACK), this._scheduleRequestIdleCallback(e => {
        this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
        let t = p(e),
          n = null == t ? true : t.timeRemaining();
        null != n && this.telemetry.timeTrack(l.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t)
      }, {
        timeout: c.Hb / 5
      });
      else {
        this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
        let t = p(e),
          n = null == t ? true : t.timeRemaining();
        null != n && this.telemetry.timeTrack(l.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t)
      }
    }, {
      timeout: Chunk398463.Hb
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
    super(), u(this, "_flushIdleMaxTimeoutHandler", null), Chunk570140.Z.subscribe("WINDOW_VISIBILITY_CHANGE", e => {
      let {
        visible: t,
        windowId: n
      } = e;
      n === (0, o.UU)() && this._trackAppBackgrounded(!t)
    })
  }
}

function m() {
  return new _
}