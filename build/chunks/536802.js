/** Chunk was on web.js **/
/** chunk id: 536802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./321073.js");
var r, Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class p extends(r = Chunk311907.Ay.Store) {
  static clearAll() {
    p.allStores.forEach(e => e.clear())
  }
  get persistKey() {
    return "".concat(this.getClass().displayName, "-snapshot")
  }
  clear() {
    o.w.remove(this.persistKey)
  }
  save() {
    o.w.set(this.persistKey, this.takeSnapshot())
  }
  readSnapshot(e) {
    let t = o.w.get(this.persistKey);
    return null == t || t.version !== e ? null : t.data
  }
  getClass() {
    return this.constructor
  }
  constructor(e, t) {
    super(l.h, f(u({}, e), {
      CLEAR_CACHES: () => (this.clear(), false),
      WRITE_CACHES: () => (this.save(), false)
    }), t), a()(null != this.getClass().displayName, "Snapshot stores need a display name"), a()(!("CLEAR_CACHES" in e), "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action"), a()(!("WRITE_CACHES" in e), "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action"), p.allStores.push(this)
  }
}
c(p, "allStores", [])