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
  _$: () => eO,
  cT: () => eN,
  em: () => eg,
  hQ: () => eh,
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
  Chunk233857 = require("./233857.js"),
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
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3C5"]
  }),
  z = () => y({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t.CkDiNH,
    [Chunk981631.zUn.DESCRIPTION]: eU(Chunk388032.t.RP3Ey3, Chunk388032.t.QAVj1Y),
    [Chunk981631.zUn.ICON_HASH]: () => Chunk388032.t.iLZ8Q9,
    [Chunk981631.zUn.SPLASH_HASH]: () => Chunk388032.t["4VV6dn"],
    [Chunk981631.zUn.DISCOVERY_SPLASH_HASH]: () => Chunk388032.t["2pds6p"],
    [Chunk981631.zUn.BANNER_HASH]: eU(Chunk388032.t.Cxq4zO, Chunk388032.t["H7eE/9"]),
    [Chunk981631.zUn.OWNER_ID]: () => Chunk388032.t["8ltsLT"],
    [Chunk981631.zUn.REGION]: () => Chunk388032.t.X9r5Kf,
    [Chunk981631.zUn.PREFERRED_LOCALE]: () => Chunk388032.t.UnXuDS,
    [Chunk981631.zUn.AFK_CHANNEL_ID]: eU(Chunk388032.t.ClBuA4, Chunk388032.t["ms+xtL"]),
    [Chunk981631.zUn.AFK_TIMEOUT]: () => Chunk388032.t.q21fHa,
    [Chunk981631.zUn.SYSTEM_CHANNEL_ID]: eU(Chunk388032.t.H1VXaa, Chunk388032.t.XhtmxJ),
    [Chunk981631.zUn.RULES_CHANNEL_ID]: eU(Chunk388032.t.OI6MG2, Chunk388032.t.lik3tI),
    [Chunk981631.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eU(Chunk388032.t.YxBKrY, Chunk388032.t.Ehsnij),
    [Chunk981631.zUn.MFA_LEVEL]: ex({
      [Chunk981631.BpS.NONE]: Chunk388032.t.voaCCQ,
      [Chunk981631.BpS.ELEVATED]: Chunk388032.t.pRNVwz
    }),
    [Chunk981631.zUn.WIDGET_ENABLED]: eM(Chunk388032.t.ADIty8, Chunk388032.t.nf58VY),
    [Chunk981631.zUn.WIDGET_CHANNEL_ID]: eU(Chunk388032.t["6SBsDc"], Chunk388032.t.deQ5wO),
    [Chunk981631.zUn.VERIFICATION_LEVEL]: ex({
      [Chunk981631.sFg.NONE]: Chunk388032.t.W27rsc,
      [Chunk981631.sFg.LOW]: Chunk388032.t["V8P+Pw"],
      [Chunk981631.sFg.MEDIUM]: Chunk388032.t.ERQFau,
      [Chunk981631.sFg.HIGH]: Chunk388032.t["83fN0j"],
      [Chunk981631.sFg.VERY_HIGH]: Chunk388032.t.PnkQJE
    }),
    [Chunk981631.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: ex({
      [Chunk981631.bL.ALL_MESSAGES]: Chunk388032.t.LDi76A,
      [Chunk981631.bL.ONLY_MENTIONS]: Chunk388032.t["6K83ba"]
    }),
    [Chunk981631.zUn.VANITY_URL_CODE]: eU(Chunk388032.t.Zplsov, Chunk388032.t.u6cArh),
    [Chunk981631.zUn.EXPLICIT_CONTENT_FILTER]: ex({
      [Chunk981631.lxg.DISABLED]: Chunk388032.t.fmOeL3,
      [Chunk981631.lxg.MEMBERS_WITHOUT_ROLES]: Chunk388032.t["4FghYw"],
      [Chunk981631.lxg.ALL_MEMBERS]: Chunk388032.t.olyrSm
    }),
    [Chunk981631.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eM(Chunk388032.t.rBT0sn, Chunk388032.t["gc+te5"]),
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => Chunk388032.t.YbouFH,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => Chunk388032.t.g3DMjB,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => Chunk388032.t["+fQAel"],
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => Chunk388032.t.E1fc4v,
    [Chunk981631.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => Chunk388032.t.XbwtSA
  }, w()),
  V = () => ({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.f8Rh0U, Chunk388032.t.ebD4Qp),
    [Chunk981631.zUn.POSITION]: eD(Chunk388032.t.isS8te, Chunk388032.t.t5uBis),
    [Chunk981631.zUn.TOPIC]: eL(Chunk388032.t.esQcxn, Chunk388032.t["m+veAn"], Chunk388032.t["ws/1FA"]),
    [Chunk981631.zUn.BITRATE]: eD(Chunk388032.t.fw81ak, Chunk388032.t.MFNlgZ),
    [Chunk981631.zUn.RTC_REGION_OVERRIDE]: eL(Chunk388032.t["6kajxx"], Chunk388032.t.eGOlmU, Chunk388032.t["0JMZdz"]),
    [Chunk981631.zUn.USER_LIMIT]: eD(Chunk388032.t.wk5t7p, Chunk388032.t.XgjCEh),
    [Chunk981631.zUn.RATE_LIMIT_PER_USER]: eD(Chunk388032.t["7lirhF"], Chunk388032.t.j4CCJR),
    [Chunk981631.zUn.PERMISSIONS_RESET]: () => Chunk388032.t["+vSBFY"],
    [Chunk981631.zUn.PERMISSIONS_GRANTED]: () => Chunk388032.t.EKLJv8,
    [Chunk981631.zUn.PERMISSIONS_DENIED]: () => Chunk388032.t.U3rO5X,
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3C5"],
    [Chunk981631.zUn.NSFW]: eM(Chunk388032.t.H8Ri2Y, Chunk388032.t.WW6cJw),
    [Chunk981631.zUn.TYPE]: eD(Chunk388032.t.Vn5zn2, Chunk388032.t.aq4uWI),
    [Chunk981631.zUn.VIDEO_QUALITY_MODE]: eD(Chunk388032.t.e68fAU, Chunk388032.t.djbES0),
    [Chunk981631.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(Chunk388032.t.nYz2mg, Chunk388032.t.oczvRI),
    [Chunk981631.zUn.FLAGS]: () => Chunk388032.t.ImCQko,
    [Chunk981631.zUn.AVAILABLE_TAG_ADD]: () => Chunk388032.t.H86QQU,
    [Chunk981631.zUn.AVAILABLE_TAG_EDIT]: () => Chunk388032.t.YtUzls,
    [Chunk981631.zUn.AVAILABLE_TAG_DELETE]: () => Chunk388032.t["8QOseg"],
    [Chunk981631.zUn.LINKED_LOBBY]: eU(Chunk388032.t["+/3TkD"], Chunk388032.t["5kDYS3"])
  }),
  Z = () => y({
    [Chunk981631.zUn.NICK]: eL(Chunk388032.t.qXDsHv, Chunk388032.t["m+qury"], Chunk388032.t.DvLvjF),
    [Chunk981631.zUn.DEAF]: eM(Chunk388032.t.mArLlW, Chunk388032.t.ddvVYG),
    [Chunk981631.zUn.MUTE]: eM(Chunk388032.t["bxs/lS"], Chunk388032.t.FjecQM),
    [Chunk981631.zUn.ROLES_REMOVE]: () => Chunk388032.t["+2SDWV"],
    [Chunk981631.zUn.ROLES_ADD]: () => Chunk388032.t["B3/3IJ"],
    [Chunk981631.zUn.PRUNE_DELETE_DAYS]: () => Chunk388032.t["+Cvc+D"],
    [Chunk981631.zUn.COMMUNICATION_DISABLED_UNTIL]: eL(Chunk388032.t.LXTQr5, Chunk388032.t.LXTQr5, Chunk388032.t.ULSdnE),
    [Chunk981631.zUn.BYPASSES_VERIFICATION]: eM(Chunk388032.t.NBPBui, Chunk388032.t.zATost),
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => Chunk388032.t.YbouFH
  }, w()),
  B = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.QBmlaD, Chunk388032.t["Lfs4r+"]),
    [Chunk981631.zUn.DESCRIPTION]: eD(Chunk388032.t.XeYKWJ, Chunk388032.t.PSfeIj),
    [Chunk981631.zUn.PERMISSIONS_GRANTED]: () => Chunk388032.t["9i/DvE"],
    [Chunk981631.zUn.PERMISSIONS_DENIED]: () => Chunk388032.t.pa1ZVh,
    [Chunk981631.zUn.COLOR]: eb({
      "#000000": Chunk388032.t.TK6E1H
    }, Chunk388032.t["2FQFiw"]),
    [Chunk981631.zUn.COLORS]: e => null == e.newValue.secondary_color ? j.t.U44ttm : j.t["WnSwL/"],
    [Chunk981631.zUn.HOIST]: eM(Chunk388032.t.gWfe24, Chunk388032.t["+tb8kN"]),
    [Chunk981631.zUn.MENTIONABLE]: eM(Chunk388032.t.LL8VFF, Chunk388032.t.Z7xzmC),
    [Chunk981631.zUn.ICON_HASH]: () => Chunk388032.t["iEE79/"],
    [Chunk981631.zUn.UNICODE_EMOJI]: () => Chunk388032.t.KiLMM0
  }, w()),
  H = () => G(y({}, w()), {
    [Chunk981631.zUn.TITLE]: eD(Chunk388032.t["sNpuy/"], Chunk388032.t["3Ukc/g"]),
    [Chunk981631.zUn.DESCRIPTION]: eD(Chunk388032.t.PP1q0x, Chunk388032.t.z7pYLg),
    [Chunk981631.zUn.OPTIONS]: () => Chunk388032.t["3G5C9+"],
    [Chunk981631.zUn.SINGLE_SELECT]: eM(Chunk388032.t.v4WnR3, Chunk388032.t["6Qg3uC"]),
    [Chunk981631.zUn.REQUIRED]: eM(Chunk388032.t["0MPAM6"], Chunk388032.t.pwsXir)
  }),
  K = () => G(y({}, w()), {
    [Chunk981631.zUn.DEFAULT_CHANNEL_IDS]: () => Chunk388032.t["8M+D2s"],
    [Chunk981631.zUn.ENABLE_DEFAULT_CHANNELS]: eM(Chunk388032.t["EYd/ls"], Chunk388032.t["36OZeQ"]),
    [Chunk981631.zUn.ENABLE_ONBOARDING_PROMPTS]: eM(Chunk388032.t.V3u8PV, Chunk388032.t["r66lc/"]),
    [Chunk981631.zUn.ENABLED]: eM(Chunk388032.t.SODVIs, Chunk388032.t.u8HY5U)
  }),
  W = () => G(y({}, w()), {
    [Chunk981631.zUn.WELCOME_MESSAGE]: () => Chunk388032.t.dKQ1xd,
    [Chunk981631.zUn.NEW_MEMBER_ACTIONS]: () => Chunk388032.t.jDUIno,
    [Chunk981631.zUn.RESOURCE_CHANNELS]: () => Chunk388032.t.SIX0mr
  }),
  q = () => y({
    [Chunk981631.zUn.CODE]: () => Chunk388032.t.rrRHgb,
    [Chunk981631.zUn.CHANNEL_ID]: () => Chunk388032.t.Q1vd5q,
    [Chunk981631.zUn.MAX_USES]: eb({
      0: Chunk388032.t.Yx8LNm
    }, Chunk388032.t["3ygnwU"]),
    [Chunk981631.zUn.MAX_AGE]: eb({
      [Chunk388032.intl.string(Chunk388032.t.PqEzn8)]: Chunk388032.t.uWrLvw
    }, Chunk388032.t["Q+5kcO"]),
    [Chunk981631.zUn.TEMPORARY]: eM(Chunk388032.t.MWp6H7, Chunk388032.t.omiqTH),
    [Chunk981631.zUn.FLAGS]: ex({
      [Chunk533800.$.IS_GUEST_INVITE]: Chunk388032.t.XYZMbL
    })
  }, w()),
  Y = () => ({
    [Chunk981631.zUn.CHANNEL_ID]: eD(Chunk388032.t.jhPprR, Chunk388032.t.ar4qYO),
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.ZVGrzU, Chunk388032.t.tywdZR),
    [Chunk981631.zUn.AVATAR_HASH]: () => Chunk388032.t.KB52Uj,
    [Chunk981631.zUn.REASON]: () => Chunk388032.t["2IW3C5"]
  }),
  X = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.ahU1o5, Chunk388032.t["wxs+vZ"])
  }, w()),
  J = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.cdl0Yo, Chunk388032.t.o3W2ly),
    [Chunk981631.zUn.TAGS]: eD(Chunk388032.t["zwL+S2"], Chunk388032.t["VYfKA+"]),
    [Chunk981631.zUn.DESCRIPTION]: eD(Chunk388032.t.XeYKWJ, Chunk388032.t.PSfeIj)
  }, w()),
  Q = () => y({
    [Chunk981631.zUn.ENABLE_EMOTICONS]: eM(Chunk388032.t.FI0m5x, Chunk388032.t.olpKC6),
    [Chunk981631.zUn.EXPIRE_BEHAVIOR]: ex({
      0: Chunk388032.t["1Bb1+u"],
      1: Chunk388032.t.vjlW6m
    }),
    [Chunk981631.zUn.EXPIRE_GRACE_PERIOD]: () => Chunk388032.t.iovXMa
  }, w()),
  $ = () => y({
    [Chunk981631.zUn.TOPIC]: eD(Chunk388032.t["m+veAn"], Chunk388032.t.esQcxn),
    [Chunk981631.zUn.PRIVACY_LEVEL]: ex({
      [Chunk765305.j8.GUILD_ONLY]: Chunk388032.t["EC+CDt"],
      [Chunk765305.j8.PUBLIC]: Chunk388032.t["pK/WG0"]
    })
  }, w()),
  ee = () => y({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t["21EXHW"],
    [Chunk981631.zUn.DESCRIPTION]: () => Chunk388032.t.Vm1ofw,
    [Chunk981631.zUn.PRIVACY_LEVEL]: ex({
      [Chunk765305.j8.GUILD_ONLY]: Chunk388032.t["EC+CDt"],
      [Chunk765305.j8.PUBLIC]: Chunk388032.t["pK/WG0"]
    }),
    [Chunk981631.zUn.STATUS]: ex({
      [Chunk765305.p1.SCHEDULED]: Chunk388032.t.hXKDgq,
      [Chunk765305.p1.ACTIVE]: Chunk388032.t.lRX1nz,
      [Chunk765305.p1.COMPLETED]: Chunk388032.t["/eFIhq"],
      [Chunk765305.p1.CANCELED]: Chunk388032.t.NWIYhj
    }),
    [Chunk981631.zUn.ENTITY_TYPE]: ex({
      [Chunk765305.WX.NONE]: Chunk388032.t["6sO3Ss"],
      [Chunk765305.WX.STAGE_INSTANCE]: Chunk388032.t["Wo+s1y"],
      [Chunk765305.WX.VOICE]: Chunk388032.t.XCVaIL,
      [Chunk765305.WX.EXTERNAL]: Chunk388032.t.IvhAj2
    }),
    [Chunk981631.zUn.CHANNEL_ID]: eU(Chunk388032.t.yJBIcX, Chunk388032.t["+PqSsi"]),
    [Chunk981631.zUn.LOCATION]: eU(Chunk388032.t.GaMBHy, Chunk388032.t.PsICk0),
    [Chunk981631.zUn.IMAGE_HASH]: eU(Chunk388032.t.S3vcRK, Chunk388032.t.KQu47I)
  }, w()),
  et = () => y({
    [Chunk981631.zUn.SCHEDULED_START_TIME]: eU(Chunk388032.t.zMIYVg, Chunk388032.t.fzF8Gd),
    [Chunk981631.zUn.SCHEDULED_END_TIME]: eU(Chunk388032.t.vONSQA, Chunk388032.t.IlIti3),
    [Chunk981631.zUn.IS_CANCELED]: e => {
      if (null != e.oldValue || true === e.newValue) {
        if (!e.oldValue && e.newValue) return j.t["7RkicW"];
        else if (e.oldValue && !e.newValue) return j.t.dRNTWW
      }
    }
  }, w()),
  en = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.tUKRzX, Chunk388032.t.kPCHON),
    [Chunk981631.zUn.ARCHIVED]: eM(Chunk388032.t.jDi9FK, Chunk388032.t.F6dvbT),
    [Chunk981631.zUn.LOCKED]: eM(Chunk388032.t.JSy1QW, Chunk388032.t.C7Jgo8),
    [Chunk981631.zUn.INVITABLE]: eM(Chunk388032.t.dxNUs9, Chunk388032.t.biJvYG),
    [Chunk981631.zUn.AUTO_ARCHIVE_DURATION]: eD(Chunk388032.t.LuaG3y, Chunk388032.t["18d9qr"]),
    [Chunk981631.zUn.RATE_LIMIT_PER_USER]: eD(Chunk388032.t["7lirhF"], Chunk388032.t.j4CCJR),
    [Chunk981631.zUn.FLAGS]: () => Chunk388032.t.sSAQtj
  }, w()),
  er = e => {
    let t = y({}, w());
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = () => j.t["JH+89C"] : t[e.key] = () => j.t.HUrFDu : t[e.key] = () => j.t.vynxnV
    }), t
  },
  el = () => y({
    [Chunk981631.zUn.NAME]: () => Chunk388032.t.XwxAJT,
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => Chunk388032.t.fx0pyl,
    [Chunk981631.zUn.AUTO_MODERATION_EVENT_TYPE]: () => Chunk388032.t["46Y+L5"],
    [Chunk981631.zUn.AUTO_MODERATION_ACTIONS]: () => Chunk388032.t["8efxfv"],
    [Chunk981631.zUn.AUTO_MODERATION_ENABLED]: e => {
      var t;
      returntrue === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxC2 : j.t.Wrg9Jn
    },
    [Chunk981631.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => Chunk388032.t.TRb7Nx,
    [Chunk981631.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => Chunk388032.t.mzitLE,
    [Chunk981631.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => Chunk388032.t["h/lM65"],
    [Chunk981631.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => Chunk388032.t["9V2yaC"],
    [Chunk981631.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => Chunk388032.t["4Qe9ny"],
    [Chunk981631.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => Chunk388032.t.GyZtxp,
    [Chunk981631.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => Chunk388032.t.OQDadc,
    [Chunk981631.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => Chunk388032.t["FvvR+K"],
    [Chunk981631.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => Chunk388032.t.p5nSvy
  }, w()),
  ei = () => y({
    [Chunk981631.zUn.NAME]: eD(Chunk388032.t.VOtRSO, Chunk388032.t.OK7B8E),
    [Chunk981631.zUn.VOLUME]: eD(Chunk388032.t.igrDB9, Chunk388032.t.L5lDFJ),
    [Chunk981631.zUn.EMOJI_NAME]: eL(Chunk388032.t.IIanaY, Chunk388032.t["z4w4U/"], Chunk388032.t.V8TfyU),
    [Chunk981631.zUn.EMOJI_ID]: eL(Chunk388032.t.ainxMB, Chunk388032.t["2NPsYu"], Chunk388032.t["8crtns"])
  }, w()),
  es = () => y({
    [Chunk981631.zUn.VERIFICATION_ENABLED]: e => true === e.newValue ? j.t.fnkzDY : j.t.WYT6ka,
    [Chunk981631.zUn.MANUAL_APPROVAL_ENABLED]: e => true === e.newValue ? j.t.jzSvVd : j.t.WxyOtj
  }, w()),
  ea = () => y({
    [Chunk981631.zUn.STATUS]: () => Chunk388032.t.HyCSnI
  }, w()),
  eo = () => ({
    [Chunk981631.zUn.DESCRIPTION]: () => Chunk388032.t.nsUZKY,
    [Chunk981631.zUn.BRAND_COLOR_PRIMARY]: () => Chunk388032.t.qe9mgN,
    [Chunk981631.zUn.CUSTOM_BANNER_HASH]: () => Chunk388032.t["04b5KC"],
    [Chunk981631.zUn.TRAITS]: () => Chunk388032.t.dEy9WO,
    [Chunk981631.zUn.GAME_APPLICATION_IDS]: () => Chunk388032.t["8BOT3x"],
    [Chunk981631.zUn.VISIBILITY]: () => Chunk388032.t.bCl1Ep,
    [Chunk981631.zUn.SERVER_TAG]: eU(Chunk388032.t.ix1dnX, Chunk388032.t["4LKpKb"])
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
    label: Chunk388032.intl.string(Chunk388032.t.QxEVcv),
    valueLabel: Chunk388032.intl.string(Chunk388032.t.an9Ry3)
  }, {
    value: Chunk981631.rsA.GUILD_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t["5INZa3"])
  }, {
    value: Chunk981631.rsA.CHANNEL_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["2uh4vJ"])
  }, {
    value: Chunk981631.rsA.CHANNEL_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.mGsBLV)
  }, {
    value: Chunk981631.rsA.CHANNEL_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.hCHzAr)
  }, {
    value: Chunk981631.rsA.CHANNEL_OVERWRITE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["8TnAMP"])
  }, {
    value: Chunk981631.rsA.CHANNEL_OVERWRITE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.Jqx0Bi)
  }, {
    value: Chunk981631.rsA.CHANNEL_OVERWRITE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.gBXOr4)
  }, {
    value: Chunk981631.rsA.MEMBER_KICK,
    label: Chunk388032.intl.string(Chunk388032.t["Q1/hN8"])
  }, {
    value: Chunk981631.rsA.MEMBER_PRUNE,
    label: Chunk388032.intl.string(Chunk388032.t.tOTTja)
  }, {
    value: Chunk981631.rsA.MEMBER_BAN_ADD,
    label: Chunk388032.intl.string(Chunk388032.t["NfPn+e"])
  }, {
    value: Chunk981631.rsA.MEMBER_BAN_REMOVE,
    label: Chunk388032.intl.string(Chunk388032.t.XCsGfI)
  }, {
    value: Chunk981631.rsA.MEMBER_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t["F/jmNJ"])
  }, {
    value: Chunk981631.rsA.MEMBER_ROLE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.zAveSI)
  }, {
    value: Chunk981631.rsA.MEMBER_MOVE,
    label: Chunk388032.intl.string(Chunk388032.t.QshteR)
  }, {
    value: Chunk981631.rsA.MEMBER_DISCONNECT,
    label: Chunk388032.intl.string(Chunk388032.t.Z45os7)
  }, {
    value: Chunk981631.rsA.BOT_ADD,
    label: Chunk388032.intl.string(Chunk388032.t.vuH24Z)
  }, {
    value: Chunk981631.rsA.THREAD_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["+zl0DG"])
  }, {
    value: Chunk981631.rsA.THREAD_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.rbIry3)
  }, {
    value: Chunk981631.rsA.THREAD_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.hFjNEA)
  }, {
    value: Chunk981631.rsA.ROLE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.AbxKtv)
  }, {
    value: Chunk981631.rsA.ROLE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.t3Z6sU)
  }, {
    value: Chunk981631.rsA.ROLE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.YsFpa4)
  }, {
    value: Chunk981631.rsA.ONBOARDING_PROMPT_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.ZV9tqc)
  }, {
    value: Chunk981631.rsA.ONBOARDING_PROMPT_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.PcOdvX)
  }, {
    value: Chunk981631.rsA.ONBOARDING_PROMPT_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t["+r33Na"])
  }, {
    value: Chunk981631.rsA.ONBOARDING_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.uDADde)
  }, {
    value: Chunk981631.rsA.ONBOARDING_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.J1H1wg)
  }, {
    value: Chunk981631.rsA.HOME_SETTINGS_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.Di4cvI)
  }, {
    value: Chunk981631.rsA.HOME_SETTINGS_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.tzyrJH)
  }, {
    value: Chunk981631.rsA.INVITE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["0BNJdX"])
  }, {
    value: Chunk981631.rsA.INVITE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t["o++obV"])
  }, {
    value: Chunk981631.rsA.INVITE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.iP40Az)
  }, {
    value: Chunk981631.rsA.WEBHOOK_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["tBF4+S"])
  }, {
    value: Chunk981631.rsA.WEBHOOK_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.eV3McO)
  }, {
    value: Chunk981631.rsA.WEBHOOK_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.AAL3K1)
  }, {
    value: Chunk981631.rsA.EMOJI_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.RuWm0V)
  }, {
    value: Chunk981631.rsA.EMOJI_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.WzdUY7)
  }, {
    value: Chunk981631.rsA.EMOJI_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.c3dK2L)
  }, {
    value: Chunk981631.rsA.MESSAGE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.daTfXh)
  }, {
    value: Chunk981631.rsA.MESSAGE_BULK_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.nrBxeh)
  }, {
    value: Chunk981631.rsA.MESSAGE_PIN,
    label: Chunk388032.intl.string(Chunk388032.t.MUldyN)
  }, {
    value: Chunk981631.rsA.MESSAGE_UNPIN,
    label: Chunk388032.intl.string(Chunk388032.t.n4zKhA)
  }, {
    value: Chunk981631.rsA.INTEGRATION_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.deNm8x)
  }, {
    value: Chunk981631.rsA.INTEGRATION_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.HT7Sfg)
  }, {
    value: Chunk981631.rsA.INTEGRATION_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t["+kJ09q"])
  }, {
    value: Chunk981631.rsA.STICKER_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t["3DzNjU"])
  }, {
    value: Chunk981631.rsA.STICKER_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.tdhW5b)
  }, {
    value: Chunk981631.rsA.STICKER_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t["+ZhGOk"])
  }, {
    value: Chunk981631.rsA.STAGE_INSTANCE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.sPbjA6)
  }, {
    value: Chunk981631.rsA.STAGE_INSTANCE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.cW9LfJ)
  }, {
    value: Chunk981631.rsA.STAGE_INSTANCE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t["U1r+yD"])
  }, {
    value: Chunk981631.rsA.GUILD_SCHEDULED_EVENT_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.H81Zyy)
  }, {
    value: Chunk981631.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t["FM69l+"])
  }, {
    value: Chunk981631.rsA.GUILD_SCHEDULED_EVENT_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.Rq28Bh)
  }, {
    value: Chunk981631.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.iPdFOt)
  }, {
    value: Chunk981631.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
    label: Chunk388032.intl.string(Chunk388032.t.gNq5z6)
  }, {
    value: Chunk981631.rsA.AUTO_MODERATION_RULE_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.f72Zqb)
  }, {
    value: Chunk981631.rsA.AUTO_MODERATION_RULE_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.XeqIiv)
  }, {
    value: Chunk981631.rsA.AUTO_MODERATION_RULE_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.syAApU)
  }, {
    value: Chunk981631.rsA.GUILD_HOME_FEATURE_ITEM,
    label: Chunk388032.intl.string(Chunk388032.t.lhG5KN)
  }, {
    value: Chunk981631.rsA.GUILD_HOME_REMOVE_ITEM,
    label: Chunk388032.intl.string(Chunk388032.t.lRPRwS)
  }, {
    value: Chunk981631.rsA.SOUNDBOARD_SOUND_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.yoRi5r)
  }, {
    value: Chunk981631.rsA.SOUNDBOARD_SOUND_UPDATE,
    label: Chunk388032.intl.string(Chunk388032.t.uKlG0Z)
  }, {
    value: Chunk981631.rsA.SOUNDBOARD_SOUND_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.gq0iCT)
  }, {
    value: Chunk981631.rsA.VOICE_CHANNEL_STATUS_CREATE,
    label: Chunk388032.intl.string(Chunk388032.t.rGr0YM)
  }, {
    value: Chunk981631.rsA.VOICE_CHANNEL_STATUS_DELETE,
    label: Chunk388032.intl.string(Chunk388032.t.V9PEQ4)
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
  return null != eE(x.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj8) : null != (t = null == n ? true : n.label) ? t : null
}
let eA = {
  [Chunk379649.J6.SECONDS]: e => j.intl.formatToPlainString(j.t.geSp4K, {
    seconds: e
  }),
  [Chunk379649.J6.MINUTES]: e => j.intl.formatToPlainString(j.t.iXLF9W, {
    minutes: e
  }),
  [Chunk379649.J6.HOURS]: e => j.intl.formatToPlainString(j.t.xCjYxK, {
    hours: e
  }),
  [Chunk379649.J6.DAYS]: e => j.intl.formatToPlainString(j.t["k2UNz+"], {
    days: e
  })
};

