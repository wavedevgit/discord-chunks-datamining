/** Chunk was on 94503 **/
/** chunk id: 276373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $b: () => el,
  AO: () => eE,
  CI: () => J,
  D_: () => Y,
  Df: () => eo,
  Iv: () => W,
  Kj: () => K,
  Kw: () => es,
  Lw: () => eh,
  Sn: () => em,
  Sy: () => et,
  UM: () => X,
  Uq: () => ei,
  X9: () => ee,
  XB: () => Q,
  Yj: () => eu,
  Yx: () => $,
  Zo: () => e_,
  d8: () => ec,
  eA: () => eO,
  eN: () => Z,
  gQ: () => z,
  gT: () => eT,
  gW: () => B,
  nG: () => eA,
  nt: () => H,
  pu: () => en,
  qM: () => V,
  qd: () => er,
  rt: () => q,
  sU: () => eI,
  yy: () => eN,
  z3: () => ea
}), require("./65821.js"), require("./321073.js"), require("./457529.js");
var Chunk824120 = require("./824120.js"),
  r = require.n(Chunk824120),
  Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk794174 = require("./794174.js"),
  Chunk821418 = require("./821418.js"),
  Chunk136722 = require("./136722.js"),
  Chunk317097 = require("./317097.js"),
  Chunk665260 = require("./665260.js"),
  Chunk499979 = require("./499979.js"),
  Chunk155718 = require("./155718.js"),
  Chunk47167 = require("./47167.js"),
  Chunk626584 = require("./626584.js"),
  Chunk508675 = require("./508675.js"),
  Chunk627794 = require("./627794.js"),
  Chunk591552 = require("./591552.js"),
  Chunk701785 = require("./701785.js"),
  Chunk446600 = require("./446600.js"),
  Chunk679382 = require("./679382.js"),
  Chunk411153 = require("./411153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk735547 = require("./735547.js"),
  Chunk661191 = require("./661191.js"),
  Chunk523599 = require("./523599.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk411335 = require("./411335.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = new Chunk626584.A("AuditLogUtils"),
  F = [Chunk499979.pJ.DAYS, Chunk499979.pJ.HOURS, Chunk499979.pJ.MINUTES, Chunk499979.pJ.SECONDS],
  w = () => ({
    [x.gGk.REASON]: () => U.t["2IW3C5"]
  }),
  X = () => y({
    [x.gGk.NAME]: () => U.t.CkDiNH,
    [x.gGk.DESCRIPTION]: eC(U.t.RP3Ey3, U.t.QAVj1Y),
    [x.gGk.ICON_HASH]: () => U.t.iLZ8Q9,
    [x.gGk.SPLASH_HASH]: () => U.t["4VV6dn"],
    [x.gGk.DISCOVERY_SPLASH_HASH]: () => U.t["2pds6p"],
    [x.gGk.BANNER_HASH]: eC(U.t.Cxq4zO, U.t["H7eE/9"]),
    [x.gGk.OWNER_ID]: () => U.t["8ltsLT"],
    [x.gGk.REGION]: () => U.t.X9r5Kf,
    [x.gGk.PREFERRED_LOCALE]: () => U.t.UnXuDS,
    [x.gGk.AFK_CHANNEL_ID]: eC(U.t.ClBuA4, U.t["ms+xtL"]),
    [x.gGk.AFK_TIMEOUT]: () => U.t.q21fHa,
    [x.gGk.SYSTEM_CHANNEL_ID]: eC(U.t.H1VXaa, U.t.XhtmxJ),
    [x.gGk.RULES_CHANNEL_ID]: eC(U.t.OI6MG2, U.t.lik3tI),
    [x.gGk.PUBLIC_UPDATES_CHANNEL_ID]: eC(U.t.YxBKrY, U.t.Ehsnij),
    [x.gGk.MFA_LEVEL]: ex({
      [x.EkJ.NONE]: U.t.voaCCQ,
      [x.EkJ.ELEVATED]: U.t.pRNVwz
    }),
    [x.gGk.WIDGET_ENABLED]: eb(U.t.ADIty8, U.t.nf58VY),
    [x.gGk.WIDGET_CHANNEL_ID]: eC(U.t["6SBsDc"], U.t.deQ5wO),
    [x.gGk.VERIFICATION_LEVEL]: ex({
      [x.PvD.NONE]: U.t.W27rsc,
      [x.PvD.LOW]: U.t["V8P+Pw"],
      [x.PvD.MEDIUM]: U.t.ERQFau,
      [x.PvD.HIGH]: U.t["83fN0j"],
      [x.PvD.VERY_HIGH]: U.t.PnkQJE
    }),
    [x.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: ex({
      [x.orn.ALL_MESSAGES]: U.t.LDi76A,
      [x.orn.ONLY_MENTIONS]: U.t["6K83ba"]
    }),
    [x.gGk.VANITY_URL_CODE]: eC(U.t.Zplsov, U.t.u6cArh),
    [x.gGk.EXPLICIT_CONTENT_FILTER]: ex({
      [x.gh6.DISABLED]: U.t.fmOeL3,
      [x.gh6.MEMBERS_WITHOUT_ROLES]: U.t["4FghYw"],
      [x.gh6.ALL_MEMBERS]: U.t.olyrSm
    }),
    [x.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: eb(U.t.rBT0sn, U.t["gc+te5"]),
    [x.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => U.t.YbouFH,
    [x.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => U.t.g3DMjB,
    [x.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => U.t["+fQAel"],
    [x.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => U.t.E1fc4v,
    [x.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => U.t.XbwtSA
  }, w()),
  B = () => ({
    [x.gGk.NAME]: eD(U.t.f8Rh0U, U.t.ebD4Qp),
    [x.gGk.POSITION]: eD(U.t.isS8te, U.t.t5uBis),
    [x.gGk.TOPIC]: eL(U.t.esQcxn, U.t["m+veAn"], U.t["ws/1FA"]),
    [x.gGk.BITRATE]: eD(U.t.fw81ak, U.t.MFNlgZ),
    [x.gGk.RTC_REGION_OVERRIDE]: eL(U.t["6kajxx"], U.t.eGOlmU, U.t["0JMZdz"]),
    [x.gGk.USER_LIMIT]: eD(U.t.wk5t7p, U.t.XgjCEh),
    [x.gGk.RATE_LIMIT_PER_USER]: eD(U.t["7lirhF"], U.t.j4CCJR),
    [x.gGk.PERMISSIONS_RESET]: () => U.t["+vSBFY"],
    [x.gGk.PERMISSIONS_GRANTED]: () => U.t.EKLJv8,
    [x.gGk.PERMISSIONS_DENIED]: () => U.t.U3rO5X,
    [x.gGk.REASON]: () => U.t["2IW3C5"],
    [x.gGk.NSFW]: eb(U.t.H8Ri2Y, U.t.WW6cJw),
    [x.gGk.TYPE]: eD(U.t.Vn5zn2, U.t.aq4uWI),
    [x.gGk.VIDEO_QUALITY_MODE]: eD(U.t.e68fAU, U.t.djbES0),
    [x.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(U.t.nYz2mg, U.t.oczvRI),
    [x.gGk.FLAGS]: () => U.t.ImCQko,
    [x.gGk.AVAILABLE_TAG_ADD]: () => U.t.H86QQU,
    [x.gGk.AVAILABLE_TAG_EDIT]: () => U.t.YtUzls,
    [x.gGk.AVAILABLE_TAG_DELETE]: () => U.t["8QOseg"],
    [x.gGk.LINKED_LOBBY]: eC(U.t["+/3TkD"], U.t["5kDYS3"])
  }),
  V = () => y({
    [x.gGk.NICK]: eL(U.t.qXDsHv, U.t["m+qury"], U.t.DvLvjF),
    [x.gGk.DEAF]: eb(U.t.mArLlW, U.t.ddvVYG),
    [x.gGk.MUTE]: eb(U.t["bxs/lS"], U.t.FjecQM),
    [x.gGk.ROLES_REMOVE]: () => U.t["+2SDWV"],
    [x.gGk.ROLES_ADD]: () => U.t["B3/3IJ"],
    [x.gGk.PRUNE_DELETE_DAYS]: () => U.t["+Cvc+D"],
    [x.gGk.COMMUNICATION_DISABLED_UNTIL]: eL(U.t.LXTQr5, U.t.LXTQr5, U.t.ULSdnE),
    [x.gGk.BYPASSES_VERIFICATION]: eb(U.t.NBPBui, U.t.zATost),
    [x.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => U.t.YbouFH
  }, w()),
  H = () => y({
    [x.gGk.NAME]: eD(U.t.QBmlaD, U.t["Lfs4r+"]),
    [x.gGk.DESCRIPTION]: eD(U.t.XeYKWJ, U.t.PSfeIj),
    [x.gGk.PERMISSIONS_GRANTED]: () => U.t["9i/DvE"],
    [x.gGk.PERMISSIONS_DENIED]: () => U.t.pa1ZVh,
    [x.gGk.COLOR]: eM({
      "#000000": U.t.TK6E1H
    }, U.t["2FQFiw"]),
    [x.gGk.COLORS]: e => null == e.newValue.secondary_color ? U.t.U44ttm : U.t["WnSwL/"],
    [x.gGk.HOIST]: eb(U.t.gWfe24, U.t["+tb8kN"]),
    [x.gGk.MENTIONABLE]: eb(U.t.LL8VFF, U.t.Z7xzmC),
    [x.gGk.ICON_HASH]: () => U.t["iEE79/"],
    [x.gGk.UNICODE_EMOJI]: () => U.t.KiLMM0
  }, w()),
  W = () => k(y({}, w()), {
    [x.gGk.TITLE]: eD(U.t["sNpuy/"], U.t["3Ukc/g"]),
    [x.gGk.DESCRIPTION]: eD(U.t.PP1q0x, U.t.z7pYLg),
    [x.gGk.OPTIONS]: () => U.t["3G5C9+"],
    [x.gGk.SINGLE_SELECT]: eb(U.t.v4WnR3, U.t["6Qg3uC"]),
    [x.gGk.REQUIRED]: eb(U.t["0MPAM6"], U.t.pwsXir)
  }),
  K = () => k(y({}, w()), {
    [x.gGk.DEFAULT_CHANNEL_IDS]: () => U.t["8M+D2s"],
    [x.gGk.ENABLE_DEFAULT_CHANNELS]: eb(U.t["EYd/ls"], U.t["36OZeQ"]),
    [x.gGk.ENABLE_ONBOARDING_PROMPTS]: eb(U.t.V3u8PV, U.t["r66lc/"]),
    [x.gGk.ENABLED]: eb(U.t.SODVIs, U.t.u8HY5U)
  }),
  Y = () => k(y({}, w()), {
    [x.gGk.WELCOME_MESSAGE]: () => U.t.dKQ1xd,
    [x.gGk.NEW_MEMBER_ACTIONS]: () => U.t.jDUIno,
    [x.gGk.RESOURCE_CHANNELS]: () => U.t.SIX0mr
  }),
  z = () => y({
    [x.gGk.CODE]: () => U.t.rrRHgb,
    [x.gGk.CHANNEL_ID]: () => U.t.Q1vd5q,
    [x.gGk.MAX_USES]: eM({
      0: U.t.Yx8LNm
    }, U.t["3ygnwU"]),
    [x.gGk.MAX_AGE]: eM({
      [U.intl.string(U.t.PqEzn8)]: U.t.uWrLvw
    }, U.t["Q+5kcO"]),
    [x.gGk.TEMPORARY]: eb(U.t.MWp6H7, U.t.omiqTH),
    [x.gGk.FLAGS]: ex({
      [o.Q.IS_GUEST_INVITE]: U.t.XYZMbL
    })
  }, w()),
  J = () => ({
    [x.gGk.CHANNEL_ID]: eD(U.t.jhPprR, U.t.ar4qYO),
    [x.gGk.NAME]: eD(U.t.ZVGrzU, U.t.tywdZR),
    [x.gGk.AVATAR_HASH]: () => U.t.KB52Uj,
    [x.gGk.REASON]: () => U.t["2IW3C5"]
  }),
  Q = () => y({
    [x.gGk.NAME]: eD(U.t.ahU1o5, U.t["wxs+vZ"])
  }, w()),
  Z = () => y({
    [x.gGk.NAME]: eD(U.t.cdl0Yo, U.t.o3W2ly),
    [x.gGk.TAGS]: eD(U.t["zwL+S2"], U.t["VYfKA+"]),
    [x.gGk.DESCRIPTION]: eD(U.t.XeYKWJ, U.t.PSfeIj)
  }, w()),
  q = () => y({
    [x.gGk.ENABLE_EMOTICONS]: eb(U.t.FI0m5x, U.t.olpKC6),
    [x.gGk.EXPIRE_BEHAVIOR]: ex({
      0: U.t["1Bb1+u"],
      1: U.t.vjlW6m
    }),
    [x.gGk.EXPIRE_GRACE_PERIOD]: () => U.t.iovXMa
  }, w()),
  $ = () => y({
    [x.gGk.TOPIC]: eD(U.t["m+veAn"], U.t.esQcxn),
    [x.gGk.PRIVACY_LEVEL]: ex({
      [j.dD.GUILD_ONLY]: U.t["EC+CDt"],
      [j.dD.PUBLIC]: U.t["pK/WG0"]
    })
  }, w()),
  ee = () => y({
    [x.gGk.NAME]: () => U.t["21EXHW"],
    [x.gGk.DESCRIPTION]: () => U.t.Vm1ofw,
    [x.gGk.PRIVACY_LEVEL]: ex({
      [j.dD.GUILD_ONLY]: U.t["EC+CDt"],
      [j.dD.PUBLIC]: U.t["pK/WG0"]
    }),
    [x.gGk.STATUS]: ex({
      [j.XG.SCHEDULED]: U.t.hXKDgq,
      [j.XG.ACTIVE]: U.t.lRX1nz,
      [j.XG.COMPLETED]: U.t["/eFIhq"],
      [j.XG.CANCELED]: U.t.NWIYhj
    }),
    [x.gGk.ENTITY_TYPE]: ex({
      [j.Ps.NONE]: U.t["6sO3Ss"],
      [j.Ps.STAGE_INSTANCE]: U.t["Wo+s1y"],
      [j.Ps.VOICE]: U.t.XCVaIL,
      [j.Ps.EXTERNAL]: U.t.IvhAj2
    }),
    [x.gGk.CHANNEL_ID]: eC(U.t.yJBIcX, U.t["+PqSsi"]),
    [x.gGk.LOCATION]: eC(U.t.GaMBHy, U.t.PsICk0),
    [x.gGk.IMAGE_HASH]: eC(U.t.S3vcRK, U.t.KQu47I)
  }, w()),
  et = () => y({
    [x.gGk.SCHEDULED_START_TIME]: eC(U.t.zMIYVg, U.t.fzF8Gd),
    [x.gGk.SCHEDULED_END_TIME]: eC(U.t.vONSQA, U.t.IlIti3),
    [x.gGk.IS_CANCELED]: e => {
      if (null != e.oldValue || true === e.newValue) {
        if (!e.oldValue && e.newValue) return U.t["7RkicW"];
        else if (e.oldValue && !e.newValue) return U.t.dRNTWW
      }
    }
  }, w()),
  en = () => y({
    [x.gGk.NAME]: eD(U.t.tUKRzX, U.t.kPCHON),
    [x.gGk.ARCHIVED]: eb(U.t.jDi9FK, U.t.F6dvbT),
    [x.gGk.LOCKED]: eb(U.t.JSy1QW, U.t.C7Jgo8),
    [x.gGk.INVITABLE]: eb(U.t.dxNUs9, U.t.biJvYG),
    [x.gGk.AUTO_ARCHIVE_DURATION]: eD(U.t.LuaG3y, U.t["18d9qr"]),
    [x.gGk.RATE_LIMIT_PER_USER]: eD(U.t["7lirhF"], U.t.j4CCJR),
    [x.gGk.FLAGS]: () => U.t.sSAQtj
  }, w()),
  el = e => {
    let t = y({}, w());
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = () => U.t["JH+89C"] : t[e.key] = () => U.t.HUrFDu : t[e.key] = () => U.t.vynxnV
    }), t
  },
  er = () => y({
    [x.gGk.NAME]: () => U.t.XwxAJT,
    [x.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => U.t.fx0pyl,
    [x.gGk.AUTO_MODERATION_EVENT_TYPE]: () => U.t["46Y+L5"],
    [x.gGk.AUTO_MODERATION_ACTIONS]: () => U.t["8efxfv"],
    [x.gGk.AUTO_MODERATION_ENABLED]: e => {
      var t;
      returntrue === (null != (t = e.newValue) ? t : e.oldValue) ? U.t.fCmxC2 : U.t.Wrg9Jn
    },
    [x.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => U.t.TRb7Nx,
    [x.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => U.t.mzitLE,
    [x.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => U.t["h/lM65"],
    [x.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => U.t["9V2yaC"],
    [x.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => U.t["4Qe9ny"],
    [x.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => U.t.GyZtxp,
    [x.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => U.t.OQDadc,
    [x.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => U.t["FvvR+K"],
    [x.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => U.t.p5nSvy
  }, w()),
  ea = () => y({
    [x.gGk.NAME]: eD(U.t.VOtRSO, U.t.OK7B8E),
    [x.gGk.VOLUME]: eD(U.t.igrDB9, U.t.L5lDFJ),
    [x.gGk.EMOJI_NAME]: eL(U.t.IIanaY, U.t["z4w4U/"], U.t.V8TfyU),
    [x.gGk.EMOJI_ID]: eL(U.t.ainxMB, U.t["2NPsYu"], U.t["8crtns"])
  }, w()),
  ei = () => y({
    [x.gGk.VERIFICATION_ENABLED]: e => true === e.newValue ? U.t.fnkzDY : U.t.WYT6ka,
    [x.gGk.MANUAL_APPROVAL_ENABLED]: e => true === e.newValue ? U.t.jzSvVd : U.t.WxyOtj
  }, w()),
  es = () => y({
    [x.gGk.STATUS]: () => U.t.HyCSnI
  }, w()),
  eo = () => ({
    [x.gGk.DESCRIPTION]: () => U.t.nsUZKY,
    [x.gGk.BRAND_COLOR_PRIMARY]: () => U.t.qe9mgN,
    [x.gGk.CUSTOM_BANNER_HASH]: () => U.t["04b5KC"],
    [x.gGk.TRAITS]: () => U.t.dEy9WO,
    [x.gGk.GAME_APPLICATION_IDS]: () => U.t["8BOT3x"],
    [x.gGk.VISIBILITY]: () => U.t.bCl1Ep,
    [x.gGk.SERVER_TAG]: eC(U.t.ix1dnX, U.t["4LKpKb"])
  }),
  eu = {
    [Chunk652215.GaG.CHANNEL]: {
      [Chunk652215.gGk.ID]: true,
      [Chunk652215.gGk.PERMISSION_OVERWRITES]: true
    },
    [Chunk652215.GaG.CHANNEL_OVERWRITE]: {
      [Chunk652215.gGk.TYPE]: true,
      [Chunk652215.gGk.ID]: true,
      [Chunk652215.gGk.PERMISSION_OVERWRITES]: true
    },
    [Chunk652215.GaG.INVITE]: {
      [Chunk652215.gGk.INVITER_ID]: true,
      [Chunk652215.gGk.USES]: true
    },
    [Chunk652215.GaG.WEBHOOK]: {
      [Chunk652215.gGk.TYPE]: true,
      [Chunk652215.gGk.APPLICATION_ID]: true
    },
    [Chunk652215.GaG.INTEGRATION]: {
      [Chunk652215.gGk.TYPE]: true
    },
    [Chunk652215.GaG.THREAD]: {
      [Chunk652215.gGk.ID]: true,
      [Chunk652215.gGk.TYPE]: true
    },
    [Chunk652215.GaG.STICKER]: {
      [Chunk652215.gGk.ID]: true,
      [Chunk652215.gGk.TYPE]: true,
      [Chunk652215.gGk.ASSET]: true,
      [Chunk652215.gGk.FORMAT_TYPE]: true,
      [Chunk652215.gGk.AVAILABLE]: true,
      [Chunk652215.gGk.GUILD_ID]: true
    },
    [Chunk652215.GaG.GUILD_HOME]: {
      [Chunk652215.gGk.ENTITY_TYPE]: true
    },
    [Chunk652215.GaG.GUILD_ONBOARDING]: {
      [Chunk652215.gGk.PROMPTS]: true
    },
    [Chunk652215.GaG.GUILD_SOUNDBOARD]: {
      [Chunk652215.gGk.ID]: true,
      [Chunk652215.gGk.SOUND_ID]: true
    }
  },
  ec = () => [{
    value: x.F_X.ALL,
    label: U.intl.string(U.t.QxEVcv),
    valueLabel: U.intl.string(U.t.an9Ry3)
  }, {
    value: x.F_X.GUILD_UPDATE,
    label: U.intl.string(U.t["5INZa3"])
  }, {
    value: x.F_X.CHANNEL_CREATE,
    label: U.intl.string(U.t["2uh4vJ"])
  }, {
    value: x.F_X.CHANNEL_UPDATE,
    label: U.intl.string(U.t.mGsBLV)
  }, {
    value: x.F_X.CHANNEL_DELETE,
    label: U.intl.string(U.t.hCHzAr)
  }, {
    value: x.F_X.CHANNEL_OVERWRITE_CREATE,
    label: U.intl.string(U.t["8TnAMP"])
  }, {
    value: x.F_X.CHANNEL_OVERWRITE_UPDATE,
    label: U.intl.string(U.t.Jqx0Bi)
  }, {
    value: x.F_X.CHANNEL_OVERWRITE_DELETE,
    label: U.intl.string(U.t.gBXOr4)
  }, {
    value: x.F_X.MEMBER_KICK,
    label: U.intl.string(U.t["Q1/hN8"])
  }, {
    value: x.F_X.MEMBER_PRUNE,
    label: U.intl.string(U.t.tOTTja)
  }, {
    value: x.F_X.MEMBER_BAN_ADD,
    label: U.intl.string(U.t["NfPn+e"])
  }, {
    value: x.F_X.MEMBER_BAN_REMOVE,
    label: U.intl.string(U.t.XCsGfI)
  }, {
    value: x.F_X.MEMBER_UPDATE,
    label: U.intl.string(U.t["F/jmNJ"])
  }, {
    value: x.F_X.MEMBER_ROLE_UPDATE,
    label: U.intl.string(U.t.zAveSI)
  }, {
    value: x.F_X.MEMBER_MOVE,
    label: U.intl.string(U.t.QshteR)
  }, {
    value: x.F_X.MEMBER_DISCONNECT,
    label: U.intl.string(U.t.Z45os7)
  }, {
    value: x.F_X.BOT_ADD,
    label: U.intl.string(U.t.vuH24Z)
  }, {
    value: x.F_X.THREAD_CREATE,
    label: U.intl.string(U.t["+zl0DG"])
  }, {
    value: x.F_X.THREAD_UPDATE,
    label: U.intl.string(U.t.rbIry3)
  }, {
    value: x.F_X.THREAD_DELETE,
    label: U.intl.string(U.t.hFjNEA)
  }, {
    value: x.F_X.ROLE_CREATE,
    label: U.intl.string(U.t.AbxKtv)
  }, {
    value: x.F_X.ROLE_UPDATE,
    label: U.intl.string(U.t.t3Z6sU)
  }, {
    value: x.F_X.ROLE_DELETE,
    label: U.intl.string(U.t.YsFpa4)
  }, {
    value: x.F_X.ONBOARDING_PROMPT_CREATE,
    label: U.intl.string(U.t.ZV9tqc)
  }, {
    value: x.F_X.ONBOARDING_PROMPT_UPDATE,
    label: U.intl.string(U.t.PcOdvX)
  }, {
    value: x.F_X.ONBOARDING_PROMPT_DELETE,
    label: U.intl.string(U.t["+r33Na"])
  }, {
    value: x.F_X.ONBOARDING_CREATE,
    label: U.intl.string(U.t.uDADde)
  }, {
    value: x.F_X.ONBOARDING_UPDATE,
    label: U.intl.string(U.t.J1H1wg)
  }, {
    value: x.F_X.HOME_SETTINGS_CREATE,
    label: U.intl.string(U.t.Di4cvI)
  }, {
    value: x.F_X.HOME_SETTINGS_UPDATE,
    label: U.intl.string(U.t.tzyrJH)
  }, {
    value: x.F_X.INVITE_CREATE,
    label: U.intl.string(U.t["0BNJdX"])
  }, {
    value: x.F_X.INVITE_UPDATE,
    label: U.intl.string(U.t["o++obV"])
  }, {
    value: x.F_X.INVITE_DELETE,
    label: U.intl.string(U.t.iP40Az)
  }, {
    value: x.F_X.WEBHOOK_CREATE,
    label: U.intl.string(U.t["tBF4+S"])
  }, {
    value: x.F_X.WEBHOOK_UPDATE,
    label: U.intl.string(U.t.eV3McO)
  }, {
    value: x.F_X.WEBHOOK_DELETE,
    label: U.intl.string(U.t.AAL3K1)
  }, {
    value: x.F_X.EMOJI_CREATE,
    label: U.intl.string(U.t.RuWm0V)
  }, {
    value: x.F_X.EMOJI_UPDATE,
    label: U.intl.string(U.t.WzdUY7)
  }, {
    value: x.F_X.EMOJI_DELETE,
    label: U.intl.string(U.t.c3dK2L)
  }, {
    value: x.F_X.MESSAGE_DELETE,
    label: U.intl.string(U.t.daTfXh)
  }, {
    value: x.F_X.MESSAGE_BULK_DELETE,
    label: U.intl.string(U.t.nrBxeh)
  }, {
    value: x.F_X.MESSAGE_PIN,
    label: U.intl.string(U.t.MUldyN)
  }, {
    value: x.F_X.MESSAGE_UNPIN,
    label: U.intl.string(U.t.n4zKhA)
  }, {
    value: x.F_X.INTEGRATION_CREATE,
    label: U.intl.string(U.t.deNm8x)
  }, {
    value: x.F_X.INTEGRATION_UPDATE,
    label: U.intl.string(U.t.HT7Sfg)
  }, {
    value: x.F_X.INTEGRATION_DELETE,
    label: U.intl.string(U.t["+kJ09q"])
  }, {
    value: x.F_X.STICKER_CREATE,
    label: U.intl.string(U.t["3DzNjU"])
  }, {
    value: x.F_X.STICKER_UPDATE,
    label: U.intl.string(U.t.tdhW5b)
  }, {
    value: x.F_X.STICKER_DELETE,
    label: U.intl.string(U.t["+ZhGOk"])
  }, {
    value: x.F_X.STAGE_INSTANCE_CREATE,
    label: U.intl.string(U.t.sPbjA6)
  }, {
    value: x.F_X.STAGE_INSTANCE_UPDATE,
    label: U.intl.string(U.t.cW9LfJ)
  }, {
    value: x.F_X.STAGE_INSTANCE_DELETE,
    label: U.intl.string(U.t["U1r+yD"])
  }, {
    value: x.F_X.GUILD_SCHEDULED_EVENT_CREATE,
    label: U.intl.string(U.t.H81Zyy)
  }, {
    value: x.F_X.GUILD_SCHEDULED_EVENT_UPDATE,
    label: U.intl.string(U.t["FM69l+"])
  }, {
    value: x.F_X.GUILD_SCHEDULED_EVENT_DELETE,
    label: U.intl.string(U.t.Rq28Bh)
  }, {
    value: x.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: U.intl.string(U.t.iPdFOt)
  }, {
    value: x.F_X.AUTO_MODERATION_BLOCK_MESSAGE,
    label: U.intl.string(U.t.gNq5z6)
  }, {
    value: x.F_X.AUTO_MODERATION_RULE_CREATE,
    label: U.intl.string(U.t.f72Zqb)
  }, {
    value: x.F_X.AUTO_MODERATION_RULE_UPDATE,
    label: U.intl.string(U.t.XeqIiv)
  }, {
    value: x.F_X.AUTO_MODERATION_RULE_DELETE,
    label: U.intl.string(U.t.syAApU)
  }, {
    value: x.F_X.GUILD_HOME_FEATURE_ITEM,
    label: U.intl.string(U.t.lhG5KN)
  }, {
    value: x.F_X.GUILD_HOME_REMOVE_ITEM,
    label: U.intl.string(U.t.lRPRwS)
  }, {
    value: x.F_X.SOUNDBOARD_SOUND_CREATE,
    label: U.intl.string(U.t.yoRi5r)
  }, {
    value: x.F_X.SOUNDBOARD_SOUND_UPDATE,
    label: U.intl.string(U.t.uKlG0Z)
  }, {
    value: x.F_X.SOUNDBOARD_SOUND_DELETE,
    label: U.intl.string(U.t.gq0iCT)
  }, {
    value: x.F_X.VOICE_CHANNEL_STATUS_CREATE,
    label: U.intl.string(U.t.rGr0YM)
  }, {
    value: x.F_X.VOICE_CHANNEL_STATUS_DELETE,
    label: U.intl.string(U.t.V9PEQ4)
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
  return null != eE(x.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? U.intl.string(U.t.z3wbj8) : null != (t = null == n ? true : n.label) ? t : null
}
let eg = {
  [Chunk499979.pJ.SECONDS]: e => U.intl.formatToPlainString(U.t.geSp4K, {
    seconds: e
  }),
  [Chunk499979.pJ.MINUTES]: e => U.intl.formatToPlainString(U.t.iXLF9W, {
    minutes: e
  }),
  [Chunk499979.pJ.HOURS]: e => U.intl.formatToPlainString(U.t.xCjYxK, {
    hours: e
  }),
  [Chunk499979.pJ.DAYS]: e => U.intl.formatToPlainString(U.t["k2UNz+"], {
    days: e
  })
};

function eA(e) {
  let t = eE(x.gGk.COMMUNICATION_DISABLED_UNTIL, e),
    n = ed(x.gGk.ROLES_ADD, e).length > 0,
    l = ed(x.gGk.ROLES_REMOVE, e).length > 0;
  if (null != t) {
    if ((null == t ? true : t.newValue) != null) {
      let n = new Date(null == t ? true : t.newValue).getTime() - L.default.extractTimestamp(e.id),
        l = Math.round(n / 1e3 / 60),
        r = (0, d.$l)(l, F);
      if (null == r.unit || null == r.time) return null;
      if (r.unit in eg) {
        let e = r.unit,
          t = r.unit === d.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
        return eg[e](t)
      }
    } else if ((null == t ? true : t.oldValue) != null) return U.intl.string(U.t.MA1ltr)
  } else if (n && l) return U.intl.string(U.t.RdMMew);
  else if (n) return U.intl.string(U.t["4GQqs8"]);
  else if (l) return U.intl.string(U.t["8mQ6x0"]);
  return null
}

function eT(e) {
  let t = ed(x.gGk.ROLES_ADD, e),
    n = ed(x.gGk.ROLES_REMOVE, e),
    l = null == t ? true : t.map(e => {
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
    r = null == n ? true : n.map(e => {
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
  return t.length > 0 && n.length > 0 ? U.intl.formatToPlainString(U.t.tZw1EW, {
    roleNamesAdded: l,
    roleNamesRemoved: r
  }) : t.length > 0 ? U.intl.formatToPlainString(U.t["/mTqt5"], {
    roleNames: l
  }) : n.length > 0 ? U.intl.formatToPlainString(U.t.Wk4pAJ, {
    roleNames: r
  }) : null
}

function eh(e) {
  switch (e.action) {
    case x.F_X.GUILD_UPDATE:
      return U.t.LjZO31;
    case x.F_X.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === x.gGk.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case x.rbe.GUILD_STAGE_VOICE:
          return U.t["OKp4+o"];
        case x.rbe.GUILD_VOICE:
          return U.t.NPOy4G;
        case x.rbe.GUILD_CATEGORY:
          return U.t.T3KIjz;
        default:
          return U.t.wrYNG2
      }
    case x.F_X.CHANNEL_UPDATE:
      return U.t.nTYk6B;
    case x.F_X.CHANNEL_DELETE:
      return U.t.ynfvkm;
    case x.F_X.CHANNEL_OVERWRITE_CREATE:
      return U.t.l5Cu1a;
    case x.F_X.CHANNEL_OVERWRITE_UPDATE:
      return U.t.uhtbNU;
    case x.F_X.CHANNEL_OVERWRITE_DELETE:
      return U.t["HASt/3"];
    case x.F_X.MEMBER_KICK:
      return U.t.B5hDZX;
    case x.F_X.MEMBER_PRUNE:
      return U.t.qKOZTP;
    case x.F_X.MEMBER_BAN_ADD:
      return U.t["XklUm/"];
    case x.F_X.MEMBER_BAN_REMOVE:
      return U.t.o3Y6HD;
    case x.F_X.MEMBER_UPDATE:
      return U.t.pznhLN;
    case x.F_X.MEMBER_ROLE_UPDATE:
      return U.t.Vngfia;
    case x.F_X.MEMBER_MOVE:
      return U.t.Yt6NkU;
    case x.F_X.MEMBER_DISCONNECT:
      return U.t.K4eCZw;
    case x.F_X.BOT_ADD:
      return U.t.fWvX0G;
    case x.F_X.ROLE_CREATE:
      return U.t.UTLTx6;
    case x.F_X.ROLE_UPDATE:
      return U.t.NRbN18;
    case x.F_X.ROLE_DELETE:
      return U.t["4s63tb"];
    case x.F_X.INVITE_CREATE:
      return U.t.YHOXWy;
    case x.F_X.INVITE_UPDATE:
      return U.t.ja3kGS;
    case x.F_X.INVITE_DELETE:
      return U.t["3n/iWk"];
    case x.F_X.WEBHOOK_CREATE:
      return U.t.MhYhil;
    case x.F_X.WEBHOOK_UPDATE:
      return U.t["6GTlWB"];
    case x.F_X.WEBHOOK_DELETE:
      return U.t.in0VjZ;
    case x.F_X.EMOJI_CREATE:
      return U.t["7vekRO"];
    case x.F_X.EMOJI_UPDATE:
      return U.t.IsCKfh;
    case x.F_X.EMOJI_DELETE:
      return U.t.JnUaVG;
    case x.F_X.STICKER_CREATE:
      return U.t.DRZifq;
    case x.F_X.STICKER_UPDATE:
      return U.t.bhujGc;
    case x.F_X.STICKER_DELETE:
      return U.t.rGEP9U;
    case x.F_X.MESSAGE_DELETE:
      return U.t["HPkD+M"];
    case x.F_X.MESSAGE_BULK_DELETE:
      return U.t["3RIvLE"];
    case x.F_X.MESSAGE_PIN:
      return U.t.Yna7E7;
    case x.F_X.MESSAGE_UNPIN:
      return U.t.NCxXUW;
    case x.F_X.INTEGRATION_CREATE:
      return U.t.HYvCb3;
    case x.F_X.INTEGRATION_UPDATE:
      return U.t.ibCCOS;
    case x.F_X.INTEGRATION_DELETE:
      return U.t["8zScWY"];
    case x.F_X.STAGE_INSTANCE_CREATE:
      return U.t["n7x/DF"];
    case x.F_X.STAGE_INSTANCE_UPDATE:
      return U.t["0hQYU4"];
    case x.F_X.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return U.t["Oi/in9"];
      return U.t["7ZIFm9"];
    case x.F_X.GUILD_SCHEDULED_EVENT_CREATE:
      return U.t.S7k52p;
    case x.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
      return U.t.ebTK11;
    case x.F_X.GUILD_SCHEDULED_EVENT_DELETE:
      return U.t["/ARPKQ"];
    case x.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case x.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return U.t["8qCI36"];
    case x.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return U.t.zYb2da;
    case x.F_X.THREAD_CREATE:
      let n = null != e.changes ? e.changes.find(e => e.key === x.gGk.TYPE) : null;
      if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
      switch (n.newValue) {
        case x.rbe.PRIVATE_THREAD:
          return U.t.Br0y5w;
        case x.rbe.ANNOUNCEMENT_THREAD:
          return U.t["6uaMmO"];
        default:
          return U.t["2cxQ7G"]
      }
    case x.F_X.THREAD_UPDATE:
      return U.t.PSsy4t;
    case x.F_X.THREAD_DELETE:
      return U.t.s3Khn8;
    case x.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return U.t.uzCqBm;
    case x.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
      return U.t.NqWv2K;
    case x.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var l;
      if ((null == (l = e.options) ? true : l.auto_moderation_rule_trigger_type) === v.uh.USER_PROFILE.toString()) return U.t.YQsjej;
      return U.t.SD0PwJ;
    case x.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return U.t.Vk4TwX;
    case x.F_X.AUTO_MODERATION_QUARANTINE_USER:
      return U.t["/W5u5o"];
    case x.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
      return U.t.ONvWyr;
    case x.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return U.t["ryGLk+"];
    case x.F_X.AUTO_MODERATION_RULE_CREATE:
      return U.t["NKljj+"];
    case x.F_X.AUTO_MODERATION_RULE_UPDATE:
      return U.t["3wEA9u"];
    case x.F_X.AUTO_MODERATION_RULE_DELETE:
      return U.t.umua3n;
    case x.F_X.ONBOARDING_PROMPT_CREATE:
      return U.t["/8A1g2"];
    case x.F_X.ONBOARDING_PROMPT_UPDATE:
      return U.t.ArIrWI;
    case x.F_X.ONBOARDING_PROMPT_DELETE:
      return U.t.IuBTao;
    case x.F_X.ONBOARDING_CREATE:
      return U.t["wDaq3/"];
    case x.F_X.ONBOARDING_UPDATE:
      return U.t["yONu/l"];
    case x.F_X.HOME_SETTINGS_CREATE:
      return U.t.dSdCjG;
    case x.F_X.HOME_SETTINGS_UPDATE:
      return U.t.XHE8qv;
    case x.F_X.GUILD_HOME_FEATURE_ITEM:
      let r = null != e.changes ? e.changes.find(e => e.key === x.gGk.ENTITY_TYPE) : null;
      if (null == r) return U.t["UZ+U3A"];
      switch (r.newValue) {
        case s.U.MESSAGE:
          return U.t["PyEa+J"];
        case s.U.FORUM_POST:
          return U.t.hCuAb1;
        default:
          return U.t["UZ+U3A"]
      }
    case x.F_X.GUILD_HOME_REMOVE_ITEM:
      return U.t.kPReun;
    case x.F_X.SOUNDBOARD_SOUND_CREATE:
      return U.t["0PD83V"];
    case x.F_X.SOUNDBOARD_SOUND_UPDATE:
      return U.t.CM8n1w;
    case x.F_X.SOUNDBOARD_SOUND_DELETE:
      return U.t["kVz4/0"];
    case x.F_X.VOICE_CHANNEL_STATUS_CREATE:
      return U.t.MWjnU7;
    case x.F_X.VOICE_CHANNEL_STATUS_DELETE:
      return U.t.aS8Krq;
    case x.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
      return U.t["NUKUb+"];
    case x.F_X.GUILD_PROFILE_UPDATE:
      return U.t.Ed6hF1;
    case x.F_X.GUILD_MIGRATE_PIN_PERMISSION:
      return U.t["3Ne7MA"];
    case x.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
      return U.t["naflH+"];
    default:
      return null
  }
}

function eI(e) {
  switch (e) {
    case M.lx.GUILD_FEED_REMOVED:
      return U.intl.string(U.t["5G8ZD4"]);
    case M.lx.ACTIVE_CHANNELS_REMOVED:
      return U.intl.string(U.t["4YLtzC"]);
    case M.lx.PINNED:
      return U.intl.string(U.t["1QLRYb"])
  }
  return null
}

function eO(e) {
  switch (e) {
    case M.lx.GUILD_FEED_REMOVED:
      return U.intl.string(U.t.S5kuWQ);
    case M.lx.ACTIVE_CHANNELS_REMOVED:
      return U.intl.string(U.t["8qpgcz"]);
    case M.lx.PINNED:
      return U.intl.string(U.t.CMweGA)
  }
  return null
}

function em(e, t) {
  switch (e) {
    case x.xBc.CREATE_INSTANT_INVITE:
      return U.intl.string(U.t.zJrgTG);
    case x.xBc.KICK_MEMBERS:
      return U.intl.string(U.t.pBNv6i);
    case x.xBc.BAN_MEMBERS:
      return U.intl.string(U.t.oTBA7N);
    case x.xBc.ADMINISTRATOR:
      return U.intl.string(U.t.PGvZqX);
    case x.xBc.MANAGE_CHANNELS:
      if (t.targetType === x.GaG.CHANNEL || t.targetType === x.GaG.CHANNEL_OVERWRITE) return U.intl.string(U.t.nAw15L);
      return U.intl.string(U.t["9qLtWs"]);
    case x.xBc.MANAGE_GUILD:
      return U.intl.string(U.t.QZRcfO);
    case x.xBc.VIEW_GUILD_ANALYTICS:
      return U.intl.string(U.t["rQJBE/"]);
    case x.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return U.intl.string(U.t["0lTLTv"]);
    case x.xBc.CHANGE_NICKNAME:
      return U.intl.string(U.t.dilOF6);
    case x.xBc.MANAGE_NICKNAMES:
      return U.intl.string(U.t["t+Ct5x"]);
    case x.xBc.MANAGE_ROLES:
      return U.intl.string(U.t["C8d+oG"]);
    case x.xBc.MANAGE_WEBHOOKS:
      return U.intl.string(U.t["/ADKmM"]);
    case x.xBc.CREATE_GUILD_EXPRESSIONS:
      return U.intl.string(U.t.HarVuP);
    case x.xBc.MANAGE_GUILD_EXPRESSIONS:
      return U.intl.string(U.t.bbuXIn);
    case x.xBc.VIEW_AUDIT_LOG:
      return U.intl.string(U.t.fZgLpA);
    case x.xBc.VIEW_CHANNEL:
      if (t.targetType === x.GaG.CHANNEL || t.targetType === x.GaG.CHANNEL_OVERWRITE) return U.intl.string(U.t["W/A4Qp"]);
      return U.intl.string(U.t.uV83yi);
    case x.xBc.SEND_MESSAGES:
      return U.intl.string(U.t.T32rkC);
    case x.xBc.SEND_TTS_MESSAGES:
      return U.intl.string(U.t.Mg7bku);
    case x.xBc.USE_APPLICATION_COMMANDS:
      return U.intl.string(U.t.shbR1a);
    case x.xBc.MANAGE_MESSAGES:
      return U.intl.string(U.t["6lU9xM"]);
    case x.xBc.EMBED_LINKS:
      return U.intl.string(U.t["969dEL"]);
    case x.xBc.ATTACH_FILES:
      return U.intl.string(U.t["3AS4UM"]);
    case x.xBc.READ_MESSAGE_HISTORY:
      return U.intl.string(U.t.l9ufaR);
    case x.xBc.MENTION_EVERYONE:
      return U.intl.string(U.t.Y78KGC);
    case x.xBc.USE_EXTERNAL_EMOJIS:
      return U.intl.string(U.t.BpBGZU);
    case x.xBc.USE_EXTERNAL_STICKERS:
      return U.intl.string(U.t["UeRs+b"]);
    case x.xBc.ADD_REACTIONS:
      return U.intl.string(U.t.yEoJAr);
    case x.xBc.CONNECT:
      return U.intl.string(U.t.S0W8Z5);
    case x.xBc.SPEAK:
      return U.intl.string(U.t["8w1tIR"]);
    case x.xBc.MUTE_MEMBERS:
      return U.intl.string(U.t["8EI30/"]);
    case x.xBc.DEAFEN_MEMBERS:
      return U.intl.string(U.t["9L47Fr"]);
    case x.xBc.MOVE_MEMBERS:
      return U.intl.string(U.t.YtjJPQ);
    case x.xBc.USE_VAD:
      return U.intl.string(U.t["08zAV7"]);
    case x.xBc.PRIORITY_SPEAKER:
      return U.intl.string(U.t.BVK71i);
    case x.xBc.STREAM:
      return U.intl.string(U.t.FlNoSV);
    case x.xBc.REQUEST_TO_SPEAK:
      return U.intl.string(U.t["5kicT2"]);
    case x.xBc.USE_EMBEDDED_ACTIVITIES:
      return U.intl.string(U.t.rLSGeh);
    case x.xBc.CREATE_EVENTS:
      return U.intl.string(U.t.qyjZua);
    case x.xBc.MANAGE_EVENTS:
      return U.intl.string(U.t.HIgA5a);
    case x.xBc.CREATE_PUBLIC_THREADS:
      return U.intl.string(U.t["25rKnX"]);
    case x.xBc.CREATE_PRIVATE_THREADS:
      return U.intl.string(U.t.QwbTSa);
    case x.xBc.SEND_MESSAGES_IN_THREADS:
      return U.intl.string(U.t.fTE74g);
    case x.xBc.MANAGE_THREADS:
      return U.intl.string(U.t.kEqgr7);
    case x.xBc.MODERATE_MEMBERS:
      return U.intl.string(U.t["+RL6pz"]);
    case x.xBc.SET_VOICE_CHANNEL_STATUS:
      return U.intl.string(U.t.VBwkUf);
    case x.xBc.SEND_POLLS:
      return U.intl.string(U.t.UMQ7Ww);
    case x.xBc.USE_EXTERNAL_APPS:
      return U.intl.string(U.t.TtA5rK);
    case x.xBc.PIN_MESSAGES:
      return U.intl.string(U.t.Y5BI39);
    case x.xBc.BYPASS_SLOWMODE:
      return U.intl.string(U.t.kqcjeV)
  }
  return null
}

function eN(e, t) {
  let n = [];
  return e.forEach(e => {
    let l = function(e, t) {
        switch (e.targetType) {
          case x.GaG.GUILD:
          case x.GaG.GUILD_HOME:
          case x.GaG.GUILD_PROFILE:
            return t;
          case x.GaG.CHANNEL:
          case x.GaG.CHANNEL_OVERWRITE:
            return eG(e, x.gGk.NAME, e => p.A.getChannel(e), e => (0, g.m1)(e, R.default, G.A, true));
          case x.GaG.USER:
            return eG(e, x.gGk.NICK, e => R.default.getUser(e), e => e);
          case x.GaG.ROLE:
            return eG(e, x.gGk.NAME, e => S.A.getRole(t.id, e), e => e.name);
          case x.GaG.ONBOARDING_PROMPT:
            let n = eG(e, x.gGk.ID, e => I.A.getOnboardingPrompt(e), e => e.title);
            return null == n || "" === n ? U.intl.string(U.t.ZNQyiR) : n;
          case x.GaG.GUILD_ONBOARDING:
          case x.GaG.GUILD_MEMBER_VERIFICATION:
            return t;
          case x.GaG.INVITE:
            return eG(e, x.gGk.CODE, x.FXj);
          case x.GaG.INTEGRATION:
            return eG(e, x.gGk.TYPE, e => b.A.integrations.find(t => t.id === e), e => e.name);
          case x.GaG.WEBHOOK:
            return eG(e, x.gGk.NAME, e => b.A.webhooks.find(t => t.id === e), e => e.name);
          case x.GaG.EMOJI:
            return eG(e, x.gGk.NAME, e => T.Ay.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case x.GaG.STICKER:
            return eG(e, x.gGk.NAME, e => N.A.getStickerById(e), e => e.name);
          case x.GaG.STAGE_INSTANCE:
            return eG(e, x.gGk.TOPIC, e => {
              var n;
              return null == (n = Object.values(m.A.getStageInstancesByGuild(t.id))) ? true : n.find(t => t.id === e)
            }, e => e.topic);
          case x.GaG.GUILD_SCHEDULED_EVENT:
          case x.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return eG(e, x.gGk.NAME, e => b.A.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case x.GaG.THREAD:
            return eG(e, x.gGk.NAME, e => b.A.threads.find(t => t.id === e), e => e.name);
          case x.GaG.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = b.A.integrations.find(t => {
                var n;
                return (null == (n = t.application) ? true : n.id) === e.targetId
              });
              if (null != t) return t.name;
              return e.targetId
            }
            return eG(e, x.gGk.NAME, e => b.A.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === _.kc.CHAT ? "/⁠".concat(t) : t
            });
          case x.GaG.AUTO_MODERATION_RULE:
            return eG(e, x.gGk.NAME, e => b.A.automodRules.find(t => t.id === e), e => e.name);
          case x.GaG.GUILD_SOUNDBOARD:
            return eG(e, x.gGk.NAME, x.FXj);
          case x.GaG.HOME_SETTINGS:
            return eG(e, x.gGk.GUILD_ID, e => O.h.getSettings(e), () => U.intl.string(U.t.VbpLyU), t.id);
          case x.GaG.VOICE_CHANNEL_STATUS:
            return eG(e, x.gGk.STATUS, e => p.A.getChannel(e), e => (0, g.m1)(e, R.default, G.A, true));
          default:
            return P.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = R.default.getUser(e.userId);
    if (null != l || [x.F_X.MEMBER_PRUNE, x.F_X.MEMBER_DISCONNECT, x.F_X.MEMBER_MOVE, x.F_X.CREATOR_MONETIZATION_REQUEST_CREATED, x.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", l)).set("options", function(e) {
          if (null != e.options) {
            let n = y({}, e.options);
            switch (e.options.type) {
              case x.AO_.USER:
                n.subtarget = eR(e.options.id, e => R.default.getUser(e), e => e.tag);
                break;
              case x.AO_.ROLE:
                n.subtarget = eR(e.options.role_name, x.FXj)
            }
            if (null != e.options.channel_id && (n.channel = eG(e, "", e => p.A.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let l = b.A.guildScheduledEvents.find(t => t.id === e.targetId),
                r = null == l ? true : l.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              n.subtarget = (0, D.i$)(i()(L.default.extractTimestamp(null != (t = null == r ? true : r.event_exception_id) ? t : "0")), "LL")
            }
            return n
          }
          return e.options
        }(e))).changes) {
        let n = [];
        e.changes.forEach(l => {
          let a = function(e, t, n) {
            if (t.action === x.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case x.g0g.ROLE:
                  e.subtarget = eR(t.id, e => S.A.getRole(n.id, e), e => e.name);
                  break;
                case x.g0g.USER:
                  e.subtarget = eR(t.id, e => R.default.getUser(e), e => e.tag);
                  break;
                case x.g0g.CHANNEL:
                  t.id === r()(n.id).subtract(1).toString() ? e.subtarget = U.intl.string(U.t.MSYhgh) : e.subtarget = eR(t.id, e => p.A.getChannel(e), e => (0, g.m1)(e, R.default, G.A, true))
              }
              return e
            }
            switch (e.key) {
              case x.gGk.OWNER_ID:
                return eS(e, e => R.default.getUser(e));
              case x.gGk.CHANNEL_ID:
              case x.gGk.AFK_CHANNEL_ID:
              case x.gGk.SYSTEM_CHANNEL_ID:
              case x.gGk.RULES_CHANNEL_ID:
              case x.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                return eS(e, e => p.A.getChannel(e), e => (0, g.m1)(e, R.default, G.A, true));
              case x.gGk.AFK_TIMEOUT:
                return eS(e, e => e / 60);
              case x.gGk.BITRATE:
                return eS(e, e => e / 1e3);
              case x.gGk.COLOR:
                return eS(e, e => (0, c.Hl)(e).toUpperCase());
              case x.gGk.THEME_COLORS:
                return eS(e, e => "".concat((0, c.Hl)(e[0]).toUpperCase(), ", ").concat((0, c.Hl)(e[1]).toUpperCase()));
              case x.gGk.MAX_AGE:
                return eS(e, e => {
                  let t = C.Ay.getMaxAgeOptionByValue(e);
                  return null !== t ? t.label : e
                });
              case x.gGk.PERMISSIONS: {
                let t = [],
                  {
                    added: n,
                    removed: l
                  } = ef(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let e = new f.QO(x.gGk.PERMISSIONS_GRANTED, null, n);
                  t.push(e)
                }
                if (l.length > 0) {
                  let e = new f.QO(x.gGk.PERMISSIONS_DENIED, null, l);
                  t.push(e)
                }
                return t
              }
              case x.gGk.PERMISSIONS_GRANTED:
              case x.gGk.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: n,
                    removed: l
                  } = ef(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let l = new f.QO(e.key, null, n);
                  t.push(l)
                }
                if (l.length > 0) {
                  let e = new f.QO(x.gGk.PERMISSIONS_RESET, l, l);
                  t.push(e)
                }
                return t
              }
              case x.gGk.FLAGS: {
                let t = [],
                  {
                    added: n,
                    removed: l
                  } = function(e, t) {
                    let n = "number" == typeof e ? e : 0,
                      l = "number" == typeof t ? t : 0,
                      r = E.VL(l, n),
                      a = E.VL(n, l),
                      i = [],
                      s = [];
                    for (let e in M.lx) {
                      let t = M.lx[e];
                      E.Lt(r, t) && i.push(t), E.Lt(a, t) && s.push(t)
                    }
                    return {
                      added: i,
                      removed: s
                    }
                  }(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let l = new f.QO(e.key, null, n);
                  t.push(l)
                }
                if (l.length > 0) {
                  let n = new f.QO(e.key, l, null);
                  t.push(n)
                }
                return t
              }
              case x.gGk.PREFERRED_LOCALE:
                return eS(e, e => {
                  let t = (0, U.getAvailableLocales)().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case x.gGk.VIDEO_QUALITY_MODE:
                return eS(e, e => e === x.K3c.FULL ? U.intl.string(U.t["7jOoJE"]) : U.intl.string(U.t.jjKYpu));
              case x.gGk.SYSTEM_CHANNEL_FLAGS:
                let l, a;
                return l = {
                  [x.ogj.SUPPRESS_JOIN_NOTIFICATIONS]: x.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                  [x.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: x.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                  [x.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: x.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                  [x.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: x.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                }, a = [], Object.values(x.ogj).forEach(t => {
                  let n = (e.oldValue & t) === t,
                    r = (e.newValue & t) === t;
                  if (n === r) return;
                  let i = new f.QO(l[t], !n, !r);
                  a.push(i)
                }), a;
              case x.gGk.AUTO_MODERATION_ACTIONS:
                if (t.targetType === x.GaG.AUTO_MODERATION_RULE) return eS(e, e => e.map(e => e.type), e => e.map(h.PZ).join(", "));
                break;
              case x.gGk.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === x.GaG.AUTO_MODERATION_RULE) return eS(e, h.X3);
                break;
              case x.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === x.GaG.AUTO_MODERATION_RULE) return eS(e, h.nl);
                break;
              case x.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === x.GaG.AUTO_MODERATION_RULE) return eS(e, e => null != e && "object" == typeof e ? null != e.keyword_filter && Array.isArray(e.keyword_filter) ? U.intl.formatToMarkdownString(U.t.y91UXV, {
                  newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                }) : JSON.stringify(e) : e);
                break;
              case x.gGk.AUTO_MODERATION_ADD_KEYWORDS:
              case x.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
              case x.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case x.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case x.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
              case x.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === x.GaG.AUTO_MODERATION_RULE) return eS(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case x.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === x.GaG.AUTO_MODERATION_RULE) return eS(e, e => e.map(p.A.getChannel).filter(e => null != e).map(e => (0, g.m1)(e, R.default, G.A, true)), e => null != e && e.length > 0 ? e.join(", ") : U.intl.string(U.t["K/EdV8"]));
                break;
              case x.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === x.GaG.AUTO_MODERATION_RULE) return eS(e, e => e.map(e => S.A.getRole(n.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : U.intl.string(U.t["K/EdV8"]));
                break;
              case x.gGk.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: n
                  } = e, l = Array.isArray(t) ? t : [], r = Array.isArray(n) ? n : [];
                  if (0 === l.length && 0 === r.length) return e;
                  let a = {},
                    i = {};
                  if (l.forEach(e => {
                      a[e.id] = e
                    }), r.forEach(e => {
                      i[e.id] = e
                    }), l.length < r.length) {
                    for (let e in i)
                      if (null == a[e]) return new f.QO(x.gGk.AVAILABLE_TAG_ADD, null, ep(i[e]))
                  }
                  if (l.length > r.length) {
                    for (let e in a)
                      if (null == i[e]) return new f.QO(x.gGk.AVAILABLE_TAG_DELETE, null, ep(a[e]))
                  }
                  for (let e in a) {
                    let t = a[e],
                      n = i[e];
                    if ((null == n ? true : n.name) !== t.name || (null == n ? true : n.emoji_id) !== t.emoji_id || (null == n ? true : n.emoji_name) !== t.emoji_name) return new f.QO(x.gGk.AVAILABLE_TAG_EDIT, ep(t), ep(n))
                  }
                  return e
                }(e);
              case x.gGk.SCHEDULED_START_TIME:
              case x.gGk.SCHEDULED_END_TIME:
                return eS(e, e => (0, D.i$)(i()(new Date(e)), "LLLL"))
            }
            return e
          }(l, e, t);
          Array.isArray(a) ? a.forEach(e => n.push(e)) : n.push(a)
        }), e = e.set("changes", n)
      }
      n.push(e)
    }
  }), n
}

function ef(e, t) {
  let n = u.iu("string" == typeof e ? e : 0),
    l = u.iu("string" == typeof t ? t : 0),
    r = u.TF(l, n),
    a = u.TF(n, l),
    i = [],
    s = [];
  for (let e in x.xBc) {
    let t = x.xBc[e];
    u.zy(r, t) && i.push(t), u.zy(a, t) && s.push(t)
  }
  return {
    added: i,
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

function eS(e, t, n) {
  let l = e.newValue,
    r = e.oldValue;
  return null != e.newValue && (l = t(e.newValue), null != n && null != l && (l = n(l))), null != e.oldValue && (r = t(e.oldValue), null != n && null != r && (r = n(r))), new f.QO(e.key, r || e.oldValue, l || e.newValue)
}

function eG(e, t, n, l, r) {
  let a = null,
    i = n(r = null != r ? r : e.targetId);
  if (null != i && null != l && (a = l(i)), null == a) {
    let t = b.A.deletedTargets[e.targetType];
    null != t && null != t[r] && (a = t[r])
  }
  if (null == a && null != e.changes) {
    let n = e.changes.find(e => e.key === t);
    null != n && (a = n.newValue || n.oldValue)
  }
  return null != a ? a : r
}

function eR(e, t, n) {
  let l = e,
    r = t(e);
  return null != r && null != n && (l = n(r)), l
}

function eD(e, t) {
  return n => null == n.oldValue ? e : t
}

function eC(e, t) {
  return n => null == n.newValue ? e : t
}

function eL(e, t, n, l) {
  return r => null != r.newValue && null != r.oldValue ? e : null != r.newValue ? t : null != r.oldValue ? n : l
}

function eb(e, t) {
  return n => n.newValue ? e : t
}

function ex(e) {
  return t => e[t.newValue]
}

function eM(e, t) {
  return n => {
    var l;
    return null != (l = e[n.newValue]) ? l : t
  }
}