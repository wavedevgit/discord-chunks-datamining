/** Chunk was on web.js **/
/** chunk id: 353647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk180335 = require("./180335.js");

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

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = new Map,
  f = new Set,
  _ = null,
  p = false,
  h = false;

function m(e) {
  let {
    userId: t
  } = e;
  f.add(t)
}

function g(e) {
  let {
    outbox: t,
    userId: n
  } = e;
  d.set(n, u(l({}, t), {
    lastFetched: Date.now()
  })), f.delete(n)
}

function E(e) {
  let {
    userId: t
  } = e;
  f.delete(t)
}

function b() {
  _ = null, p = true
}

function y(e) {
  let {
    entry: t,
    userId: n
  } = e;
  _ = null;
  let r = d.get(n);
  if (null == r) returnfalse;
  let i = r.entries.filter(e => e.id !== t.id);
  d.set(n, u(l({}, r), {
    entries: i
  })), p = false
}

function O(e) {
  let {
    error: t
  } = e;
  _ = t, p = false
}

function v() {
  _ = null, p = false
}

function I() {
  d = new Map, f = new Set, _ = null, p = false
}

function T() {
  I(), h = true
}

function S() {
  I()
}
class A extends(r = Chunk442837.ZP.Store) {
  getMatchingOutboxEntry(e) {
    let {
      activity: t,
      userId: n
    } = e, r = d.get(n);
    if (null != r && null != t) return (0, o.vu)(r.entries, t)
  }
  getUserOutbox(e) {
    return d.get(e)
  }
  isFetchingUserOutbox(e) {
    return f.has(e)
  }
  get deleteOutboxEntryError() {
    return _
  }
  get isDeletingEntryHistory() {
    return p
  }
  get hasInitialized() {
    return h
  }
}
s(A, "displayName", "ContentInventoryOutboxStore");
let C = new A(Chunk570140.Z, {
  CONNECTION_OPEN: T,
  LOGOUT: S,
  CONTENT_INVENTORY_FETCH_OUTBOX_START: m,
  CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: g,
  CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: E,
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: b,
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: y,
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: O,
  CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: v
})