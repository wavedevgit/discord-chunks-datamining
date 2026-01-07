/** Chunk was on web.js **/
/** chunk id: 613568, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => E
}), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk500268 = require("./500268.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk135273 = require("./135273.js");
require("./17089.js");
var Chunk986529 = require("./986529.js"),
  Chunk579092 = require("./579092.js"),
  Chunk153102 = require("./153102.js"),
  Chunk625306 = require("./625306.js"),
  Chunk420970 = require("./420970.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]),
  _ = new Chunk579092.Yd("Flux"),
  m = 100,
  h = 10,
  g = "__subscriptions";
class E {
  isDispatching() {
    return null != this._currentDispatchActionType
  }
  dispatch(e) {
    return new Promise((t, n) => {
      this._waitQueue.push(() => {
        try {
          null == this.functionCache[e.type] && (this.functionCache[e.type] = e => this._dispatchWithDevtools(e), y(this.functionCache[e.type], "dispatch_" + e.type)), this.functionCache[e.type](e), t()
        } catch (e) {
          n(e)
        }
      }), this.flushWaitQueue()
    })
  }
  dispatchForStoreTest(e, t) {
    for (let {
        name: n,
        actionHandler: r,
        storeDidChange: i
      }
      of(a()(false, "dispatchForTest cannot be called in: ".concat("production")), this._actionHandlers.getOrderedActionHandlers(e))) n === t && false !== r(e) && i(e)
  }
  flushWaitQueue() {
    if (!this._processingWaitQueue) try {
      this._processingWaitQueue = true, c.Z.isDispatching = true;
      let t = 0;
      for (; this._waitQueue.length > 0;) {
        if (++t > 100) {
          var e;
          let t = u.qC();
          throw _.error("LastFewActions", t), null == (e = this._sentryUtils) || e.addBreadcrumb({
            message: "Dispatcher: Dispatch loop detected",
            data: {
              lastFewActions: t
            }
          }), Error("Dispatch loop detected, aborting")
        }
        for (; this._waitQueue.length > 0;) this._waitQueue.shift()();
        c.Z.emit()
      }
    } finally {
      this._processingWaitQueue = false, c.Z.isDispatching = false
    }
  }
  _dispatchWithDevtools(e) {
    this._dispatchWithLogging(e)
  }
  _dispatchWithLogging(e) {
    a()(null == this._currentDispatchActionType, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ".concat(e.type, " Already dispatching: ").concat(this._currentDispatchActionType)), a()(e.type, "Dispatch.dispatch(...) called without an action type"), p.has(e.type) && _.log("Dispatching ".concat(e.type)), (0, s.B1)(e.type), u.IH(e.type);
    let t = this.actionLogger.log(e, t => {
      try {
        this._currentDispatchActionType = e.type, this._dispatch(e, t)
      } finally {
        this._currentDispatchActionType = null
      }
    });
    t.totalTime > m && _.verbose("Slow dispatch on ".concat(e.type, ": ").concat(t.totalTime, "ms"));
    try {
      (0, s.L8)("DISPATCH[".concat(e.type, "]"), e.type)
    } catch (e) {}
  }
  _dispatch(e, t) {
    for (let t of this._interceptors)
      if (t(e)) returnfalse;
    let n = this._actionHandlers.getOrderedActionHandlers(e);
    for (let r = 0, i = n.length; r < i; r++) {
      let {
        name: i,
        actionHandler: a,
        storeDidChange: o
      } = n[r];
      false !== t(i, () => a(e)) && o(e)
    }
    let r = this._subscriptions[e.type];
    null != r && t(g, () => {
      r.forEach(t => t(e))
    })
  }
  addInterceptor(e) {
    this._interceptors.push(e)
  }
  wait(e) {
    this._waitQueue.push(e), this.flushWaitQueue()
  }
  subscribe(e, t) {
    let n = this._subscriptions[e];
    null == n && (this._subscriptions[e] = n = new Set), n.add(t)
  }
  unsubscribe(e, t) {
    let n = this._subscriptions[e];
    null != n && (n.delete(t), 0 === n.size && delete this._subscriptions[e])
  }
  register(e, t, n, r, i) {
    return this._actionHandlers.register(e, t, n, null != r ? r : this._defaultBand, i)
  }
  createToken() {
    return this._actionHandlers.createToken()
  }
  addDependencies(e, t) {
    this._actionHandlers.addDependencies(e, t)
  }
  constructor(e = 0, t, n) {
    (f(this, "_defaultBand", true), f(this, "_interceptors", []), f(this, "_subscriptions", {}), f(this, "_waitQueue", []), f(this, "_processingWaitQueue", false), f(this, "_currentDispatchActionType", null), f(this, "_actionHandlers", new b), f(this, "_sentryUtils", true), f(this, "actionLogger", true), f(this, "functionCache", {}), this._defaultBand = e, this._sentryUtils = n, null != t) ? this.actionLogger = t: ("undefined" == typeof window || 1, this.actionLogger = new d.Z), this.actionLogger.on("trace", (e, t, n) => {
      o.Z.isTracing && n >= h && o.Z.mark("\uD83E\uDDA5", t, n)
    })
  }
}
class b {
  getOrderedActionHandlers(e) {
    var t;
    return null != (t = this._orderedActionHandlers[e.type]) ? t : this._computeOrderedActionHandlers(e.type)
  }
  register(e, t, n, r) {
    let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : this.createToken();
    a()(r >= 0 && Number.isInteger(r), "band must be a non-negative integer.");
    let o = {};
    for (let n in t) {
      let r = t[n],
        i = e => r(e);
      y(i, "".concat(e, "_").concat(n)), o[n] = i
    }
    return this._dependencyGraph.addNode(i, {
      name: e,
      band: r,
      actionHandler: o,
      storeDidChange: n
    }), this._addToBand(i, r), this._invalidateCaches(), i
  }
  createToken() {
    return "ID_".concat(this._lastID++)
  }
  addDependencies(e, t) {
    for (let n of (this._validateDependencies(e, t), t)) this._dependencyGraph.addDependency(e, n);
    this._invalidateCaches()
  }
  _validateDependencies(e, t) {}
  _invalidateCaches() {
    this._orderedCallbackTokens = null, this._orderedActionHandlers = {}
  }
  _bandToken(e) {
    let t = "band.".concat(e);
    return !this._dependencyGraph.hasNode(t) && (this._dependencyGraph.addNode(t, {
      name: t,
      band: e,
      actionHandler: {},
      storeDidChange: () => {}
    }), e > 0 && this._dependencyGraph.addDependency(t, this._bandToken(e - 1))), t
  }
  _addToBand(e, t) {
    this._dependencyGraph.addDependency(this._bandToken(t), e), t > 0 && this._dependencyGraph.addDependency(e, this._bandToken(t - 1))
  }
  _computeOrderedActionHandlers(e) {
    var t;
    let n = null != (t = this._orderedCallbackTokens) ? t : this._computeOrderedCallbackTokens(),
      r = [];
    for (let t = 0, i = n.length; t < i; t++) {
      let {
        name: i,
        actionHandler: a,
        storeDidChange: o
      } = this._dependencyGraph.getNodeData(n[t]), s = a[e];
      null != s && r.push({
        name: i,
        actionHandler: s,
        storeDidChange: o
      })
    }
    return this._orderedActionHandlers[e] = r, r
  }
  _computeOrderedCallbackTokens() {
    try {
      let e = this._dependencyGraph.overallOrder();
      return this._orderedCallbackTokens = e, e
    } catch (t) {
      let e = t;
      if (null != e.cyclePath) {
        let t = e.cyclePath.map(e => "".concat(this._dependencyGraph.getNodeData(e).name, "(").concat(e, ")"));
        throw Error("Dependency Cycle Found: ".concat(t.join(" -> ")))
      }
      throw e
    }
  }
  constructor() {
    f(this, "_orderedActionHandlers", {}), f(this, "_orderedCallbackTokens", null), f(this, "_lastID", 1), f(this, "_dependencyGraph", new r.DepGraph)
  }
}

function y(e, t) {
  Object.defineProperty(e, "name", {
    value: t
  })
}