function eT(e) {
  let t = eE(x.zUn.COMMUNICATION_DISABLED_UNTIL, e),
    n = ed(x.zUn.ROLES_ADD, e).length > 0,
    r = ed(x.zUn.ROLES_REMOVE, e).length > 0;
  if (null != t) {
    if ((null == t ? true : t.newValue) != null) {
      let n = new Date(null == t ? true : t.newValue).getTime() - L.default.extractTimestamp(e.id),
        r = Math.round(n / 1e3 / 60),
        l = (0, E.CI)(r, F);
      if (null == l.unit || null == l.time) return null;
      if (l.unit in eA) {
        let e = l.unit,
          t = l.unit === E.J6.SECONDS ? Math.round(n / 1e3) : l.time;
        return eA[e](t)
      }
    } else if ((null == t ? true : t.oldValue) != null) return j.intl.string(j.t.MA1ltr)
  } else if (n && r) return j.intl.string(j.t.RdMMew);
  else if (n) return j.intl.string(j.t["4GQqs8"]);
  else if (r) return j.intl.string(j.t["8mQ6x0"]);
  return null
}

function eI(e) {
  let t = ed(x.zUn.ROLES_ADD, e),
    n = ed(x.zUn.ROLES_REMOVE, e),
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
  return t.length > 0 && n.length > 0 ? j.intl.formatToPlainString(j.t.tZw1EW, {
    roleNamesAdded: r,
    roleNamesRemoved: l
  }) : t.length > 0 ? j.intl.formatToPlainString(j.t["/mTqt5"], {
    roleNames: r
  }) : n.length > 0 ? j.intl.formatToPlainString(j.t.Wk4pAJ, {
    roleNames: l
  }) : null
}

