/** Chunk was on 69937 **/
/** chunk id: 909746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bq: () => J,
  C0: () => ei,
  C2: () => $,
  EN: () => K,
  F1: () => es,
  HE: () => B,
  HN: () => q,
  Iv: () => eu,
  J5: () => eT,
  JA: () => ea,
  K: () => Q,
  ML: () => Z,
  N$: () => X,
  N5: () => eg,
  QM: () => ef,
  V$: () => ed,
  _$: () => eN,
  cT: () => em,
  em: () => eI,
  hQ: () => eh,
  hx: () => W,
  lR: () => Y,
  lU: () => V,
  nm: () => e_,
  oD: () => H,
  pA: () => en,
  pY: () => z,
  pi: () => et,
  rK: () => el,
  uB: () => ee,
  vc: () => ec,
  vm: () => er,
  zT: () => eo
}), require("./415506.js"), require("./539854.js"), require("./49124.js");
var Chunk654861 = require("./654861.js"),
  l = require.n(Chunk654861),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk536402 = require("./536402.js"),
  Chunk533800 = require("./533800.js"),
  Chunk149765 = require("./149765.js"),
  Chunk866442 = require("./866442.js"),
  Chunk95015 = require("./95015.js"),
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
  w = [Chunk379649.J6.DAYS, Chunk379649.J6.HOURS, Chunk379649.J6.MINUTES, Chunk379649.J6.SECONDS],
  F = () => ({
    [M.zUn.REASON]: () => j.t["2IW3C5"]
  }),
  z = () => y({
    [M.zUn.NAME]: () => j.t.CkDiNH,
    [M.zUn.DESCRIPTION]: eD(j.t.RP3Ey3, j.t.QAVj1Y),
    [M.zUn.ICON_HASH]: () => j.t.iLZ8Q9,
    [M.zUn.SPLASH_HASH]: () => j.t["4VV6dn"],
    [M.zUn.DISCOVERY_SPLASH_HASH]: () => j.t["2pds6p"],
    [M.zUn.BANNER_HASH]: eD(j.t.Cxq4zO, j.t["H7eE/9"]),
    [M.zUn.OWNER_ID]: () => j.t["8ltsLT"],
    [M.zUn.REGION]: () => j.t.X9r5Kf,
    [M.zUn.PREFERRED_LOCALE]: () => j.t.UnXuDS,
    [M.zUn.AFK_CHANNEL_ID]: eD(j.t.ClBuA4, j.t["ms+xtL"]),
    [M.zUn.AFK_TIMEOUT]: () => j.t.q21fHa,
    [M.zUn.SYSTEM_CHANNEL_ID]: eD(j.t.H1VXaa, j.t.XhtmxJ),
    [M.zUn.RULES_CHANNEL_ID]: eD(j.t.OI6MG2, j.t.lik3tI),
    [M.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eD(j.t.YxBKrY, j.t.Ehsnij),
    [M.zUn.MFA_LEVEL]: eM({
      [M.BpS.NONE]: j.t.voaCCQ,
      [M.BpS.ELEVATED]: j.t.pRNVwz
    }),
    [M.zUn.WIDGET_ENABLED]: eU(j.t.ADIty8, j.t.nf58VY),
    [M.zUn.WIDGET_CHANNEL_ID]: eD(j.t["6SBsDc"], j.t.deQ5wO),
    [M.zUn.VERIFICATION_LEVEL]: eM({
      [M.sFg.NONE]: j.t.W27rsc,
      [M.sFg.LOW]: j.t["V8P+Pw"],
      [M.sFg.MEDIUM]: j.t.ERQFau,
      [M.sFg.HIGH]: j.t["83fN0j"],
      [M.sFg.VERY_HIGH]: j.t.PnkQJE
    }),
    [M.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eM({
      [M.bL.ALL_MESSAGES]: j.t.LDi76A,
      [M.bL.ONLY_MENTIONS]: j.t["6K83ba"]
    }),
    [M.zUn.VANITY_URL_CODE]: eD(j.t.Zplsov, j.t.u6cArh),
    [M.zUn.EXPLICIT_CONTENT_FILTER]: eM({
      [M.lxg.DISABLED]: j.t.fmOeL3,
      [M.lxg.MEMBERS_WITHOUT_ROLES]: j.t["4FghYw"],
      [M.lxg.ALL_MEMBERS]: j.t.olyrSm
    }),
    [M.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eU(j.t.rBT0sn, j.t["gc+te5"]),
    [M.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFH,
    [M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjB,
    [M.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t["+fQAel"],
    [M.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4v,
    [M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSA
  }, F()),
  Z = () => ({
    [M.zUn.NAME]: eb(j.t.f8Rh0U, j.t.ebD4Qp),
    [M.zUn.POSITION]: eb(j.t.isS8te, j.t.t5uBis),
    [M.zUn.TOPIC]: eL(j.t.esQcxn, j.t["m+veAn"], j.t["ws/1FA"]),
    [M.zUn.BITRATE]: eb(j.t.fw81ak, j.t.MFNlgZ),
    [M.zUn.RTC_REGION_OVERRIDE]: eL(j.t["6kajxx"], j.t.eGOlmU, j.t["0JMZdz"]),
    [M.zUn.USER_LIMIT]: eb(j.t.wk5t7p, j.t.XgjCEh),
    [M.zUn.RATE_LIMIT_PER_USER]: eb(j.t["7lirhF"], j.t.j4CCJR),
    [M.zUn.PERMISSIONS_RESET]: () => j.t["+vSBFY"],
    [M.zUn.PERMISSIONS_GRANTED]: () => j.t.EKLJv8,
    [M.zUn.PERMISSIONS_DENIED]: () => j.t.U3rO5X,
    [M.zUn.REASON]: () => j.t["2IW3C5"],
    [M.zUn.NSFW]: eU(j.t.H8Ri2Y, j.t.WW6cJw),
    [M.zUn.TYPE]: eb(j.t.Vn5zn2, j.t.aq4uWI),
    [M.zUn.VIDEO_QUALITY_MODE]: eb(j.t.e68fAU, j.t.djbES0),
    [M.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eb(j.t.nYz2mg, j.t.oczvRI),
    [M.zUn.FLAGS]: () => j.t.ImCQko,
    [M.zUn.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
    [M.zUn.AVAILABLE_TAG_EDIT]: () => j.t.YtUzls,
    [M.zUn.AVAILABLE_TAG_DELETE]: () => j.t["8QOseg"],
    [M.zUn.LINKED_LOBBY]: eD(j.t["+/3TkD"], j.t["5kDYS3"])
  }),
  V = () => y({
    [M.zUn.NICK]: eL(j.t.qXDsHv, j.t["m+qury"], j.t.DvLvjF),
    [M.zUn.DEAF]: eU(j.t.mArLlW, j.t.ddvVYG),
    [M.zUn.MUTE]: eU(j.t["bxs/lS"], j.t.FjecQM),
    [M.zUn.ROLES_REMOVE]: () => j.t["+2SDWV"],
    [M.zUn.ROLES_ADD]: () => j.t["B3/3IJ"],
    [M.zUn.PRUNE_DELETE_DAYS]: () => j.t["+Cvc+D"],
    [M.zUn.COMMUNICATION_DISABLED_UNTIL]: eL(j.t.LXTQr5, j.t.LXTQr5, j.t.ULSdnE),
    [M.zUn.BYPASSES_VERIFICATION]: eU(j.t.NBPBui, j.t.zATost),
    [M.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFH
  }, F()),
  B = () => y({
    [M.zUn.NAME]: eb(j.t.QBmlaD, j.t["Lfs4r+"]),
    [M.zUn.DESCRIPTION]: eb(j.t.XeYKWJ, j.t.PSfeIj),
    [M.zUn.PERMISSIONS_GRANTED]: () => j.t["9i/DvE"],
    [M.zUn.PERMISSIONS_DENIED]: () => j.t.pa1ZVh,
    [M.zUn.COLOR]: ev({
      "#000000": j.t.TK6E1H
    }, j.t["2FQFiw"]),
    [M.zUn.COLORS]: e => null == e.newValue.secondary_color ? j.t.U44ttm : j.t["WnSwL/"],
    [M.zUn.HOIST]: eU(j.t.gWfe24, j.t["+tb8kN"]),
    [M.zUn.MENTIONABLE]: eU(j.t.LL8VFF, j.t.Z7xzmC),
    [M.zUn.ICON_HASH]: () => j.t["iEE79/"],
    [M.zUn.UNICODE_EMOJI]: () => j.t.KiLMM0
  }, F()),
  H = () => G(y({}, F()), {
    [M.zUn.TITLE]: eb(j.t["sNpuy/"], j.t["3Ukc/g"]),
    [M.zUn.DESCRIPTION]: eb(j.t.PP1q0x, j.t.z7pYLg),
    [M.zUn.OPTIONS]: () => j.t["3G5C9+"],
    [M.zUn.SINGLE_SELECT]: eU(j.t.v4WnR3, j.t["6Qg3uC"]),
    [M.zUn.REQUIRED]: eU(j.t["0MPAM6"], j.t.pwsXir)
  }),
  K = () => G(y({}, F()), {
    [M.zUn.DEFAULT_CHANNEL_IDS]: () => j.t["8M+D2s"],
    [M.zUn.ENABLE_DEFAULT_CHANNELS]: eU(j.t["EYd/ls"], j.t["36OZeQ"]),
    [M.zUn.ENABLE_ONBOARDING_PROMPTS]: eU(j.t.V3u8PV, j.t["r66lc/"]),
    [M.zUn.ENABLED]: eU(j.t.SODVIs, j.t.u8HY5U)
  }),
  W = () => G(y({}, F()), {
    [M.zUn.WELCOME_MESSAGE]: () => j.t.dKQ1xd,
    [M.zUn.NEW_MEMBER_ACTIONS]: () => j.t.jDUIno,
    [M.zUn.RESOURCE_CHANNELS]: () => j.t.SIX0mr
  }),
  q = () => y({
    [M.zUn.CODE]: () => j.t.rrRHgb,
    [M.zUn.CHANNEL_ID]: () => j.t.Q1vd5q,
    [M.zUn.MAX_USES]: ev({
      0: j.t.Yx8LNm
    }, j.t["3ygnwU"]),
    [M.zUn.MAX_AGE]: ev({
      [j.intl.string(j.t.PqEzn8)]: j.t.uWrLvw
    }, j.t["Q+5kcO"]),
    [M.zUn.TEMPORARY]: eU(j.t.MWp6H7, j.t.omiqTH),
    [M.zUn.FLAGS]: eM({
      [o.$.IS_GUEST_INVITE]: j.t.XYZMbL
    })
  }, F()),
  Y = () => ({
    [M.zUn.CHANNEL_ID]: eb(j.t.jhPprR, j.t.ar4qYO),
    [M.zUn.NAME]: eb(j.t.ZVGrzU, j.t.tywdZR),
    [M.zUn.AVATAR_HASH]: () => j.t.KB52Uj,
    [M.zUn.REASON]: () => j.t["2IW3C5"]
  }),
  X = () => y({
    [M.zUn.NAME]: eb(j.t.ahU1o5, j.t["wxs+vZ"])
  }, F()),
  J = () => y({
    [M.zUn.NAME]: eb(j.t.cdl0Yo, j.t.o3W2ly),
    [M.zUn.TAGS]: eb(j.t["zwL+S2"], j.t["VYfKA+"]),
    [M.zUn.DESCRIPTION]: eb(j.t.XeYKWJ, j.t.PSfeIj)
  }, F()),
  Q = () => y({
    [M.zUn.ENABLE_EMOTICONS]: eU(j.t.FI0m5x, j.t.olpKC6),
    [M.zUn.EXPIRE_BEHAVIOR]: eM({
      0: j.t["1Bb1+u"],
      1: j.t.vjlW6m
    }),
    [M.zUn.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMa
  }, F()),
  $ = () => y({
    [M.zUn.TOPIC]: eb(j.t["m+veAn"], j.t.esQcxn),
    [M.zUn.PRIVACY_LEVEL]: eM({
      [P.j8.GUILD_ONLY]: j.t["EC+CDt"],
      [P.j8.PUBLIC]: j.t["pK/WG0"]
    })
  }, F()),
  ee = () => y({
    [M.zUn.NAME]: () => j.t["21EXHW"],
    [M.zUn.DESCRIPTION]: () => j.t.Vm1ofw,
    [M.zUn.PRIVACY_LEVEL]: eM({
      [P.j8.GUILD_ONLY]: j.t["EC+CDt"],
      [P.j8.PUBLIC]: j.t["pK/WG0"]
    }),
    [M.zUn.STATUS]: eM({
      [P.p1.SCHEDULED]: j.t.hXKDgq,
      [P.p1.ACTIVE]: j.t.lRX1nz,
      [P.p1.COMPLETED]: j.t["/eFIhq"],
      [P.p1.CANCELED]: j.t.NWIYhj
    }),
    [M.zUn.ENTITY_TYPE]: eM({
      [P.WX.NONE]: j.t["6sO3Ss"],
      [P.WX.STAGE_INSTANCE]: j.t["Wo+s1y"],
      [P.WX.VOICE]: j.t.XCVaIL,
      [P.WX.EXTERNAL]: j.t.IvhAj2
    }),
    [M.zUn.CHANNEL_ID]: eD(j.t.yJBIcX, j.t["+PqSsi"]),
    [M.zUn.LOCATION]: eD(j.t.GaMBHy, j.t.PsICk0),
    [M.zUn.IMAGE_HASH]: eD(j.t.S3vcRK, j.t.KQu47I)
  }, F()),
  et = () => y({
    [M.zUn.SCHEDULED_START_TIME]: eD(j.t.zMIYVg, j.t.fzF8Gd),
    [M.zUn.SCHEDULED_END_TIME]: eD(j.t.vONSQA, j.t.IlIti3),
    [M.zUn.IS_CANCELED]: e => {
      if (null != e.oldValue || true === e.newValue) {
        if (!e.oldValue && e.newValue) return j.t["7RkicW"];
        else if (e.oldValue && !e.newValue) return j.t.dRNTWW
      }
    }
  }, F()),
  en = () => y({
    [M.zUn.NAME]: eb(j.t.tUKRzX, j.t.kPCHON),
    [M.zUn.ARCHIVED]: eU(j.t.jDi9FK, j.t.F6dvbT),
    [M.zUn.LOCKED]: eU(j.t.JSy1QW, j.t.C7Jgo8),
    [M.zUn.INVITABLE]: eU(j.t.dxNUs9, j.t.biJvYG),
    [M.zUn.AUTO_ARCHIVE_DURATION]: eb(j.t.LuaG3y, j.t["18d9qr"]),
    [M.zUn.RATE_LIMIT_PER_USER]: eb(j.t["7lirhF"], j.t.j4CCJR),
    [M.zUn.FLAGS]: () => j.t.sSAQtj
  }, F()),
  er = e => {
    let t = y({}, F());
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = () => j.t["JH+89C"] : t[e.key] = () => j.t.HUrFDu : t[e.key] = () => j.t.vynxnV
    }), t
  },
  el = () => y({
    [M.zUn.NAME]: () => j.t.XwxAJT,
    [M.zUn.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pyl,
    [M.zUn.AUTO_MODERATION_EVENT_TYPE]: () => j.t["46Y+L5"],
    [M.zUn.AUTO_MODERATION_ACTIONS]: () => j.t["8efxfv"],
    [M.zUn.AUTO_MODERATION_ENABLED]: e => {
      var t;
      returntrue === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxC2 : j.t.Wrg9Jn
    },
    [M.zUn.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nx,
    [M.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLE,
    [M.zUn.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t["h/lM65"],
    [M.zUn.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t["9V2yaC"],
    [M.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t["4Qe9ny"],
    [M.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxp,
    [M.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadc,
    [M.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t["FvvR+K"],
    [M.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSvy
  }, F()),
  ei = () => y({
    [M.zUn.NAME]: eb(j.t.VOtRSO, j.t.OK7B8E),
    [M.zUn.VOLUME]: eb(j.t.igrDB9, j.t.L5lDFJ),
    [M.zUn.EMOJI_NAME]: eL(j.t.IIanaY, j.t["z4w4U/"], j.t.V8TfyU),
    [M.zUn.EMOJI_ID]: eL(j.t.ainxMB, j.t["2NPsYu"], j.t["8crtns"])
  }, F()),
  ea = () => y({
    [M.zUn.VERIFICATION_ENABLED]: e => true === e.newValue ? j.t.fnkzDY : j.t.WYT6ka,
    [M.zUn.MANUAL_APPROVAL_ENABLED]: e => true === e.newValue ? j.t.jzSvVd : j.t.WxyOtj
  }, F()),
  es = () => y({
    [M.zUn.STATUS]: () => j.t.HyCSnI
  }, F()),
  eo = () => ({
    [M.zUn.DESCRIPTION]: () => j.t.nsUZKY,
    [M.zUn.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgN,
    [M.zUn.CUSTOM_BANNER_HASH]: () => j.t["04b5KC"],
    [M.zUn.TRAITS]: () => j.t.dEy9WO,
    [M.zUn.GAME_APPLICATION_IDS]: () => j.t["8BOT3x"],
    [M.zUn.VISIBILITY]: () => j.t.bCl1Ep,
    [M.zUn.SERVER_TAG]: eD(j.t.ix1dnX, j.t["4LKpKb"])
  }),
  ec = {
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
  eu = () => [{
    value: M.rsA.ALL,
    label: j.intl.string(j.t.QxEVcv),
    valueLabel: j.intl.string(j.t.an9Ry3)
  }, {
    value: M.rsA.GUILD_UPDATE,
    label: j.intl.string(j.t["5INZa3"])
  }, {
    value: M.rsA.CHANNEL_CREATE,
    label: j.intl.string(j.t["2uh4vJ"])
  }, {
    value: M.rsA.CHANNEL_UPDATE,
    label: j.intl.string(j.t.mGsBLV)
  }, {
    value: M.rsA.CHANNEL_DELETE,
    label: j.intl.string(j.t.hCHzAr)
  }, {
    value: M.rsA.CHANNEL_OVERWRITE_CREATE,
    label: j.intl.string(j.t["8TnAMP"])
  }, {
    value: M.rsA.CHANNEL_OVERWRITE_UPDATE,
    label: j.intl.string(j.t.Jqx0Bi)
  }, {
    value: M.rsA.CHANNEL_OVERWRITE_DELETE,
    label: j.intl.string(j.t.gBXOr4)
  }, {
    value: M.rsA.MEMBER_KICK,
    label: j.intl.string(j.t["Q1/hN8"])
  }, {
    value: M.rsA.MEMBER_PRUNE,
    label: j.intl.string(j.t.tOTTja)
  }, {
    value: M.rsA.MEMBER_BAN_ADD,
    label: j.intl.string(j.t["NfPn+e"])
  }, {
    value: M.rsA.MEMBER_BAN_REMOVE,
    label: j.intl.string(j.t.XCsGfI)
  }, {
    value: M.rsA.MEMBER_UPDATE,
    label: j.intl.string(j.t["F/jmNJ"])
  }, {
    value: M.rsA.MEMBER_ROLE_UPDATE,
    label: j.intl.string(j.t.zAveSI)
  }, {
    value: M.rsA.MEMBER_MOVE,
    label: j.intl.string(j.t.QshteR)
  }, {
    value: M.rsA.MEMBER_DISCONNECT,
    label: j.intl.string(j.t.Z45os7)
  }, {
    value: M.rsA.BOT_ADD,
    label: j.intl.string(j.t.vuH24Z)
  }, {
    value: M.rsA.THREAD_CREATE,
    label: j.intl.string(j.t["+zl0DG"])
  }, {
    value: M.rsA.THREAD_UPDATE,
    label: j.intl.string(j.t.rbIry3)
  }, {
    value: M.rsA.THREAD_DELETE,
    label: j.intl.string(j.t.hFjNEA)
  }, {
    value: M.rsA.ROLE_CREATE,
    label: j.intl.string(j.t.AbxKtv)
  }, {
    value: M.rsA.ROLE_UPDATE,
    label: j.intl.string(j.t.t3Z6sU)
  }, {
    value: M.rsA.ROLE_DELETE,
    label: j.intl.string(j.t.YsFpa4)
  }, {
    value: M.rsA.ONBOARDING_PROMPT_CREATE,
    label: j.intl.string(j.t.ZV9tqc)
  }, {
    value: M.rsA.ONBOARDING_PROMPT_UPDATE,
    label: j.intl.string(j.t.PcOdvX)
  }, {
    value: M.rsA.ONBOARDING_PROMPT_DELETE,
    label: j.intl.string(j.t["+r33Na"])
  }, {
    value: M.rsA.ONBOARDING_CREATE,
    label: j.intl.string(j.t.uDADde)
  }, {
    value: M.rsA.ONBOARDING_UPDATE,
    label: j.intl.string(j.t.J1H1wg)
  }, {
    value: M.rsA.HOME_SETTINGS_CREATE,
    label: j.intl.string(j.t.Di4cvI)
  }, {
    value: M.rsA.HOME_SETTINGS_UPDATE,
    label: j.intl.string(j.t.tzyrJH)
  }, {
    value: M.rsA.INVITE_CREATE,
    label: j.intl.string(j.t["0BNJdX"])
  }, {
    value: M.rsA.INVITE_UPDATE,
    label: j.intl.string(j.t["o++obV"])
  }, {
    value: M.rsA.INVITE_DELETE,
    label: j.intl.string(j.t.iP40Az)
  }, {
    value: M.rsA.WEBHOOK_CREATE,
    label: j.intl.string(j.t["tBF4+S"])
  }, {
    value: M.rsA.WEBHOOK_UPDATE,
    label: j.intl.string(j.t.eV3McO)
  }, {
    value: M.rsA.WEBHOOK_DELETE,
    label: j.intl.string(j.t.AAL3K1)
  }, {
    value: M.rsA.EMOJI_CREATE,
    label: j.intl.string(j.t.RuWm0V)
  }, {
    value: M.rsA.EMOJI_UPDATE,
    label: j.intl.string(j.t.WzdUY7)
  }, {
    value: M.rsA.EMOJI_DELETE,
    label: j.intl.string(j.t.c3dK2L)
  }, {
    value: M.rsA.MESSAGE_DELETE,
    label: j.intl.string(j.t.daTfXh)
  }, {
    value: M.rsA.MESSAGE_BULK_DELETE,
    label: j.intl.string(j.t.nrBxeh)
  }, {
    value: M.rsA.MESSAGE_PIN,
    label: j.intl.string(j.t.MUldyN)
  }, {
    value: M.rsA.MESSAGE_UNPIN,
    label: j.intl.string(j.t.n4zKhA)
  }, {
    value: M.rsA.INTEGRATION_CREATE,
    label: j.intl.string(j.t.deNm8x)
  }, {
    value: M.rsA.INTEGRATION_UPDATE,
    label: j.intl.string(j.t.HT7Sfg)
  }, {
    value: M.rsA.INTEGRATION_DELETE,
    label: j.intl.string(j.t["+kJ09q"])
  }, {
    value: M.rsA.STICKER_CREATE,
    label: j.intl.string(j.t["3DzNjU"])
  }, {
    value: M.rsA.STICKER_UPDATE,
    label: j.intl.string(j.t.tdhW5b)
  }, {
    value: M.rsA.STICKER_DELETE,
    label: j.intl.string(j.t["+ZhGOk"])
  }, {
    value: M.rsA.STAGE_INSTANCE_CREATE,
    label: j.intl.string(j.t.sPbjA6)
  }, {
    value: M.rsA.STAGE_INSTANCE_UPDATE,
    label: j.intl.string(j.t.cW9LfJ)
  }, {
    value: M.rsA.STAGE_INSTANCE_DELETE,
    label: j.intl.string(j.t["U1r+yD"])
  }, {
    value: M.rsA.GUILD_SCHEDULED_EVENT_CREATE,
    label: j.intl.string(j.t.H81Zyy)
  }, {
    value: M.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
    label: j.intl.string(j.t["FM69l+"])
  }, {
    value: M.rsA.GUILD_SCHEDULED_EVENT_DELETE,
    label: j.intl.string(j.t.Rq28Bh)
  }, {
    value: M.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: j.intl.string(j.t.iPdFOt)
  }, {
    value: M.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
    label: j.intl.string(j.t.gNq5z6)
  }, {
    value: M.rsA.AUTO_MODERATION_RULE_CREATE,
    label: j.intl.string(j.t.f72Zqb)
  }, {
    value: M.rsA.AUTO_MODERATION_RULE_UPDATE,
    label: j.intl.string(j.t.XeqIiv)
  }, {
    value: M.rsA.AUTO_MODERATION_RULE_DELETE,
    label: j.intl.string(j.t.syAApU)
  }, {
    value: M.rsA.GUILD_HOME_FEATURE_ITEM,
    label: j.intl.string(j.t.lhG5KN)
  }, {
    value: M.rsA.GUILD_HOME_REMOVE_ITEM,
    label: j.intl.string(j.t.lRPRwS)
  }, {
    value: M.rsA.SOUNDBOARD_SOUND_CREATE,
    label: j.intl.string(j.t.yoRi5r)
  }, {
    value: M.rsA.SOUNDBOARD_SOUND_UPDATE,
    label: j.intl.string(j.t.uKlG0Z)
  }, {
    value: M.rsA.SOUNDBOARD_SOUND_DELETE,
    label: j.intl.string(j.t.gq0iCT)
  }, {
    value: M.rsA.VOICE_CHANNEL_STATUS_CREATE,
    label: j.intl.string(j.t.rGr0YM)
  }, {
    value: M.rsA.VOICE_CHANNEL_STATUS_DELETE,
    label: j.intl.string(j.t.V9PEQ4)
  }];

function ed(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function eE(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function e_(e) {
  var t;
  let n = eu().find(t => t.value === e.action);
  return null != ed(M.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj8) : null != (t = null == n ? true : n.label) ? t : null
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

function ef(e) {
  let t = ed(M.zUn.COMMUNICATION_DISABLED_UNTIL, e),
    n = eE(M.zUn.ROLES_ADD, e).length > 0,
    r = eE(M.zUn.ROLES_REMOVE, e).length > 0;
  if (null != t) {
    if ((null == t ? true : t.newValue) != null) {
      let n = new Date(null == t ? true : t.newValue).getTime() - L.default.extractTimestamp(e.id),
        r = Math.round(n / 1e3 / 60),
        l = (0, E.CI)(r, w);
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

function eT(e) {
  let t = eE(M.zUn.ROLES_ADD, e),
    n = eE(M.zUn.ROLES_REMOVE, e),
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

function eg(e) {
  switch (e.action) {
    case M.rsA.GUILD_UPDATE:
      return j.t.LjZO31;
    case M.rsA.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === M.zUn.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case M.d4z.GUILD_STAGE_VOICE:
          return j.t["OKp4+o"];
        case M.d4z.GUILD_VOICE:
          return j.t.NPOy4G;
        case M.d4z.GUILD_CATEGORY:
          return j.t.T3KIjz;
        default:
          return j.t.wrYNG2
      }
    case M.rsA.CHANNEL_UPDATE:
      return j.t.nTYk6B;
    case M.rsA.CHANNEL_DELETE:
      return j.t.ynfvkm;
    case M.rsA.CHANNEL_OVERWRITE_CREATE:
      return j.t.l5Cu1a;
    case M.rsA.CHANNEL_OVERWRITE_UPDATE:
      return j.t.uhtbNU;
    case M.rsA.CHANNEL_OVERWRITE_DELETE:
      return j.t["HASt/3"];
    case M.rsA.MEMBER_KICK:
      return j.t.B5hDZX;
    case M.rsA.MEMBER_PRUNE:
      return j.t.qKOZTP;
    case M.rsA.MEMBER_BAN_ADD:
      return j.t["XklUm/"];
    case M.rsA.MEMBER_BAN_REMOVE:
      return j.t.o3Y6HD;
    case M.rsA.MEMBER_UPDATE:
      return j.t.pznhLN;
    case M.rsA.MEMBER_ROLE_UPDATE:
      return j.t.Vngfia;
    case M.rsA.MEMBER_MOVE:
      return j.t.Yt6NkU;
    case M.rsA.MEMBER_DISCONNECT:
      return j.t.K4eCZw;
    case M.rsA.BOT_ADD:
      return j.t.fWvX0G;
    case M.rsA.ROLE_CREATE:
      return j.t.UTLTx6;
    case M.rsA.ROLE_UPDATE:
      return j.t.NRbN18;
    case M.rsA.ROLE_DELETE:
      return j.t["4s63tb"];
    case M.rsA.INVITE_CREATE:
      return j.t.YHOXWy;
    case M.rsA.INVITE_UPDATE:
      return j.t.ja3kGS;
    case M.rsA.INVITE_DELETE:
      return j.t["3n/iWk"];
    case M.rsA.WEBHOOK_CREATE:
      return j.t.MhYhil;
    case M.rsA.WEBHOOK_UPDATE:
      return j.t["6GTlWB"];
    case M.rsA.WEBHOOK_DELETE:
      return j.t.in0VjZ;
    case M.rsA.EMOJI_CREATE:
      return j.t["7vekRO"];
    case M.rsA.EMOJI_UPDATE:
      return j.t.IsCKfh;
    case M.rsA.EMOJI_DELETE:
      return j.t.JnUaVG;
    case M.rsA.STICKER_CREATE:
      return j.t.DRZifq;
    case M.rsA.STICKER_UPDATE:
      return j.t.bhujGc;
    case M.rsA.STICKER_DELETE:
      return j.t.rGEP9U;
    case M.rsA.MESSAGE_DELETE:
      return j.t["HPkD+M"];
    case M.rsA.MESSAGE_BULK_DELETE:
      return j.t["3RIvLE"];
    case M.rsA.MESSAGE_PIN:
      return j.t.Yna7E7;
    case M.rsA.MESSAGE_UNPIN:
      return j.t.NCxXUW;
    case M.rsA.INTEGRATION_CREATE:
      return j.t.HYvCb3;
    case M.rsA.INTEGRATION_UPDATE:
      return j.t.ibCCOS;
    case M.rsA.INTEGRATION_DELETE:
      return j.t["8zScWY"];
    case M.rsA.STAGE_INSTANCE_CREATE:
      return j.t["n7x/DF"];
    case M.rsA.STAGE_INSTANCE_UPDATE:
      return j.t["0hQYU4"];
    case M.rsA.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return j.t["Oi/in9"];
      return j.t["7ZIFm9"];
    case M.rsA.GUILD_SCHEDULED_EVENT_CREATE:
      return j.t.S7k52p;
    case M.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
      return j.t.ebTK11;
    case M.rsA.GUILD_SCHEDULED_EVENT_DELETE:
      return j.t["/ARPKQ"];
    case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return j.t["8qCI36"];
    case M.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return j.t.zYb2da;
    case M.rsA.THREAD_CREATE:
      let n = null != e.changes ? e.changes.find(e => e.key === M.zUn.TYPE) : null;
      if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
      switch (n.newValue) {
        case M.d4z.PRIVATE_THREAD:
          return j.t.Br0y5w;
        case M.d4z.ANNOUNCEMENT_THREAD:
          return j.t["6uaMmO"];
        default:
          return j.t["2cxQ7G"]
      }
    case M.rsA.THREAD_UPDATE:
      return j.t.PSsy4t;
    case M.rsA.THREAD_DELETE:
      return j.t.s3Khn8;
    case M.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return j.t.uzCqBm;
    case M.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
      return j.t.NqWv2K;
    case M.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var r;
      if ((null == (r = e.options) ? true : r.auto_moderation_rule_trigger_type) === x.fX.USER_PROFILE.toString()) return j.t.YQsjej;
      return j.t.SD0PwJ;
    case M.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return j.t.Vk4TwX;
    case M.rsA.AUTO_MODERATION_QUARANTINE_USER:
      return j.t["/W5u5o"];
    case M.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
      return j.t.ONvWyr;
    case M.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return j.t["ryGLk+"];
    case M.rsA.AUTO_MODERATION_RULE_CREATE:
      return j.t["NKljj+"];
    case M.rsA.AUTO_MODERATION_RULE_UPDATE:
      return j.t["3wEA9u"];
    case M.rsA.AUTO_MODERATION_RULE_DELETE:
      return j.t.umua3n;
    case M.rsA.ONBOARDING_PROMPT_CREATE:
      return j.t["/8A1g2"];
    case M.rsA.ONBOARDING_PROMPT_UPDATE:
      return j.t.ArIrWI;
    case M.rsA.ONBOARDING_PROMPT_DELETE:
      return j.t.IuBTao;
    case M.rsA.ONBOARDING_CREATE:
      return j.t["wDaq3/"];
    case M.rsA.ONBOARDING_UPDATE:
      return j.t["yONu/l"];
    case M.rsA.HOME_SETTINGS_CREATE:
      return j.t.dSdCjG;
    case M.rsA.HOME_SETTINGS_UPDATE:
      return j.t.XHE8qv;
    case M.rsA.GUILD_HOME_FEATURE_ITEM:
      let l = null != e.changes ? e.changes.find(e => e.key === M.zUn.ENTITY_TYPE) : null;
      if (null == l) return j.t["UZ+U3A"];
      switch (l.newValue) {
        case s.w.MESSAGE:
          return j.t["PyEa+J"];
        case s.w.FORUM_POST:
          return j.t.hCuAb1;
        default:
          return j.t["UZ+U3A"]
      }
    case M.rsA.GUILD_HOME_REMOVE_ITEM:
      return j.t.kPReun;
    case M.rsA.SOUNDBOARD_SOUND_CREATE:
      return j.t["0PD83V"];
    case M.rsA.SOUNDBOARD_SOUND_UPDATE:
      return j.t.CM8n1w;
    case M.rsA.SOUNDBOARD_SOUND_DELETE:
      return j.t["kVz4/0"];
    case M.rsA.VOICE_CHANNEL_STATUS_CREATE:
      return j.t.MWjnU7;
    case M.rsA.VOICE_CHANNEL_STATUS_DELETE:
      return j.t.aS8Krq;
    case M.rsA.GUILD_MEMBER_VERIFICATION_UPDATE:
      return j.t["NUKUb+"];
    case M.rsA.GUILD_PROFILE_UPDATE:
      return j.t.Ed6hF1;
    case M.rsA.GUILD_MIGRATE_PIN_PERMISSION:
      return j.t["3Ne7MA"];
    case M.rsA.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
      return j.t["naflH+"];
    default:
      return null
  }
}

function eI(e) {
  switch (e) {
    case v.zZ.GUILD_FEED_REMOVED:
      return j.intl.string(j.t["5G8ZD4"]);
    case v.zZ.ACTIVE_CHANNELS_REMOVED:
      return j.intl.string(j.t["4YLtzC"]);
    case v.zZ.PINNED:
      return j.intl.string(j.t["1QLRYb"])
  }
  return null
}

function em(e) {
  switch (e) {
    case v.zZ.GUILD_FEED_REMOVED:
      return j.intl.string(j.t.S5kuWQ);
    case v.zZ.ACTIVE_CHANNELS_REMOVED:
      return j.intl.string(j.t["8qpgcz"]);
    case v.zZ.PINNED:
      return j.intl.string(j.t.CMweGA)
  }
  return null
}

function eh(e, t) {
  switch (e) {
    case M.Plq.CREATE_INSTANT_INVITE:
      return j.intl.string(j.t.zJrgTG);
    case M.Plq.KICK_MEMBERS:
      return j.intl.string(j.t.pBNv6i);
    case M.Plq.BAN_MEMBERS:
      return j.intl.string(j.t.oTBA7N);
    case M.Plq.ADMINISTRATOR:
      return j.intl.string(j.t.PGvZqX);
    case M.Plq.MANAGE_CHANNELS:
      if (t.targetType === M.KFR.CHANNEL || t.targetType === M.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t.nAw15L);
      return j.intl.string(j.t["9qLtWs"]);
    case M.Plq.MANAGE_GUILD:
      return j.intl.string(j.t.QZRcfO);
    case M.Plq.VIEW_GUILD_ANALYTICS:
      return j.intl.string(j.t["rQJBE/"]);
    case M.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return j.intl.string(j.t["0lTLTv"]);
    case M.Plq.CHANGE_NICKNAME:
      return j.intl.string(j.t.dilOF6);
    case M.Plq.MANAGE_NICKNAMES:
      return j.intl.string(j.t["t+Ct5x"]);
    case M.Plq.MANAGE_ROLES:
      return j.intl.string(j.t["C8d+oG"]);
    case M.Plq.MANAGE_WEBHOOKS:
      return j.intl.string(j.t["/ADKmM"]);
    case M.Plq.CREATE_GUILD_EXPRESSIONS:
      return j.intl.string(j.t.HarVuP);
    case M.Plq.MANAGE_GUILD_EXPRESSIONS:
      return j.intl.string(j.t.bbuXIn);
    case M.Plq.VIEW_AUDIT_LOG:
      return j.intl.string(j.t.fZgLpA);
    case M.Plq.VIEW_CHANNEL:
      if (t.targetType === M.KFR.CHANNEL || t.targetType === M.KFR.CHANNEL_OVERWRITE) return j.intl.string(j.t["W/A4Qp"]);
      return j.intl.string(j.t.uV83yi);
    case M.Plq.SEND_MESSAGES:
      return j.intl.string(j.t.T32rkC);
    case M.Plq.SEND_TTS_MESSAGES:
      return j.intl.string(j.t.Mg7bku);
    case M.Plq.USE_APPLICATION_COMMANDS:
      return j.intl.string(j.t.shbR1a);
    case M.Plq.MANAGE_MESSAGES:
      return j.intl.string(j.t["6lU9xM"]);
    case M.Plq.EMBED_LINKS:
      return j.intl.string(j.t["969dEL"]);
    case M.Plq.ATTACH_FILES:
      return j.intl.string(j.t["3AS4UM"]);
    case M.Plq.READ_MESSAGE_HISTORY:
      return j.intl.string(j.t.l9ufaR);
    case M.Plq.MENTION_EVERYONE:
      return j.intl.string(j.t.Y78KGC);
    case M.Plq.USE_EXTERNAL_EMOJIS:
      return j.intl.string(j.t.BpBGZU);
    case M.Plq.USE_EXTERNAL_STICKERS:
      return j.intl.string(j.t["UeRs+b"]);
    case M.Plq.ADD_REACTIONS:
      return j.intl.string(j.t.yEoJAr);
    case M.Plq.CONNECT:
      return j.intl.string(j.t.S0W8Z5);
    case M.Plq.SPEAK:
      return j.intl.string(j.t["8w1tIR"]);
    case M.Plq.MUTE_MEMBERS:
      return j.intl.string(j.t["8EI30/"]);
    case M.Plq.DEAFEN_MEMBERS:
      return j.intl.string(j.t["9L47Fr"]);
    case M.Plq.MOVE_MEMBERS:
      return j.intl.string(j.t.YtjJPQ);
    case M.Plq.USE_VAD:
      return j.intl.string(j.t["08zAV7"]);
    case M.Plq.PRIORITY_SPEAKER:
      return j.intl.string(j.t.BVK71i);
    case M.Plq.STREAM:
      return j.intl.string(j.t.FlNoSV);
    case M.Plq.REQUEST_TO_SPEAK:
      return j.intl.string(j.t["5kicT2"]);
    case M.Plq.USE_EMBEDDED_ACTIVITIES:
      return j.intl.string(j.t.rLSGeh);
    case M.Plq.CREATE_EVENTS:
      return j.intl.string(j.t.qyjZua);
    case M.Plq.MANAGE_EVENTS:
      return j.intl.string(j.t.HIgA5a);
    case M.Plq.CREATE_PUBLIC_THREADS:
      return j.intl.string(j.t["25rKnX"]);
    case M.Plq.CREATE_PRIVATE_THREADS:
      return j.intl.string(j.t.QwbTSa);
    case M.Plq.SEND_MESSAGES_IN_THREADS:
      return j.intl.string(j.t.fTE74g);
    case M.Plq.MANAGE_THREADS:
      return j.intl.string(j.t.kEqgr7);
    case M.Plq.MODERATE_MEMBERS:
      return j.intl.string(j.t["+RL6pz"]);
    case M.Plq.SET_VOICE_CHANNEL_STATUS:
      return j.intl.string(j.t.VBwkUf);
    case M.Plq.SEND_POLLS:
      return j.intl.string(j.t.UMQ7Ww);
    case M.Plq.USE_EXTERNAL_APPS:
      return j.intl.string(j.t.TtA5rK);
    case M.Plq.PIN_MESSAGES:
      return j.intl.string(j.t.Y5BI39);
    case M.Plq.BYPASS_SLOWMODE:
      return j.intl.string(j.t.kqcjeV)
  }
  return null
}

function eN(e, t) {
  let n = [];
  return e.forEach(e => {
    let r = function(e, t) {
        switch (e.targetType) {
          case M.KFR.GUILD:
          case M.KFR.GUILD_HOME:
          case M.KFR.GUILD_PROFILE:
            return t;
          case M.KFR.CHANNEL:
          case M.KFR.CHANNEL_OVERWRITE:
            return eS(e, M.zUn.NAME, e => p.Z.getChannel(e), e => (0, A.F6)(e, C.default, S.Z, true));
          case M.KFR.USER:
            return eS(e, M.zUn.NICK, e => C.default.getUser(e), e => e);
          case M.KFR.ROLE:
            return eS(e, M.zUn.NAME, e => R.Z.getRole(t.id, e), e => e.name);
          case M.KFR.ONBOARDING_PROMPT:
            let n = eS(e, M.zUn.ID, e => I.Z.getOnboardingPrompt(e), e => e.title);
            return null == n || "" === n ? j.intl.string(j.t.ZNQyiR) : n;
          case M.KFR.GUILD_ONBOARDING:
          case M.KFR.GUILD_MEMBER_VERIFICATION:
            return t;
          case M.KFR.INVITE:
            return eS(e, M.zUn.CODE, M.VqG);
          case M.KFR.INTEGRATION:
            return eS(e, M.zUn.TYPE, e => U.Z.integrations.find(t => t.id === e), e => e.name);
          case M.KFR.WEBHOOK:
            return eS(e, M.zUn.NAME, e => U.Z.webhooks.find(t => t.id === e), e => e.name);
          case M.KFR.EMOJI:
            return eS(e, M.zUn.NAME, e => T.ZP.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case M.KFR.STICKER:
            return eS(e, M.zUn.NAME, e => N.Z.getStickerById(e), e => e.name);
          case M.KFR.STAGE_INSTANCE:
            return eS(e, M.zUn.TOPIC, e => {
              var n;
              return null == (n = Object.values(h.Z.getStageInstancesByGuild(t.id))) ? true : n.find(t => t.id === e)
            }, e => e.topic);
          case M.KFR.GUILD_SCHEDULED_EVENT:
          case M.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return eS(e, M.zUn.NAME, e => U.Z.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case M.KFR.THREAD:
            return eS(e, M.zUn.NAME, e => U.Z.threads.find(t => t.id === e), e => e.name);
          case M.KFR.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = U.Z.integrations.find(t => {
                var n;
                return (null == (n = t.application) ? true : n.id) === e.targetId
              });
              if (null != t) return t.name;
              return e.targetId
            }
            return eS(e, M.zUn.NAME, e => U.Z.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === _.yU.CHAT ? "/⁠".concat(t) : t
            });
          case M.KFR.AUTO_MODERATION_RULE:
            return eS(e, M.zUn.NAME, e => U.Z.automodRules.find(t => t.id === e), e => e.name);
          case M.KFR.GUILD_SOUNDBOARD:
            return eS(e, M.zUn.NAME, M.VqG);
          case M.KFR.HOME_SETTINGS:
            return eS(e, M.zUn.GUILD_ID, e => m.Z.getSettings(e), () => j.intl.string(j.t.VbpLyU), t.id);
          case M.KFR.VOICE_CHANNEL_STATUS:
            return eS(e, M.zUn.STATUS, e => p.Z.getChannel(e), e => (0, A.F6)(e, C.default, S.Z, true));
          default:
            return k.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      i = C.default.getUser(e.userId);
    if (null != r || [M.rsA.MEMBER_PRUNE, M.rsA.MEMBER_DISCONNECT, M.rsA.MEMBER_MOVE, M.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, M.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", i)).set("target", r)).set("options", function(e) {
          if (null != e.options) {
            let n = y({}, e.options);
            switch (e.options.type) {
              case M.jwA.USER:
                n.subtarget = eC(e.options.id, e => C.default.getUser(e), e => e.tag);
                break;
              case M.jwA.ROLE:
                n.subtarget = eC(e.options.role_name, M.VqG)
            }
            if (null != e.options.channel_id && (n.channel = eS(e, "", e => p.Z.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let r = U.Z.guildScheduledEvents.find(t => t.id === e.targetId),
                l = null == r ? true : r.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              n.subtarget = (0, b.vc)(a()(L.default.extractTimestamp(null != (t = null == l ? true : l.event_exception_id) ? t : "0")), "LL")
            }
            return n
          }
          return e.options
        }(e))).changes) {
        let n = [];
        e.changes.forEach(r => {
          let i = function(e, t, n) {
            if (t.action === M.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case M.ecB.ROLE:
                  e.subtarget = eC(t.id, e => R.Z.getRole(n.id, e), e => e.name);
                  break;
                case M.ecB.USER:
                  e.subtarget = eC(t.id, e => C.default.getUser(e), e => e.tag);
                  break;
                case M.ecB.CHANNEL:
                  t.id === l()(n.id).subtract(1).toString() ? e.subtarget = j.intl.string(j.t.MSYhgh) : e.subtarget = eC(t.id, e => p.Z.getChannel(e), e => (0, A.F6)(e, C.default, S.Z, true))
              }
              return e
            }
            switch (e.key) {
              case M.zUn.OWNER_ID:
                return eR(e, e => C.default.getUser(e));
              case M.zUn.CHANNEL_ID:
              case M.zUn.AFK_CHANNEL_ID:
              case M.zUn.SYSTEM_CHANNEL_ID:
              case M.zUn.RULES_CHANNEL_ID:
              case M.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                return eR(e, e => p.Z.getChannel(e), e => (0, A.F6)(e, C.default, S.Z, true));
              case M.zUn.AFK_TIMEOUT:
                return eR(e, e => e / 60);
              case M.zUn.BITRATE:
                return eR(e, e => e / 1e3);
              case M.zUn.COLOR:
                return eR(e, e => (0, u.Rf)(e).toUpperCase());
              case M.zUn.THEME_COLORS:
                return eR(e, e => "".concat((0, u.Rf)(e[0]).toUpperCase(), ", ").concat((0, u.Rf)(e[1]).toUpperCase()));
              case M.zUn.MAX_AGE:
                return eR(e, e => {
                  let t = D.ZP.getMaxAgeOptionByValue(e);
                  return null !== t ? t.label : e
                });
              case M.zUn.PERMISSIONS: {
                let t = [],
                  {
                    added: n,
                    removed: r
                  } = eO(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let e = new O.ms(M.zUn.PERMISSIONS_GRANTED, null, n);
                  t.push(e)
                }
                if (r.length > 0) {
                  let e = new O.ms(M.zUn.PERMISSIONS_DENIED, null, r);
                  t.push(e)
                }
                return t
              }
              case M.zUn.PERMISSIONS_GRANTED:
              case M.zUn.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: n,
                    removed: r
                  } = eO(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let r = new O.ms(e.key, null, n);
                  t.push(r)
                }
                if (r.length > 0) {
                  let e = new O.ms(M.zUn.PERMISSIONS_RESET, r, r);
                  t.push(e)
                }
                return t
              }
              case M.zUn.FLAGS: {
                let t = [],
                  {
                    added: n,
                    removed: r
                  } = function(e, t) {
                    let n = "number" == typeof e ? e : 0,
                      r = "number" == typeof t ? t : 0,
                      l = d.Ge(r, n),
                      i = d.Ge(n, r),
                      a = [],
                      s = [];
                    for (let e in v.zZ) {
                      let t = v.zZ[e];
                      d.yE(l, t) && a.push(t), d.yE(i, t) && s.push(t)
                    }
                    return {
                      added: a,
                      removed: s
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
              case M.zUn.PREFERRED_LOCALE:
                return eR(e, e => {
                  let t = (0, j.getAvailableLocales)().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case M.zUn.VIDEO_QUALITY_MODE:
                return eR(e, e => e === M.Ucd.FULL ? j.intl.string(j.t["7jOoJE"]) : j.intl.string(j.t.jjKYpu));
              case M.zUn.SYSTEM_CHANNEL_FLAGS:
                let r = {
                    [M.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                    [M.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: M.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                    [M.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: M.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                    [M.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: M.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                  },
                  i = [];
                return Object.values(M.xmn).forEach(t => {
                  let n = (e.oldValue & t) === t,
                    l = (e.newValue & t) === t;
                  if (n === l) return;
                  let a = new O.ms(r[t], !n, !l);
                  i.push(a)
                }), i;
              case M.zUn.AUTO_MODERATION_ACTIONS:
                if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, e => e.map(e => e.type), e => e.map(g.ZF).join(", "));
                break;
              case M.zUn.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, g.YN);
                break;
              case M.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, g.Ar);
                break;
              case M.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, e => null != e && "object" == typeof e ? null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.intl.formatToMarkdownString(j.t.y91UXV, {
                  newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                }) : JSON.stringify(e) : e);
                break;
              case M.zUn.AUTO_MODERATION_ADD_KEYWORDS:
              case M.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
              case M.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case M.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case M.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
              case M.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case M.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, e => e.map(p.Z.getChannel).filter(e => null != e).map(e => (0, A.F6)(e, C.default, S.Z, true)), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]));
                break;
              case M.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === M.KFR.AUTO_MODERATION_RULE) return eR(e, e => e.map(e => R.Z.getRole(n.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]));
                break;
              case M.zUn.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: n
                  } = e, r = Array.isArray(t) ? t : [], l = Array.isArray(n) ? n : [];
                  if (0 === r.length && 0 === l.length) return e;
                  let i = {},
                    a = {};
                  if (r.forEach(e => {
                      i[e.id] = e
                    }), l.forEach(e => {
                      a[e.id] = e
                    }), r.length < l.length) {
                    for (let e in a)
                      if (null == i[e]) return new O.ms(M.zUn.AVAILABLE_TAG_ADD, null, ep(a[e]))
                  }
                  if (r.length > l.length) {
                    for (let e in i)
                      if (null == a[e]) return new O.ms(M.zUn.AVAILABLE_TAG_DELETE, null, ep(i[e]))
                  }
                  for (let e in i) {
                    let t = i[e],
                      n = a[e];
                    if ((null == n ? true : n.name) !== t.name || (null == n ? true : n.emoji_id) !== t.emoji_id || (null == n ? true : n.emoji_name) !== t.emoji_name) return new O.ms(M.zUn.AVAILABLE_TAG_EDIT, ep(t), ep(n))
                  }
                  return e
                }(e);
              case M.zUn.SCHEDULED_START_TIME:
              case M.zUn.SCHEDULED_END_TIME:
                return eR(e, e => (0, b.vc)(a()(new Date(e)), "LLLL"))
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

function eO(e, t) {
  let n = c.vB("string" == typeof e ? e : 0),
    r = c.vB("string" == typeof t ? t : 0),
    l = c.Od(r, n),
    i = c.Od(n, r),
    a = [],
    s = [];
  for (let e in M.Plq) {
    let t = M.Plq[e];
    c.e$(l, t) && a.push(t), c.e$(i, t) && s.push(t)
  }
  return {
    added: a,
    removed: s
  }
}

function ep(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : true,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function eR(e, t, n) {
  let r = e.newValue,
    l = e.oldValue;
  return null != e.newValue && (r = t(e.newValue), null != n && null != r && (r = n(r))), null != e.oldValue && (l = t(e.oldValue), null != n && null != l && (l = n(l))), new O.ms(e.key, l || e.oldValue, r || e.newValue)
}

function eS(e, t, n, r, l) {
  let i = null,
    a = n(l = null != l ? l : e.targetId);
  if (null != a && null != r && (i = r(a)), null == i) {
    let t = U.Z.deletedTargets[e.targetType];
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

function eb(e, t) {
  return n => null == n.oldValue ? e : t
}

function eD(e, t) {
  return n => null == n.newValue ? e : t
}

function eL(e, t, n, r) {
  return l => null != l.newValue && null != l.oldValue ? e : null != l.newValue ? t : null != l.oldValue ? n : r
}

function eU(e, t) {
  return n => n.newValue ? e : t
}

function eM(e) {
  return t => e[t.newValue]
}

function ev(e, t) {
  return n => {
    var r;
    return null != (r = e[n.newValue]) ? r : t
  }
}