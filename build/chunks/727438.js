/** Chunk was on web.js **/
/** chunk id: 727438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => h,
  g5: () => p,
  gc: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk123763 = require("./123763.js"),
  i = require.n(Chunk123763),
  Chunk135273 = require("./135273.js"),
  Chunk433517 = require("./433517.js"),
  Chunk445346 = require("./445346.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let d = {
    _state: true,
    _version: true
  },
  f = null;
class p extends Chunk445346.y {
  getClass() {
    return this.constructor
  }
  static clearAll(e) {
    return f = e, null == p._clearAllPromise && (p._clearAllPromise = new Promise(t => {
      requestIdleCallback(() => {
        p.clearPersistQueue(e), p.allPersistKeys.forEach(t => {
          p.shouldClear(e, t) && a.K.remove(t)
        }), s.y.getAll().forEach(t => {
          t instanceof p && p.shouldClear(e, t.getClass().persistKey) && (t._isInitialized = false, t.initializeIfNeeded())
        }), p._clearAllPromise = null, t()
      }, {
        timeout: 500
      })
    })), p._clearAllPromise
  }
  static shouldClear(e, t) {
    var n;
    return (null == (n = e.omit) || !n.includes(t)) && ("all" === e.type || "user-data-only" === e.type && !p.userAgnosticPersistKeys.has(t))
  }
  static clearPersistQueue(e) {
    p._writeResolvers.forEach((t, n) => {
      let [r, i] = t;
      p.shouldClear(e, n) && (p._writePromises.delete(n), p._writeResolvers.delete(n), cancelIdleCallback(i), r(false))
    }), p._writePromises.clear(), p._writeResolvers.clear()
  }
  static getAllStates() {
    return Promise.all(Array.from(p._writePromises.values())).then(() => {
      let e = {};
      return p.allPersistKeys.forEach(t => {
        var n;
        e[t] = (null != (n = a.K.get(t)) ? n : d)._state
      }), module
    })
  }
  static initializeAll(e) {
    s.y.getAll().forEach(t => {
      if (t instanceof p) {
        let n = t.getClass().persistKey;
        e.hasOwnProperty(n) && t.initializeFromState(e[n])
      }
    })
  }
  initializeFromState(e) {
    this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (p.allPersistKeys.add(this.getClass().persistKey), this._isInitialized = true)
  }
  static destroy() {
    f = null, Chunk445346.y.destroy(), p.clearPersistQueue({
      type: "all"
    }), p.allPersistKeys.clear(), p.userAgnosticPersistKeys.clear()
  }
  initializeIfNeeded() {
    if (!this._isInitialized) {
      let e = Date.now();
      p.allPersistKeys.add(this.getClass().persistKey);
      let {
        state: t,
        requiresPersist: n
      } = p.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
      this.initialize(exports) && this.asyncPersist(), require && this.asyncPersist(), this._isInitialized = true;
      let r = Date.now() - module;
      Chunk123763 > 5 && Chunk135273.Z.mark("\uD83E\uDDA5", this.getName() + ".initialize()", Chunk123763)
    }
  }
  static migrateAndReadStoreState(e, t) {
    if (null != f && p.shouldClear(f, e)) return a.K.remove(e), {
      state: true,
      requiresPersist: false
    };
    let n = null != p._clearAllPromise ? null : a.K.get(e),
      r = null != n ? n : d,
      {
        _state: i,
        _version: o
      } = r,
      s = c(r, ["_state", "_version"]),
      l = null == t ? 0 : t.length;
    if (0 !== l && o !== l && null != t) {
      let e = null != o ? o : 0,
        n = i;
      for (null == o && (n = s); e < l;) n = (0, t[e])(n), e++;
      return {
        state: n,
        requiresPersist: true
      }
    }
    return Object.values(s).length > 0 ? {
      state: s,
      requiresPersist: true
    } : {
      state: i,
      requiresPersist: false
    }
  }
  asyncPersist() {
    let {
      persistKey: e,
      disableWrite: t,
      throttleDelay: n
    } = this.getClass();
    if (p.disableWrites || exports) return Promise.resolve(false);
    let r = p._writePromises.get(module);
    return null != Chunk123763 || (r = new Promise(t => {
      let r = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
      p._writeResolvers.set(e, [t, requestIdleCallback(r, {
        timeout: 500
      })])
    }), p._writePromises.set(module, Chunk123763)), Chunk123763
  }
  persist() {
    let {
      persistKey: e
    } = this.getClass(), t = this.getState(), n = this._version;
    Chunk433517.K.set(module, {
      _state: exports,
      _version: require
    })
  }
  clear() {
    let {
      persistKey: e
    } = this.getClass();
    Chunk433517.K.remove(module)
  }
  constructor(e, t, n) {
    if (super(e, t, n), l(this, "_version", null == this.getClass().migrations ? 0 : this.getClass().migrations.length), l(this, "callback", e => {
        let {
          persistKey: t
        } = this.getClass();
        this.persist(), p._writePromises.delete(t), p._writeResolvers.delete(t), e()
      }), l(this, "throttledCallback", i()(e => this.callback(e), this.getClass().throttleDelay, {
        leading: false
      })), "string" != typeof this.getClass().persistKey) throw Error("".concat(this.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
    if ("function" != typeof this.initialize) throw Error("".concat(this.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
    if ("function" != typeof this.getState) throw Error("".concat(this.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
    this.addChangeListener(() => this.asyncPersist())
  }
}
l(p, "allPersistKeys", new Set), l(p, "userAgnosticPersistKeys", new Set), l(p, "_writePromises", new Map), l(p, "_writeResolvers", new Map), l(p, "_clearAllPromise", true), l(p, "disableWrites", false), l(p, "persistKey", true), l(p, "disableWrite", false), l(p, "throttleDelay", 0), l(p, "migrations", true);
class _ extends p {
  initializeFromState(e) {
    return p.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e)
  }
  initializeIfNeeded() {
    return p.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded()
  }
  getState() {
    return this.getUserAgnosticState()
  }
}
class m extends _ {}
class h extends _ {}