function em(e) {
  switch (e.action) {
    case x.rsA.GUILD_UPDATE:
      return j.t.LjZO31;
    case x.rsA.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === x.zUn.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case x.d4z.GUILD_STAGE_VOICE:
          return j.t["OKp4+o"];
        case x.d4z.GUILD_VOICE:
          return j.t.NPOy4G;
        case x.d4z.GUILD_CATEGORY:
          return j.t.T3KIjz;
        default:
          return j.t.wrYNG2
      }
    case x.rsA.CHANNEL_UPDATE:
      return j.t.nTYk6B;
    case x.rsA.CHANNEL_DELETE:
      return j.t.ynfvkm;
    case x.rsA.CHANNEL_OVERWRITE_CREATE:
      return j.t.l5Cu1a;
    case x.rsA.CHANNEL_OVERWRITE_UPDATE:
      return j.t.uhtbNU;
    case x.rsA.CHANNEL_OVERWRITE_DELETE:
      return j.t["HASt/3"];
    case x.rsA.MEMBER_KICK:
      return j.t.B5hDZX;
    case x.rsA.MEMBER_PRUNE:
      return j.t.qKOZTP;
    case x.rsA.MEMBER_BAN_ADD:
      return j.t["XklUm/"];
    case x.rsA.MEMBER_BAN_REMOVE:
      return j.t.o3Y6HD;
    case x.rsA.MEMBER_UPDATE:
      return j.t.pznhLN;
    case x.rsA.MEMBER_ROLE_UPDATE:
      return j.t.Vngfia;
    case x.rsA.MEMBER_MOVE:
      return j.t.Yt6NkU;
    case x.rsA.MEMBER_DISCONNECT:
      return j.t.K4eCZw;
    case x.rsA.BOT_ADD:
      return j.t.fWvX0G;
    case x.rsA.ROLE_CREATE:
      return j.t.UTLTx6;
    case x.rsA.ROLE_UPDATE:
      return j.t.NRbN18;
    case x.rsA.ROLE_DELETE:
      return j.t["4s63tb"];
    case x.rsA.INVITE_CREATE:
      return j.t.YHOXWy;
    case x.rsA.INVITE_UPDATE:
      return j.t.ja3kGS;
    case x.rsA.INVITE_DELETE:
      return j.t["3n/iWk"];
    case x.rsA.WEBHOOK_CREATE:
      return j.t.MhYhil;
    case x.rsA.WEBHOOK_UPDATE:
      return j.t["6GTlWB"];
    case x.rsA.WEBHOOK_DELETE:
      return j.t.in0VjZ;
    case x.rsA.EMOJI_CREATE:
      return j.t["7vekRO"];
    case x.rsA.EMOJI_UPDATE:
      return j.t.IsCKfh;
    case x.rsA.EMOJI_DELETE:
      return j.t.JnUaVG;
    case x.rsA.STICKER_CREATE:
      return j.t.DRZifq;
    case x.rsA.STICKER_UPDATE:
      return j.t.bhujGc;
    case x.rsA.STICKER_DELETE:
      return j.t.rGEP9U;
    case x.rsA.MESSAGE_DELETE:
      return j.t["HPkD+M"];
    case x.rsA.MESSAGE_BULK_DELETE:
      return j.t["3RIvLE"];
    case x.rsA.MESSAGE_PIN:
      return j.t.Yna7E7;
    case x.rsA.MESSAGE_UNPIN:
      return j.t.NCxXUW;
    case x.rsA.INTEGRATION_CREATE:
      return j.t.HYvCb3;
    case x.rsA.INTEGRATION_UPDATE:
      return j.t.ibCCOS;
    case x.rsA.INTEGRATION_DELETE:
      return j.t["8zScWY"];
    case x.rsA.STAGE_INSTANCE_CREATE:
      return j.t["n7x/DF"];
    case x.rsA.STAGE_INSTANCE_UPDATE:
      return j.t["0hQYU4"];
    case x.rsA.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return j.t["Oi/in9"];
      return j.t["7ZIFm9"];
    case x.rsA.GUILD_SCHEDULED_EVENT_CREATE:
      return j.t.S7k52p;
    case x.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
      return j.t.ebTK11;
    case x.rsA.GUILD_SCHEDULED_EVENT_DELETE:
      return j.t["/ARPKQ"];
    case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return j.t["8qCI36"];
    case x.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return j.t.zYb2da;
    case x.rsA.THREAD_CREATE:
      let n = null != e.changes ? e.changes.find(e => e.key === x.zUn.TYPE) : null;
      if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
      switch (n.newValue) {
        case x.d4z.PRIVATE_THREAD:
          return j.t.Br0y5w;
        case x.d4z.ANNOUNCEMENT_THREAD:
          return j.t["6uaMmO"];
        default:
          return j.t["2cxQ7G"]
      }
    case x.rsA.THREAD_UPDATE:
      return j.t.PSsy4t;
    case x.rsA.THREAD_DELETE:
      return j.t.s3Khn8;
    case x.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return j.t.uzCqBm;
    case x.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
      return j.t.NqWv2K;
    case x.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var r;
      if ((null == (r = e.options) ? true : r.auto_moderation_rule_trigger_type) === v.fX.USER_PROFILE.toString()) return j.t.YQsjej;
      return j.t.SD0PwJ;
    case x.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return j.t.Vk4TwX;
    case x.rsA.AUTO_MODERATION_QUARANTINE_USER:
      return j.t["/W5u5o"];
    case x.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
      return j.t.ONvWyr;
    case x.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return j.t["ryGLk+"];
    case x.rsA.AUTO_MODERATION_RULE_CREATE:
      return j.t["NKljj+"];
    case x.rsA.AUTO_MODERATION_RULE_UPDATE:
      return j.t["3wEA9u"];
    case x.rsA.AUTO_MODERATION_RULE_DELETE:
      return j.t.umua3n;
    case x.rsA.ONBOARDING_PROMPT_CREATE:
      return j.t["/8A1g2"];
    case x.rsA.ONBOARDING_PROMPT_UPDATE:
      return j.t.ArIrWI;
    case x.rsA.ONBOARDING_PROMPT_DELETE:
      return j.t.IuBTao;
    case x.rsA.ONBOARDING_CREATE:
      return j.t["wDaq3/"];
    case x.rsA.ONBOARDING_UPDATE:
      return j.t["yONu/l"];
    case x.rsA.HOME_SETTINGS_CREATE:
      return j.t.dSdCjG;
    case x.rsA.HOME_SETTINGS_UPDATE:
      return j.t.XHE8qv;
    case x.rsA.GUILD_HOME_FEATURE_ITEM:
      let l = null != e.changes ? e.changes.find(e => e.key === x.zUn.ENTITY_TYPE) : null;
      if (null == l) return j.t["UZ+U3A"];
      switch (l.newValue) {
        case a.w.MESSAGE:
          return j.t["PyEa+J"];
        case a.w.FORUM_POST:
          return j.t.hCuAb1;
        default:
          return j.t["UZ+U3A"]
      }
    case x.rsA.GUILD_HOME_REMOVE_ITEM:
      return j.t.kPReun;
    case x.rsA.SOUNDBOARD_SOUND_CREATE:
      return j.t["0PD83V"];
    case x.rsA.SOUNDBOARD_SOUND_UPDATE:
      return j.t.CM8n1w;
    case x.rsA.SOUNDBOARD_SOUND_DELETE:
      return j.t["kVz4/0"];
    case x.rsA.VOICE_CHANNEL_STATUS_CREATE:
      return j.t.MWjnU7;
    case x.rsA.VOICE_CHANNEL_STATUS_DELETE:
      return j.t.aS8Krq;
    case x.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
      return j.t["NUKUb+"];
    case x.rsA.GUILD_PROFILE_UPDATE:
      return j.t.Ed6hF1;
    case x.rsA.GUILD_MIGRATE_PIN_PERMISSION:
      return j.t["3Ne7MA"];
    default:
      return null
  }
}

