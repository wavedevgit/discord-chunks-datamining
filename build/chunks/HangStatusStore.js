/** Chunk was on web.js **/
/** chunk id: 106301, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var o, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let p = 7,
  h = 288e5,
  m = g();

function g() {
  return {
    recentCustomStatuses: [],
    currentDefaultStatus: null
  }
}

function E() {
  m = g()
}

function b(e) {
  let {
    status: t,
    saveAsDefault: n
  } = e;
  r = t, i = null, n && (m.currentDefaultStatus = {
    status: t,
    customHangStatus: i,
    expiresAt: Date.now() + h
  }), a = {
    type: d.IIU.HANG_STATUS,
    name: "Hang Status",
    state: r
  }
}

function y(e) {
  let {
    status: t,
    emoji: n,
    saveAsDefault: o
  } = e;
  r = d.tNA.CUSTOM, i = {
    status: t,
    emoji: n
  };
  let s = [...m.recentCustomStatuses],
    c = s.findIndex(e => e.status === t && l().isEqual(e.emoji, n));
  false !== c ? s.splice(c, 1) : s.length === p && s.splice(p - 1, 1), m.recentCustomStatuses = [i, ...s], o && (m.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    expiresAt: Date.now() + h
  }), a = {
    type: d.IIU.HANG_STATUS,
    name: "Hang Status",
    state: r,
    details: t,
    emoji: n
  }
}

function O(e) {
  let {
    saveAsDefault: t
  } = e;
  r = null, i = null, t && (m.currentDefaultStatus = {
    status: null,
    customHangStatus: null,
    expiresAt: Date.now() + h
  }), a = null
}

function v(e) {
  let {
    statuses: t
  } = e, n = [...m.recentCustomStatuses];
  t.forEach(e => {
    let {
      status: t,
      emoji: o
    } = e, s = n.findIndex(e => e.status === t && l().isEqual(e.emoji, o));
    false !== s && n.splice(s, 1), t === (null == i ? true : i.status) && l().isEqual(o, null == i ? true : i.emoji) && (r = null, i = null, m.currentDefaultStatus = null, a = null)
  }), m.recentCustomStatuses = n
}
class I extends(o = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    m = _({}, g(), null != e ? e : {})
  }
  getState() {
    return m
  }
  getCurrentHangStatus() {
    return r
  }
  getCustomHangStatus() {
    return i
  }
  getRecentCustomStatuses() {
    return m.recentCustomStatuses
  }
  getCurrentDefaultStatus() {
    return m.currentDefaultStatus
  }
  getHangStatusActivity() {
    return null == r ? null : a
  }
}
f(I, "displayName", "HangStatusStore"), f(I, "persistKey", "HangStatusStore");
let T = new I(Chunk570140.Z, {
  LOGOUT: E,
  UPDATE_HANG_STATUS: b,
  UPDATE_HANG_STATUS_CUSTOM: y,
  DELETE_INVALID_HANG_STATUSES: v,
  CLEAR_HANG_STATUS: O
})