/** Chunk was on web.js **/
/** chunk id: 692401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => u
}), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk710845 = require("./710845.js"),
  Chunk459005 = require("./459005.js"),
  Chunk398463 = require("./398463.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Chunk710845.Z("DispatcherWorkScheduler");
class u {
  _trackAppBackgrounded(e) {
    this._isBackgrounded !== e && (this._isBackgrounded = e, this._isBackgrounded && this.hasWorkScheduled && (this.telemetry.track(a.ug.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback()))
  }
  _queueIdleCallback() {
    throw Error("Not implemented")
  }
  _clearIdleCallback() {
    throw Error("Not implemented")
  }
  get _hasExceededMaxConsecutiveFlushes() {
    return this._consecutiveFlushesBeforeQueueEmpty >= Chunk398463.OT
  }
  _processWorkCallback(e) {
    if (null == this._workCallbackFn) return;
    if (this._hasExceededMaxConsecutiveFlushes) {
      c.log("Unable to fully flush work queue after max retries, skipping future deadline."), this._workCallbackFn(), this.clearWorkTimeout(), this.telemetry.measure(a.aA.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, this._consecutiveFlushesBeforeQueueEmpty), this.telemetry.track(a.ug.EXCEEDED_MAX_CONSECUTIVE_FLUSHES), this._consecutiveFlushesBeforeQueueEmpty = 0, this._nextDispatchTimeout = s.II;
      return
    }
    let t = performance.now(),
      n = this._workCallbackFn(e),
      r = performance.now();
    this.clearWorkTimeout(), r - t > s.TC ? this._nextDispatchTimeout = s.II : this._nextDispatchTimeout = s.Lu, n ? (this._consecutiveFlushesBeforeQueueEmpty > 0 && this.telemetry.measure(a.aA.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, parseInt("".concat(this._consecutiveFlushesBeforeQueueEmpty))), this._consecutiveFlushesBeforeQueueEmpty = 0, this._criticalWorkScheduled = false) : this._consecutiveFlushesBeforeQueueEmpty += 1
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
    null != this._flushTimeoutHandler && (clearTimeout(this._flushTimeoutHandler), this._flushTimeoutHandler = null), this._clearIdleCallback(), this._nextDispatchTimeout = Chunk398463.Lu, this._workCallbackFn = null
  }
  requestWorkTimeout(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (this._workCallbackFn = e, !this.hasWorkScheduled) {
      if (this.telemetry.time(a.JV.TIME_TO_QUEUE_EMPTY), this._nextDispatchTimeout === s.II && this.telemetry.track(a.ug.LONGER_DISPATCH), t) return void this._queueIdleCallback();
      this._flushTimeoutHandler = setTimeout(() => {
        if (i()(null != this._workCallbackFn, "Work callback should be set"), this._isBackgrounded) return this.telemetry.track(a.ug.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback();
        this._queueIdleCallback()
      }, this._nextDispatchTimeout)
    }
  }
  constructor() {
    l(this, "_flushTimeoutHandler", null), l(this, "_flushIdleHandler", null), l(this, "_nextDispatchTimeout", Chunk398463.Lu), l(this, "_workCallbackFn", null), l(this, "_consecutiveFlushesBeforeQueueEmpty", 0), l(this, "_isBackgrounded", false), l(this, "_enableRequestIdleCallback", false), l(this, "_criticalWorkScheduled", false), l(this, "telemetry", new Chunk459005.mA), l(this, "_logger", c)
  }
}