/** Chunk was on web.js **/
/** chunk id: 750041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var r, Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js");

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
class p extends(r = Chunk442837.ZP.Store) {
  static clearAll() {
    p.allStores.forEach(e => e.clear())
  }
  get persistKey() {
    return "".concat(this.getClass().displayName, "-snapshot")
  }
  clear() {
    Chunk433517.K.remove(this.persistKey)
  }
  save() {
    Chunk433517.K.set(this.persistKey, this.takeSnapshot())
  }
  readSnapshot(e) {
    let t = s.K.get(this.persistKey);
    return null == t || t.version !== e ? null : t.data
  }
  getClass() {
    return this.constructor
  }
  constructor(e, t) {
    super(l.Z, f(u({}, e), {
      CLEAR_CACHES: () => (this.clear(), false),
      WRITE_CACHES: () => (this.save(), false)
    }), t), a()(null != this.getClass().displayName, "Snapshot stores need a display name"), a()(!("CLEAR_CACHES" in e), "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action"), a()(!("WRITE_CACHES" in e), "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action"), p.allStores.push(this)
  }
}
c(p, "allStores", [])