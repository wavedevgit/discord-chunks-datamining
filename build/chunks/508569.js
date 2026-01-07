/** Chunk was on web.js **/
/** chunk id: 508569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./539854.js"), require("./415506.js"), require("./290780.js");
var Chunk442837 = require("./442837.js"),
  Chunk710845 = require("./710845.js"),
  Chunk483012 = require("./483012.js"),
  Chunk138859 = require("./138859.js"),
  Chunk206776 = require("./206776.js"),
  Chunk91247 = require("./91247.js"),
  Chunk459005 = require("./459005.js"),
  Chunk398463 = require("./398463.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Chunk710845.Z("GatewaySocket"),
  p = new Set(["INITIAL_GUILD", "READY"]),
  _ = new Set(["READY", "INITIAL_GUILD"]),
  m = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]),
  h = new Set(["READY", "INITIAL_GUILD", "READY_SUPPLEMENTAL", "RESUMED", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATE", "VOICE_SERVER_UPDATE", "RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "RTC_CONNECTION_CLIENT_CONNECT", "RTC_CONNECTION_PING", "MEDIA_SESSION_JOINED", "MEDIA_ENGINE_PERMISSION", "SESSIONS_REPLACE"]),
  g = {};

function E(e, t) {
  var n;
  let [r, i] = null != (n = g[e]) ? n : [0, 0];
  g[e] = [(r * i + t) / (i + 1), i + 1]
}

function b(e, t, n) {
  var r;
  if (null == n) returnfalse;
  let i = e[t],
    a = e.length - 1,
    o = t < a ? e[t + 1] : null,
    s = null != (r = null == n ? true : n.timeRemaining()) ? r : 0,
    l = null != n && s <= 0,
    c = i.type === (null == o ? true : o.type),
    u = t === a;
  return !!l && !c && !u
}
class y {
  hasStuffToDispatchNow() {
    return this.queue.length > 0 && 2 === this.queue[0].status
  }
  processFirstQueuedDispatch(e) {
    let t = [];
    for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status;) t.push(this.queue.shift());
    this.dispatchMultiple(t)
  }
  unpauseDispatchQueue() {
    for (let e of (this.paused = false, this.queue)) this.maybePreload(e);
    this.flush()
  }
  receiveDispatch(e, t, n) {
    if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
    let r = {
      data: e,
      type: t,
      compressionAnalytics: n,
      status: 0,
      preloadPromise: null,
      preloadedData: null
    };
    this.queue.push(r), this.maybePreload(r) || this.scheduleFlush(t)
  }
  maybePreload(e) {
    if (this.paused && !p.has(e.type)) returnfalse;
    if (0 === e.status) {
      var t;
      let n = null == (t = this.getDispatchHandler(e.type)) ? true : t.preload(e.data);
      if (e.status = null == n ? 2 : 1, e.preloadPromise = n, null != n) return n.then(t => {
        e.preloadedData = t, e.status = 2, this.scheduleFlush(e.type)
      }).catch(t => this.socket.resetSocketOnDispatchError({
        error: t,
        action: e.type
      })), true
    }
    returnfalse
  }
  scheduleFlush(e) {
    !this.paused && (_.has(e) ? (this.scheduler.clearWorkTimeout(), this.flush()) : this.scheduler.hasWorkScheduled || this.scheduler.requestWorkTimeout(this.flush), h.has(e) && this.scheduler.markCriticalWorkScheduled())
  }
  getDispatchTimings() {
    return g
  }
  getSchedulerTelemetry() {
    return this.scheduler.telemetry
  }
  getIsSchedulerBackgrounded() {
    return this.scheduler.isBackgrounded
  }
  toggleRequestIdleCallback(e) {
    this.scheduler.toggleRequestIdleCallback(e)
  }
  getIsRequestIdleCallbackEnabled() {
    return this.scheduler.isRequestIdleCallbackEnabled
  }
  dispatchMultiple(e, t) {
    if (0 === e.length) returntrue;
    let n = "none",
      i = false;
    this.scheduler.telemetry.measure(c.aA.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
    try {
      let s = [];
      this.socket.connectionState === o.Z.RESUMING && r.ZP.Emitter.pause(150);
      let l = 0;
      if (r.ZP.Emitter.batched(() => {
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            n = a.type, i = i || m.has(a.type);
            let o = performance.now();
            if (this.dispatchOne(a), l = performance.now() - o, E(a.type, l), b(e, r, t)) {
              s = e.slice(r + 1), null != t && 0 >= t.timeRemaining() && this.scheduler.telemetry.timeTrack(c.JV.TIME_OVER_DEADLINE, t.timeSinceExpiration);
              break
            }
          }
          a.Z.flush()
        }), i && r.ZP.Emitter.resume(), s.length > 0) return this.scheduler.telemetry.measure(c.aA.COUNT_DISPATCHES_LEFT_AFTER_YIELD, s.length), this.queue.unshift(...s), this.scheduler.requestWorkTimeout(this.flush, true), false
    } catch (e) {
      this.socket.resetSocketOnDispatchError({
        error: e,
        action: n
      })
    }
    returntrue
  }
  dispatchOne(e) {
    var t, n, r;
    let {
      data: i,
      type: s,
      compressionAnalytics: c,
      preloadedData: u
    } = e, d = performance.now();
    if (this.socket.connectionState === o.Z.RESUMING) {
      let e = d - this.resumeAnalytics.lastUpdateTime;
      0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = d, this.resumeAnalytics.numEvents += 1
    }
    if (a.Z.flush(s, i), "READY" === s) {
      let e = (0, l.vW)(i);
      null == (t = this.getDispatchHandler(s)) || t.dispatch(i, s, u), (0, l.dm)(this.socket, i, d, c, e)
    } else "RESUMED" === s ? (null == (n = this.getDispatchHandler(s)) || n.dispatch(i, s, u), (0, l.uB)(this.resumeAnalytics), this.socket.handleResumeDispatched(), this.resumeAnalytics = (0, l.zH)()) : null == (r = this.getDispatchHandler(s)) || r.dispatch(i, s, u);
    this.socket.connectionState === o.Z.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - d)
  }
  clear() {
    this.paused = false, this.queue.length = 0
  }
  constructor(e) {
    d(this, "socket", true), d(this, "scheduler", true), d(this, "queue", true), d(this, "paused", true), d(this, "resumeAnalytics", true), d(this, "getDispatchHandler", true), d(this, "flush", true), this.socket = e, this.scheduler = (0, s.l)(), this.queue = [], this.paused = true, this.resumeAnalytics = (0, l.zH)(), this.getDispatchHandler = null, this.flush = e => {
      if (this.paused) returntrue;
      let t = performance.now(),
        n = 0;
      for (; n < this.queue.length && 2 === this.queue[n].status; n++);
      if (0 === n) returntrue;
      let r = this.queue.splice(0, n),
        i = this.dispatchMultiple(r, e);
      i && this.scheduler.telemetry.timeEnd(c.JV.TIME_TO_QUEUE_EMPTY);
      let a = performance.now() - t;
      return a > u.TC && !i && f.log("Dispatched ".concat(r.length, " messages in ").concat(a, "ms")), i
    }
  }
}