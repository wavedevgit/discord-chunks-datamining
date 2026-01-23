/** Chunk was on web.js **/
/** chunk id: 435738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}
let c = 2592e6,
  u = 3 * Chunk927813.A.Millis.DAY,
  d = 2048,
  f = () => ({
    itemImpressions: [],
    hidden: false
  }),
  p = f(),
  _ = new Set,
  h = new Set,
  m = 0,
  g = false,
  E = false,
  y = 1e3;

function b() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  if (!e && Date.now() < m) return;
  let t = 0,
    n = Date.now() - c;
  for (let e = 0; e < p.itemImpressions.length; e++) {
    let [r, i] = p.itemImpressions[e];
    if (i < n) t = e + 1;
    else break
  }
  t > 0 && (p.itemImpressions = p.itemImpressions.slice(t)), p.itemImpressions.length > d && (p.itemImpressions = p.itemImpressions.slice(-d));
  let r = E ? y : u,
    i = new Set,
    a = new Set,
    s = Date.now() - r,
    o = null;
  for (let [e, t] of p.itemImpressions) t < s ? i.add(e) : null == o && (o = t + r), a.add(e);
  _ = i, h = a, m = null != o ? o : 1 / 0, g = true
}

function O(e) {
  let {
    itemIds: t
  } = e;
  g || b();
  let n = Date.now(),
    r = false;
  for (let e of t) h.has(e) || (p.itemImpressions.push([e, n]), r = true);
  return b(r), r
}

function v() {
  p.itemImpressions = [], b(true)
}

function A() {
  return console.log("Item impressions:", p.itemImpressions), false
}

function I() {
  E = !E
}

function S() {
  p.hidden = !p.hidden
}
class T extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    p = l({}, p, null != e ? e : {})
  }
  getState() {
    return p
  }
  getImpressionCappedItemIds() {
    return b(), _
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
o(T, "displayName", "ContentInventoryPersistedStore"), o(T, "persistKey", "ContentInventoryPersistedStore");
let C = new T(Chunk73153.h, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: O,
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: v,
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: A,
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: I,
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: S
})