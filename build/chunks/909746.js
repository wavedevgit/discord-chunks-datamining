/** Chunk was on 66201 **/
/** chunk id: 909746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bq: () => J,
  C0: () => ei,
  C2: () => $,
  EN: () => K,
  F1: () => ea,
  HE: () => B,
  HN: () => q,
  Iv: () => ec,
  J5: () => eI,
  JA: () => es,
  K: () => Q,
  ML: () => V,
  N$: () => X,
  N5: () => em,
  QM: () => eT,
  V$: () => eE,
  _$: () => eh,
  cT: () => eN,
  em: () => eg,
  hQ: () => eO,
  hx: () => W,
  lR: () => Y,
  lU: () => Z,
  nm: () => e_,
  oD: () => H,
  pA: () => en,
  pY: () => z,
  pi: () => et,
  rK: () => el,
  uB: () => ee,
  vc: () => eu,
  vm: () => er,
  zT: () => eo
}), require("./415506.js"), require("./539854.js"), require("./49124.js");
var Chunk654861 = require("./654861.js"),
  l = require.n(Chunk654861),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
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

function y(e) {
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

function G(e, t) {
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
let k = new Chunk710845.Z("AuditLogUtils"),
  F = [Chunk379649.J6.DAYS, Chunk379649.J6.HOURS, Chunk379649.J6.MINUTES, Chunk379649.J6.SECONDS],
  w = () => ({
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3Cw"]
  }),
  z = () => y({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t.CkDiND,
    [Chunk981631.zUn.DESCRIPTION]: eL(Chunk388032.t.RP3Ey8, Chunk388032.t.QAVj1d),
    [Chunk981631.zUn.ICON_HASH]: () => Chunk388032.t.iLZ8Q0,
    [Chunk981631.zUn.SPLASH_HASH]: () => Chunk388032.t["4VV6dn"],
    [Chunk981631.zUn.DISCOVERY_SPLASH_HASH]: () => Chunk388032.t["2pds6u"],
    [Chunk981631.zUn.BANNER_HASH]: eL(Chunk388032.t.Cxq4zM, Chunk388032.t["H7eE//"]),
    [Chunk981631.zUn.OWNER_ID]: () => Chunk388032.t["8ltsLS"],
    [Chunk981631.zUn.REGION]: () => Chunk388032.t.X9r5KS,
    [Chunk981631.zUn.PREFERRED_LOCALE]: () => Chunk388032.t.UnXuDQ,
    [Chunk981631.zUn.AFK_CHANNEL_ID]: eL(Chunk388032.t.ClBuAw, Chunk388032.t["ms+xtL"]),
    [Chunk981631.zUn.AFK_TIMEOUT]: () => Chunk388032.t.q21fHR,
    [Chunk981631.zUn.SYSTEM_CHANNEL_ID]: eL(Chunk388032.t.H1VXaW, Chunk388032.t.XhtmxM),
    [Chunk981631.zUn.RULES_CHANNEL_ID]: eL(Chunk388032.t.OI6MGx, Chunk388032.t.lik3tL),
    [Chunk981631.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eL(Chunk388032.t.YxBKra, Chunk388032.t.Ehsnio),
    [Chunk981631.zUn.MFA_LEVEL]: eb({
      [Chunk981631.BpS.NONE]: Chunk388032.t.voaCCQ,
      [Chunk981631.BpS.ELEVATED]: Chunk388032.t.pRNVw8
    }),
    [Chunk981631.zUn.WIDGET_ENABLED]: eM(Chunk388032.t.ADIty8, Chunk388032.t.nf58VV),
    [Chunk981631.zUn.WIDGET_CHANNEL_ID]: eL(Chunk388032.t["6SBsDQ"], Chunk388032.t.deQ5wM),
    [Chunk981631.zUn.VERIFICATION_LEVEL]: eb({
      [Chunk981631.sFg.NONE]: Chunk388032.t.W27rsb,
      [Chunk981631.sFg.LOW]: Chunk388032.t["V8P+Pz"],
      [Chunk981631.sFg.MEDIUM]: Chunk388032.t.ERQFam,
      [Chunk981631.sFg.HIGH]: Chunk388032.t["83fN0t"],
      [Chunk981631.sFg.VERY_HIGH]: Chunk388032.t.PnkQJC
    }),
    [Chunk981631.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eb({
      [Chunk981631.bL.ALL_MESSAGES]: Chunk388032.t.LDi76O,
      [Chunk981631.bL.ONLY_MENTIONS]: Chunk388032.t["6K83bW"]
    }),
    [Chunk981631.zUn.VANITY_URL_CODE]: eL(Chunk388032.t.Zplsoq, Chunk388032.t.u6cArq),
    [Chunk981631.zUn.EXPLICIT_CONTENT_FILTER]: eb({
      [Chunk981631.lxg.DISABLED]: Chunk388032.t.fmOeLy,
      [Chunk981631.lxg.MEMBERS_WITHOUT_ROLES]: Chunk388032.t["4FghY2"],
      [Chunk981631.lxg.ALL_MEMBERS]: Chunk388032.t.olyrSk
    }),
    [Chunk981631.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eM(Chunk388032.t.rBT0sr, Chunk388032.t["gc+te3"]),
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => Chunk388032.t.YbouFB,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => Chunk388032.t.g3DMjI,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => Chunk388032.t["+fQAen"],
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => Chunk388032.t.E1fc4u,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => Chunk388032.t.XbwtSE
  }, w()),
  V = () => ({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.f8Rh0d, Chunk388032.t.ebD4Qk),
    [Chunk981631.zUn.POSITION]: eD(Chunk388032.t.isS8tb, Chunk388032.t.t5uBio),
    [Chunk981631.zUn.TOPIC]: eU(Chunk388032.t.esQcxs, Chunk388032.t["m+veAg"], Chunk388032.t["ws/1FB"]),
    [Chunk981631.zUn.BITRATE]: eD(Chunk388032.t.fw81am, Chunk388032.t.MFNlgY),
    [Chunk981631.zUn.RTC_REGION_OVERRIDE]: eU(Chunk388032.t["6kajx8"], Chunk388032.t.eGOlmZ, Chunk388032.t["0JMZd3"]),
    [Chunk981631.zUn.USER_LIMIT]: eD(Chunk388032.t.wk5t7u, Chunk388032.t.XgjCEh),
    [Chunk981631.zUn.RATE_LIMIT_PER_USER]: eD(Chunk388032.t["7lirhI"], Chunk388032.t.j4CCJS),
    [Chunk981631.zUn.PERMISSIONS_RESET]: () => Chunk388032.t["+vSBFR"],
    [Chunk981631.zUn.PERMISSIONS_GRANTED]: () => Chunk388032.t.EKLJv7,
    [Chunk981631.zUn.PERMISSIONS_DENIED]: () => Chunk388032.t.U3rO5e,
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3Cw"],
    [Chunk981631.zUn.NSFW]: eM(Chunk388032.t.H8Ri2d, Chunk388032.t.WW6cJy),
    [Chunk981631.zUn.TYPE]: eD(Chunk388032.t.Vn5zn5, Chunk388032.t.aq4uWF),
    [Chunk981631.zUn.VIDEO_QUALITY_MODE]: eD(Chunk388032.t.e68fAQ, Chunk388032.t.djbES0),
    [Chunk981631.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(Chunk388032.t.nYz2mp, Chunk388032.t.oczvRE),
    [Chunk981631.zUn.FLAGS]: () => Chunk388032.t.ImCQkp,
    [Chunk981631.zUn.AVAILABLE_TAG_ADD]: () => Chunk388032.t.H86QQU,
    [Chunk981631.zUn.AVAILABLE_TAG_EDIT]: () => Chunk388032.t.YtUzlp,
    [Chunk981631.zUn.AVAILABLE_TAG_DELETE]: () => Chunk388032.t["8QOsen"],
    [Chunk981631.zUn.LINKED_LOBBY]: eL(Chunk388032.t["+/3TkJ"], Chunk388032.t["5kDYS0"])
  }),
  Z = () => y({
    [Chunk981631.zUn.NICK]: eU(Chunk388032.t.qXDsHh, Chunk388032.t["m+qur6"], Chunk388032.t.DvLvjI),
    [Chunk981631.zUn.DEAF]: eM(Chunk388032.t.mArLlZ, Chunk388032.t.ddvVYG),
    [Chunk981631.zUn.MUTE]: eM(Chunk388032.t["bxs/lZ"], Chunk388032.t.FjecQE),
    [Chunk981631.zUn.ROLES_REMOVE]: () => Chunk388032.t["+2SDWV"],
    [Chunk981631.zUn.ROLES_ADD]: () => Chunk388032.t["B3/3IC"],
    [Chunk981631.zUn.PRUNE_DELETE_DAYS]: () => Chunk388032.t["+Cvc+P"],
    [Chunk981631.zUn.COMMUNICATION_DISABLED_UNTIL]: eU(Chunk388032.t.LXTQr6, Chunk388032.t.LXTQr6, Chunk388032.t.ULSdnJ),
    [Chunk981631.zUn.BYPASSES_VERIFICATION]: eM(Chunk388032.t.NBPBur, Chunk388032.t.zATosr),
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => Chunk388032.t.YbouFB
  }, w()),
  B = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.QBmlaG, Chunk388032.t.Lfs4r6),
    [Chunk981631.zUn.DESCRIPTION]: eD(Chunk388032.t.XeYKWF, Chunk388032.t.PSfeIi),
    [Chunk981631.zUn.PERMISSIONS_GRANTED]: () => Chunk388032.t["9i/DvL"],
    [Chunk981631.zUn.PERMISSIONS_DENIED]: () => Chunk388032.t.pa1ZVl,
    [Chunk981631.zUn.COLOR]: ev({
      "#000000": Chunk388032.t.TK6E1N
    }, Chunk388032.t["2FQFi4"]),
    [Chunk981631.zUn.COLORS]: e => null == e.newValue.secondary_color ? j.t.U44ttr : j.t.WnSwLy,
    [Chunk981631.zUn.HOIST]: eM(Chunk388032.t.gWfe29, Chunk388032.t["+tb8kJ"]),
    [Chunk981631.zUn.MENTIONABLE]: eM(Chunk388032.t.LL8VFB, Chunk388032.t.Z7xzmJ),
    [Chunk981631.zUn.ICON_HASH]: () => Chunk388032.t["iEE79/"],
    [Chunk981631.zUn.UNICODE_EMOJI]: () => Chunk388032.t.KiLMMz
  }, w()),
  H = () => G(y({}, w()), {
    [Chunk981631.zUn.TITLE]: eD(Chunk388032.t.sNpuy8, Chunk388032.t["3Ukc/v"]),
    [Chunk981631.zUn.DESCRIPTION]: eD(Chunk388032.t.PP1q09, Chunk388032.t.z7pYLi),
    [Chunk981631.zUn.OPTIONS]: () => Chunk388032.t["3G5C9/"],
    [Chunk981631.zUn.SINGLE_SELECT]: eM(Chunk388032.t.v4WnR0, Chunk388032.t["6Qg3uL"]),
    [Chunk981631.zUn.REQUIRED]: eM(Chunk388032.t["0MPAMz"], Chunk388032.t.pwsXio)
  }),
  K = () => G(y({}, w()), {
    [Chunk981631.zUn.DEFAULT_CHANNEL_IDS]: () => Chunk388032.t["8M+D2t"],
    [Chunk981631.zUn.ENABLE_DEFAULT_CHANNELS]: eM(Chunk388032.t["EYd/lp"], Chunk388032.t["36OZeX"]),
    [Chunk981631.zUn.ENABLE_ONBOARDING_PROMPTS]: eM(Chunk388032.t.V3u8PT, Chunk388032.t.r66lc3),
    [Chunk981631.zUn.ENABLED]: eM(Chunk388032.t.SODVIi, Chunk388032.t.u8HY5e)
  }),
  W = () => G(y({}, w()), {
    [Chunk981631.zUn.WELCOME_MESSAGE]: () => Chunk388032.t.dKQ1xc,
    [Chunk981631.zUn.NEW_MEMBER_ACTIONS]: () => Chunk388032.t.jDUInp,
    [Chunk981631.zUn.RESOURCE_CHANNELS]: () => Chunk388032.t.SIX0mp
  }),
  q = () => y({
    [Chunk981631.zUn.CODE]: () => Chunk388032.t.rrRHgY,
    [Chunk981631.zUn.CHANNEL_ID]: () => Chunk388032.t.Q1vd5u,
    [Chunk981631.zUn.MAX_USES]: ev({
      0: Chunk388032.t.Yx8LNj
    }, Chunk388032.t["3ygnwc"]),
    [Chunk981631.zUn.MAX_AGE]: ev({
      [Chunk388032.intl.string(Chunk388032.t.PqEzn5)]: Chunk388032.t.uWrLv7
    }, Chunk388032.t["Q+5kcH"]),
    [Chunk981631.zUn.TEMPORARY]: eM(Chunk388032.t.MWp6Hx, Chunk388032.t.omiqTE),
    [Chunk981631.zUn.FLAGS]: eb({
      [Chunk533800.$.IS_GUEST_INVITE]: Chunk388032.t.XYZMbG
    })
  }, w()),
  Y = () => ({
    [Chunk981631.zUn.CHANNEL_ID]: eD(Chunk388032.t.jhPpra, Chunk388032.t.ar4qYG),
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.ZVGrzc, Chunk388032.t.tywdZW),
    [Chunk981631.zUn.AVATAR_HASH]: () => Chunk388032.t.KB52Ul,
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3Cw"]
  }),
  X = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.ahU1o6, Chunk388032.t["wxs+vb"])
  }, w()),
  J = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.cdl0Ym, Chunk388032.t.o3W2l5),
    [Chunk981631.zUn.TAGS]: eD(Chunk388032.t["zwL+S0"], Chunk388032.t.VYfKAw),
    [Chunk981631.zUn.DESCRIPTION]: eD(Chunk388032.t.XeYKWF, Chunk388032.t.PSfeIi)
  }, w()),
  Q = () => y({
    [Chunk981631.zUn.ENABLE_EMOTICONS]: eM(Chunk388032.t["FI0m5+"], Chunk388032.t.olpKCw),
    [Chunk981631.zUn.EXPIRE_BEHAVIOR]: eb({
      0: Chunk388032.t["1Bb1+v"],
      1: Chunk388032.t.vjlW6u
    }),
    [Chunk981631.zUn.EXPIRE_GRACE_PERIOD]: () => Chunk388032.t.iovXMT
  }, w()),
  $ = () => y({
    [Chunk981631.zUn.TOPIC]: eD(Chunk388032.t["m+veAg"], Chunk388032.t.esQcxs),
    [Chunk981631.zUn.PRIVACY_LEVEL]: eb({
      [Chunk765305.j8.GUILD_ONLY]: Chunk388032.t["EC+CDg"],
      [Chunk765305.j8.PUBLIC]: Chunk388032.t["pK/WGx"]
    })
  }, w()),
  ee = () => y({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t["21EXHR"],
    [Chunk981631.zUn.DESCRIPTION]: () => Chunk388032.t.Vm1of3,
    [Chunk981631.zUn.PRIVACY_LEVEL]: eb({
      [Chunk765305.j8.GUILD_ONLY]: Chunk388032.t["EC+CDg"],
      [Chunk765305.j8.PUBLIC]: Chunk388032.t["pK/WGx"]
    }),
    [Chunk981631.zUn.STATUS]: eb({
      [Chunk765305.p1.SCHEDULED]: Chunk388032.t.hXKDgo,
      [Chunk765305.p1.ACTIVE]: Chunk388032.t.lRX1n5,
      [Chunk765305.p1.COMPLETED]: Chunk388032.t["/eFIho"],
      [Chunk765305.p1.CANCELED]: Chunk388032.t.NWIYho
    }),
    [Chunk981631.zUn.ENTITY_TYPE]: eb({
      [Chunk765305.WX.NONE]: Chunk388032.t["6sO3Sk"],
      [Chunk765305.WX.STAGE_INSTANCE]: Chunk388032.t["Wo+s19"],
      [Chunk765305.WX.VOICE]: Chunk388032.t.XCVaIC,
      [Chunk765305.WX.EXTERNAL]: Chunk388032.t.IvhAj4
    }),
    [Chunk981631.zUn.CHANNEL_ID]: eL(Chunk388032.t.yJBIcX, Chunk388032.t["+PqSsr"]),
    [Chunk981631.zUn.LOCATION]: eL(Chunk388032.t.GaMBHx, Chunk388032.t.PsICk5),
    [Chunk981631.zUn.IMAGE_HASH]: eL(Chunk388032.t.S3vcRE, Chunk388032.t.KQu47O)
  }, w()),
  et = () => y({
    [Chunk981631.zUn.SCHEDULED_START_TIME]: eL(Chunk388032.t.zMIYVl, Chunk388032.t.fzF8GR),
    [Chunk981631.zUn.SCHEDULED_END_TIME]: eL(Chunk388032.t.vONSQE, Chunk388032.t.IlIti4),
    [Chunk981631.zUn.IS_CANCELED]: e => {
      if (null != e.oldValue || true === e.newValue) {
        if (!e.oldValue && e.newValue) return j.t["7RkicX"];
        else if (e.oldValue && !e.newValue) return j.t.dRNTWV
      }
    }
  }, w()),
  en = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.tUKRzc, Chunk388032.t.kPCHOD),
    [Chunk981631.zUn.ARCHIVED]: eM(Chunk388032.t.jDi9FB, Chunk388032.t.F6dvbW),
    [Chunk981631.zUn.LOCKED]: eM(Chunk388032.t.JSy1QU, Chunk388032.t.C7Jgo6),
    [Chunk981631.zUn.INVITABLE]: eM(Chunk388032.t.dxNUs7, Chunk388032.t.biJvYG),
    [Chunk981631.zUn.AUTO_ARCHIVE_DURATION]: eD(Chunk388032.t.LuaG39, Chunk388032.t["18d9qq"]),
    [Chunk981631.zUn.RATE_LIMIT_PER_USER]: eD(Chunk388032.t["7lirhI"], Chunk388032.t.j4CCJS),
    [Chunk981631.zUn.FLAGS]: () => Chunk388032.t.sSAQtr
  }, w()),
  er = e => {
    let t = y({}, w());
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = () => j.t["JH+89P"] : t[e.key] = () => j.t.HUrFDg : t[e.key] = () => j.t.vynxnZ
    }), t
  },
  el = () => y({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t.XwxAJS,
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => Chunk388032.t.fx0pys,
    [Chunk981631.zUn.AUTO_MODERATION_EVENT_TYPE]: () => Chunk388032.t["46Y+Ly"],
    [Chunk981631.zUn.AUTO_MODERATION_ACTIONS]: () => Chunk388032.t["8efxfn"],
    [Chunk981631.zUn.AUTO_MODERATION_ENABLED]: e => {
      var t;
      returntrue === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxCw : j.t.Wrg9Ji
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
  }, w()),
  ei = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.VOtRSE, Chunk388032.t.OK7B8P),
    [Chunk981631.zUn.VOLUME]: eD(Chunk388032.t.igrDBw, Chunk388032.t.L5lDFB),
    [Chunk981631.zUn.EMOJI_NAME]: eU(Chunk388032.t.IIanaW, Chunk388032.t.z4w4U1, Chunk388032.t.V8Tfyc),
    [Chunk981631.zUn.EMOJI_ID]: eU(Chunk388032.t.ainxMD, Chunk388032.t["2NPsYm"], Chunk388032.t["8crtnp"])
  }, w()),
  es = () => y({
    [Chunk981631.zUn.VERIFICATION_ENABLED]: e => true === e.newValue ? j.t.fnkzDQ : j.t.WYT6kZ,
    [Chunk981631.zUn.MANUAL_APPROVAL_ENABLED]: e => true === e.newValue ? j.t.jzSvVV : j.t.WxyOtr
  }, w()),
  ea = () => y({
    [Chunk981631.zUn.STATUS]: () => Chunk388032.t.HyCSnJ
  }, w()),
  eo = () => ({
    [Chunk981631.zUn.DESCRIPTION]: () => Chunk388032.t.nsUZKS,
    [Chunk981631.zUn.BRAND_COLOR_PRIMARY]: () => Chunk388032.t.qe9mgI,
    [Chunk981631.zUn.CUSTOM_BANNER_HASH]: () => Chunk388032.t["04b5KC"],
    [Chunk981631.zUn.TRAITS]: () => Chunk388032.t.dEy9WF,
    [Chunk981631.zUn.GAME_APPLICATION_IDS]: () => Chunk388032.t["8BOT39"],
    [Chunk981631.zUn.VISIBILITY]: () => Chunk388032.t.bCl1Eh,
    [Chunk981631.zUn.SERVER_TAG]: eL(Chunk388032.t.ix1dnZ, Chunk388032.t["4LKpKS"])
  }),
  eu = {
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
  ec = () => [{
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

function eE(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function ed(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function e_(e) {
  var t;
  let n = ec().find(t => t.value === e.action);
  return null != eE(b.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj4) : null != (t = null == n ? true : n.label) ? t : null
}
let eA = {
  [Chunk379649.J6.SECONDS]: e => j.intl.formatToPlainString(j.t.geSp4O, {
    seconds: e
  }),
  [Chunk379649.J6.MINUTES]: e => j.intl.formatToPlainString(j.t.iXLF9f, {
    minutes: e
  }),
  [Chunk379649.J6.HOURS]: e => j.intl.formatToPlainString(j.t.xCjYxM, {
    hours: e
  }),
  [Chunk379649.J6.DAYS]: e => j.intl.formatToPlainString(j.t.k2UNz8, {
    days: e
  })
};

function eT(e) {
  let t = eE(b.zUn.COMMUNICATION_DISABLED_UNTIL, e),
    n = ed(b.zUn.ROLES_ADD, e).length > 0,
    r = ed(b.zUn.ROLES_REMOVE, e).length > 0;
  if (null != t) {
    if ((null == t ? true : t.newValue) != null) {
      let n = new Date(null == t ? true : t.newValue).getTime() - U.default.extractTimestamp(e.id),
        r = Math.round(n / 1e3 / 60),
        l = (0, E.CI)(r, F);
      if (null == l.unit || null == l.time) return null;
      if (l.unit in eA) {
        let e = l.unit,
          t = l.unit === E.J6.SECONDS ? Math.round(n / 1e3) : l.time;
        return eA[e](t)
      }
    } else if ((null == t ? true : t.oldValue) != null) return j.intl.string(j.t.MA1ltr)
  } else if (n && r) return j.intl.string(j.t.RdMMe3);
  else if (n) return j.intl.string(j.t["4GQqs7"]);
  else if (r) return j.intl.string(j.t["8mQ6x8"]);
  return null
}

function eI(e) {
  let t = ed(b.zUn.ROLES_ADD, e),
    n = ed(b.zUn.ROLES_REMOVE, e),
    r = null == t ? true : t.map(e => {
      let {
        newValue: t
      } = e;
      return null == t ? true : t.map(e => {
        let {
          name: t
        } = e;
        return t
      }).join(", ")
    }).join(", "),
    l = null == n ? true : n.map(e => {
      let {
        newValue: t
      } = e;
      return null == t ? true : t.map(e => {
        let {
          name: t
        } = e;
        return t
      }).join(", ")
    }).join(", ");
  return t.length > 0 && n.length > 0 ? j.intl.formatToPlainString(j.t.tZw1ER, {
    roleNamesAdded: r,
    roleNamesRemoved: l
  }) : t.length > 0 ? j.intl.formatToPlainString(j.t["/mTqt7"], {
    roleNames: r
  }) : n.length > 0 ? j.intl.formatToPlainString(j.t.Wk4pAA, {
    roleNames: l
  }) : null
}

function em(e) {
  switch (e.action) {
    case b.rsA.GUILD_UPDATE:
      return j.t.LjZO39;
    case b.rsA.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === b.zUn.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case b.d4z.GUILD_STAGE_VOICE:
          return j.t["OKp4+v"];
        case b.d4z.GUILD_VOICE:
          return j.t.NPOy4O;
        case b.d4z.GUILD_CATEGORY:
          return j.t.T3KIj4;
        default:
          return j.t.wrYNGx
      }
    case b.rsA.CHANNEL_UPDATE:
      return j.t.nTYk6O;
    case b.rsA.CHANNEL_DELETE:
      return j.t.ynfvkp;
    case b.rsA.CHANNEL_OVERWRITE_CREATE:
      return j.t.l5Cu1d;
    case b.rsA.CHANNEL_OVERWRITE_UPDATE:
      return j.t.uhtbNT;
    case b.rsA.CHANNEL_OVERWRITE_DELETE:
      return j.t["HASt//"];
    case b.rsA.MEMBER_KICK:
      return j.t.B5hDZW;
    case b.rsA.MEMBER_PRUNE:
      return j.t.qKOZTE;
    case b.rsA.MEMBER_BAN_ADD:
      return j.t.XklUm5;
    case b.rsA.MEMBER_BAN_REMOVE:
      return j.t.o3Y6HB;
    case b.rsA.MEMBER_UPDATE:
      return j.t.pznhLC;
    case b.rsA.MEMBER_ROLE_UPDATE:
      return j.t.VngfiY;
    case b.rsA.MEMBER_MOVE:
      return j.t.Yt6NkZ;
    case b.rsA.MEMBER_DISCONNECT:
      return j.t.K4eCZ2;
    case b.rsA.BOT_ADD:
      return j.t.fWvX0N;
    case b.rsA.ROLE_CREATE:
      return j.t.UTLTx8;
    case b.rsA.ROLE_UPDATE:
      return j.t.NRbN19;
    case b.rsA.ROLE_DELETE:
      return j.t["4s63tb"];
    case b.rsA.INVITE_CREATE:
      return j.t.YHOXW1;
    case b.rsA.INVITE_UPDATE:
      return j.t.ja3kGR;
    case b.rsA.INVITE_DELETE:
      return j.t["3n/iWl"];
    case b.rsA.WEBHOOK_CREATE:
      return j.t.MhYhio;
    case b.rsA.WEBHOOK_UPDATE:
      return j.t["6GTlWF"];
    case b.rsA.WEBHOOK_DELETE:
      return j.t.in0VjY;
    case b.rsA.EMOJI_CREATE:
      return j.t["7vekRE"];
    case b.rsA.EMOJI_UPDATE:
      return j.t.IsCKfn;
    case b.rsA.EMOJI_DELETE:
      return j.t.JnUaVF;
    case b.rsA.STICKER_CREATE:
      return j.t.DRZifn;
    case b.rsA.STICKER_UPDATE:
      return j.t.bhujGR;
    case b.rsA.STICKER_DELETE:
      return j.t.rGEP9f;
    case b.rsA.MESSAGE_DELETE:
      return j.t["HPkD+P"];
    case b.rsA.MESSAGE_BULK_DELETE:
      return j.t["3RIvLC"];
    case b.rsA.MESSAGE_PIN:
      return j.t.Yna7Ex;
    case b.rsA.MESSAGE_UNPIN:
      return j.t.NCxXUV;
    case b.rsA.INTEGRATION_CREATE:
      return j.t.HYvCb2;
    case b.rsA.INTEGRATION_UPDATE:
      return j.t.ibCCOT;
    case b.rsA.INTEGRATION_DELETE:
      return j.t["8zScWV"];
    case b.rsA.STAGE_INSTANCE_CREATE:
      return j.t["n7x/DA"];
    case b.rsA.STAGE_INSTANCE_UPDATE:
      return j.t["0hQYU1"];
    case b.rsA.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return j.t["Oi/in5"];
      return j.t["7ZIFm5"];
    case b.rsA.GUILD_SCHEDULED_EVENT_CREATE:
      return j.t.S7k52t;
    case b.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
      return j.t.ebTK19;
    case b.rsA.GUILD_SCHEDULED_EVENT_DELETE:
      return j.t["/ARPKS"];
    case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return j.t["8qCI39"];
    case b.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return j.t.zYb2dX;
    case b.rsA.THREAD_CREATE:
      let n = null != e.changes ? e.changes.find(e => e.key === b.zUn.TYPE) : null;
      if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
      switch (n.newValue) {
        case b.d4z.PRIVATE_THREAD:
          return j.t["Br0y5+"];
        case b.d4z.ANNOUNCEMENT_THREAD:
          return j.t["6uaMmJ"];
        default:
          return j.t["2cxQ7O"]
      }
    case b.rsA.THREAD_UPDATE:
      return j.t.PSsy4u;
    case b.rsA.THREAD_DELETE:
      return j.t.s3Khn5;
    case b.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return j.t.uzCqBg;
    case b.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
      return j.t.NqWv2N;
    case b.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var r;
      if ((null == (r = e.options) ? true : r.auto_moderation_rule_trigger_type) === x.fX.USER_PROFILE.toString()) return j.t.YQsjen;
      return j.t.SD0PwM;
    case b.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return j.t.Vk4Twc;
    case b.rsA.AUTO_MODERATION_QUARANTINE_USER:
      return j.t["/W5u5u"];
    case b.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
      return j.t.ONvWys;
    case b.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return j.t.ryGLk5;
    case b.rsA.AUTO_MODERATION_RULE_CREATE:
      return j.t.NKljj4;
    case b.rsA.AUTO_MODERATION_RULE_UPDATE:
      return j.t["3wEA9v"];
    case b.rsA.AUTO_MODERATION_RULE_DELETE:
      return j.t.umua3t;
    case b.rsA.ONBOARDING_PROMPT_CREATE:
      return j.t["/8A1g4"];
    case b.rsA.ONBOARDING_PROMPT_UPDATE:
      return j.t.ArIrWF;
    case b.rsA.ONBOARDING_PROMPT_DELETE:
      return j.t.IuBTam;
    case b.rsA.ONBOARDING_CREATE:
      return j.t.wDaq39;
    case b.rsA.ONBOARDING_UPDATE:
      return j.t["yONu/v"];
    case b.rsA.HOME_SETTINGS_CREATE:
      return j.t.dSdCjI;
    case b.rsA.HOME_SETTINGS_UPDATE:
      return j.t.XHE8qq;
    case b.rsA.GUILD_HOME_FEATURE_ITEM:
      let l = null != e.changes ? e.changes.find(e => e.key === b.zUn.ENTITY_TYPE) : null;
      if (null == l) return j.t["UZ+U3N"];
      switch (l.newValue) {
        case a.w.MESSAGE:
          return j.t["PyEa+P"];
        case a.w.FORUM_POST:
          return j.t.hCuAb2;
        default:
          return j.t["UZ+U3N"]
      }
    case b.rsA.GUILD_HOME_REMOVE_ITEM:
      return j.t.kPReur;
    case b.rsA.SOUNDBOARD_SOUND_CREATE:
      return j.t["0PD83d"];
    case b.rsA.SOUNDBOARD_SOUND_UPDATE:
      return j.t.CM8n19;
    case b.rsA.SOUNDBOARD_SOUND_DELETE:
      return j.t["kVz4//"];
    case b.rsA.VOICE_CHANNEL_STATUS_CREATE:
      return j.t.MWjnU1;
    case b.rsA.VOICE_CHANNEL_STATUS_DELETE:
      return j.t.aS8Krq;
    case b.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
      return j.t.NUKUb2;
    case b.rsA.GUILD_PROFILE_UPDATE:
      return j.t.Ed6hFx;
    case b.rsA.GUILD_MIGRATE_PIN_PERMISSION:
      return j.t["3Ne7MD"];
    default:
      return null
  }
}

function eg(e) {
  switch (e) {
    case v.zZ.GUILD_FEED_REMOVED:
      return j.intl.string(j.t["5G8ZDw"]);
    case v.zZ.ACTIVE_CHANNELS_REMOVED:
      return j.intl.string(j.t["4YLtzM"]);
    case v.zZ.PINNED:
      return j.intl.string(j.t["1QLRYW"])
  }
  return null
}

function eN(e) {
  switch (e) {
    case v.zZ.GUILD_FEED_REMOVED:
      return j.intl.string(j.t.S5kuWV);
    case v.zZ.ACTIVE_CHANNELS_REMOVED:
      return j.intl.string(j.t["8qpgc3"]);
    case v.zZ.PINNED:
      return j.intl.string(j.t.CMweGB)
  }
  return null
}

function eO(e, t) {
  switch (e) {
    case b.Plq.CREATE_INSTANT_INVITE:
      return j.intl.string(j.t.zJrgTE);
    case b.Plq.KICK_MEMBERS:
      return j.intl.string(j.t.pBNv6u);
    case b.Plq.BAN_MEMBERS:
      return j.intl.string(j.t.oTBA7O);
    case b.Plq.ADMINISTRATOR:
      return j.intl.string(j.t.PGvZqa);
    case b.Plq.MANAGE_CHANNELS:
      if (t.targetType === b.KFR.CHANNEL || t.targetType === b.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t.nAw15O);
      return j.intl.string(j.t["9qLtWl"]);
    case b.Plq.MANAGE_GUILD:
      return j.intl.string(j.t.QZRcfH);
    case b.Plq.VIEW_GUILD_ANALYTICS:
      return j.intl.string(j.t.rQJBEx);
    case b.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return j.intl.string(j.t["0lTLTk"]);
    case b.Plq.CHANGE_NICKNAME:
      return j.intl.string(j.t.dilOFx);
    case b.Plq.MANAGE_NICKNAMES:
      return j.intl.string(j.t["t+Ct5+"]);
    case b.Plq.MANAGE_ROLES:
      return j.intl.string(j.t["C8d+oK"]);
    case b.Plq.MANAGE_WEBHOOKS:
      return j.intl.string(j.t["/ADKmJ"]);
    case b.Plq.CREATE_GUILD_EXPRESSIONS:
      return j.intl.string(j.t.HarVuL);
    case b.Plq.MANAGE_GUILD_EXPRESSIONS:
      return j.intl.string(j.t.bbuXIi);
    case b.Plq.VIEW_AUDIT_LOG:
      return j.intl.string(j.t.fZgLpK);
    case b.Plq.VIEW_CHANNEL:
      if (t.targetType === b.KFR.CHANNEL || t.targetType === b.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t["W/A4Qk"]);
      return j.intl.string(j.t.uV83ys);
    case b.Plq.SEND_MESSAGES:
      return j.intl.string(j.t.T32rkJ);
    case b.Plq.SEND_TTS_MESSAGES:
      return j.intl.string(j.t.Mg7bkp);
    case b.Plq.USE_APPLICATION_COMMANDS:
      return j.intl.string(j.t.shbR1d);
    case b.Plq.MANAGE_MESSAGES:
      return j.intl.string(j.t["6lU9xM"]);
    case b.Plq.EMBED_LINKS:
      return j.intl.string(j.t["969dEB"]);
    case b.Plq.ATTACH_FILES:
      return j.intl.string(j.t["3AS4UF"]);
    case b.Plq.READ_MESSAGE_HISTORY:
      return j.intl.string(j.t.l9ufaW);
    case b.Plq.MENTION_EVERYONE:
      return j.intl.string(j.t.Y78KGB);
    case b.Plq.USE_EXTERNAL_EMOJIS:
      return j.intl.string(j.t.BpBGZW);
    case b.Plq.USE_EXTERNAL_STICKERS:
      return j.intl.string(j.t["UeRs+f"]);
    case b.Plq.ADD_REACTIONS:
      return j.intl.string(j.t.yEoJAg);
    case b.Plq.CONNECT:
      return j.intl.string(j.t.S0W8Z2);
    case b.Plq.SPEAK:
      return j.intl.string(j.t["8w1tIS"]);
    case b.Plq.MUTE_MEMBERS:
      return j.intl.string(j.t["8EI309"]);
    case b.Plq.DEAFEN_MEMBERS:
      return j.intl.string(j.t["9L47Fh"]);
    case b.Plq.MOVE_MEMBERS:
      return j.intl.string(j.t.YtjJPT);
    case b.Plq.USE_VAD:
      return j.intl.string(j.t["08zAV1"]);
    case b.Plq.PRIORITY_SPEAKER:
      return j.intl.string(j.t.BVK71t);
    case b.Plq.STREAM:
      return j.intl.string(j.t.FlNoSU);
    case b.Plq.REQUEST_TO_SPEAK:
      return j.intl.string(j.t["5kicT0"]);
    case b.Plq.CREATE_EVENTS:
      return j.intl.string(j.t.qyjZub);
    case b.Plq.MANAGE_EVENTS:
      return j.intl.string(j.t.HIgA5e);
    case b.Plq.CREATE_PUBLIC_THREADS:
      return j.intl.string(j.t["25rKnZ"]);
    case b.Plq.CREATE_PRIVATE_THREADS:
      return j.intl.string(j.t.QwbTSU);
    case b.Plq.SEND_MESSAGES_IN_THREADS:
      return j.intl.string(j.t.fTE74u);
    case b.Plq.MANAGE_THREADS:
      return j.intl.string(j.t.kEqgr6);
    case b.Plq.MODERATE_MEMBERS:
      return j.intl.string(j.t["+RL6p6"]);
    case b.Plq.SET_VOICE_CHANNEL_STATUS:
      return j.intl.string(j.t.VBwkUV);
    case b.Plq.SEND_POLLS:
      return j.intl.string(j.t.UMQ7W1);
    case b.Plq.USE_EXTERNAL_APPS:
      return j.intl.string(j.t.TtA5rK);
    case b.Plq.PIN_MESSAGES:
      return j.intl.string(j.t.Y5BI39);
    case b.Plq.BYPASS_SLOWMODE:
      return j.intl.string(j.t.kqcjeX)
  }
  return null
}

function eh(e, t) {
  let n = [];
  return e.forEach(e => {
    let r = function(e, t) {
        switch (e.targetType) {
          case b.KFR.GUILD:
          case b.KFR.GUILD_HOME:
          case b.KFR.GUILD_PROFILE:
            return t;
          case b.KFR.CHANNEL:
          case b.KFR.CHANNEL_OVERWRITE:
            return ep(e, b.zUn.NAME, e => f.Z.getChannel(e), e => (0, _.F6)(e, p.default, S.Z, true));
          case b.KFR.USER:
            return ep(e, b.zUn.NICK, e => p.default.getUser(e), e => e);
          case b.KFR.ROLE:
            return ep(e, b.zUn.NAME, e => R.Z.getRole(t.id, e), e => e.name);
          case b.KFR.ONBOARDING_PROMPT:
            let n = ep(e, b.zUn.ID, e => m.Z.getOnboardingPrompt(e), e => e.title);
            return null == n || "" === n ? j.intl.string(j.t.ZNQyiY) : n;
          case b.KFR.GUILD_ONBOARDING:
          case b.KFR.GUILD_MEMBER_VERIFICATION:
            return t;
          case b.KFR.INVITE:
            return ep(e, b.zUn.CODE, b.VqG);
          case b.KFR.INTEGRATION:
            return ep(e, b.zUn.TYPE, e => M.Z.integrations.find(t => t.id === e), e => e.name);
          case b.KFR.WEBHOOK:
            return ep(e, b.zUn.NAME, e => M.Z.webhooks.find(t => t.id === e), e => e.name);
          case b.KFR.EMOJI:
            return ep(e, b.zUn.NAME, e => T.ZP.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case b.KFR.STICKER:
            return ep(e, b.zUn.NAME, e => O.Z.getStickerById(e), e => e.name);
          case b.KFR.STAGE_INSTANCE:
            return ep(e, b.zUn.TOPIC, e => {
              var n;
              return null == (n = Object.values(N.Z.getStageInstancesByGuild(t.id))) ? true : n.find(t => t.id === e)
            }, e => e.topic);
          case b.KFR.GUILD_SCHEDULED_EVENT:
          case b.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return ep(e, b.zUn.NAME, e => M.Z.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case b.KFR.THREAD:
            return ep(e, b.zUn.NAME, e => M.Z.threads.find(t => t.id === e), e => e.name);
          case b.KFR.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = M.Z.integrations.find(t => {
                var n;
                return (null == (n = t.application) ? true : n.id) === e.targetId
              });
              if (null != t) return t.name;
              return e.targetId
            }
            return ep(e, b.zUn.NAME, e => M.Z.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === d.yU.CHAT ? "/⁠".concat(t) : t
            });
          case b.KFR.AUTO_MODERATION_RULE:
            return ep(e, b.zUn.NAME, e => M.Z.automodRules.find(t => t.id === e), e => e.name);
          case b.KFR.GUILD_SOUNDBOARD:
            return ep(e, b.zUn.NAME, b.VqG);
          case b.KFR.HOME_SETTINGS:
            return ep(e, b.zUn.GUILD_ID, e => g.Z.getSettings(e), () => j.intl.string(j.t.VbpLyc), t.id);
          case b.KFR.VOICE_CHANNEL_STATUS:
            return ep(e, b.zUn.STATUS, e => f.Z.getChannel(e), e => (0, _.F6)(e, p.default, S.Z, true));
          default:
            return k.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      i = p.default.getUser(e.userId);
    if (null != r || [b.rsA.MEMBER_PRUNE, b.rsA.MEMBER_DISCONNECT, b.rsA.MEMBER_MOVE, b.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, b.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", i)).set("target", r)).set("options", function(e) {
          if (null != e.options) {
            let n = y({}, e.options);
            switch (e.options.type) {
              case b.jwA.USER:
                n.subtarget = eC(e.options.id, e => p.default.getUser(e), e => e.tag);
                break;
              case b.jwA.ROLE:
                n.subtarget = eC(e.options.role_name, b.VqG)
            }
            if (null != e.options.channel_id && (n.channel = ep(e, "", e => f.Z.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let r = M.Z.guildScheduledEvents.find(t => t.id === e.targetId),
                l = null == r ? true : r.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              n.subtarget = (0, C.vc)(s()(U.default.extractTimestamp(null != (t = null == l ? true : l.event_exception_id) ? t : "0")), "LL")
            }
            return n
          }
          return e.options
        }(e))).changes) {
        let n = [];
        e.changes.forEach(r => {
          let i = function(e, t, n) {
            if (t.action === b.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case b.ecB.ROLE:
                  e.subtarget = eC(t.id, e => R.Z.getRole(n.id, e), e => e.name);
                  break;
                case b.ecB.USER:
                  e.subtarget = eC(t.id, e => p.default.getUser(e), e => e.tag);
                  break;
                case b.ecB.CHANNEL:
                  t.id === l()(n.id).subtract(1).toString() ? e.subtarget = j.intl.string(j.t.MSYhgo) : e.subtarget = eC(t.id, e => f.Z.getChannel(e), e => (0, _.F6)(e, p.default, S.Z, true))
              }
              return e
            }
            switch (e.key) {
              case b.zUn.OWNER_ID:
                return eS(e, e => p.default.getUser(e));
              case b.zUn.CHANNEL_ID:
              case b.zUn.AFK_CHANNEL_ID:
              case b.zUn.SYSTEM_CHANNEL_ID:
              case b.zUn.RULES_CHANNEL_ID:
              case b.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                return eS(e, e => f.Z.getChannel(e), e => (0, _.F6)(e, p.default, S.Z, true));
              case b.zUn.AFK_TIMEOUT:
                return eS(e, e => e / 60);
              case b.zUn.BITRATE:
                return eS(e, e => e / 1e3);
              case b.zUn.COLOR:
                return eS(e, e => (0, c.Rf)(e).toUpperCase());
              case b.zUn.THEME_COLORS:
                return eS(e, e => "".concat((0, c.Rf)(e[0]).toUpperCase(), ", ").concat((0, c.Rf)(e[1]).toUpperCase()));
              case b.zUn.MAX_AGE:
                return eS(e, e => {
                  let t = L.ZP.getMaxAgeOptionByValue(e);
                  return null !== t ? t.label : e
                });
              case b.zUn.PERMISSIONS: {
                let t = [],
                  {
                    added: n,
                    removed: r
                  } = ef(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let e = new h.ms(b.zUn.PERMISSIONS_GRANTED, null, n);
                  t.push(e)
                }
                if (r.length > 0) {
                  let e = new h.ms(b.zUn.PERMISSIONS_DENIED, null, r);
                  t.push(e)
                }
                return t
              }
              case b.zUn.PERMISSIONS_GRANTED:
              case b.zUn.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: n,
                    removed: r
                  } = ef(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let r = new h.ms(e.key, null, n);
                  t.push(r)
                }
                if (r.length > 0) {
                  let e = new h.ms(b.zUn.PERMISSIONS_RESET, r, r);
                  t.push(e)
                }
                return t
              }
              case b.zUn.FLAGS: {
                let t = [],
                  {
                    added: n,
                    removed: r
                  } = function(e, t) {
                    let n = "number" == typeof e ? e : 0,
                      r = "number" == typeof t ? t : 0,
                      l = D.Ge(r, n),
                      i = D.Ge(n, r),
                      s = [],
                      a = [];
                    for (let e in v.zZ) {
                      let t = v.zZ[e];
                      D.yE(l, t) && s.push(t), D.yE(i, t) && a.push(t)
                    }
                    return {
                      added: s,
                      removed: a
                    }
                  }(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let r = new h.ms(e.key, null, n);
                  t.push(r)
                }
                if (r.length > 0) {
                  let n = new h.ms(e.key, r, null);
                  t.push(n)
                }
                return t
              }
              case b.zUn.PREFERRED_LOCALE:
                return eS(e, e => {
                  let t = (0, j.getAvailableLocales)().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case b.zUn.VIDEO_QUALITY_MODE:
                return eS(e, e => e === b.Ucd.FULL ? j.intl.string(j.t["7jOoJC"]) : j.intl.string(j.t.jjKYpq));
              case b.zUn.SYSTEM_CHANNEL_FLAGS:
                let r = {
                    [b.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                    [b.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                    [b.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: b.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                    [b.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: b.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                  },
                  i = [];
                return Object.values(b.xmn).forEach(t => {
                  let n = (e.oldValue & t) === t,
                    l = (e.newValue & t) === t;
                  if (n === l) return;
                  let s = new h.ms(r[t], !n, !l);
                  i.push(s)
                }), i;
              case b.zUn.AUTO_MODERATION_ACTIONS:
                if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eS(e, e => e.map(e => e.type), e => e.map(I.ZF).join(", "));
                break;
              case b.zUn.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eS(e, I.YN);
                break;
              case b.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eS(e, I.Ar);
                break;
              case b.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eS(e, e => null != e && "object" == typeof e ? null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.intl.formatToMarkdownString(j.t.y91UXV, {
                  newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                }) : JSON.stringify(e) : e);
                break;
              case b.zUn.AUTO_MODERATION_ADD_KEYWORDS:
              case b.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
              case b.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case b.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case b.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
              case b.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eS(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case b.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eS(e, e => e.map(f.Z.getChannel).filter(e => null != e).map(e => (0, _.F6)(e, p.default, S.Z, true)), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV1"]));
                break;
              case b.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === b.KFR.AUTO_MODERATION_RULE) return eS(e, e => e.map(e => R.Z.getRole(n.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV1"]));
                break;
              case b.zUn.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: n
                  } = e, r = Array.isArray(t) ? t : [], l = Array.isArray(n) ? n : [];
                  if (0 === r.length && 0 === l.length) return e;
                  let i = {},
                    s = {};
                  if (r.forEach(e => {
                      i[e.id] = e
                    }), l.forEach(e => {
                      s[e.id] = e
                    }), r.length < l.length) {
                    for (let e in s)
                      if (null == i[e]) return new h.ms(b.zUn.AVAILABLE_TAG_ADD, null, eR(s[e]))
                  }
                  if (r.length > l.length) {
                    for (let e in i)
                      if (null == s[e]) return new h.ms(b.zUn.AVAILABLE_TAG_DELETE, null, eR(i[e]))
                  }
                  for (let e in i) {
                    let t = i[e],
                      n = s[e];
                    if ((null == n ? true : n.name) !== t.name || (null == n ? true : n.emoji_id) !== t.emoji_id || (null == n ? true : n.emoji_name) !== t.emoji_name) return new h.ms(b.zUn.AVAILABLE_TAG_EDIT, eR(t), eR(n))
                  }
                  return e
                }(e);
              case b.zUn.SCHEDULED_START_TIME:
              case b.zUn.SCHEDULED_END_TIME:
                return eS(e, e => (0, C.vc)(s()(new Date(e)), "LLLL"))
            }
            return e
          }(r, e, t);
          Array.isArray(i) ? i.forEach(e => n.push(e)) : n.push(i)
        }), e = e.set("changes", n)
      }
      n.push(e)
    }
  }), n
}

function ef(e, t) {
  let n = u.vB("string" == typeof e ? e : 0),
    r = u.vB("string" == typeof t ? t : 0),
    l = u.Od(r, n),
    i = u.Od(n, r),
    s = [],
    a = [];
  for (let e in b.Plq) {
    let t = b.Plq[e];
    u.e$(l, t) && s.push(t), u.e$(i, t) && a.push(t)
  }
  return {
    added: s,
    removed: a
  }
}

function eR(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : true,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function eS(e, t, n) {
  let r = e.newValue,
    l = e.oldValue;
  return null != e.newValue && (r = t(e.newValue), null != n && null != r && (r = n(r))), null != e.oldValue && (l = t(e.oldValue), null != n && null != l && (l = n(l))), new h.ms(e.key, l || e.oldValue, r || e.newValue)
}

function ep(e, t, n, r, l) {
  let i = null,
    s = n(l = null != l ? l : e.targetId);
  if (null != s && null != r && (i = r(s)), null == i) {
    let t = M.Z.deletedTargets[e.targetType];
    null != t && null != t[l] && (i = t[l])
  }
  if (null == i && null != e.changes) {
    let n = e.changes.find(e => e.key === t);
    null != n && (i = n.newValue || n.oldValue)
  }
  return null != i ? i : l
}

function eC(e, t, n) {
  let r = e,
    l = t(e);
  return null != l && null != n && (r = n(l)), r
}

function eD(e, t) {
  return n => null == n.oldValue ? e : t
}

function eL(e, t) {
  return n => null == n.newValue ? e : t
}

function eU(e, t, n, r) {
  return l => null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r
}

function eM(e, t) {
  return n => n.newValue ? e : t
}

function eb(e) {
  return t => e[t.newValue]
}

function ev(e, t) {
  return n => {
    var r;
    return null != (r = e[n.newValue]) ? r : t
  }
}