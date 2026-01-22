/** Chunk was on web.js **/
/** chunk id: 318093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => u
}), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk626584 = require("./626584.js"),
  Chunk936674 = require("./936674.js"),
  Chunk354382 = require("./354382.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Chunk626584.A("DispatcherWorkScheduler");
class u {
  _trackAppBackgrounded(e) {
    this._isBackgrounded === e || (this._isBackgrounded = e, this._isBackgrounded && this.hasWorkScheduled && (this.telemetry.track(s.KQ.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback()))
  }
  _queueIdleCallback() {
    throw Error("Not implemented")
  }
  _clearIdleCallback() {
    throw Error("Not implemented")
  }
  get _hasExceededMaxConsecutiveFlushes() {
    return this._consecutiveFlushesBeforeQueueEmpty >= 2
  }
  _processWorkCallback(e) {
    if (null == this._workCallbackFn) return;
    if (this._hasExceededMaxConsecutiveFlushes) {
      c.log("Unable to fully flush work queue after max retries, skipping future deadline."), this._workCallbackFn(), this.clearWorkTimeout(), this.telemetry.measure(s.Wg.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, this._consecutiveFlushesBeforeQueueEmpty), this.telemetry.track(s.KQ.EXCEEDED_MAX_CONSECUTIVE_FLUSHES), this._consecutiveFlushesBeforeQueueEmpty = 0, this._nextDispatchTimeout = o.ct;
      return
    }
    let t = performance.now(),
      n = this._workCallbackFn(e),
      r = performance.now();
    this.clearWorkTimeout(), r - t > o.zO ? this._nextDispatchTimeout = o.ct : this._nextDispatchTimeout = o.Z4, n ? (this._consecutiveFlushesBeforeQueueEmpty > 0 && this.telemetry.measure(s.Wg.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, parseInt("".concat(this._consecutiveFlushesBeforeQueueEmpty))), this._consecutiveFlushesBeforeQueueEmpty = 0, this._criticalWorkScheduled = false) : this._consecutiveFlushesBeforeQueueEmpty += 1
  }
  markCriticalWorkScheduled() {
    this._criticalWorkScheduled = true, null != this._flushIdleHandler && (this._clearIdleCallback(), this._processWorkCallback())
  }
  toggleRequestIdleCallback(e) {
    this._enableRequestIdleCallback = e, !e && this.hasWorkScheduled && (this._clearIdleCallback(), this._processWorkCallback())
  }
  get isBackgrounded() {
    return this._isBackgrounded
  }
  get hasWorkScheduled() {
    return null != this._flushTimeoutHandler || null != this._flushIdleHandler
  }
  get isRequestIdleCallbackEnabled() {
    return this._enableRequestIdleCallback
  }
  clearWorkTimeout() {
    null != this._flushTimeoutHandler && (clearTimeout(this._flushTimeoutHandler), this._flushTimeoutHandler = null), this._clearIdleCallback(), this._nextDispatchTimeout = o.Z4, this._workCallbackFn = null
  }
  requestWorkTimeout(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (this._workCallbackFn = e, !this.hasWorkScheduled) {
      if (this.telemetry.time(s.YE.TIME_TO_QUEUE_EMPTY), this._nextDispatchTimeout === o.ct && this.telemetry.track(s.KQ.LONGER_DISPATCH), t) return void this._queueIdleCallback();
      this._flushTimeoutHandler = setTimeout(() => {
        if (i()(null != this._workCallbackFn, "Work callback should be set"), this._isBackgrounded) return this.telemetry.track(s.KQ.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback();
        this._queueIdleCallback()
      }, this._nextDispatchTimeout)
    }
  }
  constructor() {
    l(this, "_flushTimeoutHandler", null), l(this, "_flushIdleHandler", null), l(this, "_nextDispatchTimeout", o.Z4), l(this, "_workCallbackFn", null), l(this, "_consecutiveFlushesBeforeQueueEmpty", 0), l(this, "_isBackgrounded", false), l(this, "_enableRequestIdleCallback", false), l(this, "_criticalWorkScheduled", false), l(this, "telemetry", new s.Kw), l(this, "_logger", c)
  }
}