/** Chunk was on 17573 **/
r.d(t, {
  Bq: () => J,
  C0: () => ei,
  C2: () => $,
  EN: () => z,
  F1: () => eo,
  HE: () => B,
  HN: () => Y,
  Iv: () => ec,
  J5: () => ep,
  JA: () => ea,
  K: () => Q,
  ML: () => W,
  N$: () => X,
  N5: () => eM,
  QM: () => ef,
  V$: () => ev,
  _$: () => eb,
  cT: () => eO,
  em: () => e_,
  hQ: () => eg,
  hx: () => K,
  lR: () => q,
  lU: () => F,
  nm: () => ed,
  oD: () => k,
  pA: () => er,
  pY: () => G,
  pi: () => et,
  rK: () => el,
  uB: () => ee,
  vc: () => eh,
  vm: () => en,
  zT: () => es
}), r(411104), r(653041), r(26686);
var n = r(654861),
  l = r.n(n),
  i = r(913527),
  a = r.n(i),
  o = r(536402),
  s = r(533800),
  h = r(149765),
  c = r(866442),
  v = r(379649),
  u = r(911969),
  d = r(933557),
  E = r(710845),
  f = r(339085),
  p = r(236413),
  M = r(45966),
  _ = r(563534),
  O = r(427679),
  g = r(926491),
  b = r(387667),
  A = r(592125),
  T = r(430824),
  Z = r(699516),
  N = r(594174),
  H = r(55935),
  y = r(630388),
  j = r(971130),
  I = r(709054),
  m = r(987707),
  V = r(981631),
  S = r(176505),
  R = r(273504),
  D = r(765305),
  C = r(388032);

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let P = new E.Z("AuditLogUtils"),
  U = [v.J6.DAYS, v.J6.HOURS, v.J6.MINUTES, v.J6.SECONDS],
  w = () => ({
    [V.zUn.REASON]: () => C.t["2IW3Cw"]
  }),
  G = () => x({
    [V.zUn.NAME]: () => C.t.CkDiND,
    [V.zUn.DESCRIPTION]: ej(C.t.RP3Ey8, C.t.QAVj1d),
    [V.zUn.ICON_HASH]: () => C.t.iLZ8Q0,
    [V.zUn.SPLASH_HASH]: () => C.t["4VV6dn"],
    [V.zUn.DISCOVERY_SPLASH_HASH]: () => C.t["2pds6u"],
    [V.zUn.BANNER_HASH]: ej(C.t.Cxq4zM, C.t["H7eE//"]),
    [V.zUn.OWNER_ID]: () => C.t["8ltsLS"],
    [V.zUn.REGION]: () => C.t.X9r5KS,
    [V.zUn.PREFERRED_LOCALE]: () => C.t.UnXuDQ,
    [V.zUn.AFK_CHANNEL_ID]: ej(C.t.ClBuAw, C.t["ms+xtL"]),
    [V.zUn.AFK_TIMEOUT]: () => C.t.q21fHR,
    [V.zUn.SYSTEM_CHANNEL_ID]: ej(C.t.H1VXaW, C.t.XhtmxM),
    [V.zUn.RULES_CHANNEL_ID]: ej(C.t.OI6MGx, C.t.lik3tL),
    [V.zUn.PUBLIC_UPDATES_CHANNEL_ID]: ej(C.t.YxBKra, C.t.Ehsnio),
    [V.zUn.MFA_LEVEL]: eV({
      [V.BpS.NONE]: C.t.voaCCQ,
      [V.BpS.ELEVATED]: C.t.pRNVw8
    }),
    [V.zUn.WIDGET_ENABLED]: em(C.t.ADIty8, C.t.nf58VV),
    [V.zUn.WIDGET_CHANNEL_ID]: ej(C.t["6SBsDQ"], C.t.deQ5wM),
    [V.zUn.VERIFICATION_LEVEL]: eV({
      [V.sFg.NONE]: C.t.W27rsb,
      [V.sFg.LOW]: C.t["V8P+Pz"],
      [V.sFg.MEDIUM]: C.t.ERQFam,
      [V.sFg.HIGH]: C.t["83fN0t"],
      [V.sFg.VERY_HIGH]: C.t.PnkQJC
    }),
    [V.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eV({
      [V.bL.ALL_MESSAGES]: C.t.LDi76O,
      [V.bL.ONLY_MENTIONS]: C.t["6K83bW"]
    }),
    [V.zUn.VANITY_URL_CODE]: ej(C.t.Zplsoq, C.t.u6cArq),
    [V.zUn.EXPLICIT_CONTENT_FILTER]: eV({
      [V.lxg.DISABLED]: C.t.fmOeLy,
      [V.lxg.MEMBERS_WITHOUT_ROLES]: C.t["4FghY2"],
      [V.lxg.ALL_MEMBERS]: C.t.olyrSk
    }),
    [V.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: em(C.t.rBT0sr, C.t["gc+te3"]),
    [V.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => C.t.YbouFB,
    [V.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => C.t.g3DMjI,
    [V.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => C.t["+fQAen"],
    [V.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => C.t.E1fc4u,
    [V.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => C.t.XbwtSE
  }, w()),
  W = () => ({
    [V.zUn.NAME]: ey(C.t.f8Rh0d, C.t.ebD4Qk),
    [V.zUn.POSITION]: ey(C.t.isS8tb, C.t.t5uBio),
    [V.zUn.TOPIC]: eI(C.t.esQcxs, C.t["m+veAg"], C.t["ws/1FB"]),
    [V.zUn.BITRATE]: ey(C.t.fw81am, C.t.MFNlgY),
    [V.zUn.RTC_REGION_OVERRIDE]: eI(C.t["6kajx8"], C.t.eGOlmZ, C.t["0JMZd3"]),
    [V.zUn.USER_LIMIT]: ey(C.t.wk5t7u, C.t.XgjCEh),
    [V.zUn.RATE_LIMIT_PER_USER]: ey(C.t["7lirhI"], C.t.j4CCJS),
    [V.zUn.PERMISSIONS_RESET]: () => C.t["+vSBFR"],
    [V.zUn.PERMISSIONS_GRANTED]: () => C.t.EKLJv7,
    [V.zUn.PERMISSIONS_DENIED]: () => C.t.U3rO5e,
    [V.zUn.REASON]: () => C.t["2IW3Cw"],
    [V.zUn.NSFW]: em(C.t.H8Ri2d, C.t.WW6cJy),
    [V.zUn.TYPE]: ey(C.t.Vn5zn5, C.t.aq4uWF),
    [V.zUn.VIDEO_QUALITY_MODE]: ey(C.t.e68fAQ, C.t.djbES0),
    [V.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: ey(C.t.nYz2mp, C.t.oczvRE),
    [V.zUn.FLAGS]: () => C.t.ImCQkp,
    [V.zUn.AVAILABLE_TAG_ADD]: () => C.t.H86QQU,
    [V.zUn.AVAILABLE_TAG_EDIT]: () => C.t.YtUzlp,
    [V.zUn.AVAILABLE_TAG_DELETE]: () => C.t["8QOsen"],
    [V.zUn.LINKED_LOBBY]: ej(C.t["+/3TkJ"], C.t["5kDYS0"])
  }),
  F = () => x({
    [V.zUn.NICK]: eI(C.t.qXDsHh, C.t["m+qur6"], C.t.DvLvjI),
    [V.zUn.DEAF]: em(C.t.mArLlZ, C.t.ddvVYG),
    [V.zUn.MUTE]: em(C.t["bxs/lZ"], C.t.FjecQE),
    [V.zUn.ROLES_REMOVE]: () => C.t["+2SDWV"],
    [V.zUn.ROLES_ADD]: () => C.t["B3/3IC"],
    [V.zUn.PRUNE_DELETE_DAYS]: () => C.t["+Cvc+P"],
    [V.zUn.COMMUNICATION_DISABLED_UNTIL]: eI(C.t.LXTQr6, C.t.LXTQr6, C.t.ULSdnJ),
    [V.zUn.BYPASSES_VERIFICATION]: em(C.t.NBPBur, C.t.zATosr),
    [V.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => C.t.YbouFB
  }, w()),
  B = () => x({
    [V.zUn.NAME]: ey(C.t.QBmlaG, C.t.Lfs4r6),
    [V.zUn.DESCRIPTION]: ey(C.t.XeYKWF, C.t.PSfeIi),
    [V.zUn.PERMISSIONS_GRANTED]: () => C.t["9i/DvL"],
    [V.zUn.PERMISSIONS_DENIED]: () => C.t.pa1ZVl,
    [V.zUn.COLOR]: eS({
      "#000000": C.t.TK6E1N
    }, C.t["2FQFi4"]),
    [V.zUn.HOIST]: em(C.t.gWfe29, C.t["+tb8kJ"]),
    [V.zUn.MENTIONABLE]: em(C.t.LL8VFB, C.t.Z7xzmJ),
    [V.zUn.ICON_HASH]: () => C.t["iEE79/"],
    [V.zUn.UNICODE_EMOJI]: () => C.t.KiLMMz
  }, w()),
  k = () => L(x({}, w()), {
    [V.zUn.TITLE]: ey(C.t.sNpuy8, C.t["3Ukc/v"]),
    [V.zUn.DESCRIPTION]: ey(C.t.PP1q09, C.t.z7pYLi),
    [V.zUn.OPTIONS]: () => C.t["3G5C9/"],
    [V.zUn.SINGLE_SELECT]: em(C.t.v4WnR0, C.t["6Qg3uL"]),
    [V.zUn.REQUIRED]: em(C.t["0MPAMz"], C.t.pwsXio)
  }),
  z = () => L(x({}, w()), {
    [V.zUn.DEFAULT_CHANNEL_IDS]: () => C.t["8M+D2t"],
    [V.zUn.ENABLE_DEFAULT_CHANNELS]: em(C.t["EYd/lp"], C.t["36OZeX"]),
    [V.zUn.ENABLE_ONBOARDING_PROMPTS]: em(C.t.V3u8PT, C.t.r66lc3),
    [V.zUn.ENABLED]: em(C.t.SODVIi, C.t.u8HY5e)
  }),
  K = () => L(x({}, w()), {
    [V.zUn.WELCOME_MESSAGE]: () => C.t.dKQ1xc,
    [V.zUn.NEW_MEMBER_ACTIONS]: () => C.t.jDUInp,
    [V.zUn.RESOURCE_CHANNELS]: () => C.t.SIX0mp
  }),
  Y = () => x({
    [V.zUn.CODE]: () => C.t.rrRHgY,
    [V.zUn.CHANNEL_ID]: () => C.t.Q1vd5u,
    [V.zUn.MAX_USES]: eS({
      0: C.t.Yx8LNj
    }, C.t["3ygnwc"]),
    [V.zUn.MAX_AGE]: eS({
      [C.NW.string(C.t.PqEzn5)]: C.t.uWrLv7
    }, C.t["Q+5kcH"]),
    [V.zUn.TEMPORARY]: em(C.t.MWp6Hx, C.t.omiqTE),
    [V.zUn.FLAGS]: eV({
      [s.$.IS_GUEST_INVITE]: C.t.XYZMbG
    })
  }, w()),
  q = () => ({
    [V.zUn.CHANNEL_ID]: ey(C.t.jhPpra, C.t.ar4qYG),
    [V.zUn.NAME]: ey(C.t.ZVGrzc, C.t.tywdZW),
    [V.zUn.AVATAR_HASH]: () => C.t.KB52Ul,
    [V.zUn.REASON]: () => C.t["2IW3Cw"]
  }),
  X = () => x({
    [V.zUn.NAME]: ey(C.t.ahU1o6, C.t["wxs+vb"])
  }, w()),
  J = () => x({
    [V.zUn.NAME]: ey(C.t.cdl0Ym, C.t.o3W2l5),
    [V.zUn.TAGS]: ey(C.t["zwL+S0"], C.t.VYfKAw),
    [V.zUn.DESCRIPTION]: ey(C.t.XeYKWF, C.t.PSfeIi)
  }, w()),
  Q = () => x({
    [V.zUn.ENABLE_EMOTICONS]: em(C.t["FI0m5+"], C.t.olpKCw),
    [V.zUn.EXPIRE_BEHAVIOR]: eV({
      0: C.t["1Bb1+v"],
      1: C.t.vjlW6u
    }),
    [V.zUn.EXPIRE_GRACE_PERIOD]: () => C.t.iovXMT
  }, w()),
  $ = () => x({
    [V.zUn.TOPIC]: ey(C.t["m+veAg"], C.t.esQcxs),
    [V.zUn.PRIVACY_LEVEL]: eV({
      [D.j8.GUILD_ONLY]: C.t["EC+CDg"],
      [D.j8.PUBLIC]: C.t["pK/WGx"]
    })
  }, w()),
  ee = () => x({
    [V.zUn.NAME]: () => C.t["21EXHR"],
    [V.zUn.DESCRIPTION]: () => C.t.Vm1of3,
    [V.zUn.PRIVACY_LEVEL]: eV({
      [D.j8.GUILD_ONLY]: C.t["EC+CDg"],
      [D.j8.PUBLIC]: C.t["pK/WGx"]
    }),
    [V.zUn.STATUS]: eV({
      [D.p1.SCHEDULED]: C.t.hXKDgo,
      [D.p1.ACTIVE]: C.t.lRX1n5,
      [D.p1.COMPLETED]: C.t["/eFIho"],
      [D.p1.CANCELED]: C.t.NWIYho
    }),
    [V.zUn.ENTITY_TYPE]: eV({
      [D.WX.NONE]: C.t["6sO3Sk"],
      [D.WX.STAGE_INSTANCE]: C.t["Wo+s19"],
      [D.WX.VOICE]: C.t.XCVaIC,
      [D.WX.EXTERNAL]: C.t.IvhAj4
    }),
    [V.zUn.CHANNEL_ID]: ej(C.t.yJBIcX, C.t["+PqSsr"]),
    [V.zUn.LOCATION]: ej(C.t.GaMBHx, C.t.PsICk5),
    [V.zUn.IMAGE_HASH]: ej(C.t.S3vcRE, C.t.KQu47O)
  }, w()),
  et = () => x({
    [V.zUn.SCHEDULED_START_TIME]: ej(C.t.zMIYVl, C.t.fzF8GR),
    [V.zUn.SCHEDULED_END_TIME]: ej(C.t.vONSQE, C.t.IlIti4),
    [V.zUn.IS_CANCELED]: e => {
      if (null != e.oldValue || !0 === e.newValue) {
        if (!e.oldValue && e.newValue) return C.t["7RkicX"];
        if (e.oldValue && !e.newValue) return C.t.dRNTWV
      }
    }
  }, w()),
  er = () => x({
    [V.zUn.NAME]: ey(C.t.tUKRzc, C.t.kPCHOD),
    [V.zUn.ARCHIVED]: em(C.t.jDi9FB, C.t.F6dvbW),
    [V.zUn.LOCKED]: em(C.t.JSy1QU, C.t.C7Jgo6),
    [V.zUn.INVITABLE]: em(C.t.dxNUs7, C.t.biJvYG),
    [V.zUn.AUTO_ARCHIVE_DURATION]: ey(C.t.LuaG39, C.t["18d9qq"]),
    [V.zUn.RATE_LIMIT_PER_USER]: ey(C.t["7lirhI"], C.t.j4CCJS),
    [V.zUn.FLAGS]: () => C.t.sSAQtr
  }, w()),
  en = e => {
    let t = x({}, w());
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = () => C.t["JH+89P"] : t[e.key] = () => C.t.HUrFDg : t[e.key] = () => C.t.vynxnZ
    }), t
  },
  el = () => x({
    [V.zUn.NAME]: () => C.t.XwxAJS,
    [V.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => C.t.fx0pys,
    [V.zUn.AUTO_MODERATION_EVENT_TYPE]: () => C.t["46Y+Ly"],
    [V.zUn.AUTO_MODERATION_ACTIONS]: () => C.t["8efxfn"],
    [V.zUn.AUTO_MODERATION_ENABLED]: e => {
      var t;
      return !0 === (null !== (t = e.newValue) && void 0 !== t ? t : e.oldValue) ? C.t.fCmxCw : C.t.Wrg9Ji
    },
    [V.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => C.t.TRb7Nz,
    [V.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => C.t.mzitLC,
    [V.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => C.t["h/lM6+"],
    [V.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => C.t["9V2yaG"],
    [V.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => C.t["4Qe9n5"],
    [V.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => C.t.GyZtxs,
    [V.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => C.t.OQDadX,
    [V.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => C.t["FvvR+P"],
    [V.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => C.t.p5nSv7
  }, w()),
  ei = () => x({
    [V.zUn.NAME]: ey(C.t.VOtRSE, C.t.OK7B8P),
    [V.zUn.VOLUME]: ey(C.t.igrDBw, C.t.L5lDFB),
    [V.zUn.EMOJI_NAME]: eI(C.t.IIanaW, C.t.z4w4U1, C.t.V8Tfyc),
    [V.zUn.EMOJI_ID]: eI(C.t.ainxMD, C.t["2NPsYm"], C.t["8crtnp"])
  }, w()),
  ea = () => x({
    [V.zUn.VERIFICATION_ENABLED]: e => !0 === e.newValue ? C.t.fnkzDQ : C.t.WYT6kZ,
    [V.zUn.MANUAL_APPROVAL_ENABLED]: e => !0 === e.newValue ? C.t.jzSvVV : C.t.WxyOtr
  }, w()),
  eo = () => x({
    [V.zUn.STATUS]: () => C.t.HyCSnJ
  }, w()),
  es = () => ({
    [V.zUn.DESCRIPTION]: () => C.t.nsUZKS,
    [V.zUn.BRAND_COLOR_PRIMARY]: () => C.t.qe9mgI,
    [V.zUn.CUSTOM_BANNER_HASH]: () => C.t["04b5KC"],
    [V.zUn.TRAITS]: () => C.t.dEy9WF,
    [V.zUn.GAME_APPLICATION_IDS]: () => C.t["8BOT39"],
    [V.zUn.VISIBILITY]: () => C.t.bCl1Eh
  }),
  eh = {
    [V.KFR.CHANNEL]: {
      [V.zUn.ID]: !0,
      [V.zUn.PERMISSION_OVERWRITES]: !0
    },
    [V.KFR.CHANNEL_OVERWRITE]: {
      [V.zUn.TYPE]: !0,
      [V.zUn.ID]: !0,
      [V.zUn.PERMISSION_OVERWRITES]: !0
    },
    [V.KFR.INVITE]: {
      [V.zUn.INVITER_ID]: !0,
      [V.zUn.USES]: !0
    },
    [V.KFR.WEBHOOK]: {
      [V.zUn.TYPE]: !0,
      [V.zUn.APPLICATION_ID]: !0
    },
    [V.KFR.INTEGRATION]: {
      [V.zUn.TYPE]: !0
    },
    [V.KFR.THREAD]: {
      [V.zUn.ID]: !0,
      [V.zUn.TYPE]: !0
    },
    [V.KFR.STICKER]: {
      [V.zUn.ID]: !0,
      [V.zUn.TYPE]: !0,
      [V.zUn.ASSET]: !0,
      [V.zUn.FORMAT_TYPE]: !0,
      [V.zUn.AVAILABLE]: !0,
      [V.zUn.GUILD_ID]: !0
    },
    [V.KFR.GUILD_HOME]: {
      [V.zUn.ENTITY_TYPE]: !0
    },
    [V.KFR.GUILD_ONBOARDING]: {
      [V.zUn.PROMPTS]: !0
    },
    [V.KFR.GUILD_SOUNDBOARD]: {
      [V.zUn.ID]: !0,
      [V.zUn.SOUND_ID]: !0
    }
  },
  ec = () => [{
    value: V.rsA.ALL,
    label: C.NW.string(C.t.QxEVcn),
    valueLabel: C.NW.string(C.t.an9Ry8)
  }, {
    value: V.rsA.GUILD_UPDATE,
    label: C.NW.string(C.t["5INZa2"])
  }, {
    value: V.rsA.CHANNEL_CREATE,
    label: C.NW.string(C.t["2uh4vL"])
  }, {
    value: V.rsA.CHANNEL_UPDATE,
    label: C.NW.string(C.t.mGsBLS)
  }, {
    value: V.rsA.CHANNEL_DELETE,
    label: C.NW.string(C.t.hCHzAg)
  }, {
    value: V.rsA.CHANNEL_OVERWRITE_CREATE,
    label: C.NW.string(C.t["8TnAMD"])
  }, {
    value: V.rsA.CHANNEL_OVERWRITE_UPDATE,
    label: C.NW.string(C.t.Jqx0Bg)
  }, {
    value: V.rsA.CHANNEL_OVERWRITE_DELETE,
    label: C.NW.string(C.t.gBXOr6)
  }, {
    value: V.rsA.MEMBER_KICK,
    label: C.NW.string(C.t["Q1/hNz"])
  }, {
    value: V.rsA.MEMBER_PRUNE,
    label: C.NW.string(C.t.tOTTjY)
  }, {
    value: V.rsA.MEMBER_BAN_ADD,
    label: C.NW.string(C.t["NfPn+f"])
  }, {
    value: V.rsA.MEMBER_BAN_REMOVE,
    label: C.NW.string(C.t.XCsGfH)
  }, {
    value: V.rsA.MEMBER_UPDATE,
    label: C.NW.string(C.t["F/jmND"])
  }, {
    value: V.rsA.MEMBER_ROLE_UPDATE,
    label: C.NW.string(C.t.zAveSE)
  }, {
    value: V.rsA.MEMBER_MOVE,
    label: C.NW.string(C.t.QshteX)
  }, {
    value: V.rsA.MEMBER_DISCONNECT,
    label: C.NW.string(C.t.Z45os7)
  }, {
    value: V.rsA.BOT_ADD,
    label: C.NW.string(C.t.vuH24e)
  }, {
    value: V.rsA.THREAD_CREATE,
    label: C.NW.string(C.t["+zl0DA"])
  }, {
    value: V.rsA.THREAD_UPDATE,
    label: C.NW.string(C.t.rbIry8)
  }, {
    value: V.rsA.THREAD_DELETE,
    label: C.NW.string(C.t.hFjNEB)
  }, {
    value: V.rsA.ROLE_CREATE,
    label: C.NW.string(C.t.AbxKtr)
  }, {
    value: V.rsA.ROLE_UPDATE,
    label: C.NW.string(C.t.t3Z6sb)
  }, {
    value: V.rsA.ROLE_DELETE,
    label: C.NW.string(C.t.YsFpa2)
  }, {
    value: V.rsA.ONBOARDING_PROMPT_CREATE,
    label: C.NW.string(C.t.ZV9tqa)
  }, {
    value: V.rsA.ONBOARDING_PROMPT_UPDATE,
    label: C.NW.string(C.t.PcOdvb)
  }, {
    value: V.rsA.ONBOARDING_PROMPT_DELETE,
    label: C.NW.string(C.t["+r33NT"])
  }, {
    value: V.rsA.ONBOARDING_CREATE,
    label: C.NW.string(C.t.uDADdX)
  }, {
    value: V.rsA.ONBOARDING_UPDATE,
    label: C.NW.string(C.t.J1H1ws)
  }, {
    value: V.rsA.HOME_SETTINGS_CREATE,
    label: C.NW.string(C.t.Di4cvL)
  }, {
    value: V.rsA.HOME_SETTINGS_UPDATE,
    label: C.NW.string(C.t.tzyrJC)
  }, {
    value: V.rsA.INVITE_CREATE,
    label: C.NW.string(C.t["0BNJdX"])
  }, {
    value: V.rsA.INVITE_UPDATE,
    label: C.NW.string(C.t["o++obW"])
  }, {
    value: V.rsA.INVITE_DELETE,
    label: C.NW.string(C.t.iP40Aw)
  }, {
    value: V.rsA.WEBHOOK_CREATE,
    label: C.NW.string(C.t["tBF4+f"])
  }, {
    value: V.rsA.WEBHOOK_UPDATE,
    label: C.NW.string(C.t.eV3McH)
  }, {
    value: V.rsA.WEBHOOK_DELETE,
    label: C.NW.string(C.t.AAL3Ky)
  }, {
    value: V.rsA.EMOJI_CREATE,
    label: C.NW.string(C.t.RuWm0d)
  }, {
    value: V.rsA.EMOJI_UPDATE,
    label: C.NW.string(C.t.WzdUY2)
  }, {
    value: V.rsA.EMOJI_DELETE,
    label: C.NW.string(C.t.c3dK2N)
  }, {
    value: V.rsA.MESSAGE_DELETE,
    label: C.NW.string(C.t.daTfXl)
  }, {
    value: V.rsA.MESSAGE_BULK_DELETE,
    label: C.NW.string(C.t.nrBxen)
  }, {
    value: V.rsA.MESSAGE_PIN,
    label: C.NW.string(C.t.MUldyM)
  }, {
    value: V.rsA.MESSAGE_UNPIN,
    label: C.NW.string(C.t.n4zKhI)
  }, {
    value: V.rsA.INTEGRATION_CREATE,
    label: C.NW.string(C.t["deNm8/"])
  }, {
    value: V.rsA.INTEGRATION_UPDATE,
    label: C.NW.string(C.t.HT7Sfn)
  }, {
    value: V.rsA.INTEGRATION_DELETE,
    label: C.NW.string(C.t["+kJ09v"])
  }, {
    value: V.rsA.STICKER_CREATE,
    label: C.NW.string(C.t["3DzNjY"])
  }, {
    value: V.rsA.STICKER_UPDATE,
    label: C.NW.string(C.t.tdhW5e)
  }, {
    value: V.rsA.STICKER_DELETE,
    label: C.NW.string(C.t["+ZhGOj"])
  }, {
    value: V.rsA.STAGE_INSTANCE_CREATE,
    label: C.NW.string(C.t.sPbjAw)
  }, {
    value: V.rsA.STAGE_INSTANCE_UPDATE,
    label: C.NW.string(C.t.cW9LfH)
  }, {
    value: V.rsA.STAGE_INSTANCE_DELETE,
    label: C.NW.string(C.t["U1r+yM"])
  }, {
    value: V.rsA.GUILD_SCHEDULED_EVENT_CREATE,
    label: C.NW.string(C.t.H81Zy8)
  }, {
    value: V.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
    label: C.NW.string(C.t.FM69l5)
  }, {
    value: V.rsA.GUILD_SCHEDULED_EVENT_DELETE,
    label: C.NW.string(C.t.Rq28Bg)
  }, {
    value: V.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: C.NW.string(C.t.iPdFOj)
  }, {
    value: V.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
    label: C.NW.string(C.t.gNq5z8)
  }, {
    value: V.rsA.AUTO_MODERATION_RULE_CREATE,
    label: C.NW.string(C.t.f72Zqa)
  }, {
    value: V.rsA.AUTO_MODERATION_RULE_UPDATE,
    label: C.NW.string(C.t.XeqIio)
  }, {
    value: V.rsA.AUTO_MODERATION_RULE_DELETE,
    label: C.NW.string(C.t.syAApa)
  }, {
    value: V.rsA.GUILD_HOME_FEATURE_ITEM,
    label: C.NW.string(C.t.lhG5KC)
  }, {
    value: V.rsA.GUILD_HOME_REMOVE_ITEM,
    label: C.NW.string(C.t.lRPRwc)
  }, {
    value: V.rsA.SOUNDBOARD_SOUND_CREATE,
    label: C.NW.string(C.t.yoRi5u)
  }, {
    value: V.rsA.SOUNDBOARD_SOUND_UPDATE,
    label: C.NW.string(C.t.uKlG0d)
  }, {
    value: V.rsA.SOUNDBOARD_SOUND_DELETE,
    label: C.NW.string(C.t.gq0iCQ)
  }, {
    value: V.rsA.VOICE_CHANNEL_STATUS_CREATE,
    label: C.NW.string(C.t.rGr0YG)
  }, {
    value: V.rsA.VOICE_CHANNEL_STATUS_DELETE,
    label: C.NW.string(C.t.V9PEQ0)
  }];

function ev(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function eu(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function ed(e) {
  var t;
  let r = ec().find(t => t.value === e.action);
  return null != ev(V.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? C.NW.string(C.t.z3wbj4) : null !== (t = null == r ? void 0 : r.label) && void 0 !== t ? t : null
}
let eE = {
  [v.J6.SECONDS]: e => C.NW.formatToPlainString(C.t.geSp4O, {
    seconds: e
  }),
  [v.J6.MINUTES]: e => C.NW.formatToPlainString(C.t.iXLF9f, {
    minutes: e
  }),
  [v.J6.HOURS]: e => C.NW.formatToPlainString(C.t.xCjYxM, {
    hours: e
  }),
  [v.J6.DAYS]: e => C.NW.formatToPlainString(C.t.k2UNz8, {
    days: e
  })
};

function ef(e) {
  let t = ev(V.zUn.COMMUNICATION_DISABLED_UNTIL, e),
    r = eu(V.zUn.ROLES_ADD, e).length > 0,
    n = eu(V.zUn.ROLES_REMOVE, e).length > 0;
  if (null != t) {
    if ((null == t ? void 0 : t.newValue) != null) {
      let r = new Date(null == t ? void 0 : t.newValue).getTime() - I.default.extractTimestamp(e.id),
        n = Math.round(r / 1e3 / 60),
        l = (0, v.CI)(n, U);
      if (null == l.unit || null == l.time) return null;
      if (l.unit in eE) {
        let e = l.unit,
          t = l.unit === v.J6.SECONDS ? Math.round(r / 1e3) : l.time;
        return eE[e](t)
      }
    } else if ((null == t ? void 0 : t.oldValue) != null) return C.NW.string(C.t.MA1ltr)
  } else if (r && n) return C.NW.string(C.t.RdMMe3);
  else if (r) return C.NW.string(C.t["4GQqs7"]);
  else if (n) return C.NW.string(C.t["8mQ6x8"]);
  return null
}

function ep(e) {
  let t = eu(V.zUn.ROLES_ADD, e),
    r = eu(V.zUn.ROLES_REMOVE, e),
    n = null == t ? void 0 : t.map(e => {
      let {
        newValue: t
      } = e;
      return null == t ? void 0 : t.map(e => {
        let {
          name: t
        } = e;
        return t
      }).join(", ")
    }).join(", "),
    l = null == r ? void 0 : r.map(e => {
      let {
        newValue: t
      } = e;
      return null == t ? void 0 : t.map(e => {
        let {
          name: t
        } = e;
        return t
      }).join(", ")
    }).join(", ");
  return t.length > 0 && r.length > 0 ? C.NW.formatToPlainString(C.t.tZw1ER, {
    roleNamesAdded: n,
    roleNamesRemoved: l
  }) : t.length > 0 ? C.NW.formatToPlainString(C.t["/mTqt7"], {
    roleNames: n
  }) : r.length > 0 ? C.NW.formatToPlainString(C.t.Wk4pAA, {
    roleNames: l
  }) : null
}

function eM(e) {
  switch (e.action) {
    case V.rsA.GUILD_UPDATE:
      return C.t.LjZO39;
    case V.rsA.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === V.zUn.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case V.d4z.GUILD_STAGE_VOICE:
          return C.t["OKp4+v"];
        case V.d4z.GUILD_VOICE:
          return C.t.NPOy4O;
        case V.d4z.GUILD_CATEGORY:
          return C.t.T3KIj4;
        default:
          return C.t.wrYNGx
      }
    case V.rsA.CHANNEL_UPDATE:
      return C.t.nTYk6O;
    case V.rsA.CHANNEL_DELETE:
      return C.t.ynfvkp;
    case V.rsA.CHANNEL_OVERWRITE_CREATE:
      return C.t.l5Cu1d;
    case V.rsA.CHANNEL_OVERWRITE_UPDATE:
      return C.t.uhtbNT;
    case V.rsA.CHANNEL_OVERWRITE_DELETE:
      return C.t["HASt//"];
    case V.rsA.MEMBER_KICK:
      return C.t.B5hDZW;
    case V.rsA.MEMBER_PRUNE:
      return C.t.qKOZTE;
    case V.rsA.MEMBER_BAN_ADD:
      return C.t.XklUm5;
    case V.rsA.MEMBER_BAN_REMOVE:
      return C.t.o3Y6HB;
    case V.rsA.MEMBER_UPDATE:
      return C.t.pznhLC;
    case V.rsA.MEMBER_ROLE_UPDATE:
      return C.t.VngfiY;
    case V.rsA.MEMBER_MOVE:
      return C.t.Yt6NkZ;
    case V.rsA.MEMBER_DISCONNECT:
      return C.t.K4eCZ2;
    case V.rsA.BOT_ADD:
      return C.t.fWvX0N;
    case V.rsA.ROLE_CREATE:
      return C.t.UTLTx8;
    case V.rsA.ROLE_UPDATE:
      return C.t.NRbN19;
    case V.rsA.ROLE_DELETE:
      return C.t["4s63tb"];
    case V.rsA.INVITE_CREATE:
      return C.t.YHOXW1;
    case V.rsA.INVITE_UPDATE:
      return C.t.ja3kGR;
    case V.rsA.INVITE_DELETE:
      return C.t["3n/iWl"];
    case V.rsA.WEBHOOK_CREATE:
      return C.t.MhYhio;
    case V.rsA.WEBHOOK_UPDATE:
      return C.t["6GTlWF"];
    case V.rsA.WEBHOOK_DELETE:
      return C.t.in0VjY;
    case V.rsA.EMOJI_CREATE:
      return C.t["7vekRE"];
    case V.rsA.EMOJI_UPDATE:
      return C.t.IsCKfn;
    case V.rsA.EMOJI_DELETE:
      return C.t.JnUaVF;
    case V.rsA.STICKER_CREATE:
      return C.t.DRZifn;
    case V.rsA.STICKER_UPDATE:
      return C.t.bhujGR;
    case V.rsA.STICKER_DELETE:
      return C.t.rGEP9f;
    case V.rsA.MESSAGE_DELETE:
      return C.t["HPkD+P"];
    case V.rsA.MESSAGE_BULK_DELETE:
      return C.t["3RIvLC"];
    case V.rsA.MESSAGE_PIN:
      return C.t.Yna7Ex;
    case V.rsA.MESSAGE_UNPIN:
      return C.t.NCxXUV;
    case V.rsA.INTEGRATION_CREATE:
      return C.t.HYvCb2;
    case V.rsA.INTEGRATION_UPDATE:
      return C.t.ibCCOT;
    case V.rsA.INTEGRATION_DELETE:
      return C.t["8zScWV"];
    case V.rsA.STAGE_INSTANCE_CREATE:
      return C.t["n7x/DA"];
    case V.rsA.STAGE_INSTANCE_UPDATE:
      return C.t["0hQYU1"];
    case V.rsA.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return C.t["Oi/in5"];
      return C.t["7ZIFm5"];
    case V.rsA.GUILD_SCHEDULED_EVENT_CREATE:
      return C.t.S7k52t;
    case V.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
      return C.t.ebTK19;
    case V.rsA.GUILD_SCHEDULED_EVENT_DELETE:
      return C.t["/ARPKS"];
    case V.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case V.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return C.t["8qCI39"];
    case V.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return C.t.zYb2dX;
    case V.rsA.THREAD_CREATE:
      let r = null != e.changes ? e.changes.find(e => e.key === V.zUn.TYPE) : null;
      if (null == r) throw Error("[AuditLog] Could not find type change for thread create");
      switch (r.newValue) {
        case V.d4z.PRIVATE_THREAD:
          return C.t["Br0y5+"];
        case V.d4z.ANNOUNCEMENT_THREAD:
          return C.t["6uaMmJ"];
        default:
          return C.t["2cxQ7O"]
      }
    case V.rsA.THREAD_UPDATE:
      return C.t.PSsy4u;
    case V.rsA.THREAD_DELETE:
      return C.t.s3Khn5;
    case V.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return C.t.uzCqBg;
    case V.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
      return C.t.NqWv2N;
    case V.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var n;
      if ((null === (n = e.options) || void 0 === n ? void 0 : n.auto_moderation_rule_trigger_type) === R.fX.USER_PROFILE.toString()) return C.t.YQsjen;
      return C.t.SD0PwM;
    case V.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return C.t.Vk4Twc;
    case V.rsA.AUTO_MODERATION_QUARANTINE_USER:
      return C.t["/W5u5u"];
    case V.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
      return C.t.ONvWys;
    case V.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return C.t.ryGLk5;
    case V.rsA.AUTO_MODERATION_RULE_CREATE:
      return C.t.NKljj4;
    case V.rsA.AUTO_MODERATION_RULE_UPDATE:
      return C.t["3wEA9v"];
    case V.rsA.AUTO_MODERATION_RULE_DELETE:
      return C.t.umua3t;
    case V.rsA.ONBOARDING_PROMPT_CREATE:
      return C.t["/8A1g4"];
    case V.rsA.ONBOARDING_PROMPT_UPDATE:
      return C.t.ArIrWF;
    case V.rsA.ONBOARDING_PROMPT_DELETE:
      return C.t.IuBTam;
    case V.rsA.ONBOARDING_CREATE:
      return C.t.wDaq39;
    case V.rsA.ONBOARDING_UPDATE:
      return C.t["yONu/v"];
    case V.rsA.HOME_SETTINGS_CREATE:
      return C.t.dSdCjI;
    case V.rsA.HOME_SETTINGS_UPDATE:
      return C.t.XHE8qq;
    case V.rsA.GUILD_HOME_FEATURE_ITEM:
      let l = null != e.changes ? e.changes.find(e => e.key === V.zUn.ENTITY_TYPE) : null;
      if (null == l) return C.t["UZ+U3N"];
      switch (l.newValue) {
        case o.w.MESSAGE:
          return C.t["PyEa+P"];
        case o.w.FORUM_POST:
          return C.t.hCuAb2;
        default:
          return C.t["UZ+U3N"]
      }
    case V.rsA.GUILD_HOME_REMOVE_ITEM:
      return C.t.kPReur;
    case V.rsA.SOUNDBOARD_SOUND_CREATE:
      return C.t["0PD83d"];
    case V.rsA.SOUNDBOARD_SOUND_UPDATE:
      return C.t.CM8n19;
    case V.rsA.SOUNDBOARD_SOUND_DELETE:
      return C.t["kVz4//"];
    case V.rsA.VOICE_CHANNEL_STATUS_CREATE:
      return C.t.MWjnU1;
    case V.rsA.VOICE_CHANNEL_STATUS_DELETE:
      return C.t.aS8Krq;
    case V.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
      return C.t.NUKUb2;
    case V.rsA.GUILD_PROFILE_UPDATE:
      return C.t.Ed6hFx;
    default:
      return null
  }
}

function e_(e) {
  switch (e) {
    case S.zZ.GUILD_FEED_REMOVED:
      return C.NW.string(C.t["5G8ZDw"]);
    case S.zZ.ACTIVE_CHANNELS_REMOVED:
      return C.NW.string(C.t["4YLtzM"]);
    case S.zZ.PINNED:
      return C.NW.string(C.t["1QLRYW"])
  }
  return null
}

function eO(e) {
  switch (e) {
    case S.zZ.GUILD_FEED_REMOVED:
      return C.NW.string(C.t.S5kuWV);
    case S.zZ.ACTIVE_CHANNELS_REMOVED:
      return C.NW.string(C.t["8qpgc3"]);
    case S.zZ.PINNED:
      return C.NW.string(C.t.CMweGB)
  }
  return null
}

function eg(e, t) {
  switch (e) {
    case V.Plq.CREATE_INSTANT_INVITE:
      return C.NW.string(C.t.zJrgTE);
    case V.Plq.KICK_MEMBERS:
      return C.NW.string(C.t.pBNv6u);
    case V.Plq.BAN_MEMBERS:
      return C.NW.string(C.t.oTBA7O);
    case V.Plq.ADMINISTRATOR:
      return C.NW.string(C.t.PGvZqa);
    case V.Plq.MANAGE_CHANNELS:
      if (t.targetType === V.KFR.CHANNEL || t.targetType === V.KFR.CHANNEL_OVERWRITE) return C.NW.string(C.t.nAw15O);
      return C.NW.string(C.t["9qLtWl"]);
    case V.Plq.MANAGE_GUILD:
      return C.NW.string(C.t.QZRcfH);
    case V.Plq.VIEW_GUILD_ANALYTICS:
      return C.NW.string(C.t.rQJBEx);
    case V.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return C.NW.string(C.t["0lTLTk"]);
    case V.Plq.CHANGE_NICKNAME:
      return C.NW.string(C.t.dilOFx);
    case V.Plq.MANAGE_NICKNAMES:
      return C.NW.string(C.t["t+Ct5+"]);
    case V.Plq.MANAGE_ROLES:
      return C.NW.string(C.t["C8d+oK"]);
    case V.Plq.MANAGE_WEBHOOKS:
      return C.NW.string(C.t["/ADKmJ"]);
    case V.Plq.CREATE_GUILD_EXPRESSIONS:
      return C.NW.string(C.t.HarVuL);
    case V.Plq.MANAGE_GUILD_EXPRESSIONS:
      return C.NW.string(C.t.bbuXIi);
    case V.Plq.VIEW_AUDIT_LOG:
      return C.NW.string(C.t.fZgLpK);
    case V.Plq.VIEW_CHANNEL:
      if (t.targetType === V.KFR.CHANNEL || t.targetType === V.KFR.CHANNEL_OVERWRITE) return C.NW.string(C.t["W/A4Qk"]);
      return C.NW.string(C.t.uV83ys);
    case V.Plq.SEND_MESSAGES:
      return C.NW.string(C.t.T32rkJ);
    case V.Plq.SEND_TTS_MESSAGES:
      return C.NW.string(C.t.Mg7bkp);
    case V.Plq.USE_APPLICATION_COMMANDS:
      return C.NW.string(C.t.shbR1d);
    case V.Plq.MANAGE_MESSAGES:
      return C.NW.string(C.t["6lU9xM"]);
    case V.Plq.EMBED_LINKS:
      return C.NW.string(C.t["969dEB"]);
    case V.Plq.ATTACH_FILES:
      return C.NW.string(C.t["3AS4UF"]);
    case V.Plq.READ_MESSAGE_HISTORY:
      return C.NW.string(C.t.l9ufaW);
    case V.Plq.MENTION_EVERYONE:
      return C.NW.string(C.t.Y78KGB);
    case V.Plq.USE_EXTERNAL_EMOJIS:
      return C.NW.string(C.t.BpBGZW);
    case V.Plq.USE_EXTERNAL_STICKERS:
      return C.NW.string(C.t["UeRs+f"]);
    case V.Plq.ADD_REACTIONS:
      return C.NW.string(C.t.yEoJAg);
    case V.Plq.CONNECT:
      return C.NW.string(C.t.S0W8Z2);
    case V.Plq.SPEAK:
      return C.NW.string(C.t["8w1tIS"]);
    case V.Plq.MUTE_MEMBERS:
      return C.NW.string(C.t["8EI309"]);
    case V.Plq.DEAFEN_MEMBERS:
      return C.NW.string(C.t["9L47Fh"]);
    case V.Plq.MOVE_MEMBERS:
      return C.NW.string(C.t.YtjJPT);
    case V.Plq.USE_VAD:
      return C.NW.string(C.t["08zAV1"]);
    case V.Plq.PRIORITY_SPEAKER:
      return C.NW.string(C.t.BVK71t);
    case V.Plq.STREAM:
      return C.NW.string(C.t.FlNoSU);
    case V.Plq.REQUEST_TO_SPEAK:
      return C.NW.string(C.t["5kicT0"]);
    case V.Plq.CREATE_EVENTS:
      return C.NW.string(C.t.qyjZub);
    case V.Plq.MANAGE_EVENTS:
      return C.NW.string(C.t.HIgA5e);
    case V.Plq.CREATE_PUBLIC_THREADS:
      return C.NW.string(C.t["25rKnZ"]);
    case V.Plq.CREATE_PRIVATE_THREADS:
      return C.NW.string(C.t.QwbTSU);
    case V.Plq.SEND_MESSAGES_IN_THREADS:
      return C.NW.string(C.t.fTE74u);
    case V.Plq.MANAGE_THREADS:
      return C.NW.string(C.t.kEqgr6);
    case V.Plq.MODERATE_MEMBERS:
      return C.NW.string(C.t["+RL6p6"]);
    case V.Plq.USE_CLYDE_AI:
      return C.NW.string(C.t["8eeEZm"]);
    case V.Plq.SET_VOICE_CHANNEL_STATUS:
      return C.NW.string(C.t.VBwkUV);
    case V.Plq.SEND_POLLS:
      return C.NW.string(C.t.UMQ7W1);
    case V.Plq.USE_EXTERNAL_APPS:
      return C.NW.string(C.t.TtA5rK)
  }
  return null
}

function eb(e, t) {
  let r = [];
  return e.forEach(e => {
    let n = function(e, t) {
        switch (e.targetType) {
          case V.KFR.GUILD:
          case V.KFR.GUILD_HOME:
          case V.KFR.GUILD_PROFILE:
            return t;
          case V.KFR.CHANNEL:
          case V.KFR.CHANNEL_OVERWRITE:
            return eN(e, V.zUn.NAME, e => A.Z.getChannel(e), e => (0, d.F6)(e, N.default, Z.Z, !0));
          case V.KFR.USER:
            return eN(e, V.zUn.NICK, e => N.default.getUser(e), e => e);
          case V.KFR.ROLE:
            return eN(e, V.zUn.NAME, e => T.Z.getRole(t.id, e), e => e.name);
          case V.KFR.ONBOARDING_PROMPT:
            let r = eN(e, V.zUn.ID, e => M.Z.getOnboardingPrompt(e), e => e.title);
            return null == r || "" === r ? C.NW.string(C.t.ZNQyiY) : r;
          case V.KFR.GUILD_ONBOARDING:
          case V.KFR.GUILD_MEMBER_VERIFICATION:
            return t;
          case V.KFR.INVITE:
            return eN(e, V.zUn.CODE, V.VqG);
          case V.KFR.INTEGRATION:
            return eN(e, V.zUn.TYPE, e => m.Z.integrations.find(t => t.id === e), e => e.name);
          case V.KFR.WEBHOOK:
            return eN(e, V.zUn.NAME, e => m.Z.webhooks.find(t => t.id === e), e => e.name);
          case V.KFR.EMOJI:
            return eN(e, V.zUn.NAME, e => f.ZP.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case V.KFR.STICKER:
            return eN(e, V.zUn.NAME, e => g.Z.getStickerById(e), e => e.name);
          case V.KFR.STAGE_INSTANCE:
            return eN(e, V.zUn.TOPIC, e => {
              var r;
              return null === (r = Object.values(O.Z.getStageInstancesByGuild(t.id))) || void 0 === r ? void 0 : r.find(t => t.id === e)
            }, e => e.topic);
          case V.KFR.GUILD_SCHEDULED_EVENT:
          case V.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return eN(e, V.zUn.NAME, e => m.Z.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case V.KFR.THREAD:
            return eN(e, V.zUn.NAME, e => m.Z.threads.find(t => t.id === e), e => e.name);
          case V.KFR.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = m.Z.integrations.find(t => {
                var r;
                return (null === (r = t.application) || void 0 === r ? void 0 : r.id) === e.targetId
              });
              if (null != t) return t.name;
              return e.targetId
            }
            return eN(e, V.zUn.NAME, e => m.Z.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === u.yU.CHAT ? "/⁠".concat(t) : t
            });
          case V.KFR.AUTO_MODERATION_RULE:
            return eN(e, V.zUn.NAME, e => m.Z.automodRules.find(t => t.id === e), e => e.name);
          case V.KFR.GUILD_SOUNDBOARD:
            return eN(e, V.zUn.NAME, V.VqG);
          case V.KFR.HOME_SETTINGS:
            return eN(e, V.zUn.GUILD_ID, e => _.Z.getSettings(e), () => C.NW.string(C.t.VbpLyc), t.id);
          case V.KFR.VOICE_CHANNEL_STATUS:
            return eN(e, V.zUn.STATUS, e => A.Z.getChannel(e), e => (0, d.F6)(e, N.default, Z.Z, !0));
          default:
            return P.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      i = N.default.getUser(e.userId);
    if (null != n || [V.rsA.MEMBER_PRUNE, V.rsA.MEMBER_DISCONNECT, V.rsA.MEMBER_MOVE, V.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, V.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", i)).set("target", n)).set("options", function(e) {
          if (null != e.options) {
            let r = x({}, e.options);
            switch (e.options.type) {
              case V.jwA.USER:
                r.subtarget = eH(e.options.id, e => N.default.getUser(e), e => e.tag);
                break;
              case V.jwA.ROLE:
                r.subtarget = eH(e.options.role_name, V.VqG)
            }
            if (null != e.options.channel_id && (r.channel = eN(e, "", e => A.Z.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (r.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let n = m.Z.guildScheduledEvents.find(t => t.id === e.targetId),
                l = null == n ? void 0 : n.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              r.subtarget = (0, H.vc)(a()(I.default.extractTimestamp(null !== (t = null == l ? void 0 : l.event_exception_id) && void 0 !== t ? t : "0")), "LL")
            }
            return r
          }
          return e.options
        }(e))).changes) {
        let r = [];
        e.changes.forEach(n => {
          let i = function(e, t, r) {
            if (t.action === V.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case V.ecB.ROLE:
                  e.subtarget = eH(t.id, e => T.Z.getRole(r.id, e), e => e.name);
                  break;
                case V.ecB.USER:
                  e.subtarget = eH(t.id, e => N.default.getUser(e), e => e.tag);
                  break;
                case V.ecB.CHANNEL:
                  t.id === l()(r.id).subtract(1).toString() ? e.subtarget = C.NW.string(C.t.MSYhgo) : e.subtarget = eH(t.id, e => A.Z.getChannel(e), e => (0, d.F6)(e, N.default, Z.Z, !0))
              }
              return e
            }
            switch (e.key) {
              case V.zUn.OWNER_ID:
                return eZ(e, e => N.default.getUser(e));
              case V.zUn.CHANNEL_ID:
              case V.zUn.AFK_CHANNEL_ID:
              case V.zUn.SYSTEM_CHANNEL_ID:
              case V.zUn.RULES_CHANNEL_ID:
              case V.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                return eZ(e, e => A.Z.getChannel(e), e => (0, d.F6)(e, N.default, Z.Z, !0));
              case V.zUn.AFK_TIMEOUT:
                return eZ(e, e => e / 60);
              case V.zUn.BITRATE:
                return eZ(e, e => e / 1e3);
              case V.zUn.COLOR:
                return eZ(e, e => (0, c.Rf)(e).toUpperCase());
              case V.zUn.THEME_COLORS:
                return eZ(e, e => "".concat((0, c.Rf)(e[0]).toUpperCase(), ", ").concat((0, c.Rf)(e[1]).toUpperCase()));
              case V.zUn.MAX_AGE:
                return eZ(e, e => {
                  let t = j.ZP.getMaxAgeOptions.find(t => {
                    let {
                      value: r
                    } = t;
                    return e === r
                  });
                  return t ? t.label : e
                });
              case V.zUn.PERMISSIONS: {
                let t = [],
                  {
                    added: r,
                    removed: n
                  } = eA(e.oldValue, e.newValue);
                if (r.length > 0) {
                  let e = new b.ms(V.zUn.PERMISSIONS_GRANTED, null, r);
                  t.push(e)
                }
                if (n.length > 0) {
                  let e = new b.ms(V.zUn.PERMISSIONS_DENIED, null, n);
                  t.push(e)
                }
                return t
              }
              case V.zUn.PERMISSIONS_GRANTED:
              case V.zUn.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: r,
                    removed: n
                  } = eA(e.oldValue, e.newValue);
                if (r.length > 0) {
                  let n = new b.ms(e.key, null, r);
                  t.push(n)
                }
                if (n.length > 0) {
                  let e = new b.ms(V.zUn.PERMISSIONS_RESET, n, n);
                  t.push(e)
                }
                return t
              }
              case V.zUn.FLAGS: {
                let t = [],
                  {
                    added: r,
                    removed: n
                  } = function(e, t) {
                    let r = "number" == typeof e ? e : 0,
                      n = "number" == typeof t ? t : 0,
                      l = y.Ge(n, r),
                      i = y.Ge(r, n),
                      a = [],
                      o = [];
                    for (let e in S.zZ) {
                      let t = S.zZ[e];
                      y.yE(l, t) && a.push(t), y.yE(i, t) && o.push(t)
                    }
                    return {
                      added: a,
                      removed: o
                    }
                  }(e.oldValue, e.newValue);
                if (r.length > 0) {
                  let n = new b.ms(e.key, null, r);
                  t.push(n)
                }
                if (n.length > 0) {
                  let r = new b.ms(e.key, n, null);
                  t.push(r)
                }
                return t
              }
              case V.zUn.PREFERRED_LOCALE:
                return eZ(e, e => {
                  let t = (0, C.u5)().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case V.zUn.VIDEO_QUALITY_MODE:
                return eZ(e, e => e === V.Ucd.FULL ? C.NW.string(C.t["7jOoJC"]) : C.NW.string(C.t.jjKYpq));
              case V.zUn.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [V.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: V.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [V.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: V.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [V.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: V.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [V.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: V.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    r = [];
                  return Object.values(V.xmn).forEach(n => {
                    let l = (e.oldValue & n) === n,
                      i = (e.newValue & n) === n;
                    if (l === i) return;
                    let a = new b.ms(t[n], !l, !i);
                    r.push(a)
                  }), r
                }(e);
              case V.zUn.AUTO_MODERATION_ACTIONS:
                if (t.targetType === V.KFR.AUTO_MODERATION_RULE) return eZ(e, e => e.map(e => e.type), e => e.map(p.ZF).join(", "));
                break;
              case V.zUn.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === V.KFR.AUTO_MODERATION_RULE) return eZ(e, p.YN);
                break;
              case V.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === V.KFR.AUTO_MODERATION_RULE) return eZ(e, p.Ar);
                break;
              case V.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === V.KFR.AUTO_MODERATION_RULE) return eZ(e, e => null != e && "object" == typeof e ? null != e.keyword_filter && Array.isArray(e.keyword_filter) ? C.NW.formatToMarkdownString(C.t.y91UXV, {
                  newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                }) : JSON.stringify(e) : e);
                break;
              case V.zUn.AUTO_MODERATION_ADD_KEYWORDS:
              case V.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
              case V.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case V.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case V.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
              case V.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === V.KFR.AUTO_MODERATION_RULE) return eZ(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case V.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === V.KFR.AUTO_MODERATION_RULE) return eZ(e, e => e.map(A.Z.getChannel).filter(e => null != e).map(e => (0, d.F6)(e, N.default, Z.Z, !0)), e => null != e && e.length > 0 ? e.join(", ") : C.NW.string(C.t["K/EdV1"]));
                break;
              case V.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === V.KFR.AUTO_MODERATION_RULE) return eZ(e, e => e.map(e => T.Z.getRole(r.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : C.NW.string(C.t["K/EdV1"]));
                break;
              case V.zUn.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: r
                  } = e, n = Array.isArray(t) ? t : [], l = Array.isArray(r) ? r : [];
                  if (0 === n.length && 0 === l.length) return e;
                  let i = {},
                    a = {};
                  if (n.forEach(e => {
                      i[e.id] = e
                    }), l.forEach(e => {
                      a[e.id] = e
                    }), n.length < l.length) {
                    for (let e in a)
                      if (null == i[e]) return new b.ms(V.zUn.AVAILABLE_TAG_ADD, null, eT(a[e]))
                  }
                  if (n.length > l.length) {
                    for (let e in i)
                      if (null == a[e]) return new b.ms(V.zUn.AVAILABLE_TAG_DELETE, null, eT(i[e]))
                  }
                  for (let e in i) {
                    let t = i[e],
                      r = a[e];
                    if ((null == r ? void 0 : r.name) !== t.name || (null == r ? void 0 : r.emoji_id) !== t.emoji_id || (null == r ? void 0 : r.emoji_name) !== t.emoji_name) return new b.ms(V.zUn.AVAILABLE_TAG_EDIT, eT(t), eT(r))
                  }
                  return e
                }(e);
              case V.zUn.SCHEDULED_START_TIME:
              case V.zUn.SCHEDULED_END_TIME:
                return eZ(e, e => (0, H.vc)(a()(new Date(e)), "LLLL"))
            }
            return e
          }(n, e, t);
          Array.isArray(i) ? i.forEach(e => r.push(e)) : r.push(i)
        }), e = e.set("changes", r)
      }
      r.push(e)
    }
  }), r
}

function eA(e, t) {
  let r = h.vB("string" == typeof e ? e : 0),
    n = h.vB("string" == typeof t ? t : 0),
    l = h.Od(n, r),
    i = h.Od(r, n),
    a = [],
    o = [];
  for (let e in V.Plq) {
    let t = V.Plq[e];
    h.e$(l, t) && a.push(t), h.e$(i, t) && o.push(t)
  }
  return {
    added: a,
    removed: o
  }
}

function eT(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function eZ(e, t, r) {
  let n = e.newValue,
    l = e.oldValue;
  return null != e.newValue && (n = t(e.newValue), null != r && null != n && (n = r(n))), null != e.oldValue && (l = t(e.oldValue), null != r && null != l && (l = r(l))), new b.ms(e.key, l || e.oldValue, n || e.newValue)
}

function eN(e, t, r, n, l) {
  let i = null,
    a = r(l = null != l ? l : e.targetId);
  if (null != a && null != n && (i = n(a)), null == i) {
    let t = m.Z.deletedTargets[e.targetType];
    null != t && null != t[l] && (i = t[l])
  }
  if (null == i && null != e.changes) {
    let r = e.changes.find(e => e.key === t);
    null != r && (i = r.newValue || r.oldValue)
  }
  return null != i ? i : l
}

function eH(e, t, r) {
  let n = e,
    l = t(e);
  return null != l && null != r && (n = r(l)), n
}

function ey(e, t) {
  return r => null == r.oldValue ? e : t
}

function ej(e, t) {
  return r => null == r.newValue ? e : t
}

function eI(e, t, r, n) {
  return l => null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? r : n
}

function em(e, t) {
  return r => r.newValue ? e : t
}

function eV(e) {
  return t => e[t.newValue]
}

function eS(e, t) {
  return r => {
    var n;
    return null !== (n = e[r.newValue]) && void 0 !== n ? n : t
  }
}