function eg(e) {
  switch (e) {
    case b.zZ.GUILD_FEED_REMOVED:
      return j.intl.string(j.t["5G8ZD4"]);
    case b.zZ.ACTIVE_CHANNELS_REMOVED:
      return j.intl.string(j.t["4YLtzC"]);
    case b.zZ.PINNED:
      return j.intl.string(j.t["1QLRYb"])
  }
  return null
}

function eN(e) {
  switch (e) {
    case b.zZ.GUILD_FEED_REMOVED:
      return j.intl.string(j.t.S5kuWQ);
    case b.zZ.ACTIVE_CHANNELS_REMOVED:
      return j.intl.string(j.t["8qpgcz"]);
    case b.zZ.PINNED:
      return j.intl.string(j.t.CMweGA)
  }
  return null
}

function eh(e, t) {
  switch (e) {
    case x.Plq.CREATE_INSTANT_INVITE:
      return j.intl.string(j.t.zJrgTG);
    case x.Plq.KICK_MEMBERS:
      return j.intl.string(j.t.pBNv6i);
    case x.Plq.BAN_MEMBERS:
      return j.intl.string(j.t.oTBA7N);
    case x.Plq.ADMINISTRATOR:
      return j.intl.string(j.t.PGvZqX);
    case x.Plq.MANAGE_CHANNELS:
      if (t.targetType === x.KFR.CHANNEL || t.targetType === x.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t.nAw15L);
      return j.intl.string(j.t["9qLtWs"]);
    case x.Plq.MANAGE_GUILD:
      return j.intl.string(j.t.QZRcfO);
    case x.Plq.VIEW_GUILD_ANALYTICS:
      return j.intl.string(j.t["rQJBE/"]);
    case x.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return j.intl.string(j.t["0lTLTv"]);
    case x.Plq.CHANGE_NICKNAME:
      return j.intl.string(j.t.dilOF6);
    case x.Plq.MANAGE_NICKNAMES:
      return j.intl.string(j.t["t+Ct5x"]);
    case x.Plq.MANAGE_ROLES:
      return j.intl.string(j.t["C8d+oG"]);
    case x.Plq.MANAGE_WEBHOOKS:
      return j.intl.string(j.t["/ADKmM"]);
    case x.Plq.CREATE_GUILD_EXPRESSIONS:
      return j.intl.string(j.t.HarVuP);
    case x.Plq.MANAGE_GUILD_EXPRESSIONS:
      return j.intl.string(j.t.bbuXIn);
    case x.Plq.VIEW_AUDIT_LOG:
      return j.intl.string(j.t.fZgLpA);
    case x.Plq.VIEW_CHANNEL:
      if (t.targetType === x.KFR.CHANNEL || t.targetType === x.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t["W/A4Qp"]);
      return j.intl.string(j.t.uV83yi);
    case x.Plq.SEND_MESSAGES:
      return j.intl.string(j.t.T32rkC);
    case x.Plq.SEND_TTS_MESSAGES:
      return j.intl.string(j.t.Mg7bku);
    case x.Plq.USE_APPLICATION_COMMANDS:
      return j.intl.string(j.t.shbR1a);
    case x.Plq.MANAGE_MESSAGES:
      return j.intl.string(j.t["6lU9xM"]);
    case x.Plq.EMBED_LINKS:
      return j.intl.string(j.t["969dEL"]);
    case x.Plq.ATTACH_FILES:
      return j.intl.string(j.t["3AS4UM"]);
    case x.Plq.READ_MESSAGE_HISTORY:
      return j.intl.string(j.t.l9ufaR);
    case x.Plq.MENTION_EVERYONE:
      return j.intl.string(j.t.Y78KGC);
    case x.Plq.USE_EXTERNAL_EMOJIS:
      return j.intl.string(j.t.BpBGZU);
    case x.Plq.USE_EXTERNAL_STICKERS:
      return j.intl.string(j.t["UeRs+b"]);
    case x.Plq.ADD_REACTIONS:
      return j.intl.string(j.t.yEoJAr);
    case x.Plq.CONNECT:
      return j.intl.string(j.t.S0W8Z5);
    case x.Plq.SPEAK:
      return j.intl.string(j.t["8w1tIR"]);
    case x.Plq.MUTE_MEMBERS:
      return j.intl.string(j.t["8EI30/"]);
    case x.Plq.DEAFEN_MEMBERS:
      return j.intl.string(j.t["9L47Fr"]);
    case x.Plq.MOVE_MEMBERS:
      return j.intl.string(j.t.YtjJPQ);
    case x.Plq.USE_VAD:
      return j.intl.string(j.t["08zAV7"]);
    case x.Plq.PRIORITY_SPEAKER:
      return j.intl.string(j.t.BVK71i);
    case x.Plq.STREAM:
      return j.intl.string(j.t.FlNoSV);
    case x.Plq.REQUEST_TO_SPEAK:
      return j.intl.string(j.t["5kicT2"]);
    case x.Plq.USE_EMBEDDED_ACTIVITIES:
      return j.intl.string(j.t.rLSGeh);
    case x.Plq.CREATE_EVENTS:
      return j.intl.string(j.t.qyjZua);
    case x.Plq.MANAGE_EVENTS:
      return j.intl.string(j.t.HIgA5a);
    case x.Plq.CREATE_PUBLIC_THREADS:
      return j.intl.string(j.t["25rKnX"]);
    case x.Plq.CREATE_PRIVATE_THREADS:
      return j.intl.string(j.t.QwbTSa);
    case x.Plq.SEND_MESSAGES_IN_THREADS:
      return j.intl.string(j.t.fTE74g);
    case x.Plq.MANAGE_THREADS:
      return j.intl.string(j.t.kEqgr7);
    case x.Plq.MODERATE_MEMBERS:
      return j.intl.string(j.t["+RL6pz"]);
    case x.Plq.SET_VOICE_CHANNEL_STATUS:
      return j.intl.string(j.t.VBwkUf);
    case x.Plq.SEND_POLLS:
      return j.intl.string(j.t.UMQ7Ww);
    case x.Plq.USE_EXTERNAL_APPS:
      return j.intl.string(j.t.TtA5rK);
    case x.Plq.PIN_MESSAGES:
      return j.intl.string(j.t.Y5BI39);
    case x.Plq.BYPASS_SLOWMODE:
      return j.intl.string(j.t.kqcjeV)
  }
  return null
}

