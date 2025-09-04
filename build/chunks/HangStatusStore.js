/** Chunk was on web.js **/
/** chunk id: 106301, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o;
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var s, Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = 7,
  O = 288e5,
  v = I();

function I() {
  return {
    recentCustomStatuses: [],
    currentDefaultStatus: null
  }
}

function T() {
  v = I()
}

function S(e) {
  let {
    status: t,
    saveAsDefault: n
  } = e;
  c()(t !== h.tNA.CUSTOM, "Hang Status cannot be custom"), r = t, i = null, o = null, n && (v.currentDefaultStatus = {
    status: t,
    customHangStatus: i,
    gameActivityHangStatus: o,
    expiresAt: Date.now() + O
  }), a = {
    type: h.IIU.HANG_STATUS,
    name: "Hang Status",
    state: r
  }
}

function A(e) {
  let {
    status: t,
    emoji: n,
    saveAsDefault: s
  } = e;
  r = h.tNA.CUSTOM, o = null, i = {
    status: t,
    emoji: n
  };
  let l = [...v.recentCustomStatuses],
    c = l.findIndex(e => e.status === t && d().isEqual(e.emoji, n));
  false !== c ? l.splice(c, 1) : l.length === y && l.splice(y - 1, 1), v.recentCustomStatuses = [i, ...l], s && (v.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: o,
    expiresAt: Date.now() + O
  }), a = {
    type: h.IIU.HANG_STATUS,
    name: "Hang Status",
    state: r,
    details: t,
    emoji: n
  }
}

function C(e) {
  let {
    applicationId: t,
    saveAsDefault: n
  } = e;
  o = t, r = null, i = null, a = null, n && (v.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: o,
    expiresAt: Date.now() + O
  })
}

function N(e) {
  let {
    saveAsDefault: t
  } = e;
  r = null, i = null, o = null, t && (v.currentDefaultStatus = {
    status: null,
    customHangStatus: null,
    gameActivityHangStatus: null,
    expiresAt: Date.now() + O
  }), a = null
}

function R() {
  if (null == o) returnfalse;
  if (!Chunk594190.ZP.getRunningVerifiedApplicationIds().includes(o)) {
    var e;
    return o = null, (null == (e = v.currentDefaultStatus) ? true : module.gameActivityHangStatus) != null && (v.currentDefaultStatus.gameActivityHangStatus = null), true
  }
  returnfalse
}

function P(e) {
  let {
    statuses: t
  } = e, n = [...v.recentCustomStatuses];
  t.forEach(e => {
    let {
      status: t,
      emoji: s
    } = e, l = n.findIndex(e => e.status === t && d().isEqual(e.emoji, s));
    false !== l && n.splice(l, 1), t === (null == i ? true : i.status) && d().isEqual(s, null == i ? true : i.emoji) && (r = null, i = null, o = null, v.currentDefaultStatus = null, a = null)
  }), v.recentCustomStatuses = n
}
class w extends(s = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    v = g({}, I(), null != e ? e : {}), this.waitFor(p.ZP), this.syncWith([p.ZP], R)
  }
  getState() {
    return v
  }
  getCurrentHangStatus() {
    return r
  }
  getCustomHangStatus() {
    return i
  }
  getGameActivityHangStatus() {
    return o
  }
  getRecentCustomStatuses() {
    return v.recentCustomStatuses
  }
  getCurrentDefaultStatus() {
    return v.currentDefaultStatus
  }
  getHangStatusActivity() {
    return null == r ? null : a
  }
}
m(w, "displayName", "HangStatusStore"), m(w, "persistKey", "HangStatusStore"), m(w, "migrations", [e => {
  if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
    let t = b(g({}, e.currentDefaultStatus), {
      gameActivityHangStatus: null
    });
    return b(g({}, e), {
      currentDefaultStatus: t
    })
  }
  return e
}]);
let D = new w(Chunk570140.Z, {
  LOGOUT: T,
  UPDATE_HANG_STATUS: S,
  UPDATE_HANG_STATUS_CUSTOM: A,
  UPDATE_HANG_STATUS_GAME_ACTIVITY: C,
  DELETE_INVALID_HANG_STATUSES: P,
  CLEAR_HANG_STATUS: N
})