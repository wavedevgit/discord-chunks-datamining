/** Chunk was on 27978 **/
n.d(t, {
  NQ: () => f,
  U1: () => E,
  XW: () => u,
  _J: () => m,
  aP: () => g,
  e7: () => p,
  h6: () => _,
  oE: () => h,
  pB: () => d,
  y: () => x,
  yS: () => b
});
var r = n(381814),
  i = n(524437),
  l = n(695346);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
let s = {
  nickname: void 0,
  dmsAllowed: !l.iG.getSetting(),
  mutedServer: !1
};

function c(e) {
  let t = l.Wz.getSetting();
  return t !== i.E5.ON && (t !== i.E5.ON_FOR_LARGE_GUILDS || null == e || !(e > 200))
}
let u = (0, r.U)(e => ({
    nickname: s.nickname,
    dmsAllowed: s.dmsAllowed,
    showActivity: !0,
    mutedServer: s.mutedServer,
    inviteCode: void 0,
    guildId: void 0,
    touched: !1,
    setNickname: t => e(e => o(a({}, e), {
      nickname: t,
      touched: !0
    })),
    setDmsAllowed: t => e(e => o(a({}, e), {
      dmsAllowed: t,
      touched: !0
    })),
    setShowActivity: t => e(e => o(a({}, e), {
      showActivity: t,
      touched: !0
    })),
    setMutedServer: t => e(e => o(a({}, e), {
      mutedServer: t,
      touched: !0
    })),
    setInviteCode: t => e(e => o(a({}, e), {
      inviteCode: t,
      touched: !0
    })),
    setGuildId: t => e(e => o(a({}, e), {
      guildId: t,
      touched: !0
    })),
    initialize: (t, n, r) => e(e => o(a({}, e), {
      guildSize: t,
      inviteCode: n,
      guildId: r,
      showActivity: c(t),
      dmsAllowed: !l.iG.getSetting(),
      touched: !1
    })),
    reset: () => e(e => ({
      nickname: s.nickname,
      dmsAllowed: s.dmsAllowed,
      showActivity: c(e.guildSize),
      mutedServer: s.mutedServer,
      inviteCode: void 0,
      guildId: void 0,
      guildSize: e.guildSize,
      touched: !1
    }))
  })),
  d = (e, t, n) => {
    u.getState().initialize(e, t, n)
  },
  h = () => {
    u.getState().reset()
  },
  g = () => {
    let e = u.getState();
    return e.nickname !== s.nickname || e.dmsAllowed !== s.dmsAllowed || e.showActivity !== c(e.guildSize) || e.mutedServer !== s.mutedServer
  },
  p = () => u.getState().inviteCode,
  m = () => u.getState().guildId,
  f = () => u.getState().touched,
  _ = () => u.getState().dmsAllowed,
  x = () => u.getState().nickname,
  E = () => u.getState().showActivity,
  b = () => u.getState().mutedServer