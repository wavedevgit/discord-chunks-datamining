/** Chunk was on web.js **/
/** chunk id: 242919, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, s;
require.d(exports, {
  A: () => U,
  x: () => I
}), require("./896048.js"), require("./321073.js");
var o, Chunk812729 = require("./812729.js"),
  c = require.n(Chunk812729),
  Chunk284009 = require("./284009.js"),
  d = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  p = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk15285 = require("./15285.js"),
  Chunk140547 = require("./140547.js"),
  Chunk60821 = require("./60821.js"),
  Chunk708455 = require("./708455.js"),
  Chunk652215 = require("./652215.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = 6,
  T = 7,
  C = N();

function N() {
  return {
    recentStatuses: b.UO,
    favoritedStatuses: [],
    currentDefaultStatus: null
  }
}

function R() {
  C = N()
}

function w(e) {
  let {
    status: t,
    guildId: n,
    saveAsDefault: o
  } = e;
  if (d()(t !== b.Kk.CUSTOM, "Hang Status cannot be custom"), r = t, i = null, s = null, null != t) {
    let e = [...C.recentStatuses],
      n = e.findIndex(e => (0, E.A)(e) && e === t);
    n >= 0 ? e.splice(n, 1) : e.length === T && e.splice(T - 1, 1), C.recentStatuses = [t, ...e]
  }
  o && (C.currentDefaultStatus = {
    status: t,
    customHangStatus: i,
    gameActivityHangStatus: s
  });
  let {
    defaultStatusVariant: l
  } = (0, g.ko)({
    guildId: n,
    location: "UpdateHangStatus"
  });
  a = {
    type: y.$pd.HANG_STATUS,
    name: "Hang Status",
    state: "".concat(r, ":").concat(l)
  }
}

function P(e) {
  let {
    status: t,
    emoji: n,
    saveAsDefault: o
  } = e;
  r = b.Kk.CUSTOM, s = null, i = {
    status: t,
    emoji: n
  };
  let l = [...C.recentStatuses],
    c = l.findIndex(e => !(0, E.A)(e) && e.status === t && p().isEqual(e.emoji, n));
  c >= 0 ? l.splice(c, 1) : l.length === T && l.splice(T - 1, 1), C.recentStatuses = [i, ...l], o && (C.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: s
  }), a = {
    type: y.$pd.HANG_STATUS,
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
  s = t, r = null, i = null, a = null, n && (C.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: s
  })
}

function x(e) {
  let {
    saveAsDefault: t
  } = e;
  r = null, i = null, s = null, t && (C.currentDefaultStatus = {
    status: null,
    customHangStatus: null,
    gameActivityHangStatus: null
  }), a = null
}

function L(e) {
  let {
    status: t,
    emoji: n
  } = e, r = false, i = [...C.favoritedStatuses], a = i.findIndex(e => (0, E.A)(e) ? e === t : e.status === t && p().isEqual(e.emoji, n)), s = null == n ? t : {
    status: t,
    emoji: n
  };
  return false === a && i.length < I ? (i.push(s), r = true) : a >= 0 && (i.splice(a, 1), r = true), !!r && (C.favoritedStatuses = i, true)
}

function j() {
  if (null == s) returnfalse;
  if (!m.Ay.getRunningVerifiedApplicationIds().includes(s)) {
    var e;
    return s = null, (null == (e = C.currentDefaultStatus) ? true : e.gameActivityHangStatus) != null && (C.currentDefaultStatus.gameActivityHangStatus = null), true
  }
  returnfalse
}

function M(e) {
  let {
    statuses: t
  } = e, n = [...C.recentStatuses], o = [...C.favoritedStatuses];
  t.forEach(e => {
    let {
      status: t,
      emoji: l
    } = e, c = n.findIndex(e => (0, E.A)(e) ? e === t : e.status === t && p().isEqual(e.emoji, l)), u = o.findIndex(e => (0, E.A)(e) ? e === t : e.status === t && p().isEqual(e.emoji, l));
    c >= 0 && n.splice(c, 1), u >= 0 && o.splice(u, 1), t === (null == i ? true : i.status) && p().isEqual(l, null == i ? true : i.emoji) && (r = null, i = null, s = null, C.currentDefaultStatus = null, a = null)
  }), C.recentStatuses = n, C.favoritedStatuses = o
}
class k extends(o = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    C = A({}, N(), null != e ? e : {}), this.waitFor(m.Ay), this.syncWith([m.Ay], j)
  }
  getState() {
    return C
  }
  getCurrentHangStatus() {
    return r
  }
  getCustomHangStatus() {
    return i
  }
  getGameActivityHangStatus() {
    return s
  }
  getRecentStatuses() {
    return C.recentStatuses
  }
  getFavoritedStatuses() {
    return C.favoritedStatuses
  }
  getCurrentDefaultStatus() {
    return C.currentDefaultStatus
  }
  getHangStatusActivity() {
    return null == r ? null : a
  }
  isFavorited(e) {
    let t = (0, E.A)(e);
    return C.favoritedStatuses.some(n => (0, E.A)(n) && t && n === e || !(0, E.A)(n) && !t && e.status === n.status && c()(e.emoji, n.emoji))
  }
}
O(k, "displayName", "HangStatusStore"), O(k, "persistKey", "HangStatusStore"), O(k, "migrations", [e => {
  if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
    let t = S(A({}, e.currentDefaultStatus), {
      gameActivityHangStatus: null
    });
    return S(A({}, e), {
      currentDefaultStatus: t
    })
  }
  return e
}, e => ("recentCustomStatuses" in e && delete e.recentCustomStatuses, e), e => (null != e.currentDefaultStatus && "expiresAt" in e.currentDefaultStatus && delete e.currentDefaultStatus.expiresAt, e)]);
let U = new k(Chunk73153.h, {
  LOGOUT: R,
  UPDATE_HANG_STATUS: w,
  UPDATE_HANG_STATUS_CUSTOM: P,
  UPDATE_HANG_STATUS_GAME_ACTIVITY: D,
  DELETE_INVALID_HANG_STATUSES: M,
  CLEAR_HANG_STATUS: x,
  UPDATE_FAVORITE_HANG_STATUS: L,
  RESET_HANG_STATUS_STATE: R
})