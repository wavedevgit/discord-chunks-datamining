/** Chunk was on 79023 **/
/** chunk id: 960736, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N9: () => A,
  Z1: () => v,
  dR: () => f,
  jJ: () => y,
  lD: () => a,
  p9: () => g,
  qO: () => b,
  tJ: () => h,
  uE: () => w,
  xD: () => p,
  xP: () => O
}), require("./733351.js");
var Chunk353640 = require("./353640.js"),
  Chunk873298 = require("./873298.js"),
  Chunk253932 = require("./253932.js"),
  Chunk287809 = require("./287809.js");

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
let d = {
  nickname: true,
  dmsAllowed: !Chunk253932.Zt.getSetting()
};

function s(e) {
  let t = l._Z.getSetting();
  return t !== i.Qd.ACTIVITY_STATUS_ON && (t !== i.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200))
}
let a = (0, Chunk353640.v)(e => ({
    nickname: d.nickname,
    dmsAllowed: d.dmsAllowed,
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
      showActivity: s(t),
      dmsAllowed: !l.Zt.getSetting(),
      touched: false
    })),
    reset: () => e(e => ({
      nickname: d.nickname,
      dmsAllowed: d.dmsAllowed,
      showActivity: s(e.guildSize),
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
  b = () => {
    let e = a.getState();
    return e.nickname !== d.nickname || e.dmsAllowed !== d.dmsAllowed || e.showActivity !== s(e.guildSize)
  },
  g = () => a.getState().inviteCode,
  p = () => a.getState().guildId,
  y = () => a.getState().touched,
  v = () => a.getState().dmsAllowed,
  h = () => a.getState().nickname,
  A = () => a.getState().showActivity,
  w = () => {
    var e, t;
    let {
      nickname: n
    } = a();
    if (null != n && "" !== n.trim()) return n;
    let r = o.default.getCurrentUser();
    return null != (e = null != (t = null == r ? true : r.globalName) ? t : null == r ? true : r.username) ? e : ""
  }