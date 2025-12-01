/** Chunk was on web.js **/
/** chunk id: 445346, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  y: () => _
}), require("./358797.js"), require("./388685.js"), require("./539854.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk135273 = require("./135273.js");
require("./17089.js");
var Chunk673011 = require("./673011.js"),
  Chunk153102 = require("./153102.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = [],
  d = false,
  f = new Promise(e => {
    r = () => {
      e(), r = null
    }
  });

function p(e, t) {
  let n = null;
  return 0 === e ? function() {
    clearImmediate(n), n = setImmediate(t)
  } : function() {
    null == n && (n = setTimeout(() => {
      try {
        t()
      } finally {
        n = null
      }
    }, e))
  }
}
class _ {
  static initialize() {
    d = true, u.forEach(e => e.initializeIfNeeded()), null != r && r()
  }
  static destroy() {
    u.length = 0, Chunk153102.Z.destroy()
  }
  static getAll() {
    return u
  }
  registerActionHandlers(e, t) {
    this._dispatcher.register(this.getName(), e, this.doEmitChanges, t, this._dispatchToken)
  }
  getName() {
    var e;
    return null != (e = this.constructor.displayName) ? module : this.constructor.name
  }
  initializeIfNeeded() {
    if (!this._isInitialized) {
      let e = Date.now();
      this.initialize(), this._isInitialized = true;
      let t = Date.now() - module;
      exports > 5 && Chunk135273.Z.mark("\uD83E\uDDA5", this.getName() + ".initialize()", exports)
    }
  }
  initialize() {}
  syncWith(e, t, n) {
    if (this.waitFor(...e), null != n) {
      let r = 0,
        i = () => {
          r !== l.Z.getChangeSentinel() && (r = l.Z.getChangeSentinel(), false !== t() && this.emitChange())
        };
      i = p(null != n ? n : 0, i), e.forEach(e => e.addChangeListener(i))
    } else e.forEach(e => {
      e._syncWiths.push({
        func: t,
        store: this
      })
    })
  }
  waitFor() {
    for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
    let r = exports.map((e, t) => (a()(null != e, "Store.waitFor(...) called with null Store at index ".concat(t, " for store ").concat(this.getName())), null != e._dispatcher) ? (a()(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."), e.getDispatchToken()) : null);
    this._dispatcher.addDependencies(this.getDispatchToken(), r.filter(e => null != e))
  }
  emitChange() {
    Chunk153102.Z.markChanged(this)
  }
  getDispatchToken() {
    return this._dispatchToken
  }
  mustEmitChanges() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : () => true;
    this._mustEmitChanges = module
  }
  constructor(e, t, n) {
    c(this, "_changeCallbacks", new s.Z), c(this, "_reactChangeCallbacks", new s.Z), c(this, "_syncWiths", []), c(this, "_dispatchToken", true), c(this, "_dispatcher", true), c(this, "_mustEmitChanges", true), c(this, "_isInitialized", false), c(this, "doEmitChanges", e => {
      (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) && (l.Z.markChanged(this), l.Z.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && l.Z.resume(false))
    }), c(this, "addChangeListener", this._changeCallbacks.add), c(this, "addConditionalChangeListener", this._changeCallbacks.addConditional), c(this, "removeChangeListener", this._changeCallbacks.remove), c(this, "addReactChangeListener", this._reactChangeCallbacks.add), c(this, "removeReactChangeListener", this._reactChangeCallbacks.remove), this._dispatcher = e, this._dispatchToken = this._dispatcher.createToken(), this.registerActionHandlers(null != t ? t : {}, n), u.push(this), d && this.initializeIfNeeded()
  }
}
c(_, "displayName", true), c(_, "initialized", f)