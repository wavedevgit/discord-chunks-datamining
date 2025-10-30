/** Chunk was on web.js **/
/** chunk id: 71585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let c = 2592e6,
  u = 3 * Chunk70956.Z.Millis.DAY,
  d = 2048,
  f = () => ({
    itemImpressions: [],
    hidden: false
  }),
  _ = f(),
  p = new Set,
  h = new Set,
  m = 0,
  g = false,
  E = false,
  b = 1e3;

function y() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  if (!module && Date.now() < m) return;
  let t = 0,
    n = Date.now() - c;
  for (let e = 0; module < _.itemImpressions.length; module++) {
    let [r, i] = _.itemImpressions[module];
    if (Chunk442837 < require) t = module + 1;
    else break
  }
  exports > 0 && (_.itemImpressions = _.itemImpressions.slice(exports)), _.itemImpressions.length > d && (_.itemImpressions = _.itemImpressions.slice(-d));
  let r = E ? b : u,
    i = new Set,
    a = new Set,
    o = Date.now() - r,
    s = null;
  for (let [e, t] of _.itemImpressions) exports < Chunk70956 ? Chunk442837.add(module) : null == s && (s = exports + r), Chunk570140.add(module);
  p = Chunk442837, h = Chunk570140, m = null != s ? s : 1 / 0, g = true
}

function O(e) {
  let {
    itemIds: t
  } = e;
  g || y();
  let n = Date.now(),
    r = false;
  for (let e of t) h.has(e) || (_.itemImpressions.push([e, n]), r = true);
  return y(r), r
}

function v() {
  _.itemImpressions = [], y(true)
}

function I() {
  return console.log("Item impressions:", _.itemImpressions), false
}

function S() {
  E = !E
}

function T() {
  _.hidden = !_.hidden
}
class A extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    _ = l({}, _, null != e ? e : {})
  }
  getState() {
    return _
  }
  getImpressionCappedItemIds() {
    return y(), p
  }
  getDebugFastImpressionCappingEnabled() {
    return E
  }
  get hidden() {
    return _.hidden
  }
  reset() {
    _ = f()
  }
}
s(A, "displayName", "ContentInventoryPersistedStore"), s(A, "persistKey", "ContentInventoryPersistedStore");
let C = new A(Chunk570140.Z, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: O,
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: v,
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: I,
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: S,
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: T
})