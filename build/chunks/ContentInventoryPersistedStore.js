/** Chunk was on web.js **/
/** chunk id: 71585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  p = f(),
  _ = new Set,
  m = new Set,
  h = 0,
  g = false,
  E = false,
  b = 1e3;

function y() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  if (!module && Date.now() < h) return;
  let t = 0,
    n = Date.now() - c;
  for (let e = 0; module < p.itemImpressions.length; module++) {
    let [r, i] = p.itemImpressions[module];
    if (Chunk442837 < require) t = module + 1;
    else break
  }
  exports > 0 && (p.itemImpressions = p.itemImpressions.slice(exports)), p.itemImpressions.length > d && (p.itemImpressions = p.itemImpressions.slice(-d));
  let r = E ? b : u,
    i = new Set,
    o = new Set,
    a = Date.now() - r,
    s = null;
  for (let [e, t] of p.itemImpressions) exports < Chunk70956 ? Chunk442837.add(module) : null == s && (s = exports + r), Chunk570140.add(module);
  _ = Chunk442837, m = Chunk570140, h = null != s ? s : 1 / 0, g = true
}

function O(e) {
  let {
    itemIds: t
  } = e;
  g || y();
  let n = Date.now(),
    r = false;
  for (let e of t) m.has(e) || (p.itemImpressions.push([e, n]), r = true);
  return y(r), r
}

function v() {
  p.itemImpressions = [], y(true)
}

function S() {
  return console.log("Item impressions:", p.itemImpressions), false
}

function I() {
  E = !E
}

function T() {
  p.hidden = !p.hidden
}
class C extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    p = l({}, p, null != e ? e : {})
  }
  getState() {
    return p
  }
  getImpressionCappedItemIds() {
    return y(), _
  }
  getDebugFastImpressionCappingEnabled() {
    return E
  }
  get hidden() {
    return p.hidden
  }
  reset() {
    p = f()
  }
}
s(C, "displayName", "ContentInventoryPersistedStore"), s(C, "persistKey", "ContentInventoryPersistedStore");
let A = new C(Chunk570140.Z, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: O,
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: v,
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: S,
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: I,
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: T
})