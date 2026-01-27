/** Chunk was on web.js **/
/** chunk id: 197245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J5: () => m,
  dP: () => p,
  lt: () => h
}), require("./896048.js"), require("./65821.js");
var Chunk879378 = require("./879378.js"),
  i = require.n(Chunk879378),
  Chunk61090 = require("./61090.js"),
  Chunk506774 = require("./506774.js"),
  Chunk22468 = require("./22468.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = u(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let d = {
    _state: true,
    _version: true
  },
  f = null;
class p extends Chunk22468.i {
  getClass() {
    return this.constructor
  }
  static clearAll(e) {
    return f = e, null == p._clearAllPromise && (p._clearAllPromise = new Promise(t => {
      requestIdleCallback(() => {
        p.clearPersistQueue(e), p.allPersistKeys.forEach(t => {
          p.shouldClear(e, t) && o.w.remove(t)
        }), s.i.getAll().forEach(t => {
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
        e[t] = (null != (n = o.w.get(t)) ? n : d)._state
      }), e
    })
  }
  static initializeAll(e) {
    s.i.getAll().forEach(t => {
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
    f = null, s.i.destroy(), p.clearPersistQueue({
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
      this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), this._isInitialized = true;
      let r = Date.now() - e;
      r > 5 && a.A.mark("\uD83E\uDDA5", this.getName() + ".initialize()", r)
    }
  }
  static migrateAndReadStoreState(e, t) {
    if (null != f && p.shouldClear(f, e)) return o.w.remove(e), {
      state: true,
      requiresPersist: false
    };
    let n = null != p._clearAllPromise ? null : o.w.get(e),
      r = null != n ? n : d,
      {
        _state: i,
        _version: a
      } = r,
      s = c(r, ["_state", "_version"]),
      l = null == t ? 0 : t.length;
    if (0 !== l && a !== l && null != t) {
      let e = null != a ? a : 0,
        n = i;
      for (null == a && (n = s); e < l;) n = (0, t[e])(n), e++;
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
    if (p.disableWrites || t) return Promise.resolve(false);
    let r = p._writePromises.get(e);
    return null != r || (r = new Promise(t => {
      let r = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
      p._writeResolvers.set(e, [t, requestIdleCallback(r, {
        timeout: 500
      })])
    }), p._writePromises.set(e, r)), r
  }
  persist() {
    let {
      persistKey: e
    } = this.getClass(), t = this.getState(), n = this._version;
    o.w.set(e, {
      _state: t,
      _version: n
    })
  }
  clear() {
    let {
      persistKey: e
    } = this.getClass();
    o.w.remove(e)
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
class h extends _ {}
class m extends _ {}