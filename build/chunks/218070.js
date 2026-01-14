/** Chunk was on 24516 **/
/** chunk id: 218070, original params: e,t,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => S,
  getBaselineMemory: () => f,
  getCurrentMemory: () => p,
  getPeakMemory: () => h,
  init: () => d,
  initDevMode: () => u,
  terminate: () => c
}), require("./49124.js");
var Chunk710845 = require("./710845.js"),
  Chunk87169 = require("./87169.js"),
  Chunk717156 = require("./717156.js"),
  Chunk939073 = require("./939073.js");

function o(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
let l = new Chunk710845.Z("MeticulousPerformanceReporter"),
  m = new class {
    get isInitialized() {
      return null != this.mode
    }
    getPeakMemory() {
      return this.heapSampler.getPeakMemory()
    }
    getCurrentMemory() {
      return this.heapSampler.getCurrentMemory()
    }
    getBaselineMemory() {
      var e;
      return null == (e = this.mode) ? true : e.baselineUsedMemory
    }
    init() {
      if (this.isInitialized) returntrue;
      let e = (0, a.k)();
      return null != e && (this.mode = function(e) {
        var t, i, n;
        let r = e.native.performance;
        return {
          name: "meticulous",
          sessionId: e.sessionBeingReplayed.id,
          commitSha: null == (t = e.commitUnderTest) ? true : t.sha,
          branchName: null == (i = e.commitUnderTest) ? true : i.branchName,
          commitDate: null == (n = e.commitUnderTest) ? true : n.date,
          PerformanceObserver: e.native.PerformanceObserver,
          performanceNow: () => r.now(),
          mark: (e, t) => performance.mark(e, t),
          getMemory: () => {
            let e = r.memory;
            if (null != e) return {
              jsHeapSizeLimit: e.jsHeapSizeLimit,
              totalJSHeapSize: e.totalJSHeapSize,
              usedJSHeapSize: e.usedJSHeapSize
            }
          },
          sendToIngest: async e => {
            let t = JSON.stringify(e);
            l.log("QP payload", t);
            try {
              let e = await fetch("https://meticulous-ingest.discord.tools/webhook", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "meticulous-passthrough": "true"
                },
                body: t,
                keepalive: true
              });
              if (!e.ok) return l.warn("Failed to send performance data: ".concat(e.status, " ").concat(e.statusText)), false;
              returntrue
            } catch (e) {
              return l.warn("Error sending performance data:", e), false
            }
          }
        }
      }(e), this.start(), l.log("Performance reporter initialized [".concat(this.mode.name, "]")), true)
    }
    initDevMode() {
      return !!this.isInitialized || (this.mode = {
        name: "dev",
        sessionId: "dev-".concat(Date.now()),
        commitSha: "dev",
        branchName: "local",
        commitDate: null,
        PerformanceObserver: window.PerformanceObserver,
        performanceNow: () => performance.now(),
        mark: (e, t) => performance.mark(e, t),
        getMemory: () => {
          let e = performance.memory;
          if (null != e) return {
            jsHeapSizeLimit: e.jsHeapSizeLimit,
            totalJSHeapSize: e.totalJSHeapSize,
            usedJSHeapSize: e.usedJSHeapSize
          }
        },
        sendToIngest: async e => (l.log("\uD83D\uDCE4 [DEV] Ingest payload:", JSON.stringify(e, null, 2)), await Promise.resolve(true))
      }, this.start(), l.log("\uD83D\uDD27 Performance reporter initialized [".concat(this.mode.name, "] - entries will be logged to console")), true)
    }
    start() {
      var e;
      if (null == this.mode) return;
      let t = this.mode.performanceNow();
      this.mode.baselineUsedMemory = null == (e = this.mode.getMemory()) ? true : e.usedJSHeapSize, this.actionTracker.start(this.mode, t), this.heapSampler.start(this.mode, t), this.boundBeforeUnload = () => void this.terminate(), window.addEventListener("beforeunload", this.boundBeforeUnload)
    }
    async terminate() {
      this.isInitialized && (null != this.boundBeforeUnload && (window.removeEventListener("beforeunload", this.boundBeforeUnload), this.boundBeforeUnload = null), await this.actionTracker.flush(), this.actionTracker.stop(), this.heapSampler.stop(), l.log("Performance reporter terminated"), this.mode = null)
    }
    constructor() {
      o(this, "mode", null), o(this, "boundBeforeUnload", null), o(this, "actionTracker", new r.n), o(this, "heapSampler", new s.q)
    }
  };

function d() {
  return m.init()
}

function u() {
  return m.initDevMode()
}

function c() {
  return m.terminate()
}

function h() {
  return m.getPeakMemory()
}

function p() {
  return m.getCurrentMemory()
}

function f() {
  return m.getBaselineMemory()
}
let S = m