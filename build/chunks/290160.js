/** Chunk was on 49947 **/
/** chunk id: 290160, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk887278 = require("./887278.js"),
  Chunk710845 = require("./710845.js"),
  Chunk168232 = require("./168232.js"),
  Chunk594174 = require("./594174.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js");

function o(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      o(e, t, i[t])
    })
  }
  return e
}
let h = new Chunk710845.Z("SteamEventsManager"),
  u = {
    pollingIntervalMs: 1e4,
    enabled: true
  },
  m = class {
    initialize() {
      if (this.isInitialized || !this.config.enabled || !(0, r.isWindows)()) return;
      let e = l.default.getCurrentUser();
      (0, a.QI)(e) && (h.info("Initializing Steam Events Manager"), this.startPolling(), this.isInitialized = true)
    }
    destroy() {
      this.isInitialized && (h.info("Destroying Steam Game Events Manager"), this.stopPolling(), this.trackedProcesses.clear(), this.isInitialized = false)
    }
    startPolling() {
      null == this.pollingInterval && (this.checkForSteamProcess(), this.pollingInterval = setInterval(() => {
        this.checkForSteamProcess()
      }, this.config.pollingIntervalMs))
    }
    stopPolling() {
      null != this.pollingInterval && (clearInterval(this.pollingInterval), this.pollingInterval = null)
    }
    async checkForSteamProcess() {
      try {
        let e = await n.u2();
        null != e && e > 0 ? this.handleSteamProcessDiscovered(e) : this.handleNoSteamProcessFound()
      } catch (e) {
        h.error("Error checking for Steam game events process", e)
      }
    }
    handleSteamProcessDiscovered(e) {
      this.trackedProcesses.has(e) || (h.info("Steam game events process discovered", {
        pid: e
      }), this.trackedProcesses.set(e, Date.now()), this.watchSteamProcess(e))
    }
    handleNoSteamProcessFound() {
      this.trackedProcesses.size > 0 && (h.info("Steam game events process exited"), this.trackedProcesses.clear())
    }
    async watchSteamProcess(e) {
      try {
        let t = await n.YT(e, {
          game_events_session: "steam"
        });
        if (null != t) {
          h.warn("Steam game events watcher failed to attach", {
            pid: e,
            error: t
          }), this.trackedProcesses.delete(e);
          return
        }
        h.info("Steam game events watcher attached successfully", {
          pid: e
        }), this.setupGameEventsListener(e)
      } catch (t) {
        h.error("Steam game events watcher error", {
          pid: e,
          error: t
        }), this.trackedProcesses.delete(e)
      }
    }
    setupGameEventsListener(e) {
      let t = c.ZP.getDiscordUtils();
      if (null == t.startGameEvents) return void h.warn("Steam game events native API not available");
      t.startGameEvents(e, e => this.handleGameEvent(e), e => this.handleHelloMessage(e))
    }
    handleGameEvent(e) {
      let t;
      try {
        t = JSON.parse(e)
      } catch (t) {
        h.warn("Failed to parse Steam game event", {
          eventJson: e,
          error: t
        });
        return
      }
      if ("string" != typeof t.type || "object" != typeof t.payload) return void h.warn("Invalid Steam game event format", {
        steamGameEvent: t
      });
      "steam_timeline" === t.type ? this.handleSteamTimeline(t.payload) : h.warn("Unknown Steam game event type: ".concat(t.type))
    }
    handleSteamTimeline(e) {
      for (let t of (h.info("Steam timeline event received", {
          timelineEntry: e
        }), this.timelineEventCallbacks)) try {
        t(e)
      } catch (e) {
        h.warn("Steam timeline event callback failed", {
          error: e
        })
      }
    }
    handleHelloMessage(e) {
      h.info("Steam game events hello message received", e)
    }
    getTrackedProcesses() {
      return Array.from(this.trackedProcesses).map(e => {
        let [t, i] = e;
        return {
          pid: t,
          discovered: i
        }
      })
    }
    isTrackingProcess(e) {
      return this.trackedProcesses.has(e)
    }
    updateConfig(e) {
      let t = this.config.enabled;
      this.config = d({}, this.config, e), !t && this.config.enabled ? this.initialize() : t && !this.config.enabled && this.destroy()
    }
    addTimelineEventCallback(e) {
      this.timelineEventCallbacks.add(e)
    }
    removeTimelineEventCallback(e) {
      this.timelineEventCallbacks.delete(e)
    }
    constructor(e = {}) {
      o(this, "config", true), o(this, "pollingInterval", null), o(this, "trackedProcesses", new Map), o(this, "isInitialized", false), o(this, "timelineEventCallbacks", new Set), this.config = d({}, u, e)
    }
  }