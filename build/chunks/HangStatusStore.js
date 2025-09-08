/** Chunk was on web.js **/
/** chunk id: 106301, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o;
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var s, Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk574176 = require("./574176.js"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = 7,
  I = 288e5,
  T = S();

function S() {
  return {
    recentCustomStatuses: [],
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
  c()(t !== m.tN.CUSTOM, "Hang Status cannot be custom"), r = t, i = null, o = null, s && (T.currentDefaultStatus = {
    status: t,
    customHangStatus: i,
    gameActivityHangStatus: o,
    expiresAt: Date.now() + I
  });
  let {
    defaultStatusVariant: l
  } = h.n.getCurrentConfig({
    guildId: n,
    location: "UpdateHangStatus"
  });
  a = {
    type: g.IIU.HANG_STATUS,
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
  r = m.tN.CUSTOM, o = null, i = {
    status: t,
    emoji: n
  };
  let l = [...T.recentCustomStatuses],
    c = l.findIndex(e => e.status === t && d().isEqual(e.emoji, n));
  false !== c ? l.splice(c, 1) : l.length === v && l.splice(v - 1, 1), T.recentCustomStatuses = [i, ...l], s && (T.currentDefaultStatus = {
    status: r,
    customHangStatus: i,
    gameActivityHangStatus: o,
    expiresAt: Date.now() + I
  }), a = {
    type: g.IIU.HANG_STATUS,
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
    gameActivityHangStatus: o,
    expiresAt: Date.now() + I
  })
}

function P(e) {
  let {
    saveAsDefault: t
  } = e;
  r = null, i = null, o = null, t && (T.currentDefaultStatus = {
    status: null,
    customHangStatus: null,
    gameActivityHangStatus: null,
    expiresAt: Date.now() + I
  }), a = null
}

function w() {
  if (null == o) returnfalse;
  if (!Chunk594190.ZP.getRunningVerifiedApplicationIds().includes(o)) {
    var e;
    return o = null, (null == (e = T.currentDefaultStatus) ? true : module.gameActivityHangStatus) != null && (T.currentDefaultStatus.gameActivityHangStatus = null), true
  }
  returnfalse
}

function D(e) {
  let {
    statuses: t
  } = e, n = [...T.recentCustomStatuses];
  t.forEach(e => {
    let {
      status: t,
      emoji: s
    } = e, l = n.findIndex(e => e.status === t && d().isEqual(e.emoji, s));
    false !== l && n.splice(l, 1), t === (null == i ? true : i.status) && d().isEqual(s, null == i ? true : i.emoji) && (r = null, i = null, o = null, T.currentDefaultStatus = null, a = null)
  }), T.recentCustomStatuses = n
}
class x extends(s = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    T = b({}, S(), null != e ? e : {}), this.waitFor(p.ZP), this.syncWith([p.ZP], w)
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
  getRecentCustomStatuses() {
    return T.recentCustomStatuses
  }
  getCurrentDefaultStatus() {
    return T.currentDefaultStatus
  }
  getHangStatusActivity() {
    return null == r ? null : a
  }
}
E(x, "displayName", "HangStatusStore"), E(x, "persistKey", "HangStatusStore"), E(x, "migrations", [e => {
  if (null != e.currentDefaultStatus && null == e.currentDefaultStatus.gameActivityHangStatus) {
    let t = O(b({}, e.currentDefaultStatus), {
      gameActivityHangStatus: null
    });
    return O(b({}, e), {
      currentDefaultStatus: t
    })
  }
  return e
}]);
let L = new x(Chunk570140.Z, {
  LOGOUT: A,
  UPDATE_HANG_STATUS: C,
  UPDATE_HANG_STATUS_CUSTOM: N,
  UPDATE_HANG_STATUS_GAME_ACTIVITY: R,
  DELETE_INVALID_HANG_STATUSES: D,
  CLEAR_HANG_STATUS: P
})