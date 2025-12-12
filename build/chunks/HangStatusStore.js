/** Chunk was on web.js **/
/** chunk id: 106301, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o, a;
require.d(exports, {
  Z: () => U,
  o: () => T
}), require("./388685.js"), require("./539854.js");
var s, Chunk348327 = require("./348327.js"),
  c = require.n(Chunk348327),
  Chunk512722 = require("./512722.js"),
  d = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  p = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk574176 = require("./574176.js"),
  Chunk54332 = require("./54332.js"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = 6,
  C = 7,
  A = N();

function N() {
  return {
    recentStatuses: Chunk505905.ux,
    favoritedStatuses: [],
    currentDefaultStatus: null
  }
}

function P() {
  A = N()
}

function R(e) {
  let {
    status: t,
    guildId: n,
    saveAsDefault: s
  } = e;
  if (d()(t !== b.tN.CUSTOM, "Hang Status cannot be custom"), r = t, i = null, a = null, null != t) {
    let e = [...A.recentStatuses],
      n = e.findIndex(e => (0, E.Z)(e) && e === t);
    n >= 0 ? e.splice(n, 1) : e.length === C && e.splice(C - 1, 1), A.recentStatuses = [t, ...e]
  }
  s && (A.currentDefaultStatus = {
    status: t,
    customHangStatus: i,
    gameActivityHangStatus: a
  });
  let {
    defaultStatusVariant: l
  } = (0, g.gx)({
    guildId: n,
    location: "UpdateHangStatus"
  });
  o = {
    type: y.IIU.HANG_STATUS,
    name: "Hang Status",
    state: "".concat(r, ":").concat(l)
  }
}

function w(e) {
  let {
    status: t,
    emoji: n,
    saveAsDefault: s
  } = e;
  r = b.tN.CUSTOM, a = null, i = {
    status: t,
    emoji: n
  };
  let l = [...A.recentStatuses],
    c = l.findIndex(e => !(0, E.Z)(e) && e.status === t && p().isEqual(e.emoji, n));
  c >= 0 ? l.splice(c, 1) : l.length === C && l.splice(C - 1, 1), A.recentStatuses = [i, ...l], s && (A.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: a
  }), o = {
    type: y.IIU.HANG_STATUS,
    name: "Hang Status",
    state: r,
    details: t,
    emoji: n
  }
}

function D(e) {
  let {
    applicationId: t,
    saveAsDefault: n
  } = e;
  a = t, r = null, i = null, o = null, n && (A.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: a
  })
}

function x(e) {
  let {
    saveAsDefault: t
  } = e;
  r = null, i = null, a = null, t && (A.currentDefaultStatus = {
    status: null,
    customHangStatus: null,
    gameActivityHangStatus: null
  }), o = null
}

function L(e) {
  let {
    status: t,
    emoji: n
  } = e, r = false, i = [...A.favoritedStatuses], o = i.findIndex(e => (0, E.Z)(e) ? e === t : e.status === t && p().isEqual(e.emoji, n)), a = null == n ? t : {
    status: t,
    emoji: n
  };
  return false === o && i.length < T ? (i.push(a), r = true) : o >= 0 && (i.splice(o, 1), r = true), !!r && (A.favoritedStatuses = i, true)
}

function j() {
  if (null == a) returnfalse;
  if (!Chunk594190.ZP.getRunningVerifiedApplicationIds().includes(a)) {
    var e;
    return a = null, (null == (e = A.currentDefaultStatus) ? true : module.gameActivityHangStatus) != null && (A.currentDefaultStatus.gameActivityHangStatus = null), true
  }
  returnfalse
}

function M(e) {
  let {
    statuses: t
  } = e, n = [...A.recentStatuses], s = [...A.favoritedStatuses];
  t.forEach(e => {
    let {
      status: t,
      emoji: l
    } = e, c = n.findIndex(e => (0, E.Z)(e) ? e === t : e.status === t && p().isEqual(e.emoji, l)), u = s.findIndex(e => (0, E.Z)(e) ? e === t : e.status === t && p().isEqual(e.emoji, l));
    c >= 0 && n.splice(c, 1), u >= 0 && s.splice(u, 1), t === (null == i ? true : i.status) && p().isEqual(l, null == i ? true : i.emoji) && (r = null, i = null, a = null, A.currentDefaultStatus = null, o = null)
  }), A.recentStatuses = n, A.favoritedStatuses = s
}
class k extends(s = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    A = v({}, N(), null != e ? e : {}), this.waitFor(h.ZP), this.syncWith([h.ZP], j)
  }
  getState() {
    return A
  }
  getCurrentHangStatus() {
    return r
  }
  getCustomHangStatus() {
    return i
  }
  getGameActivityHangStatus() {
    return a
  }
  getRecentStatuses() {
    return A.recentStatuses
  }
  getFavoritedStatuses() {
    return A.favoritedStatuses
  }
  getCurrentDefaultStatus() {
    return A.currentDefaultStatus
  }
  getHangStatusActivity() {
    return null == r ? null : o
  }
  isFavorited(e) {
    let t = (0, E.Z)(e);
    return A.favoritedStatuses.some(n => (0, E.Z)(n) && t && n === e || !(0, E.Z)(n) && !t && e.status === n.status && c()(e.emoji, n.emoji))
  }
}
O(k, "displayName", "HangStatusStore"), O(k, "persistKey", "HangStatusStore"), O(k, "migrations", [e => {
  if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
    let t = I(v({}, e.currentDefaultStatus), {
      gameActivityHangStatus: null
    });
    return I(v({}, e), {
      currentDefaultStatus: t
    })
  }
  return e
}, e => ("recentCustomStatuses" in e && delete e.recentCustomStatuses, e), e => (null != e.currentDefaultStatus && "expiresAt" in e.currentDefaultStatus && delete e.currentDefaultStatus.expiresAt, e)]);
let U = new k(Chunk570140.Z, {
  LOGOUT: P,
  UPDATE_HANG_STATUS: R,
  UPDATE_HANG_STATUS_CUSTOM: w,
  UPDATE_HANG_STATUS_GAME_ACTIVITY: D,
  DELETE_INVALID_HANG_STATUSES: M,
  CLEAR_HANG_STATUS: x,
  UPDATE_FAVORITE_HANG_STATUS: L,
  RESET_HANG_STATUS_STATE: P
})