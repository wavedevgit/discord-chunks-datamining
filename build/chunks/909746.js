/** Chunk was on 7318 **/
/** chunk id: 909746, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Bq: () => q,
  C0: () => Al,
  C2: () => $,
  EN: () => z,
  F1: () => As,
  HE: () => k,
  HN: () => Y,
  Iv: () => Ag,
  J5: () => Ad,
  JA: () => Ai,
  K: () => _,
  ML: () => U,
  N$: () => J,
  N5: () => AE,
  QM: () => Au,
  V$: () => Ac,
  _$: () => AD,
  cT: () => AB,
  em: () => AC,
  hQ: () => Aw,
  hx: () => K,
  lR: () => W,
  lU: () => F,
  nm: () => Av,
  oD: () => X,
  pA: () => At,
  pY: () => G,
  pi: () => Ae,
  rK: () => Ar,
  uB: () => AA,
  vc: () => Ao,
  vm: () => An,
  zT: () => Aa
}), require("./415506.js"), require("./539854.js"), require("./49124.js");
var Chunk654861 = require("./654861.js"),
  r = require.n(Chunk654861),
  Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk536402 = require("./536402.js"),
  Chunk533800 = require("./533800.js"),
  Chunk149765 = require("./149765.js"),
  Chunk866442 = require("./866442.js"),
  Chunk379649 = require("./379649.js"),
  Chunk911969 = require("./911969.js"),
  Chunk933557 = require("./933557.js"),
  Chunk710845 = require("./710845.js"),
  Chunk339085 = require("./339085.js"),
  Chunk236413 = require("./236413.js"),
  Chunk45966 = require("./45966.js"),
  Chunk563534 = require("./563534.js"),
  Chunk427679 = require("./427679.js"),
  Chunk926491 = require("./926491.js"),
  Chunk387667 = require("./387667.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk630388 = require("./630388.js"),
  Chunk971130 = require("./971130.js"),
  Chunk709054 = require("./709054.js"),
  Chunk987707 = require("./987707.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk273504 = require("./273504.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function x(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function N(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
let Z = new Chunk710845.Z("AuditLogUtils"),
  S = [Chunk379649.J6.DAYS, Chunk379649.J6.HOURS, Chunk379649.J6.MINUTES, Chunk379649.J6.SECONDS],
  R = () => ({
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3Cw"]
  }),
  G = () => x({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t.CkDiND,
    [Chunk981631.zUn.DESCRIPTION]: AO(Chunk388032.t.RP3Ey8, Chunk388032.t.QAVj1d),
    [Chunk981631.zUn.ICON_HASH]: () => Chunk388032.t.iLZ8Q0,
    [Chunk981631.zUn.SPLASH_HASH]: () => Chunk388032.t["4VV6dn"],
    [Chunk981631.zUn.DISCOVERY_SPLASH_HASH]: () => Chunk388032.t["2pds6u"],
    [Chunk981631.zUn.BANNER_HASH]: AO(Chunk388032.t.Cxq4zM, Chunk388032.t["H7eE//"]),
    [Chunk981631.zUn.OWNER_ID]: () => Chunk388032.t["8ltsLS"],
    [Chunk981631.zUn.REGION]: () => Chunk388032.t.X9r5KS,
    [Chunk981631.zUn.PREFERRED_LOCALE]: () => Chunk388032.t.UnXuDQ,
    [Chunk981631.zUn.AFK_CHANNEL_ID]: AO(Chunk388032.t.ClBuAw, Chunk388032.t["ms+xtL"]),
    [Chunk981631.zUn.AFK_TIMEOUT]: () => Chunk388032.t.q21fHR,
    [Chunk981631.zUn.SYSTEM_CHANNEL_ID]: AO(Chunk388032.t.H1VXaW, Chunk388032.t.XhtmxM),
    [Chunk981631.zUn.RULES_CHANNEL_ID]: AO(Chunk388032.t.OI6MGx, Chunk388032.t.lik3tL),
    [Chunk981631.zUn.PUBLIC_UPDATES_CHANNEL_ID]: AO(Chunk388032.t.YxBKra, Chunk388032.t.Ehsnio),
    [Chunk981631.zUn.MFA_LEVEL]: Aj({
      [Chunk981631.BpS.NONE]: Chunk388032.t.voaCCQ,
      [Chunk981631.BpS.ELEVATED]: Chunk388032.t.pRNVw8
    }),
    [Chunk981631.zUn.WIDGET_ENABLED]: AV(Chunk388032.t.ADIty8, Chunk388032.t.nf58VV),
    [Chunk981631.zUn.WIDGET_CHANNEL_ID]: AO(Chunk388032.t["6SBsDQ"], Chunk388032.t.deQ5wM),
    [Chunk981631.zUn.VERIFICATION_LEVEL]: Aj({
      [Chunk981631.sFg.NONE]: Chunk388032.t.W27rsb,
      [Chunk981631.sFg.LOW]: Chunk388032.t["V8P+Pz"],
      [Chunk981631.sFg.MEDIUM]: Chunk388032.t.ERQFam,
      [Chunk981631.sFg.HIGH]: Chunk388032.t["83fN0t"],
      [Chunk981631.sFg.VERY_HIGH]: Chunk388032.t.PnkQJC
    }),
    [Chunk981631.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: Aj({
      [Chunk981631.bL.ALL_MESSAGES]: Chunk388032.t.LDi76O,
      [Chunk981631.bL.ONLY_MENTIONS]: Chunk388032.t["6K83bW"]
    }),
    [Chunk981631.zUn.VANITY_URL_CODE]: AO(Chunk388032.t.Zplsoq, Chunk388032.t.u6cArq),
    [Chunk981631.zUn.EXPLICIT_CONTENT_FILTER]: Aj({
      [Chunk981631.lxg.DISABLED]: Chunk388032.t.fmOeLy,
      [Chunk981631.lxg.MEMBERS_WITHOUT_ROLES]: Chunk388032.t["4FghY2"],
      [Chunk981631.lxg.ALL_MEMBERS]: Chunk388032.t.olyrSk
    }),
    [Chunk981631.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: AV(Chunk388032.t.rBT0sr, Chunk388032.t["gc+te3"]),
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => Chunk388032.t.YbouFB,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => Chunk388032.t.g3DMjI,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => Chunk388032.t["+fQAen"],
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => Chunk388032.t.E1fc4u,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => Chunk388032.t.XbwtSE
  }, R()),
  U = () => ({
    [Chunk981631.zUn.NAME]: AQ(Chunk388032.t.f8Rh0d, Chunk388032.t.ebD4Qk),
    [Chunk981631.zUn.POSITION]: AQ(Chunk388032.t.isS8tb, Chunk388032.t.t5uBio),
    [Chunk981631.zUn.TOPIC]: AP(Chunk388032.t.esQcxs, Chunk388032.t["m+veAg"], Chunk388032.t["ws/1FB"]),
    [Chunk981631.zUn.BITRATE]: AQ(Chunk388032.t.fw81am, Chunk388032.t.MFNlgY),
    [Chunk981631.zUn.RTC_REGION_OVERRIDE]: AP(Chunk388032.t["6kajx8"], Chunk388032.t.eGOlmZ, Chunk388032.t["0JMZd3"]),
    [Chunk981631.zUn.USER_LIMIT]: AQ(Chunk388032.t.wk5t7u, Chunk388032.t.XgjCEh),
    [Chunk981631.zUn.RATE_LIMIT_PER_USER]: AQ(Chunk388032.t["7lirhI"], Chunk388032.t.j4CCJS),
    [Chunk981631.zUn.PERMISSIONS_RESET]: () => Chunk388032.t["+vSBFR"],
    [Chunk981631.zUn.PERMISSIONS_GRANTED]: () => Chunk388032.t.EKLJv7,
    [Chunk981631.zUn.PERMISSIONS_DENIED]: () => Chunk388032.t.U3rO5e,
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3Cw"],
    [Chunk981631.zUn.NSFW]: AV(Chunk388032.t.H8Ri2d, Chunk388032.t.WW6cJy),
    [Chunk981631.zUn.TYPE]: AQ(Chunk388032.t.Vn5zn5, Chunk388032.t.aq4uWF),
    [Chunk981631.zUn.VIDEO_QUALITY_MODE]: AQ(Chunk388032.t.e68fAQ, Chunk388032.t.djbES0),
    [Chunk981631.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: AQ(Chunk388032.t.nYz2mp, Chunk388032.t.oczvRE),
    [Chunk981631.zUn.FLAGS]: () => Chunk388032.t.ImCQkp,
    [Chunk981631.zUn.AVAILABLE_TAG_ADD]: () => Chunk388032.t.H86QQU,
    [Chunk981631.zUn.AVAILABLE_TAG_EDIT]: () => Chunk388032.t.YtUzlp,
    [Chunk981631.zUn.AVAILABLE_TAG_DELETE]: () => Chunk388032.t["8QOsen"],
    [Chunk981631.zUn.LINKED_LOBBY]: AO(Chunk388032.t["+/3TkJ"], Chunk388032.t["5kDYS0"])
  }),
  F = () => x({
    [Chunk981631.zUn.NICK]: AP(Chunk388032.t.qXDsHh, Chunk388032.t["m+qur6"], Chunk388032.t.DvLvjI),
    [Chunk981631.zUn.DEAF]: AV(Chunk388032.t.mArLlZ, Chunk388032.t.ddvVYG),
    [Chunk981631.zUn.MUTE]: AV(Chunk388032.t["bxs/lZ"], Chunk388032.t.FjecQE),
    [Chunk981631.zUn.ROLES_REMOVE]: () => Chunk388032.t["+2SDWV"],
    [Chunk981631.zUn.ROLES_ADD]: () => Chunk388032.t["B3/3IC"],
    [Chunk981631.zUn.PRUNE_DELETE_DAYS]: () => Chunk388032.t["+Cvc+P"],
    [Chunk981631.zUn.COMMUNICATION_DISABLED_UNTIL]: AP(Chunk388032.t.LXTQr6, Chunk388032.t.LXTQr6, Chunk388032.t.ULSdnJ),
    [Chunk981631.zUn.BYPASSES_VERIFICATION]: AV(Chunk388032.t.NBPBur, Chunk388032.t.zATosr),
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => Chunk388032.t.YbouFB
  }, R()),
  k = () => x({
    [Chunk981631.zUn.NAME]: AQ(Chunk388032.t.QBmlaG, Chunk388032.t.Lfs4r6),
    [Chunk981631.zUn.DESCRIPTION]: AQ(Chunk388032.t.XeYKWF, Chunk388032.t.PSfeIi),
    [Chunk981631.zUn.PERMISSIONS_GRANTED]: () => Chunk388032.t["9i/DvL"],
    [Chunk981631.zUn.PERMISSIONS_DENIED]: () => Chunk388032.t.pa1ZVl,
    [Chunk981631.zUn.COLOR]: Am({
      "#000000": Chunk388032.t.TK6E1N
    }, Chunk388032.t["2FQFi4"]),
    [Chunk981631.zUn.COLORS]: A => null == A.newValue.secondary_color ? L.t.U44ttr : L.t.WnSwLy,
    [Chunk981631.zUn.HOIST]: AV(Chunk388032.t.gWfe29, Chunk388032.t["+tb8kJ"]),
    [Chunk981631.zUn.MENTIONABLE]: AV(Chunk388032.t.LL8VFB, Chunk388032.t.Z7xzmJ),
    [Chunk981631.zUn.ICON_HASH]: () => Chunk388032.t["iEE79/"],
    [Chunk981631.zUn.UNICODE_EMOJI]: () => Chunk388032.t.KiLMMz
  }, R()),
  X = () => N(x({}, R()), {
    [Chunk981631.zUn.TITLE]: AQ(Chunk388032.t.sNpuy8, Chunk388032.t["3Ukc/v"]),
    [Chunk981631.zUn.DESCRIPTION]: AQ(Chunk388032.t.PP1q09, Chunk388032.t.z7pYLi),
    [Chunk981631.zUn.OPTIONS]: () => Chunk388032.t["3G5C9/"],
    [Chunk981631.zUn.SINGLE_SELECT]: AV(Chunk388032.t.v4WnR0, Chunk388032.t["6Qg3uL"]),
    [Chunk981631.zUn.REQUIRED]: AV(Chunk388032.t["0MPAMz"], Chunk388032.t.pwsXio)
  }),
  z = () => N(x({}, R()), {
    [Chunk981631.zUn.DEFAULT_CHANNEL_IDS]: () => Chunk388032.t["8M+D2t"],
    [Chunk981631.zUn.ENABLE_DEFAULT_CHANNELS]: AV(Chunk388032.t["EYd/lp"], Chunk388032.t["36OZeX"]),
    [Chunk981631.zUn.ENABLE_ONBOARDING_PROMPTS]: AV(Chunk388032.t.V3u8PT, Chunk388032.t.r66lc3),
    [Chunk981631.zUn.ENABLED]: AV(Chunk388032.t.SODVIi, Chunk388032.t.u8HY5e)
  }),
  K = () => N(x({}, R()), {
    [Chunk981631.zUn.WELCOME_MESSAGE]: () => Chunk388032.t.dKQ1xc,
    [Chunk981631.zUn.NEW_MEMBER_ACTIONS]: () => Chunk388032.t.jDUInp,
    [Chunk981631.zUn.RESOURCE_CHANNELS]: () => Chunk388032.t.SIX0mp
  }),
  Y = () => x({
    [Chunk981631.zUn.CODE]: () => Chunk388032.t.rrRHgY,
    [Chunk981631.zUn.CHANNEL_ID]: () => Chunk388032.t.Q1vd5u,
    [Chunk981631.zUn.MAX_USES]: Am({
      0: Chunk388032.t.Yx8LNj
    }, Chunk388032.t["3ygnwc"]),
    [Chunk981631.zUn.MAX_AGE]: Am({
      [Chunk388032.intl.string(Chunk388032.t.PqEzn5)]: Chunk388032.t.uWrLv7
    }, Chunk388032.t["Q+5kcH"]),
    [Chunk981631.zUn.TEMPORARY]: AV(Chunk388032.t.MWp6Hx, Chunk388032.t.omiqTE),
    [Chunk981631.zUn.FLAGS]: Aj({
      [Chunk533800.$.IS_GUEST_INVITE]: Chunk388032.t.XYZMbG
    })
  }, R()),
  W = () => ({
    [Chunk981631.zUn.CHANNEL_ID]: AQ(Chunk388032.t.jhPpra, Chunk388032.t.ar4qYG),
    [Chunk981631.zUn.NAME]: AQ(Chunk388032.t.ZVGrzc, Chunk388032.t.tywdZW),
    [Chunk981631.zUn.AVATAR_HASH]: () => Chunk388032.t.KB52Ul,
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3Cw"]
  }),
  J = () => x({
    [Chunk981631.zUn.NAME]: AQ(Chunk388032.t.ahU1o6, Chunk388032.t["wxs+vb"])
  }, R()),
  q = () => x({
    [Chunk981631.zUn.NAME]: AQ(Chunk388032.t.cdl0Ym, Chunk388032.t.o3W2l5),
    [Chunk981631.zUn.TAGS]: AQ(Chunk388032.t["zwL+S0"], Chunk388032.t.VYfKAw),
    [Chunk981631.zUn.DESCRIPTION]: AQ(Chunk388032.t.XeYKWF, Chunk388032.t.PSfeIi)
  }, R()),
  _ = () => x({
    [Chunk981631.zUn.ENABLE_EMOTICONS]: AV(Chunk388032.t["FI0m5+"], Chunk388032.t.olpKCw),
    [Chunk981631.zUn.EXPIRE_BEHAVIOR]: Aj({
      0: Chunk388032.t["1Bb1+v"],
      1: Chunk388032.t.vjlW6u
    }),
    [Chunk981631.zUn.EXPIRE_GRACE_PERIOD]: () => Chunk388032.t.iovXMT
  }, R()),
  $ = () => x({
    [Chunk981631.zUn.TOPIC]: AQ(Chunk388032.t["m+veAg"], Chunk388032.t.esQcxs),
    [Chunk981631.zUn.PRIVACY_LEVEL]: Aj({
      [Chunk765305.j8.GUILD_ONLY]: Chunk388032.t["EC+CDg"],
      [Chunk765305.j8.PUBLIC]: Chunk388032.t["pK/WGx"]
    })
  }, R()),
  AA = () => x({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t["21EXHR"],
    [Chunk981631.zUn.DESCRIPTION]: () => Chunk388032.t.Vm1of3,
    [Chunk981631.zUn.PRIVACY_LEVEL]: Aj({
      [Chunk765305.j8.GUILD_ONLY]: Chunk388032.t["EC+CDg"],
      [Chunk765305.j8.PUBLIC]: Chunk388032.t["pK/WGx"]
    }),
    [Chunk981631.zUn.STATUS]: Aj({
      [Chunk765305.p1.SCHEDULED]: Chunk388032.t.hXKDgo,
      [Chunk765305.p1.ACTIVE]: Chunk388032.t.lRX1n5,
      [Chunk765305.p1.COMPLETED]: Chunk388032.t["/eFIho"],
      [Chunk765305.p1.CANCELED]: Chunk388032.t.NWIYho
    }),
    [Chunk981631.zUn.ENTITY_TYPE]: Aj({
      [Chunk765305.WX.NONE]: Chunk388032.t["6sO3Sk"],
      [Chunk765305.WX.STAGE_INSTANCE]: Chunk388032.t["Wo+s19"],
      [Chunk765305.WX.VOICE]: Chunk388032.t.XCVaIC,
      [Chunk765305.WX.EXTERNAL]: Chunk388032.t.IvhAj4
    }),
    [Chunk981631.zUn.CHANNEL_ID]: AO(Chunk388032.t.yJBIcX, Chunk388032.t["+PqSsr"]),
    [Chunk981631.zUn.LOCATION]: AO(Chunk388032.t.GaMBHx, Chunk388032.t.PsICk5),
    [Chunk981631.zUn.IMAGE_HASH]: AO(Chunk388032.t.S3vcRE, Chunk388032.t.KQu47O)
  }, R()),
  Ae = () => x({
    [Chunk981631.zUn.SCHEDULED_START_TIME]: AO(Chunk388032.t.zMIYVl, Chunk388032.t.fzF8GR),
    [Chunk981631.zUn.SCHEDULED_END_TIME]: AO(Chunk388032.t.vONSQE, Chunk388032.t.IlIti4),
    [Chunk981631.zUn.IS_CANCELED]: A => {
      if (null != A.oldValue || true === A.newValue) {
        if (!A.oldValue && A.newValue) return L.t["7RkicX"];
        else if (A.oldValue && !A.newValue) return L.t.dRNTWV
      }
    }
  }, R()),
  At = () => x({
    [Chunk981631.zUn.NAME]: AQ(Chunk388032.t.tUKRzc, Chunk388032.t.kPCHOD),
    [Chunk981631.zUn.ARCHIVED]: AV(Chunk388032.t.jDi9FB, Chunk388032.t.F6dvbW),
    [Chunk981631.zUn.LOCKED]: AV(Chunk388032.t.JSy1QU, Chunk388032.t.C7Jgo6),
    [Chunk981631.zUn.INVITABLE]: AV(Chunk388032.t.dxNUs7, Chunk388032.t.biJvYG),
    [Chunk981631.zUn.AUTO_ARCHIVE_DURATION]: AQ(Chunk388032.t.LuaG39, Chunk388032.t["18d9qq"]),
    [Chunk981631.zUn.RATE_LIMIT_PER_USER]: AQ(Chunk388032.t["7lirhI"], Chunk388032.t.j4CCJS),
    [Chunk981631.zUn.FLAGS]: () => Chunk388032.t.sSAQtr
  }, R()),
  An = A => {
    let e = x({}, R());
    return null == A || A.forEach(A => {
      A.newValue ? A.newValue.permission ? e[A.key] = () => L.t["JH+89P"] : e[A.key] = () => L.t.HUrFDg : e[A.key] = () => L.t.vynxnZ
    }), e
  },
  Ar = () => x({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t.XwxAJS,
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => Chunk388032.t.fx0pys,
    [Chunk981631.zUn.AUTO_MODERATION_EVENT_TYPE]: () => Chunk388032.t["46Y+Ly"],
    [Chunk981631.zUn.AUTO_MODERATION_ACTIONS]: () => Chunk388032.t["8efxfn"],
    [Chunk981631.zUn.AUTO_MODERATION_ENABLED]: A => {
      var e;
      returntrue === (null != (e = A.newValue) ? e : A.oldValue) ? L.t.fCmxCw : L.t.Wrg9Ji
    },
    [Chunk981631.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => Chunk388032.t.TRb7Nz,
    [Chunk981631.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => Chunk388032.t.mzitLC,
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => Chunk388032.t["h/lM6+"],
    [Chunk981631.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => Chunk388032.t["9V2yaG"],
    [Chunk981631.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => Chunk388032.t["4Qe9n5"],
    [Chunk981631.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => Chunk388032.t.GyZtxs,
    [Chunk981631.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => Chunk388032.t.OQDadX,
    [Chunk981631.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => Chunk388032.t["FvvR+P"],
    [Chunk981631.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => Chunk388032.t.p5nSv7
  }, R()),
  Al = () => x({
    [Chunk981631.zUn.NAME]: AQ(Chunk388032.t.VOtRSE, Chunk388032.t.OK7B8P),
    [Chunk981631.zUn.VOLUME]: AQ(Chunk388032.t.igrDBw, Chunk388032.t.L5lDFB),
    [Chunk981631.zUn.EMOJI_NAME]: AP(Chunk388032.t.IIanaW, Chunk388032.t.z4w4U1, Chunk388032.t.V8Tfyc),
    [Chunk981631.zUn.EMOJI_ID]: AP(Chunk388032.t.ainxMD, Chunk388032.t["2NPsYm"], Chunk388032.t["8crtnp"])
  }, R()),
  Ai = () => x({
    [Chunk981631.zUn.VERIFICATION_ENABLED]: A => true === A.newValue ? L.t.fnkzDQ : L.t.WYT6kZ,
    [Chunk981631.zUn.MANUAL_APPROVAL_ENABLED]: A => true === A.newValue ? L.t.jzSvVV : L.t.WxyOtr
  }, R()),
  As = () => x({
    [Chunk981631.zUn.STATUS]: () => Chunk388032.t.HyCSnJ
  }, R()),
  Aa = () => ({
    [Chunk981631.zUn.DESCRIPTION]: () => Chunk388032.t.nsUZKS,
    [Chunk981631.zUn.BRAND_COLOR_PRIMARY]: () => Chunk388032.t.qe9mgI,
    [Chunk981631.zUn.CUSTOM_BANNER_HASH]: () => Chunk388032.t["04b5KC"],
    [Chunk981631.zUn.TRAITS]: () => Chunk388032.t.dEy9WF,
    [Chunk981631.zUn.GAME_APPLICATION_IDS]: () => Chunk388032.t["8BOT39"],
    [Chunk981631.zUn.VISIBILITY]: () => Chunk388032.t.bCl1Eh,
    [Chunk981631.zUn.SERVER_TAG]: AO(Chunk388032.t.ix1dnZ, Chunk388032.t["4LKpKS"])
  }),
  Ao = {
    [Chunk981631.KFR.CHANNEL]: {
      [Chunk981631.zUn.ID]: true,
      [Chunk981631.zUn.PERMISSION_OVERWRITES]: true
    },
    [Chunk981631.KFR.CHANNEL_OVERWRITE]: {
      [Chunk981631.zUn.TYPE]: true,
      [Chunk981631.zUn.ID]: true,
      [Chunk981631.zUn.PERMISSION_OVERWRITES]: true
    },
    [Chunk981631.KFR.INVITE]: {
      [Chunk981631.zUn.INVITER_ID]: true,
      [Chunk981631.zUn.USES]: true
    },
    [Chunk981631.KFR.WEBHOOK]: {
      [Chunk981631.zUn.TYPE]: true,
      [Chunk981631.zUn.APPLICATION_ID]: true
    },
    [Chunk981631.KFR.INTEGRATION]: {
      [Chunk981631.zUn.TYPE]: true
    },
    [Chunk981631.KFR.THREAD]: {
      [Chunk981631.zUn.ID]: true,
      [Chunk981631.zUn.TYPE]: true
    },
    [Chunk981631.KFR.STICKER]: {
      [Chunk981631.zUn.ID]: true,
      [Chunk981631.zUn.TYPE]: true,
      [Chunk981631.zUn.ASSET]: true,
      [Chunk981631.zUn.FORMAT_TYPE]: true,
      [Chunk981631.zUn.AVAILABLE]: true,
      [Chunk981631.zUn.GUILD_ID]: true
    },
    [Chunk981631.KFR.GUILD_HOME]: {
      [Chunk981631.zUn.ENTITY_TYPE]: true
    },
    [Chunk981631.KFR.GUILD_ONBOARDING]: {
      [Chunk981631.zUn.PROMPTS]: true
    },
    [Chunk981631.KFR.GUILD_SOUNDBOARD]: {
      [Chunk981631.zUn.ID]: true,
      [Chunk981631.zUn.SOUND_ID]: true
    }
  },
  Ag = () => [{
    value: Chunk981631.rsA.ALL,
    label: Chunk388032.intl.string(Chunk388032.t.QxEVcn),
    valueLabel: Chunk388032.intl.string(Chunk388032.t.an9Ry8)
  }, {
    value: Chunk981631.rsA.GUILD_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t["5INZa2"])
  }, {
    value: Chunk981631.rsA.CHANNEL_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["2uh4vL"])
  }, {
    value: Chunk981631.rsA.CHANNEL_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.mGsBLS)
  }, {
    value: Chunk981631.rsA.CHANNEL_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.hCHzAg)
  }, {
    value: Chunk981631.rsA.CHANNEL_OVERWRITE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["8TnAMD"])
  }, {
    value: Chunk981631.rsA.CHANNEL_OVERWRITE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.Jqx0Bg)
  }, {
    value: Chunk981631.rsA.CHANNEL_OVERWRITE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.gBXOr6)
  }, {
    value: Chunk981631.rsA.MEMBER_KICK,
    label: Chunk388032.intl.string(Chunk388032.t["Q1/hNz"])
  }, {
    value: Chunk981631.rsA.MEMBER_PRUNE,
    label: Chunk388032.intl.string(Chunk388032.t.tOTTjY)
  }, {
    value: Chunk981631.rsA.MEMBER_BAN_ADD,
    label: Chunk388032.intl.string(Chunk388032.t["NfPn+f"])
  }, {
    value: Chunk981631.rsA.MEMBER_BAN_REMOVE,
    label: Chunk388032.intl.string(Chunk388032.t.XCsGfH)
  }, {
    value: Chunk981631.rsA.MEMBER_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t["F/jmND"])
  }, {
    value: Chunk981631.rsA.MEMBER_ROLE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.zAveSE)
  }, {
    value: Chunk981631.rsA.MEMBER_MOVE,
    label: Chunk388032.intl.string(Chunk388032.t.QshteX)
  }, {
    value: Chunk981631.rsA.MEMBER_DISCONNECT,
    label: Chunk388032.intl.string(Chunk388032.t.Z45os7)
  }, {
    value: Chunk981631.rsA.BOT_ADD,
    label: Chunk388032.intl.string(Chunk388032.t.vuH24e)
  }, {
    value: Chunk981631.rsA.THREAD_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["+zl0DA"])
  }, {
    value: Chunk981631.rsA.THREAD_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.rbIry8)
  }, {
    value: Chunk981631.rsA.THREAD_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.hFjNEB)
  }, {
    value: Chunk981631.rsA.ROLE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.AbxKtr)
  }, {
    value: Chunk981631.rsA.ROLE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.t3Z6sb)
  }, {
    value: Chunk981631.rsA.ROLE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.YsFpa2)
  }, {
    value: Chunk981631.rsA.ONBOARDING_PROMPT_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.ZV9tqa)
  }, {
    value: Chunk981631.rsA.ONBOARDING_PROMPT_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.PcOdvb)
  }, {
    value: Chunk981631.rsA.ONBOARDING_PROMPT_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t["+r33NT"])
  }, {
    value: Chunk981631.rsA.ONBOARDING_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.uDADdX)
  }, {
    value: Chunk981631.rsA.ONBOARDING_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.J1H1ws)
  }, {
    value: Chunk981631.rsA.HOME_SETTINGS_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.Di4cvL)
  }, {
    value: Chunk981631.rsA.HOME_SETTINGS_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.tzyrJC)
  }, {
    value: Chunk981631.rsA.INVITE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["0BNJdX"])
  }, {
    value: Chunk981631.rsA.INVITE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t["o++obW"])
  }, {
    value: Chunk981631.rsA.INVITE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.iP40Aw)
  }, {
    value: Chunk981631.rsA.WEBHOOK_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["tBF4+f"])
  }, {
    value: Chunk981631.rsA.WEBHOOK_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.eV3McH)
  }, {
    value: Chunk981631.rsA.WEBHOOK_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.AAL3Ky)
  }, {
    value: Chunk981631.rsA.EMOJI_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.RuWm0d)
  }, {
    value: Chunk981631.rsA.EMOJI_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.WzdUY2)
  }, {
    value: Chunk981631.rsA.EMOJI_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.c3dK2N)
  }, {
    value: Chunk981631.rsA.MESSAGE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.daTfXl)
  }, {
    value: Chunk981631.rsA.MESSAGE_BULK_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.nrBxen)
  }, {
    value: Chunk981631.rsA.MESSAGE_PIN,
    label: Chunk388032.intl.string(Chunk388032.t.MUldyM)
  }, {
    value: Chunk981631.rsA.MESSAGE_UNPIN,
    label: Chunk388032.intl.string(Chunk388032.t.n4zKhI)
  }, {
    value: Chunk981631.rsA.INTEGRATION_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["deNm8/"])
  }, {
    value: Chunk981631.rsA.INTEGRATION_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.HT7Sfn)
  }, {
    value: Chunk981631.rsA.INTEGRATION_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t["+kJ09v"])
  }, {
    value: Chunk981631.rsA.STICKER_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["3DzNjY"])
  }, {
    value: Chunk981631.rsA.STICKER_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.tdhW5e)
  }, {
    value: Chunk981631.rsA.STICKER_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t["+ZhGOj"])
  }, {
    value: Chunk981631.rsA.STAGE_INSTANCE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.sPbjAw)
  }, {
    value: Chunk981631.rsA.STAGE_INSTANCE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.cW9LfH)
  }, {
    value: Chunk981631.rsA.STAGE_INSTANCE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t["U1r+yM"])
  }, {
    value: Chunk981631.rsA.GUILD_SCHEDULED_EVENT_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.H81Zy8)
  }, {
    value: Chunk981631.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.FM69l5)
  }, {
    value: Chunk981631.rsA.GUILD_SCHEDULED_EVENT_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.Rq28Bg)
  }, {
    value: Chunk981631.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.iPdFOj)
  }, {
    value: Chunk981631.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
    label: Chunk388032.intl.string(Chunk388032.t.gNq5z8)
  }, {
    value: Chunk981631.rsA.AUTO_MODERATION_RULE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.f72Zqa)
  }, {
    value: Chunk981631.rsA.AUTO_MODERATION_RULE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.XeqIio)
  }, {
    value: Chunk981631.rsA.AUTO_MODERATION_RULE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.syAApa)
  }, {
    value: Chunk981631.rsA.GUILD_HOME_FEATURE_ITEM,
    label: Chunk388032.intl.string(Chunk388032.t.lhG5KC)
  }, {
    value: Chunk981631.rsA.GUILD_HOME_REMOVE_ITEM,
    label: Chunk388032.intl.string(Chunk388032.t.lRPRwc)
  }, {
    value: Chunk981631.rsA.SOUNDBOARD_SOUND_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.yoRi5u)
  }, {
    value: Chunk981631.rsA.SOUNDBOARD_SOUND_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.uKlG0d)
  }, {
    value: Chunk981631.rsA.SOUNDBOARD_SOUND_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.gq0iCQ)
  }, {
    value: Chunk981631.rsA.VOICE_CHANNEL_STATUS_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.rGr0YG)
  }, {
    value: Chunk981631.rsA.VOICE_CHANNEL_STATUS_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.V9PEQ0)
  }];

function Ac(A, e) {
  return null != e.changes ? e.changes.find(e => e.key === A) : null
}

function Af(A, e) {
  return null != e.changes ? e.changes.filter(e => e.key === A) : []
}

function Av(A) {
  var e;
  let t = Ag().find(e => e.value === A.action);
  return null != Ac(j.zUn.COMMUNICATION_DISABLED_UNTIL, A) ? L.intl.string(L.t.z3wbj4) : null != (e = null == t ? true : t.label) ? e : null
}
let Ah = {
  [Chunk379649.J6.SECONDS]: A => L.intl.formatToPlainString(L.t.geSp4O, {
    seconds: A
  }),
  [Chunk379649.J6.MINUTES]: A => L.intl.formatToPlainString(L.t.iXLF9f, {
    minutes: A
  }),
  [Chunk379649.J6.HOURS]: A => L.intl.formatToPlainString(L.t.xCjYxM, {
    hours: A
  }),
  [Chunk379649.J6.DAYS]: A => L.intl.formatToPlainString(L.t.k2UNz8, {
    days: A
  })
};

function Au(A) {
  let e = Ac(j.zUn.COMMUNICATION_DISABLED_UNTIL, A),
    t = Af(j.zUn.ROLES_ADD, A).length > 0,
    n = Af(j.zUn.ROLES_REMOVE, A).length > 0;
  if (null != e) {
    if ((null == e ? true : e.newValue) != null) {
      let t = new Date(null == e ? true : e.newValue).getTime() - P.default.extractTimestamp(A.id),
        n = Math.round(t / 1e3 / 60),
        r = (0, c.CI)(n, S);
      if (null == r.unit || null == r.time) return null;
      if (r.unit in Ah) {
        let A = r.unit,
          e = r.unit === c.J6.SECONDS ? Math.round(t / 1e3) : r.time;
        return Ah[A](e)
      }
    } else if ((null == e ? true : e.oldValue) != null) return L.intl.string(L.t.MA1ltr)
  } else if (t && n) return L.intl.string(L.t.RdMMe3);
  else if (t) return L.intl.string(L.t["4GQqs7"]);
  else if (n) return L.intl.string(L.t["8mQ6x8"]);
  return null
}

function Ad(A) {
  let e = Af(j.zUn.ROLES_ADD, A),
    t = Af(j.zUn.ROLES_REMOVE, A),
    n = null == e ? true : e.map(A => {
      let {
        newValue: e
      } = A;
      return null == e ? true : e.map(A => {
        let {
          name: e
        } = A;
        return e
      }).join(", ")
    }).join(", "),
    r = null == t ? true : t.map(A => {
      let {
        newValue: e
      } = A;
      return null == e ? true : e.map(A => {
        let {
          name: e
        } = A;
        return e
      }).join(", ")
    }).join(", ");
  return e.length > 0 && t.length > 0 ? L.intl.formatToPlainString(L.t.tZw1ER, {
    roleNamesAdded: n,
    roleNamesRemoved: r
  }) : e.length > 0 ? L.intl.formatToPlainString(L.t["/mTqt7"], {
    roleNames: n
  }) : t.length > 0 ? L.intl.formatToPlainString(L.t.Wk4pAA, {
    roleNames: r
  }) : null
}

function AE(A) {
  switch (A.action) {
    case j.rsA.GUILD_UPDATE:
      return L.t.LjZO39;
    case j.rsA.CHANNEL_CREATE:
      let e = null != A.changes ? A.changes.find(A => A.key === j.zUn.TYPE) : null;
      if (null == e) throw Error("[AuditLog] Could not find type change for channel create");
      switch (e.newValue) {
        case j.d4z.GUILD_STAGE_VOICE:
          return L.t["OKp4+v"];
        case j.d4z.GUILD_VOICE:
          return L.t.NPOy4O;
        case j.d4z.GUILD_CATEGORY:
          return L.t.T3KIj4;
        default:
          return L.t.wrYNGx
      }
    case j.rsA.CHANNEL_UPDATE:
      return L.t.nTYk6O;
    case j.rsA.CHANNEL_DELETE:
      return L.t.ynfvkp;
    case j.rsA.CHANNEL_OVERWRITE_CREATE:
      return L.t.l5Cu1d;
    case j.rsA.CHANNEL_OVERWRITE_UPDATE:
      return L.t.uhtbNT;
    case j.rsA.CHANNEL_OVERWRITE_DELETE:
      return L.t["HASt//"];
    case j.rsA.MEMBER_KICK:
      return L.t.B5hDZW;
    case j.rsA.MEMBER_PRUNE:
      return L.t.qKOZTE;
    case j.rsA.MEMBER_BAN_ADD:
      return L.t.XklUm5;
    case j.rsA.MEMBER_BAN_REMOVE:
      return L.t.o3Y6HB;
    case j.rsA.MEMBER_UPDATE:
      return L.t.pznhLC;
    case j.rsA.MEMBER_ROLE_UPDATE:
      return L.t.VngfiY;
    case j.rsA.MEMBER_MOVE:
      return L.t.Yt6NkZ;
    case j.rsA.MEMBER_DISCONNECT:
      return L.t.K4eCZ2;
    case j.rsA.BOT_ADD:
      return L.t.fWvX0N;
    case j.rsA.ROLE_CREATE:
      return L.t.UTLTx8;
    case j.rsA.ROLE_UPDATE:
      return L.t.NRbN19;
    case j.rsA.ROLE_DELETE:
      return L.t["4s63tb"];
    case j.rsA.INVITE_CREATE:
      return L.t.YHOXW1;
    case j.rsA.INVITE_UPDATE:
      return L.t.ja3kGR;
    case j.rsA.INVITE_DELETE:
      return L.t["3n/iWl"];
    case j.rsA.WEBHOOK_CREATE:
      return L.t.MhYhio;
    case j.rsA.WEBHOOK_UPDATE:
      return L.t["6GTlWF"];
    case j.rsA.WEBHOOK_DELETE:
      return L.t.in0VjY;
    case j.rsA.EMOJI_CREATE:
      return L.t["7vekRE"];
    case j.rsA.EMOJI_UPDATE:
      return L.t.IsCKfn;
    case j.rsA.EMOJI_DELETE:
      return L.t.JnUaVF;
    case j.rsA.STICKER_CREATE:
      return L.t.DRZifn;
    case j.rsA.STICKER_UPDATE:
      return L.t.bhujGR;
    case j.rsA.STICKER_DELETE:
      return L.t.rGEP9f;
    case j.rsA.MESSAGE_DELETE:
      return L.t["HPkD+P"];
    case j.rsA.MESSAGE_BULK_DELETE:
      return L.t["3RIvLC"];
    case j.rsA.MESSAGE_PIN:
      return L.t.Yna7Ex;
    case j.rsA.MESSAGE_UNPIN:
      return L.t.NCxXUV;
    case j.rsA.INTEGRATION_CREATE:
      return L.t.HYvCb2;
    case j.rsA.INTEGRATION_UPDATE:
      return L.t.ibCCOT;
    case j.rsA.INTEGRATION_DELETE:
      return L.t["8zScWV"];
    case j.rsA.STAGE_INSTANCE_CREATE:
      return L.t["n7x/DA"];
    case j.rsA.STAGE_INSTANCE_UPDATE:
      return L.t["0hQYU1"];
    case j.rsA.STAGE_INSTANCE_DELETE:
      if (null != A.userId) return L.t["Oi/in5"];
      return L.t["7ZIFm5"];
    case j.rsA.GUILD_SCHEDULED_EVENT_CREATE:
      return L.t.S7k52t;
    case j.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
      return L.t.ebTK19;
    case j.rsA.GUILD_SCHEDULED_EVENT_DELETE:
      return L.t["/ARPKS"];
    case j.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case j.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return L.t["8qCI39"];
    case j.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return L.t.zYb2dX;
    case j.rsA.THREAD_CREATE:
      let t = null != A.changes ? A.changes.find(A => A.key === j.zUn.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for thread create");
      switch (t.newValue) {
        case j.d4z.PRIVATE_THREAD:
          return L.t["Br0y5+"];
        case j.d4z.ANNOUNCEMENT_THREAD:
          return L.t["6uaMmJ"];
        default:
          return L.t["2cxQ7O"]
      }
    case j.rsA.THREAD_UPDATE:
      return L.t.PSsy4u;
    case j.rsA.THREAD_DELETE:
      return L.t.s3Khn5;
    case j.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return L.t.uzCqBg;
    case j.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
      return L.t.NqWv2N;
    case j.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var n;
      if ((null == (n = A.options) ? true : n.auto_moderation_rule_trigger_type) === T.fX.USER_PROFILE.toString()) return L.t.YQsjen;
      return L.t.SD0PwM;
    case j.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return L.t.Vk4Twc;
    case j.rsA.AUTO_MODERATION_QUARANTINE_USER:
      return L.t["/W5u5u"];
    case j.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
      return L.t.ONvWys;
    case j.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return L.t.ryGLk5;
    case j.rsA.AUTO_MODERATION_RULE_CREATE:
      return L.t.NKljj4;
    case j.rsA.AUTO_MODERATION_RULE_UPDATE:
      return L.t["3wEA9v"];
    case j.rsA.AUTO_MODERATION_RULE_DELETE:
      return L.t.umua3t;
    case j.rsA.ONBOARDING_PROMPT_CREATE:
      return L.t["/8A1g4"];
    case j.rsA.ONBOARDING_PROMPT_UPDATE:
      return L.t.ArIrWF;
    case j.rsA.ONBOARDING_PROMPT_DELETE:
      return L.t.IuBTam;
    case j.rsA.ONBOARDING_CREATE:
      return L.t.wDaq39;
    case j.rsA.ONBOARDING_UPDATE:
      return L.t["yONu/v"];
    case j.rsA.HOME_SETTINGS_CREATE:
      return L.t.dSdCjI;
    case j.rsA.HOME_SETTINGS_UPDATE:
      return L.t.XHE8qq;
    case j.rsA.GUILD_HOME_FEATURE_ITEM:
      let r = null != A.changes ? A.changes.find(A => A.key === j.zUn.ENTITY_TYPE) : null;
      if (null == r) return L.t["UZ+U3N"];
      switch (r.newValue) {
        case s.w.MESSAGE:
          return L.t["PyEa+P"];
        case s.w.FORUM_POST:
          return L.t.hCuAb2;
        default:
          return L.t["UZ+U3N"]
      }
    case j.rsA.GUILD_HOME_REMOVE_ITEM:
      return L.t.kPReur;
    case j.rsA.SOUNDBOARD_SOUND_CREATE:
      return L.t["0PD83d"];
    case j.rsA.SOUNDBOARD_SOUND_UPDATE:
      return L.t.CM8n19;
    case j.rsA.SOUNDBOARD_SOUND_DELETE:
      return L.t["kVz4//"];
    case j.rsA.VOICE_CHANNEL_STATUS_CREATE:
      return L.t.MWjnU1;
    case j.rsA.VOICE_CHANNEL_STATUS_DELETE:
      return L.t.aS8Krq;
    case j.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
      return L.t.NUKUb2;
    case j.rsA.GUILD_PROFILE_UPDATE:
      return L.t.Ed6hFx;
    case j.rsA.GUILD_MIGRATE_PIN_PERMISSION:
      return L.t["3Ne7MD"];
    default:
      return null
  }
}

function AC(A) {
  switch (A) {
    case m.zZ.GUILD_FEED_REMOVED:
      return L.intl.string(L.t["5G8ZDw"]);
    case m.zZ.ACTIVE_CHANNELS_REMOVED:
      return L.intl.string(L.t["4YLtzM"]);
    case m.zZ.PINNED:
      return L.intl.string(L.t["1QLRYW"])
  }
  return null
}

function AB(A) {
  switch (A) {
    case m.zZ.GUILD_FEED_REMOVED:
      return L.intl.string(L.t.S5kuWV);
    case m.zZ.ACTIVE_CHANNELS_REMOVED:
      return L.intl.string(L.t["8qpgc3"]);
    case m.zZ.PINNED:
      return L.intl.string(L.t.CMweGB)
  }
  return null
}

function Aw(A, e) {
  switch (A) {
    case j.Plq.CREATE_INSTANT_INVITE:
      return L.intl.string(L.t.zJrgTE);
    case j.Plq.KICK_MEMBERS:
      return L.intl.string(L.t.pBNv6u);
    case j.Plq.BAN_MEMBERS:
      return L.intl.string(L.t.oTBA7O);
    case j.Plq.ADMINISTRATOR:
      return L.intl.string(L.t.PGvZqa);
    case j.Plq.MANAGE_CHANNELS:
      if (e.targetType === j.KFR.CHANNEL || e.targetType === j.KFR.CHANNEL_OVERWRITE) return L.intl.string(L.t.nAw15O);
      return L.intl.string(L.t["9qLtWl"]);
    case j.Plq.MANAGE_GUILD:
      return L.intl.string(L.t.QZRcfH);
    case j.Plq.VIEW_GUILD_ANALYTICS:
      return L.intl.string(L.t.rQJBEx);
    case j.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return L.intl.string(L.t["0lTLTk"]);
    case j.Plq.CHANGE_NICKNAME:
      return L.intl.string(L.t.dilOFx);
    case j.Plq.MANAGE_NICKNAMES:
      return L.intl.string(L.t["t+Ct5+"]);
    case j.Plq.MANAGE_ROLES:
      return L.intl.string(L.t["C8d+oK"]);
    case j.Plq.MANAGE_WEBHOOKS:
      return L.intl.string(L.t["/ADKmJ"]);
    case j.Plq.CREATE_GUILD_EXPRESSIONS:
      return L.intl.string(L.t.HarVuL);
    case j.Plq.MANAGE_GUILD_EXPRESSIONS:
      return L.intl.string(L.t.bbuXIi);
    case j.Plq.VIEW_AUDIT_LOG:
      return L.intl.string(L.t.fZgLpK);
    case j.Plq.VIEW_CHANNEL:
      if (e.targetType === j.KFR.CHANNEL || e.targetType === j.KFR.CHANNEL_OVERWRITE) return L.intl.string(L.t["W/A4Qk"]);
      return L.intl.string(L.t.uV83ys);
    case j.Plq.SEND_MESSAGES:
      return L.intl.string(L.t.T32rkJ);
    case j.Plq.SEND_TTS_MESSAGES:
      return L.intl.string(L.t.Mg7bkp);
    case j.Plq.USE_APPLICATION_COMMANDS:
      return L.intl.string(L.t.shbR1d);
    case j.Plq.MANAGE_MESSAGES:
      return L.intl.string(L.t["6lU9xM"]);
    case j.Plq.EMBED_LINKS:
      return L.intl.string(L.t["969dEB"]);
    case j.Plq.ATTACH_FILES:
      return L.intl.string(L.t["3AS4UF"]);
    case j.Plq.READ_MESSAGE_HISTORY:
      return L.intl.string(L.t.l9ufaW);
    case j.Plq.MENTION_EVERYONE:
      return L.intl.string(L.t.Y78KGB);
    case j.Plq.USE_EXTERNAL_EMOJIS:
      return L.intl.string(L.t.BpBGZW);
    case j.Plq.USE_EXTERNAL_STICKERS:
      return L.intl.string(L.t["UeRs+f"]);
    case j.Plq.ADD_REACTIONS:
      return L.intl.string(L.t.yEoJAg);
    case j.Plq.CONNECT:
      return L.intl.string(L.t.S0W8Z2);
    case j.Plq.SPEAK:
      return L.intl.string(L.t["8w1tIS"]);
    case j.Plq.MUTE_MEMBERS:
      return L.intl.string(L.t["8EI309"]);
    case j.Plq.DEAFEN_MEMBERS:
      return L.intl.string(L.t["9L47Fh"]);
    case j.Plq.MOVE_MEMBERS:
      return L.intl.string(L.t.YtjJPT);
    case j.Plq.USE_VAD:
      return L.intl.string(L.t["08zAV1"]);
    case j.Plq.PRIORITY_SPEAKER:
      return L.intl.string(L.t.BVK71t);
    case j.Plq.STREAM:
      return L.intl.string(L.t.FlNoSU);
    case j.Plq.REQUEST_TO_SPEAK:
      return L.intl.string(L.t["5kicT0"]);
    case j.Plq.CREATE_EVENTS:
      return L.intl.string(L.t.qyjZub);
    case j.Plq.MANAGE_EVENTS:
      return L.intl.string(L.t.HIgA5e);
    case j.Plq.CREATE_PUBLIC_THREADS:
      return L.intl.string(L.t["25rKnZ"]);
    case j.Plq.CREATE_PRIVATE_THREADS:
      return L.intl.string(L.t.QwbTSU);
    case j.Plq.SEND_MESSAGES_IN_THREADS:
      return L.intl.string(L.t.fTE74u);
    case j.Plq.MANAGE_THREADS:
      return L.intl.string(L.t.kEqgr6);
    case j.Plq.MODERATE_MEMBERS:
      return L.intl.string(L.t["+RL6p6"]);
    case j.Plq.SET_VOICE_CHANNEL_STATUS:
      return L.intl.string(L.t.VBwkUV);
    case j.Plq.SEND_POLLS:
      return L.intl.string(L.t.UMQ7W1);
    case j.Plq.USE_EXTERNAL_APPS:
      return L.intl.string(L.t.TtA5rK);
    case j.Plq.PIN_MESSAGES:
      return L.intl.string(L.t.Y5BI39)
  }
  return null
}

function AD(A, e) {
  let t = [];
  return A.forEach(A => {
    let n = function(A, e) {
        switch (A.targetType) {
          case j.KFR.GUILD:
          case j.KFR.GUILD_HOME:
          case j.KFR.GUILD_PROFILE:
            return e;
          case j.KFR.CHANNEL:
          case j.KFR.CHANNEL_OVERWRITE:
            return AH(A, j.zUn.NAME, A => M.Z.getChannel(A), A => (0, v.F6)(A, H.default, I.Z, true));
          case j.KFR.USER:
            return AH(A, j.zUn.NICK, A => H.default.getUser(A), A => A);
          case j.KFR.ROLE:
            return AH(A, j.zUn.NAME, A => p.Z.getRole(e.id, A), A => A.name);
          case j.KFR.ONBOARDING_PROMPT:
            let t = AH(A, j.zUn.ID, A => E.Z.getOnboardingPrompt(A), A => A.title);
            return null == t || "" === t ? L.intl.string(L.t.ZNQyiY) : t;
          case j.KFR.GUILD_ONBOARDING:
          case j.KFR.GUILD_MEMBER_VERIFICATION:
            return e;
          case j.KFR.INVITE:
            return AH(A, j.zUn.CODE, j.VqG);
          case j.KFR.INTEGRATION:
            return AH(A, j.zUn.TYPE, A => V.Z.integrations.find(e => e.id === A), A => A.name);
          case j.KFR.WEBHOOK:
            return AH(A, j.zUn.NAME, A => V.Z.webhooks.find(e => e.id === A), A => A.name);
          case j.KFR.EMOJI:
            return AH(A, j.zUn.NAME, A => u.ZP.getGuildEmoji(e.id).find(e => e.id === A), A => A.name);
          case j.KFR.STICKER:
            return AH(A, j.zUn.NAME, A => w.Z.getStickerById(A), A => A.name);
          case j.KFR.STAGE_INSTANCE:
            return AH(A, j.zUn.TOPIC, A => {
              var t;
              return null == (t = Object.values(B.Z.getStageInstancesByGuild(e.id))) ? true : t.find(e => e.id === A)
            }, A => A.topic);
          case j.KFR.GUILD_SCHEDULED_EVENT:
          case j.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return AH(A, j.zUn.NAME, A => V.Z.guildScheduledEvents.find(e => e.id === A), A => A.name);
          case j.KFR.THREAD:
            return AH(A, j.zUn.NAME, A => V.Z.threads.find(e => e.id === A), A => A.name);
          case j.KFR.APPLICATION_COMMAND:
            if (A.targetId === A.options.application_id) {
              let e = V.Z.integrations.find(e => {
                var t;
                return (null == (t = e.application) ? true : t.id) === A.targetId
              });
              if (null != e) return e.name;
              return A.targetId
            }
            return AH(A, j.zUn.NAME, A => V.Z.applicationCommands.find(e => e.id === A), A => {
              let e = null != A.name_localized && "" !== A.name_localized ? A.name_localized : A.name;
              return A.type === f.yU.CHAT ? "/⁠".concat(e) : e
            });
          case j.KFR.AUTO_MODERATION_RULE:
            return AH(A, j.zUn.NAME, A => V.Z.automodRules.find(e => e.id === A), A => A.name);
          case j.KFR.GUILD_SOUNDBOARD:
            return AH(A, j.zUn.NAME, j.VqG);
          case j.KFR.HOME_SETTINGS:
            return AH(A, j.zUn.GUILD_ID, A => C.Z.getSettings(A), () => L.intl.string(L.t.VbpLyc), e.id);
          case j.KFR.VOICE_CHANNEL_STATUS:
            return AH(A, j.zUn.STATUS, A => M.Z.getChannel(A), A => (0, v.F6)(A, H.default, I.Z, true));
          default:
            return Z.warn("Unknown targetType for log", A), null
        }
      }(A, e),
      l = H.default.getUser(A.userId);
    if (null != n || [j.rsA.MEMBER_PRUNE, j.rsA.MEMBER_DISCONNECT, j.rsA.MEMBER_MOVE, j.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, j.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(A.action)) {
      if (null != (A = (A = (A = A.set("user", l)).set("target", n)).set("options", function(A) {
          if (null != A.options) {
            let t = x({}, A.options);
            switch (A.options.type) {
              case j.jwA.USER:
                t.subtarget = Ab(A.options.id, A => H.default.getUser(A), A => A.tag);
                break;
              case j.jwA.ROLE:
                t.subtarget = Ab(A.options.role_name, j.VqG)
            }
            if (null != A.options.channel_id && (t.channel = AH(A, "", A => M.Z.getChannel(A), A => A, A.options.channel_id)), null != A.options.members_removed && 0 !== A.options.members_removed && (t.count = A.options.members_removed), null != A.options.event_exception_id) {
              var e;
              let n = V.Z.guildScheduledEvents.find(e => e.id === A.targetId),
                r = null == n ? true : n.guild_scheduled_event_exceptions.find(e => e.event_exception_id === A.options.event_exception_id);
              t.subtarget = (0, b.vc)(i()(P.default.extractTimestamp(null != (e = null == r ? true : r.event_exception_id) ? e : "0")), "LL")
            }
            return t
          }
          return A.options
        }(A))).changes) {
        let t = [];
        A.changes.forEach(n => {
          let l = function(A, e, t) {
            if (e.action === j.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let e = A.newValue || A.oldValue;
              switch (e.type) {
                case j.ecB.ROLE:
                  A.subtarget = Ab(e.id, A => p.Z.getRole(t.id, A), A => A.name);
                  break;
                case j.ecB.USER:
                  A.subtarget = Ab(e.id, A => H.default.getUser(A), A => A.tag);
                  break;
                case j.ecB.CHANNEL:
                  e.id === r()(t.id).subtract(1).toString() ? A.subtarget = L.intl.string(L.t.MSYhgo) : A.subtarget = Ab(e.id, A => M.Z.getChannel(A), A => (0, v.F6)(A, H.default, I.Z, true))
              }
              return A
            }
            switch (A.key) {
              case j.zUn.OWNER_ID:
                return AI(A, A => H.default.getUser(A));
              case j.zUn.CHANNEL_ID:
              case j.zUn.AFK_CHANNEL_ID:
              case j.zUn.SYSTEM_CHANNEL_ID:
              case j.zUn.RULES_CHANNEL_ID:
              case j.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                return AI(A, A => M.Z.getChannel(A), A => (0, v.F6)(A, H.default, I.Z, true));
              case j.zUn.AFK_TIMEOUT:
                return AI(A, A => A / 60);
              case j.zUn.BITRATE:
                return AI(A, A => A / 1e3);
              case j.zUn.COLOR:
                return AI(A, A => (0, g.Rf)(A).toUpperCase());
              case j.zUn.THEME_COLORS:
                return AI(A, A => "".concat((0, g.Rf)(A[0]).toUpperCase(), ", ").concat((0, g.Rf)(A[1]).toUpperCase()));
              case j.zUn.MAX_AGE:
                return AI(A, A => {
                  let e = O.ZP.getMaxAgeOptions.find(e => {
                    let {
                      value: t
                    } = e;
                    return A === t
                  });
                  return e ? e.label : A
                });
              case j.zUn.PERMISSIONS: {
                let e = [],
                  {
                    added: t,
                    removed: n
                  } = AM(A.oldValue, A.newValue);
                if (t.length > 0) {
                  let A = new D.ms(j.zUn.PERMISSIONS_GRANTED, null, t);
                  e.push(A)
                }
                if (n.length > 0) {
                  let A = new D.ms(j.zUn.PERMISSIONS_DENIED, null, n);
                  e.push(A)
                }
                return e
              }
              case j.zUn.PERMISSIONS_GRANTED:
              case j.zUn.PERMISSIONS_DENIED: {
                let e = [],
                  {
                    added: t,
                    removed: n
                  } = AM(A.oldValue, A.newValue);
                if (t.length > 0) {
                  let n = new D.ms(A.key, null, t);
                  e.push(n)
                }
                if (n.length > 0) {
                  let A = new D.ms(j.zUn.PERMISSIONS_RESET, n, n);
                  e.push(A)
                }
                return e
              }
              case j.zUn.FLAGS: {
                let e = [],
                  {
                    added: t,
                    removed: n
                  } = function(A, e) {
                    let t = "number" == typeof A ? A : 0,
                      n = "number" == typeof e ? e : 0,
                      r = Q.Ge(n, t),
                      l = Q.Ge(t, n),
                      i = [],
                      s = [];
                    for (let A in m.zZ) {
                      let e = m.zZ[A];
                      Q.yE(r, e) && i.push(e), Q.yE(l, e) && s.push(e)
                    }
                    return {
                      added: i,
                      removed: s
                    }
                  }(A.oldValue, A.newValue);
                if (t.length > 0) {
                  let n = new D.ms(A.key, null, t);
                  e.push(n)
                }
                if (n.length > 0) {
                  let t = new D.ms(A.key, n, null);
                  e.push(t)
                }
                return e
              }
              case j.zUn.PREFERRED_LOCALE:
                return AI(A, A => {
                  let e = (0, L.getAvailableLocales)().find(e => e.value === A);
                  return null != e ? e.name : null
                });
              case j.zUn.VIDEO_QUALITY_MODE:
                return AI(A, A => A === j.Ucd.FULL ? L.intl.string(L.t["7jOoJC"]) : L.intl.string(L.t.jjKYpq));
              case j.zUn.SYSTEM_CHANNEL_FLAGS:
                let n = {
                    [j.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: j.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                    [j.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: j.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                    [j.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: j.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                    [j.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: j.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                  },
                  l = [];
                return Object.values(j.xmn).forEach(e => {
                  let t = (A.oldValue & e) === e,
                    r = (A.newValue & e) === e;
                  if (t === r) return;
                  let i = new D.ms(n[e], !t, !r);
                  l.push(i)
                }), l;
              case j.zUn.AUTO_MODERATION_ACTIONS:
                if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return AI(A, A => A.map(A => A.type), A => A.map(d.ZF).join(", "));
                break;
              case j.zUn.AUTO_MODERATION_EVENT_TYPE:
                if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return AI(A, d.YN);
                break;
              case j.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return AI(A, d.Ar);
                break;
              case j.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return AI(A, A => null != A && "object" == typeof A ? null != A.keyword_filter && Array.isArray(A.keyword_filter) ? L.intl.formatToMarkdownString(L.t.y91UXV, {
                  newValue: A.keyword_filter.map(A => "'".concat(A, "'")).join(", ")
                }) : JSON.stringify(A) : A);
                break;
              case j.zUn.AUTO_MODERATION_ADD_KEYWORDS:
              case j.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
              case j.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case j.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case j.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
              case j.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return AI(A, A => null != A && Array.isArray(A) ? A.map(A => "'".concat(A, "'")).join(", ") : JSON.stringify(A));
                break;
              case j.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return AI(A, A => A.map(M.Z.getChannel).filter(A => null != A).map(A => (0, v.F6)(A, H.default, I.Z, true)), A => null != A && A.length > 0 ? A.join(", ") : L.intl.string(L.t["K/EdV1"]));
                break;
              case j.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                if (e.targetType === j.KFR.AUTO_MODERATION_RULE) return AI(A, A => A.map(A => p.Z.getRole(t.id, A)).filter(A => null != A).map(A => A.name), A => null != A && A.length > 0 ? A.join(", ") : L.intl.string(L.t["K/EdV1"]));
                break;
              case j.zUn.AVAILABLE_TAGS:
                return function(A) {
                  let {
                    oldValue: e,
                    newValue: t
                  } = A, n = Array.isArray(e) ? e : [], r = Array.isArray(t) ? t : [];
                  if (0 === n.length && 0 === r.length) return A;
                  let l = {},
                    i = {};
                  if (n.forEach(A => {
                      l[A.id] = A
                    }), r.forEach(A => {
                      i[A.id] = A
                    }), n.length < r.length) {
                    for (let A in i)
                      if (null == l[A]) return new D.ms(j.zUn.AVAILABLE_TAG_ADD, null, Ap(i[A]))
                  }
                  if (n.length > r.length) {
                    for (let A in l)
                      if (null == i[A]) return new D.ms(j.zUn.AVAILABLE_TAG_DELETE, null, Ap(l[A]))
                  }
                  for (let A in l) {
                    let e = l[A],
                      t = i[A];
                    if ((null == t ? true : t.name) !== e.name || (null == t ? true : t.emoji_id) !== e.emoji_id || (null == t ? true : t.emoji_name) !== e.emoji_name) return new D.ms(j.zUn.AVAILABLE_TAG_EDIT, Ap(e), Ap(t))
                  }
                  return A
                }(A);
              case j.zUn.SCHEDULED_START_TIME:
              case j.zUn.SCHEDULED_END_TIME:
                return AI(A, A => (0, b.vc)(i()(new Date(A)), "LLLL"))
            }
            return A
          }(n, A, e);
          Array.isArray(l) ? l.forEach(A => t.push(A)) : t.push(l)
        }), A = A.set("changes", t)
      }
      t.push(A)
    }
  }), t
}

function AM(A, e) {
  let t = o.vB("string" == typeof A ? A : 0),
    n = o.vB("string" == typeof e ? e : 0),
    r = o.Od(n, t),
    l = o.Od(t, n),
    i = [],
    s = [];
  for (let A in j.Plq) {
    let e = j.Plq[A];
    o.e$(r, e) && i.push(e), o.e$(l, e) && s.push(e)
  }
  return {
    added: i,
    removed: s
  }
}

function Ap(A) {
  return null == A ? null : {
    id: A.id,
    name: A.name,
    emojiId: 0 !== A.emoji_id ? A.emoji_id : true,
    emojiName: A.emoji_name,
    moderated: A.moderated
  }
}

function AI(A, e, t) {
  let n = A.newValue,
    r = A.oldValue;
  return null != A.newValue && (n = e(A.newValue), null != t && null != n && (n = t(n))), null != A.oldValue && (r = e(A.oldValue), null != t && null != r && (r = t(r))), new D.ms(A.key, r || A.oldValue, n || A.newValue)
}

function AH(A, e, t, n, r) {
  let l = null,
    i = t(r = null != r ? r : A.targetId);
  if (null != i && null != n && (l = n(i)), null == l) {
    let e = V.Z.deletedTargets[A.targetType];
    null != e && null != e[r] && (l = e[r])
  }
  if (null == l && null != A.changes) {
    let t = A.changes.find(A => A.key === e);
    null != t && (l = t.newValue || t.oldValue)
  }
  return null != l ? l : r
}

function Ab(A, e, t) {
  let n = A,
    r = e(A);
  return null != r && null != t && (n = t(r)), n
}

function AQ(A, e) {
  return t => null == t.oldValue ? A : e
}

function AO(A, e) {
  return t => null == t.newValue ? A : e
}

function AP(A, e, t, n) {
  return r => null != r.newValue && null != r.oldValue ? A : null != r.newValue ? e : null != r.oldValue ? t : n
}

function AV(A, e) {
  return t => t.newValue ? A : e
}

function Aj(A) {
  return e => A[e.newValue]
}

function Am(A, e) {
  return t => {
    var n;
    return null != (n = A[t.newValue]) ? n : e
  }
}