function eO(e, t) {
  let n = [];
  return e.forEach(e => {
    let r = function(e, t) {
        switch (e.targetType) {
          case x.KFR.GUILD:
          case x.KFR.GUILD_HOME:
          case x.KFR.GUILD_PROFILE:
            return t;
          case x.KFR.CHANNEL:
          case x.KFR.CHANNEL_OVERWRITE:
            return ep(e, x.zUn.NAME, e => f.Z.getChannel(e), e => (0, _.F6)(e, p.default, S.Z, true));
          case x.KFR.USER:
            return ep(e, x.zUn.NICK, e => p.default.getUser(e), e => e);
          case x.KFR.ROLE:
            return ep(e, x.zUn.NAME, e => R.Z.getRole(t.id, e), e => e.name);
          case x.KFR.ONBOARDING_PROMPT:
            let n = ep(e, x.zUn.ID, e => m.Z.getOnboardingPrompt(e), e => e.title);
            return null == n || "" === n ? j.intl.string(j.t.ZNQyiR) : n;
          case x.KFR.GUILD_ONBOARDING:
          case x.KFR.GUILD_MEMBER_VERIFICATION:
            return t;
          case x.KFR.INVITE:
            return ep(e, x.zUn.CODE, x.VqG);
          case x.KFR.INTEGRATION:
            return ep(e, x.zUn.TYPE, e => M.Z.integrations.find(t => t.id === e), e => e.name);
          case x.KFR.WEBHOOK:
            return ep(e, x.zUn.NAME, e => M.Z.webhooks.find(t => t.id === e), e => e.name);
          case x.KFR.EMOJI:
            return ep(e, x.zUn.NAME, e => T.ZP.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case x.KFR.STICKER:
            return ep(e, x.zUn.NAME, e => h.Z.getStickerById(e), e => e.name);
          case x.KFR.STAGE_INSTANCE:
            return ep(e, x.zUn.TOPIC, e => {
              var n;
              return null == (n = Object.values(N.Z.getStageInstancesByGuild(t.id))) ? true : n.find(t => t.id === e)
            }, e => e.topic);
          case x.KFR.GUILD_SCHEDULED_EVENT:
          case x.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return ep(e, x.zUn.NAME, e => M.Z.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case x.KFR.THREAD:
            return ep(e, x.zUn.NAME, e => M.Z.threads.find(t => t.id === e), e => e.name);
          case x.KFR.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = M.Z.integrations.find(t => {
                var n;
                return (null == (n = t.application) ? true : n.id) === e.targetId
              });
              if (null != t) return t.name;
              return e.targetId
            }
            return ep(e, x.zUn.NAME, e => M.Z.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === d.yU.CHAT ? "/⁠".concat(t) : t
            });
          case x.KFR.AUTO_MODERATION_RULE:
            return ep(e, x.zUn.NAME, e => M.Z.automodRules.find(t => t.id === e), e => e.name);
          case x.KFR.GUILD_SOUNDBOARD:
            return ep(e, x.zUn.NAME, x.VqG);
          case x.KFR.HOME_SETTINGS:
            return ep(e, x.zUn.GUILD_ID, e => g.Z.getSettings(e), () => j.intl.string(j.t.VbpLyU), t.id);
          case x.KFR.VOICE_CHANNEL_STATUS:
            return ep(e, x.zUn.STATUS, e => f.Z.getChannel(e), e => (0, _.F6)(e, p.default, S.Z, true));
          default:
            return k.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      i = p.default.getUser(e.userId);
    if (null != r || [x.rsA.MEMBER_PRUNE, x.rsA.MEMBER_DISCONNECT, x.rsA.MEMBER_MOVE, x.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, x.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", i)).set("target", r)).set("options", function(e) {
          if (null != e.options) {
            let n = y({}, e.options);
            switch (e.options.type) {
              case x.jwA.USER:
                n.subtarget = eC(e.options.id, e => p.default.getUser(e), e => e.tag);
                break;
              case x.jwA.ROLE:
                n.subtarget = eC(e.options.role_name, x.VqG)
            }
            if (null != e.options.channel_id && (n.channel = ep(e, "", e => f.Z.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let r = M.Z.guildScheduledEvents.find(t => t.id === e.targetId),
                l = null == r ? true : r.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              n.subtarget = (0, C.vc)(s()(L.default.extractTimestamp(null != (t = null == l ? true : l.event_exception_id) ? t : "0")), "LL")
            }
            return n
          }
          return e.options
        }(e))).changes) {
        let n = [];
        e.changes.forEach(r => {
          let i = function(e, t, n) {
            if (t.action === x.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case x.ecB.ROLE:
                  e.subtarget = eC(t.id, e => R.Z.getRole(n.id, e), e => e.name);
                  break;
                case x.ecB.USER:
                  e.subtarget = eC(t.id, e => p.default.getUser(e), e => e.tag);
                  break;
                case x.ecB.CHANNEL:
                  t.id === l()(n.id).subtract(1).toString() ? e.subtarget = j.intl.string(j.t.MSYhgh) : e.subtarget = eC(t.id, e => f.Z.getChannel(e), e => (0, _.F6)(e, p.default, S.Z, true))
              }
              return e
            }
            switch (e.key) {
              case x.zUn.OWNER_ID:
                return eS(e, e => p.default.getUser(e));
              case x.zUn.CHANNEL_ID:
              case x.zUn.AFK_CHANNEL_ID:
              case x.zUn.SYSTEM_CHANNEL_ID:
              case x.zUn.RULES_CHANNEL_ID:
              case x.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                return eS(e, e => f.Z.getChannel(e), e => (0, _.F6)(e, p.default, S.Z, true));
              case x.zUn.AFK_TIMEOUT:
                return eS(e, e => e / 60);
              case x.zUn.BITRATE:
                return eS(e, e => e / 1e3);
              case x.zUn.COLOR:
                return eS(e, e => (0, c.Rf)(e).toUpperCase());
              case x.zUn.THEME_COLORS:
                return eS(e, e => "".concat((0, c.Rf)(e[0]).toUpperCase(), ", ").concat((0, c.Rf)(e[1]).toUpperCase()));
              case x.zUn.MAX_AGE:
                return eS(e, e => {
                  let t = U.ZP.getMaxAgeOptionByValue(e);
                  return null !== t ? t.label : e
                });
              case x.zUn.PERMISSIONS: {
                let t = [],
                  {
                    added: n,
                    removed: r
                  } = ef(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let e = new O.ms(x.zUn.PERMISSIONS_GRANTED, null, n);
                  t.push(e)
                }
                if (r.length > 0) {
                  let e = new O.ms(x.zUn.PERMISSIONS_DENIED, null, r);
                  t.push(e)
                }
                return t
              }
              case x.zUn.PERMISSIONS_GRANTED:
              case x.zUn.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: n,
                    removed: r
                  } = ef(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let r = new O.ms(e.key, null, n);
                  t.push(r)
                }
                if (r.length > 0) {
                  let e = new O.ms(x.zUn.PERMISSIONS_RESET, r, r);
                  t.push(e)
                }
                return t
              }
              case x.zUn.FLAGS: {
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
                    for (let e in b.zZ) {
                      let t = b.zZ[e];
                      D.yE(l, t) && s.push(t), D.yE(i, t) && a.push(t)
                    }
                    return {
                      added: s,
                      removed: a
                    }
                  }(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let r = new O.ms(e.key, null, n);
                  t.push(r)
                }
                if (r.length > 0) {
                  let n = new O.ms(e.key, r, null);
                  t.push(n)
                }
                return t
              }
              case x.zUn.PREFERRED_LOCALE:
                return eS(e, e => {
                  let t = (0, j.getAvailableLocales)().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case x.zUn.VIDEO_QUALITY_MODE:
                return eS(e, e => e === x.Ucd.FULL ? j.intl.string(j.t["7jOoJE"]) : j.intl.string(j.t.jjKYpu));
              case x.zUn.SYSTEM_CHANNEL_FLAGS:
                let r = {
                    [x.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: x.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                    [x.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: x.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                    [x.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: x.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                    [x.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: x.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                  },
                  i = [];
                return Object.values(x.xmn).forEach(t => {
                  let n = (e.oldValue & t) === t,
                    l = (e.newValue & t) === t;
                  if (n === l) return;
                  let s = new O.ms(r[t], !n, !l);
                  i.push(s)
                }), i;
              case x.zUn.AUTO_MODERATION_ACTIONS:
                if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, e => e.map(e => e.type), e => e.map(I.ZF).join(", "));
                break;
              case x.zUn.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, I.YN);
                break;
              case x.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, I.Ar);
                break;
              case x.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, e => null != e && "object" == typeof e ? null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.intl.formatToMarkdownString(j.t.y91UXV, {
                  newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                }) : JSON.stringify(e) : e);
                break;
              case x.zUn.AUTO_MODERATION_ADD_KEYWORDS:
              case x.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
              case x.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case x.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case x.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
              case x.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case x.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, e => e.map(f.Z.getChannel).filter(e => null != e).map(e => (0, _.F6)(e, p.default, S.Z, true)), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]));
                break;
              case x.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === x.KFR.AUTO_MODERATION_RULE) return eS(e, e => e.map(e => R.Z.getRole(n.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]));
                break;
              case x.zUn.AVAILABLE_TAGS:
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
                      if (null == i[e]) return new O.ms(x.zUn.AVAILABLE_TAG_ADD, null, eR(s[e]))
                  }
                  if (r.length > l.length) {
                    for (let e in i)
                      if (null == s[e]) return new O.ms(x.zUn.AVAILABLE_TAG_DELETE, null, eR(i[e]))
                  }
                  for (let e in i) {
                    let t = i[e],
                      n = s[e];
                    if ((null == n ? true : n.name) !== t.name || (null == n ? true : n.emoji_id) !== t.emoji_id || (null == n ? true : n.emoji_name) !== t.emoji_name) return new O.ms(x.zUn.AVAILABLE_TAG_EDIT, eR(t), eR(n))
                  }
                  return e
                }(e);
              case x.zUn.SCHEDULED_START_TIME:
              case x.zUn.SCHEDULED_END_TIME:
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
  for (let e in x.Plq) {
    let t = x.Plq[e];
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
  return null != e.newValue && (r = t(e.newValue), null != n && null != r && (r = n(r))), null != e.oldValue && (l = t(e.oldValue), null != n && null != l && (l = n(l))), new O.ms(e.key, l || e.oldValue, r || e.newValue)
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

function eU(e, t) {
  return n => null == n.newValue ? e : t
}

function eL(e, t, n, r) {
  return l => null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r
}

function eM(e, t) {
  return n => n.newValue ? e : t
}

function ex(e) {
  return t => e[t.newValue]
}

function eb(e, t) {
  return n => {
    var r;
    return null != (r = e[n.newValue]) ? r : t
  }
}