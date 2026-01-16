/** Chunk was on 13873 **/
/** chunk id: 978986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NQ: () => p,
  U1: () => w,
  XW: () => a,
  _J: () => v,
  aP: () => g,
  e7: () => b,
  h6: () => y,
  oE: () => O,
  pB: () => f,
  y: () => h,
  yr: () => I
}), require("./781311.js");
var Chunk121168 = require("./121168.js"),
  Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js");

function u(e) {
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

function c(e, t) {
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
let s = {
  nickname: true,
  dmsAllowed: !Chunk695346.iG.getSetting()
};

function d(e) {
  let t = l.no.getSetting();
  return t !== i.GI.ACTIVITY_STATUS_ON && (t !== i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200))
}
let a = (0, Chunk121168.U)(e => ({
    nickname: s.nickname,
    dmsAllowed: s.dmsAllowed,
    showActivity: true,
    inviteCode: true,
    guildId: true,
    touched: false,
    setNickname: t => e(e => c(u({}, e), {
      nickname: t,
      touched: true
    })),
    setDmsAllowed: t => e(e => c(u({}, e), {
      dmsAllowed: t,
      touched: true
    })),
    setShowActivity: t => e(e => c(u({}, e), {
      showActivity: t,
      touched: true
    })),
    setInviteCode: t => e(e => c(u({}, e), {
      inviteCode: t,
      touched: true
    })),
    setGuildId: t => e(e => c(u({}, e), {
      guildId: t,
      touched: true
    })),
    initialize: (t, n, r) => e(e => c(u({}, e), {
      guildSize: t,
      inviteCode: n,
      guildId: r,
      showActivity: d(t),
      dmsAllowed: !l.iG.getSetting(),
      touched: false
    })),
    reset: () => e(e => ({
      nickname: s.nickname,
      dmsAllowed: s.dmsAllowed,
      showActivity: d(e.guildSize),
      inviteCode: true,
      guildId: true,
      guildSize: e.guildSize,
      touched: false
    }))
  })),
  f = (e, t, n) => {
    a.getState().initialize(e, t, n)
  },
  O = () => {
    a.getState().reset()
  },
  g = () => {
    let e = a.getState();
    return e.nickname !== s.nickname || e.dmsAllowed !== s.dmsAllowed || e.showActivity !== d(e.guildSize)
  },
  b = () => a.getState().inviteCode,
  v = () => a.getState().guildId,
  p = () => a.getState().touched,
  y = () => a.getState().dmsAllowed,
  h = () => a.getState().nickname,
  w = () => a.getState().showActivity,
  I = () => {
    var e, t;
    let {
      nickname: n
    } = a();
    if (null != n && "" !== n.trim()) return n;
    let r = o.default.getCurrentUser();
    return null != (t = null != (e = null == r ? true : r.globalName) ? e : null == r ? true : r.username) ? t : ""
  }