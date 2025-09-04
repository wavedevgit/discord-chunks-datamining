/** Chunk was on 27978 **/
/** chunk id: 731971, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NQ: () => _,
  U1: () => v,
  XW: () => d,
  _J: () => m,
  aP: () => p,
  e7: () => g,
  h6: () => x,
  oE: () => f,
  pB: () => h,
  y: () => E,
  yS: () => j,
  yr: () => b
}), require("./781311.js");
var Chunk879690 = require("./879690.js"),
  Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js");

function o(e) {
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

function a(e, t) {
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
  dmsAllowed: !Chunk695346.iG.getSetting(),
  mutedServer: false
};

function u(e) {
  let t = l.no.getSetting();
  return t !== i.GI.ACTIVITY_STATUS_ON && (t !== i.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200))
}
let d = (0, Chunk879690.U)(e => ({
    nickname: c.nickname,
    dmsAllowed: c.dmsAllowed,
    showActivity: true,
    mutedServer: c.mutedServer,
    inviteCode: true,
    guildId: true,
    touched: false,
    setNickname: t => e(e => a(o({}, e), {
      nickname: t,
      touched: true
    })),
    setDmsAllowed: t => e(e => a(o({}, e), {
      dmsAllowed: t,
      touched: true
    })),
    setShowActivity: t => e(e => a(o({}, e), {
      showActivity: t,
      touched: true
    })),
    setMutedServer: t => e(e => a(o({}, e), {
      mutedServer: t,
      touched: true
    })),
    setInviteCode: t => e(e => a(o({}, e), {
      inviteCode: t,
      touched: true
    })),
    setGuildId: t => e(e => a(o({}, e), {
      guildId: t,
      touched: true
    })),
    initialize: (t, n, r) => e(e => a(o({}, e), {
      guildSize: t,
      inviteCode: n,
      guildId: r,
      showActivity: u(t),
      dmsAllowed: !l.iG.getSetting(),
      touched: false
    })),
    reset: () => e(e => ({
      nickname: c.nickname,
      dmsAllowed: c.dmsAllowed,
      showActivity: u(e.guildSize),
      mutedServer: c.mutedServer,
      inviteCode: true,
      guildId: true,
      guildSize: e.guildSize,
      touched: false
    }))
  })),
  h = (e, t, n) => {
    d.getState().initialize(e, t, n)
  },
  f = () => {
    d.getState().reset()
  },
  p = () => {
    let e = d.getState();
    return module.nickname !== c.nickname || module.dmsAllowed !== c.dmsAllowed || module.showActivity !== u(module.guildSize) || module.mutedServer !== c.mutedServer
  },
  g = () => d.getState().inviteCode,
  m = () => d.getState().guildId,
  _ = () => d.getState().touched,
  x = () => d.getState().dmsAllowed,
  E = () => d.getState().nickname,
  v = () => d.getState().showActivity,
  j = () => d.getState().mutedServer,
  b = () => {
    var e, t;
    let {
      nickname: n
    } = d();
    if (null != require && "" !== require.trim()) return require;
    let r = Chunk594174.default.getCurrentUser();
    return null != (t = null != (e = null == Chunk879690 ? true : Chunk879690.globalName) ? module : null == Chunk879690 ? true : Chunk879690.username) ? exports : ""
  }