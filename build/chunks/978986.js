/** Chunk was on 27978 **/
/** chunk id: 978986, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  NQ: () => _,
  U1: () => v,
  XW: () => d,
  _J: () => f,
  aP: () => m,
  e7: () => p,
  h6: () => x,
  oE: () => g,
  pB: () => h,
  y: () => E,
  yr: () => j
}), require("./781311.js");
var Chunk663042 = require("./663042.js"),
  Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js");

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = {
  nickname: true,
  dmsAllowed: !Chunk695346.iG.getSetting()
};

function u(e) {
  let t = s.no.getSetting();
  return t !== i.GI.ACTIVITY_STATUS_ON && (t !== i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200))
}
let d = (0, Chunk663042.U)(e => ({
    nickname: c.nickname,
    dmsAllowed: c.dmsAllowed,
    showActivity: true,
    inviteCode: true,
    guildId: true,
    touched: false,
    setNickname: t => e(e => o(a({}, e), {
      nickname: t,
      touched: true
    })),
    setDmsAllowed: t => e(e => o(a({}, e), {
      dmsAllowed: t,
      touched: true
    })),
    setShowActivity: t => e(e => o(a({}, e), {
      showActivity: t,
      touched: true
    })),
    setInviteCode: t => e(e => o(a({}, e), {
      inviteCode: t,
      touched: true
    })),
    setGuildId: t => e(e => o(a({}, e), {
      guildId: t,
      touched: true
    })),
    initialize: (t, n, r) => e(e => o(a({}, e), {
      guildSize: t,
      inviteCode: n,
      guildId: r,
      showActivity: u(t),
      dmsAllowed: !s.iG.getSetting(),
      touched: false
    })),
    reset: () => e(e => ({
      nickname: c.nickname,
      dmsAllowed: c.dmsAllowed,
      showActivity: u(e.guildSize),
      inviteCode: true,
      guildId: true,
      guildSize: e.guildSize,
      touched: false
    }))
  })),
  h = (e, t, n) => {
    d.getState().initialize(e, t, n)
  },
  g = () => {
    d.getState().reset()
  },
  m = () => {
    let e = d.getState();
    return module.nickname !== c.nickname || module.dmsAllowed !== c.dmsAllowed || module.showActivity !== u(module.guildSize)
  },
  p = () => d.getState().inviteCode,
  f = () => d.getState().guildId,
  _ = () => d.getState().touched,
  x = () => d.getState().dmsAllowed,
  E = () => d.getState().nickname,
  v = () => d.getState().showActivity,
  j = () => {
    var e, t;
    let {
      nickname: n
    } = d();
    if (null != require && "" !== require.trim()) return require;
    let r = Chunk594174.default.getCurrentUser();
    return null != (t = null != (e = null == Chunk663042 ? true : Chunk663042.globalName) ? module : null == Chunk663042 ? true : Chunk663042.username) ? exports : ""
  }