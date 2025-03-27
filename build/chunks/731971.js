/** Chunk was on 39340 **/
n.d(t, {
  NQ: () => m,
  U1: () => E,
  XW: () => u,
  _J: () => _,
  aP: () => f,
  e7: () => h,
  h6: () => b,
  oE: () => p,
  pB: () => d,
  y: () => g,
  yS: () => v
});
var r = n(230383),
  i = n(524437),
  o = n(695346);

function l(e) {
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
let s = {
  nickname: void 0,
  dmsAllowed: !o.iG.getSetting(),
  mutedServer: !1
};

function c(e) {
  let t = o.Wz.getSetting();
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
    setNickname: t => e(e => a(l({}, e), {
      nickname: t,
      touched: !0
    })),
    setDmsAllowed: t => e(e => a(l({}, e), {
      dmsAllowed: t,
      touched: !0
    })),
    setShowActivity: t => e(e => a(l({}, e), {
      showActivity: t,
      touched: !0
    })),
    setMutedServer: t => e(e => a(l({}, e), {
      mutedServer: t,
      touched: !0
    })),
    setInviteCode: t => e(e => a(l({}, e), {
      inviteCode: t,
      touched: !0
    })),
    setGuildId: t => e(e => a(l({}, e), {
      guildId: t,
      touched: !0
    })),
    initialize: (t, n, r) => e(e => a(l({}, e), {
      guildSize: t,
      inviteCode: n,
      guildId: r,
      showActivity: c(t),
      dmsAllowed: !o.iG.getSetting(),
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
  p = () => {
    u.getState().reset()
  },
  f = () => {
    let e = u.getState();
    return e.nickname !== s.nickname || e.dmsAllowed !== s.dmsAllowed || e.showActivity !== c(e.guildSize) || e.mutedServer !== s.mutedServer
  },
  h = () => u.getState().inviteCode,
  _ = () => u.getState().guildId,
  m = () => u.getState().touched,
  b = () => u.getState().dmsAllowed,
  g = () => u.getState().nickname,
  E = () => u.getState().showActivity,
  v = () => u.getState().mutedServer