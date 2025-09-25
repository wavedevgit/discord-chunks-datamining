/** Chunk was on web.js **/
/** chunk id: 106301, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o;
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js");
var s, Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk574176 = require("./574176.js"),
  Chunk54332 = require("./54332.js"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = 7,
  T = S();

function S() {
  return {
    recentStatuses: Chunk505905.ux,
    favoritedStatuses: [],
    currentDefaultStatus: null
  }
}

function A() {
  T = S()
}

function C(e) {
  let {
    status: t,
    guildId: n,
    saveAsDefault: s
  } = e;
  if (c()(t !== g.tN.CUSTOM, "Hang Status cannot be custom"), r = t, i = null, o = null, null != t) {
    let e = [...T.recentStatuses],
      n = e.findIndex(e => (0, m.Z)(e) && e === t);
    n >= 0 ? e.splice(n, 1) : e.length === I && e.splice(I - 1, 1), T.recentStatuses = [t, ...e]
  }
  s && (T.currentDefaultStatus = {
    status: t,
    customHangStatus: i,
    gameActivityHangStatus: o
  });
  let {
    defaultStatusVariant: l
  } = h.n.getCurrentConfig({
    guildId: n,
    location: "UpdateHangStatus"
  });
  a = {
    type: E.IIU.HANG_STATUS,
    name: "Hang Status",
    state: "".concat(r, ":").concat(l)
  }
}

function N(e) {
  let {
    status: t,
    emoji: n,
    saveAsDefault: s
  } = e;
  r = g.tN.CUSTOM, o = null, i = {
    status: t,
    emoji: n
  };
  let l = [...T.recentStatuses],
    c = l.findIndex(e => !(0, m.Z)(e) && e.status === t && d().isEqual(e.emoji, n));
  c >= 0 ? l.splice(c, 1) : l.length === I && l.splice(I - 1, 1), T.recentStatuses = [i, ...l], s && (T.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: o
  }), a = {
    type: E.IIU.HANG_STATUS,
    name: "Hang Status",
    state: r,
    details: t,
    emoji: n
  }
}

function R(e) {
  let {
    applicationId: t,
    saveAsDefault: n
  } = e;
  o = t, r = null, i = null, a = null, n && (T.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: o
  })
}

function P(e) {
  let {
    saveAsDefault: t
  } = e;
  r = null, i = null, o = null, t && (T.currentDefaultStatus = {
    status: null,
    customHangStatus: null,
    gameActivityHangStatus: null
  }), a = null
}

function w(e) {
  let {
    status: t,
    emoji: n
  } = e, r = [...T.favoritedStatuses], i = r.findIndex(e => (0, m.Z)(e) ? e === t : e.status === t && d().isEqual(e.emoji, n)), a = null == n ? t : {
    status: t,
    emoji: n
  };
  return false === i ? r.push(a) : r.splice(i, 1), T.favoritedStatuses = r, true
}

function D() {
  if (null == o) returnfalse;
  if (!Chunk594190.ZP.getRunningVerifiedApplicationIds().includes(o)) {
    var e;
    return o = null, (null == (e = T.currentDefaultStatus) ? true : module.gameActivityHangStatus) != null && (T.currentDefaultStatus.gameActivityHangStatus = null), true
  }
  returnfalse
}

function x(e) {
  let {
    statuses: t
  } = e, n = [...T.recentStatuses], s = [...T.favoritedStatuses];
  t.forEach(e => {
    let {
      status: t,
      emoji: l
    } = e, c = n.findIndex(e => (0, m.Z)(e) ? e === t : e.status === t && d().isEqual(e.emoji, l)), u = s.findIndex(e => (0, m.Z)(e) ? e === t : e.status === t && d().isEqual(e.emoji, l));
    c >= 0 && n.splice(c, 1), u >= 0 && s.splice(u, 1), t === (null == i ? true : i.status) && d().isEqual(l, null == i ? true : i.emoji) && (r = null, i = null, o = null, T.currentDefaultStatus = null, a = null)
  }), T.recentStatuses = n, T.favoritedStatuses = s
}
class L extends(s = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    T = y({}, S(), null != e ? e : {}), this.waitFor(p.ZP), this.syncWith([p.ZP], D)
  }
  getState() {
    return T
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
  getRecentStatuses() {
    return T.recentStatuses
  }
  getFavoritedStatuses() {
    return T.favoritedStatuses
  }
  getCurrentDefaultStatus() {
    return T.currentDefaultStatus
  }
  getHangStatusActivity() {
    return null == r ? null : a
  }
}
b(L, "displayName", "HangStatusStore"), b(L, "persistKey", "HangStatusStore"), b(L, "migrations", [e => {
  if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
    let t = v(y({}, e.currentDefaultStatus), {
      gameActivityHangStatus: null
    });
    return v(y({}, e), {
      currentDefaultStatus: t
    })
  }
  return e
}, e => ("recentCustomStatuses" in e && delete e.recentCustomStatuses, e), e => (null != e.currentDefaultStatus && "expiresAt" in e.currentDefaultStatus && delete e.currentDefaultStatus.expiresAt, e)]);
let j = new L(Chunk570140.Z, {
  LOGOUT: A,
  UPDATE_HANG_STATUS: C,
  UPDATE_HANG_STATUS_CUSTOM: N,
  UPDATE_HANG_STATUS_GAME_ACTIVITY: R,
  DELETE_INVALID_HANG_STATUSES: x,
  CLEAR_HANG_STATUS: P,
  UPDATE_FAVORITE_HANG_STATUS: w
})