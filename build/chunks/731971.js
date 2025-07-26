/** Chunk was on 27978 **/
n.d(t, {
  NQ: () => _,
  U1: () => E,
  XW: () => d,
  _J: () => f,
  aP: () => g,
  e7: () => m,
  h6: () => x,
  oE: () => p,
  pB: () => h,
  y: () => b,
  yS: () => v,
  yr: () => I
}), n(781311);
var r = n(97519),
  i = n(524437),
  l = n(695346),
  s = n(594174);

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
let c = {
  nickname: void 0,
  dmsAllowed: !l.iG.getSetting(),
  mutedServer: !1
};

function u(e) {
  let t = l.Wz.getSetting();
  return t !== i.E5.ON && (t !== i.E5.ON_FOR_LARGE_GUILDS || null == e || !(e > 200))
}
let d = (0, r.U)(e => ({
    nickname: c.nickname,
    dmsAllowed: c.dmsAllowed,
    showActivity: !0,
    mutedServer: c.mutedServer,
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
      showActivity: u(t),
      dmsAllowed: !l.iG.getSetting(),
      touched: !1
    })),
    reset: () => e(e => ({
      nickname: c.nickname,
      dmsAllowed: c.dmsAllowed,
      showActivity: u(e.guildSize),
      mutedServer: c.mutedServer,
      inviteCode: void 0,
      guildId: void 0,
      guildSize: e.guildSize,
      touched: !1
    }))
  })),
  h = (e, t, n) => {
    d.getState().initialize(e, t, n)
  },
  p = () => {
    d.getState().reset()
  },
  g = () => {
    let e = d.getState();
    return e.nickname !== c.nickname || e.dmsAllowed !== c.dmsAllowed || e.showActivity !== u(e.guildSize) || e.mutedServer !== c.mutedServer
  },
  m = () => d.getState().inviteCode,
  f = () => d.getState().guildId,
  _ = () => d.getState().touched,
  x = () => d.getState().dmsAllowed,
  b = () => d.getState().nickname,
  E = () => d.getState().showActivity,
  v = () => d.getState().mutedServer,
  I = () => {
    var e, t;
    let {
      nickname: n
    } = d();
    if (null != n && "" !== n.trim()) return n;
    let r = s.default.getCurrentUser();
    return null != (t = null != (e = null == r ? void 0 : r.globalName) ? e : null == r ? void 0 : r.username) ? t : ""
  }