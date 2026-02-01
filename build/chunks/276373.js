/** Chunk was on 49438 **/
/** chunk id: 276373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $b: () => el,
  AO: () => eE,
  CI: () => J,
  D_: () => K,
  Df: () => eo,
  Iv: () => W,
  Kj: () => Y,
  Kw: () => es,
  Lw: () => eI,
  Sn: () => eN,
  Sy: () => et,
  UM: () => X,
  Uq: () => ei,
  X9: () => ee,
  XB: () => Q,
  Yj: () => eu,
  Yx: () => $,
  Zo: () => ed,
  d8: () => ec,
  eA: () => eh,
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
  sU: () => eO,
  yy: () => em,
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
    [b.gGk.REASON]: () => j.t["2IW3C5"]
  }),
  X = () => y({
    [b.gGk.NAME]: () => j.t.CkDiNH,
    [b.gGk.DESCRIPTION]: eC(j.t.RP3Ey3, j.t.QAVj1Y),
    [b.gGk.ICON_HASH]: () => j.t.iLZ8Q9,
    [b.gGk.SPLASH_HASH]: () => j.t["4VV6dn"],
    [b.gGk.DISCOVERY_SPLASH_HASH]: () => j.t["2pds6p"],
    [b.gGk.BANNER_HASH]: eC(j.t.Cxq4zO, j.t["H7eE/9"]),
    [b.gGk.OWNER_ID]: () => j.t["8ltsLT"],
    [b.gGk.REGION]: () => j.t.X9r5Kf,
    [b.gGk.PREFERRED_LOCALE]: () => j.t.UnXuDS,
    [b.gGk.AFK_CHANNEL_ID]: eC(j.t.ClBuA4, j.t["ms+xtL"]),
    [b.gGk.AFK_TIMEOUT]: () => j.t.q21fHa,
    [b.gGk.SYSTEM_CHANNEL_ID]: eC(j.t.H1VXaa, j.t.XhtmxJ),
    [b.gGk.RULES_CHANNEL_ID]: eC(j.t.OI6MG2, j.t.lik3tI),
    [b.gGk.PUBLIC_UPDATES_CHANNEL_ID]: eC(j.t.YxBKrY, j.t.Ehsnij),
    [b.gGk.MFA_LEVEL]: eb({
      [b.EkJ.NONE]: j.t.voaCCQ,
      [b.EkJ.ELEVATED]: j.t.pRNVwz
    }),
    [b.gGk.WIDGET_ENABLED]: ex(j.t.ADIty8, j.t.nf58VY),
    [b.gGk.WIDGET_CHANNEL_ID]: eC(j.t["6SBsDc"], j.t.deQ5wO),
    [b.gGk.VERIFICATION_LEVEL]: eb({
      [b.PvD.NONE]: j.t.W27rsc,
      [b.PvD.LOW]: j.t["V8P+Pw"],
      [b.PvD.MEDIUM]: j.t.ERQFau,
      [b.PvD.HIGH]: j.t["83fN0j"],
      [b.PvD.VERY_HIGH]: j.t.PnkQJE
    }),
    [b.gGk.DEFAULT_MESSAGE_NOTIFICATIONS]: eb({
      [b.orn.ALL_MESSAGES]: j.t.LDi76A,
      [b.orn.ONLY_MENTIONS]: j.t["6K83ba"]
    }),
    [b.gGk.VANITY_URL_CODE]: eC(j.t.Zplsov, j.t.u6cArh),
    [b.gGk.EXPLICIT_CONTENT_FILTER]: eb({
      [b.gh6.DISABLED]: j.t.fmOeL3,
      [b.gh6.MEMBERS_WITHOUT_ROLES]: j.t["4FghYw"],
      [b.gh6.ALL_MEMBERS]: j.t.olyrSm
    }),
    [b.gGk.PREMIUM_PROGRESS_BAR_ENABLED]: ex(j.t.rBT0sn, j.t["gc+te5"]),
    [b.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFH,
    [b.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: () => j.t.g3DMjB,
    [b.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: () => j.t["+fQAel"],
    [b.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: () => j.t.E1fc4v,
    [b.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: () => j.t.XbwtSA
  }, w()),
  B = () => ({
    [b.gGk.NAME]: eD(j.t.f8Rh0U, j.t.ebD4Qp),
    [b.gGk.POSITION]: eD(j.t.isS8te, j.t.t5uBis),
    [b.gGk.TOPIC]: eL(j.t.esQcxn, j.t["m+veAn"], j.t["ws/1FA"]),
    [b.gGk.BITRATE]: eD(j.t.fw81ak, j.t.MFNlgZ),
    [b.gGk.RTC_REGION_OVERRIDE]: eL(j.t["6kajxx"], j.t.eGOlmU, j.t["0JMZdz"]),
    [b.gGk.USER_LIMIT]: eD(j.t.wk5t7p, j.t.XgjCEh),
    [b.gGk.RATE_LIMIT_PER_USER]: eD(j.t["7lirhF"], j.t.j4CCJR),
    [b.gGk.PERMISSIONS_RESET]: () => j.t["+vSBFY"],
    [b.gGk.PERMISSIONS_GRANTED]: () => j.t.EKLJv8,
    [b.gGk.PERMISSIONS_DENIED]: () => j.t.U3rO5X,
    [b.gGk.REASON]: () => j.t["2IW3C5"],
    [b.gGk.NSFW]: ex(j.t.H8Ri2Y, j.t.WW6cJw),
    [b.gGk.TYPE]: eD(j.t.Vn5zn2, j.t.aq4uWI),
    [b.gGk.VIDEO_QUALITY_MODE]: eD(j.t.e68fAU, j.t.djbES0),
    [b.gGk.DEFAULT_AUTO_ARCHIVE_DURATION]: eD(j.t.nYz2mg, j.t.oczvRI),
    [b.gGk.FLAGS]: () => j.t.ImCQko,
    [b.gGk.AVAILABLE_TAG_ADD]: () => j.t.H86QQU,
    [b.gGk.AVAILABLE_TAG_EDIT]: () => j.t.YtUzls,
    [b.gGk.AVAILABLE_TAG_DELETE]: () => j.t["8QOseg"],
    [b.gGk.LINKED_LOBBY]: eC(j.t["+/3TkD"], j.t["5kDYS3"])
  }),
  V = () => y({
    [b.gGk.NICK]: eL(j.t.qXDsHv, j.t["m+qury"], j.t.DvLvjF),
    [b.gGk.DEAF]: ex(j.t.mArLlW, j.t.ddvVYG),
    [b.gGk.MUTE]: ex(j.t["bxs/lS"], j.t.FjecQM),
    [b.gGk.ROLES_REMOVE]: () => j.t["+2SDWV"],
    [b.gGk.ROLES_ADD]: () => j.t["B3/3IJ"],
    [b.gGk.PRUNE_DELETE_DAYS]: () => j.t["+Cvc+D"],
    [b.gGk.COMMUNICATION_DISABLED_UNTIL]: eL(j.t.LXTQr5, j.t.LXTQr5, j.t.ULSdnE),
    [b.gGk.BYPASSES_VERIFICATION]: ex(j.t.NBPBui, j.t.zATost),
    [b.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME]: () => j.t.YbouFH
  }, w()),
  H = () => y({
    [b.gGk.NAME]: eD(j.t.QBmlaD, j.t["Lfs4r+"]),
    [b.gGk.DESCRIPTION]: eD(j.t.XeYKWJ, j.t.PSfeIj),
    [b.gGk.PERMISSIONS_GRANTED]: () => j.t["9i/DvE"],
    [b.gGk.PERMISSIONS_DENIED]: () => j.t.pa1ZVh,
    [b.gGk.COLOR]: eM({
      "#000000": j.t.TK6E1H
    }, j.t["2FQFiw"]),
    [b.gGk.COLORS]: e => null == e.newValue.secondary_color ? j.t.U44ttm : j.t["WnSwL/"],
    [b.gGk.HOIST]: ex(j.t.gWfe24, j.t["+tb8kN"]),
    [b.gGk.MENTIONABLE]: ex(j.t.LL8VFF, j.t.Z7xzmC),
    [b.gGk.ICON_HASH]: () => j.t["iEE79/"],
    [b.gGk.UNICODE_EMOJI]: () => j.t.KiLMM0
  }, w()),
  W = () => k(y({}, w()), {
    [b.gGk.TITLE]: eD(j.t["sNpuy/"], j.t["3Ukc/g"]),
    [b.gGk.DESCRIPTION]: eD(j.t.PP1q0x, j.t.z7pYLg),
    [b.gGk.OPTIONS]: () => j.t["3G5C9+"],
    [b.gGk.SINGLE_SELECT]: ex(j.t.v4WnR3, j.t["6Qg3uC"]),
    [b.gGk.REQUIRED]: ex(j.t["0MPAM6"], j.t.pwsXir)
  }),
  Y = () => k(y({}, w()), {
    [b.gGk.DEFAULT_CHANNEL_IDS]: () => j.t["8M+D2s"],
    [b.gGk.ENABLE_DEFAULT_CHANNELS]: ex(j.t["EYd/ls"], j.t["36OZeQ"]),
    [b.gGk.ENABLE_ONBOARDING_PROMPTS]: ex(j.t.V3u8PV, j.t["r66lc/"]),
    [b.gGk.ENABLED]: ex(j.t.SODVIs, j.t.u8HY5U)
  }),
  K = () => k(y({}, w()), {
    [b.gGk.WELCOME_MESSAGE]: () => j.t.dKQ1xd,
    [b.gGk.NEW_MEMBER_ACTIONS]: () => j.t.jDUIno,
    [b.gGk.RESOURCE_CHANNELS]: () => j.t.SIX0mr
  }),
  z = () => y({
    [b.gGk.CODE]: () => j.t.rrRHgb,
    [b.gGk.CHANNEL_ID]: () => j.t.Q1vd5q,
    [b.gGk.MAX_USES]: eM({
      0: j.t.Yx8LNm
    }, j.t["3ygnwU"]),
    [b.gGk.MAX_AGE]: eM({
      [j.intl.string(j.t.PqEzn8)]: j.t.uWrLvw
    }, j.t["Q+5kcO"]),
    [b.gGk.TEMPORARY]: ex(j.t.MWp6H7, j.t.omiqTH),
    [b.gGk.FLAGS]: eb({
      [o.Q.IS_GUEST_INVITE]: j.t.XYZMbL
    })
  }, w()),
  J = () => ({
    [b.gGk.CHANNEL_ID]: eD(j.t.jhPprR, j.t.ar4qYO),
    [b.gGk.NAME]: eD(j.t.ZVGrzU, j.t.tywdZR),
    [b.gGk.AVATAR_HASH]: () => j.t.KB52Uj,
    [b.gGk.REASON]: () => j.t["2IW3C5"]
  }),
  Q = () => y({
    [b.gGk.NAME]: eD(j.t.ahU1o5, j.t["wxs+vZ"])
  }, w()),
  Z = () => y({
    [b.gGk.NAME]: eD(j.t.cdl0Yo, j.t.o3W2ly),
    [b.gGk.TAGS]: eD(j.t["zwL+S2"], j.t["VYfKA+"]),
    [b.gGk.DESCRIPTION]: eD(j.t.XeYKWJ, j.t.PSfeIj)
  }, w()),
  q = () => y({
    [b.gGk.ENABLE_EMOTICONS]: ex(j.t.FI0m5x, j.t.olpKC6),
    [b.gGk.EXPIRE_BEHAVIOR]: eb({
      0: j.t["1Bb1+u"],
      1: j.t.vjlW6m
    }),
    [b.gGk.EXPIRE_GRACE_PERIOD]: () => j.t.iovXMa
  }, w()),
  $ = () => y({
    [b.gGk.TOPIC]: eD(j.t["m+veAn"], j.t.esQcxn),
    [b.gGk.PRIVACY_LEVEL]: eb({
      [U.dD.GUILD_ONLY]: j.t["EC+CDt"],
      [U.dD.PUBLIC]: j.t["pK/WG0"]
    })
  }, w()),
  ee = () => y({
    [b.gGk.NAME]: () => j.t["21EXHW"],
    [b.gGk.DESCRIPTION]: () => j.t.Vm1ofw,
    [b.gGk.PRIVACY_LEVEL]: eb({
      [U.dD.GUILD_ONLY]: j.t["EC+CDt"],
      [U.dD.PUBLIC]: j.t["pK/WG0"]
    }),
    [b.gGk.STATUS]: eb({
      [U.XG.SCHEDULED]: j.t.hXKDgq,
      [U.XG.ACTIVE]: j.t.lRX1nz,
      [U.XG.COMPLETED]: j.t["/eFIhq"],
      [U.XG.CANCELED]: j.t.NWIYhj
    }),
    [b.gGk.ENTITY_TYPE]: eb({
      [U.Ps.NONE]: j.t["6sO3Ss"],
      [U.Ps.STAGE_INSTANCE]: j.t["Wo+s1y"],
      [U.Ps.VOICE]: j.t.XCVaIL,
      [U.Ps.EXTERNAL]: j.t.IvhAj2
    }),
    [b.gGk.CHANNEL_ID]: eC(j.t.yJBIcX, j.t["+PqSsi"]),
    [b.gGk.LOCATION]: eC(j.t.GaMBHy, j.t.PsICk0),
    [b.gGk.IMAGE_HASH]: eC(j.t.S3vcRK, j.t.KQu47I)
  }, w()),
  et = () => y({
    [b.gGk.SCHEDULED_START_TIME]: eC(j.t.zMIYVg, j.t.fzF8Gd),
    [b.gGk.SCHEDULED_END_TIME]: eC(j.t.vONSQA, j.t.IlIti3),
    [b.gGk.IS_CANCELED]: e => {
      if (null != e.oldValue || true === e.newValue) {
        if (!e.oldValue && e.newValue) return j.t["7RkicW"];
        else if (e.oldValue && !e.newValue) return j.t.dRNTWW
      }
    }
  }, w()),
  en = () => y({
    [b.gGk.NAME]: eD(j.t.tUKRzX, j.t.kPCHON),
    [b.gGk.ARCHIVED]: ex(j.t.jDi9FK, j.t.F6dvbT),
    [b.gGk.LOCKED]: ex(j.t.JSy1QW, j.t.C7Jgo8),
    [b.gGk.INVITABLE]: ex(j.t.dxNUs9, j.t.biJvYG),
    [b.gGk.AUTO_ARCHIVE_DURATION]: eD(j.t.LuaG3y, j.t["18d9qr"]),
    [b.gGk.RATE_LIMIT_PER_USER]: eD(j.t["7lirhF"], j.t.j4CCJR),
    [b.gGk.FLAGS]: () => j.t.sSAQtj
  }, w()),
  el = e => {
    let t = y({}, w());
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = () => j.t["JH+89C"] : t[e.key] = () => j.t.HUrFDu : t[e.key] = () => j.t.vynxnV
    }), t
  },
  er = () => y({
    [b.gGk.NAME]: () => j.t.XwxAJT,
    [b.gGk.AUTO_MODERATION_TRIGGER_TYPE]: () => j.t.fx0pyl,
    [b.gGk.AUTO_MODERATION_EVENT_TYPE]: () => j.t["46Y+L5"],
    [b.gGk.AUTO_MODERATION_ACTIONS]: () => j.t["8efxfv"],
    [b.gGk.AUTO_MODERATION_ENABLED]: e => {
      var t;
      returntrue === (null != (t = e.newValue) ? t : e.oldValue) ? j.t.fCmxC2 : j.t.Wrg9Jn
    },
    [b.gGk.AUTO_MODERATION_EXEMPT_ROLES]: () => j.t.TRb7Nx,
    [b.gGk.AUTO_MODERATION_EXEMPT_CHANNELS]: () => j.t.mzitLE,
    [b.gGk.AUTO_MODERATION_TRIGGER_METADATA]: () => j.t["h/lM65"],
    [b.gGk.AUTO_MODERATION_ADD_KEYWORDS]: () => j.t["9V2yaC"],
    [b.gGk.AUTO_MODERATION_REMOVE_KEYWORDS]: () => j.t["4Qe9ny"],
    [b.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => j.t.GyZtxp,
    [b.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => j.t.OQDadc,
    [b.gGk.AUTO_MODERATION_ADD_ALLOW_LIST]: () => j.t["FvvR+K"],
    [b.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => j.t.p5nSvy
  }, w()),
  ea = () => y({
    [b.gGk.NAME]: eD(j.t.VOtRSO, j.t.OK7B8E),
    [b.gGk.VOLUME]: eD(j.t.igrDB9, j.t.L5lDFJ),
    [b.gGk.EMOJI_NAME]: eL(j.t.IIanaY, j.t["z4w4U/"], j.t.V8TfyU),
    [b.gGk.EMOJI_ID]: eL(j.t.ainxMB, j.t["2NPsYu"], j.t["8crtns"])
  }, w()),
  ei = () => y({
    [b.gGk.VERIFICATION_ENABLED]: e => true === e.newValue ? j.t.fnkzDY : j.t.WYT6ka,
    [b.gGk.MANUAL_APPROVAL_ENABLED]: e => true === e.newValue ? j.t.jzSvVd : j.t.WxyOtj
  }, w()),
  es = () => y({
    [b.gGk.STATUS]: () => j.t.HyCSnI
  }, w()),
  eo = () => ({
    [b.gGk.DESCRIPTION]: () => j.t.nsUZKY,
    [b.gGk.BRAND_COLOR_PRIMARY]: () => j.t.qe9mgN,
    [b.gGk.CUSTOM_BANNER_HASH]: () => j.t["04b5KC"],
    [b.gGk.TRAITS]: () => j.t.dEy9WO,
    [b.gGk.GAME_APPLICATION_IDS]: () => j.t["8BOT3x"],
    [b.gGk.VISIBILITY]: () => j.t.bCl1Ep,
    [b.gGk.SERVER_TAG]: eC(j.t.ix1dnX, j.t["4LKpKb"])
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
    value: b.F_X.ALL,
    label: j.intl.string(j.t.QxEVcv),
    valueLabel: j.intl.string(j.t.an9Ry3)
  }, {
    value: b.F_X.GUILD_UPDATE,
    label: j.intl.string(j.t["5INZa3"])
  }, {
    value: b.F_X.CHANNEL_CREATE,
    label: j.intl.string(j.t["2uh4vJ"])
  }, {
    value: b.F_X.CHANNEL_UPDATE,
    label: j.intl.string(j.t.mGsBLV)
  }, {
    value: b.F_X.CHANNEL_DELETE,
    label: j.intl.string(j.t.hCHzAr)
  }, {
    value: b.F_X.CHANNEL_OVERWRITE_CREATE,
    label: j.intl.string(j.t["8TnAMP"])
  }, {
    value: b.F_X.CHANNEL_OVERWRITE_UPDATE,
    label: j.intl.string(j.t.Jqx0Bi)
  }, {
    value: b.F_X.CHANNEL_OVERWRITE_DELETE,
    label: j.intl.string(j.t.gBXOr4)
  }, {
    value: b.F_X.MEMBER_KICK,
    label: j.intl.string(j.t["Q1/hN8"])
  }, {
    value: b.F_X.MEMBER_PRUNE,
    label: j.intl.string(j.t.tOTTja)
  }, {
    value: b.F_X.MEMBER_BAN_ADD,
    label: j.intl.string(j.t["NfPn+e"])
  }, {
    value: b.F_X.MEMBER_BAN_REMOVE,
    label: j.intl.string(j.t.XCsGfI)
  }, {
    value: b.F_X.MEMBER_UPDATE,
    label: j.intl.string(j.t["F/jmNJ"])
  }, {
    value: b.F_X.MEMBER_ROLE_UPDATE,
    label: j.intl.string(j.t.zAveSI)
  }, {
    value: b.F_X.MEMBER_MOVE,
    label: j.intl.string(j.t.QshteR)
  }, {
    value: b.F_X.MEMBER_DISCONNECT,
    label: j.intl.string(j.t.Z45os7)
  }, {
    value: b.F_X.BOT_ADD,
    label: j.intl.string(j.t.vuH24Z)
  }, {
    value: b.F_X.THREAD_CREATE,
    label: j.intl.string(j.t["+zl0DG"])
  }, {
    value: b.F_X.THREAD_UPDATE,
    label: j.intl.string(j.t.rbIry3)
  }, {
    value: b.F_X.THREAD_DELETE,
    label: j.intl.string(j.t.hFjNEA)
  }, {
    value: b.F_X.ROLE_CREATE,
    label: j.intl.string(j.t.AbxKtv)
  }, {
    value: b.F_X.ROLE_UPDATE,
    label: j.intl.string(j.t.t3Z6sU)
  }, {
    value: b.F_X.ROLE_DELETE,
    label: j.intl.string(j.t.YsFpa4)
  }, {
    value: b.F_X.ONBOARDING_PROMPT_CREATE,
    label: j.intl.string(j.t.ZV9tqc)
  }, {
    value: b.F_X.ONBOARDING_PROMPT_UPDATE,
    label: j.intl.string(j.t.PcOdvX)
  }, {
    value: b.F_X.ONBOARDING_PROMPT_DELETE,
    label: j.intl.string(j.t["+r33Na"])
  }, {
    value: b.F_X.ONBOARDING_CREATE,
    label: j.intl.string(j.t.uDADde)
  }, {
    value: b.F_X.ONBOARDING_UPDATE,
    label: j.intl.string(j.t.J1H1wg)
  }, {
    value: b.F_X.HOME_SETTINGS_CREATE,
    label: j.intl.string(j.t.Di4cvI)
  }, {
    value: b.F_X.HOME_SETTINGS_UPDATE,
    label: j.intl.string(j.t.tzyrJH)
  }, {
    value: b.F_X.INVITE_CREATE,
    label: j.intl.string(j.t["0BNJdX"])
  }, {
    value: b.F_X.INVITE_UPDATE,
    label: j.intl.string(j.t["o++obV"])
  }, {
    value: b.F_X.INVITE_DELETE,
    label: j.intl.string(j.t.iP40Az)
  }, {
    value: b.F_X.WEBHOOK_CREATE,
    label: j.intl.string(j.t["tBF4+S"])
  }, {
    value: b.F_X.WEBHOOK_UPDATE,
    label: j.intl.string(j.t.eV3McO)
  }, {
    value: b.F_X.WEBHOOK_DELETE,
    label: j.intl.string(j.t.AAL3K1)
  }, {
    value: b.F_X.EMOJI_CREATE,
    label: j.intl.string(j.t.RuWm0V)
  }, {
    value: b.F_X.EMOJI_UPDATE,
    label: j.intl.string(j.t.WzdUY7)
  }, {
    value: b.F_X.EMOJI_DELETE,
    label: j.intl.string(j.t.c3dK2L)
  }, {
    value: b.F_X.MESSAGE_DELETE,
    label: j.intl.string(j.t.daTfXh)
  }, {
    value: b.F_X.MESSAGE_BULK_DELETE,
    label: j.intl.string(j.t.nrBxeh)
  }, {
    value: b.F_X.MESSAGE_PIN,
    label: j.intl.string(j.t.MUldyN)
  }, {
    value: b.F_X.MESSAGE_UNPIN,
    label: j.intl.string(j.t.n4zKhA)
  }, {
    value: b.F_X.INTEGRATION_CREATE,
    label: j.intl.string(j.t.deNm8x)
  }, {
    value: b.F_X.INTEGRATION_UPDATE,
    label: j.intl.string(j.t.HT7Sfg)
  }, {
    value: b.F_X.INTEGRATION_DELETE,
    label: j.intl.string(j.t["+kJ09q"])
  }, {
    value: b.F_X.STICKER_CREATE,
    label: j.intl.string(j.t["3DzNjU"])
  }, {
    value: b.F_X.STICKER_UPDATE,
    label: j.intl.string(j.t.tdhW5b)
  }, {
    value: b.F_X.STICKER_DELETE,
    label: j.intl.string(j.t["+ZhGOk"])
  }, {
    value: b.F_X.STAGE_INSTANCE_CREATE,
    label: j.intl.string(j.t.sPbjA6)
  }, {
    value: b.F_X.STAGE_INSTANCE_UPDATE,
    label: j.intl.string(j.t.cW9LfJ)
  }, {
    value: b.F_X.STAGE_INSTANCE_DELETE,
    label: j.intl.string(j.t["U1r+yD"])
  }, {
    value: b.F_X.GUILD_SCHEDULED_EVENT_CREATE,
    label: j.intl.string(j.t.H81Zyy)
  }, {
    value: b.F_X.GUILD_SCHEDULED_EVENT_UPDATE,
    label: j.intl.string(j.t["FM69l+"])
  }, {
    value: b.F_X.GUILD_SCHEDULED_EVENT_DELETE,
    label: j.intl.string(j.t.Rq28Bh)
  }, {
    value: b.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: j.intl.string(j.t.iPdFOt)
  }, {
    value: b.F_X.AUTO_MODERATION_BLOCK_MESSAGE,
    label: j.intl.string(j.t.gNq5z6)
  }, {
    value: b.F_X.AUTO_MODERATION_RULE_CREATE,
    label: j.intl.string(j.t.f72Zqb)
  }, {
    value: b.F_X.AUTO_MODERATION_RULE_UPDATE,
    label: j.intl.string(j.t.XeqIiv)
  }, {
    value: b.F_X.AUTO_MODERATION_RULE_DELETE,
    label: j.intl.string(j.t.syAApU)
  }, {
    value: b.F_X.GUILD_HOME_FEATURE_ITEM,
    label: j.intl.string(j.t.lhG5KN)
  }, {
    value: b.F_X.GUILD_HOME_REMOVE_ITEM,
    label: j.intl.string(j.t.lRPRwS)
  }, {
    value: b.F_X.SOUNDBOARD_SOUND_CREATE,
    label: j.intl.string(j.t.yoRi5r)
  }, {
    value: b.F_X.SOUNDBOARD_SOUND_UPDATE,
    label: j.intl.string(j.t.uKlG0Z)
  }, {
    value: b.F_X.SOUNDBOARD_SOUND_DELETE,
    label: j.intl.string(j.t.gq0iCT)
  }, {
    value: b.F_X.VOICE_CHANNEL_STATUS_CREATE,
    label: j.intl.string(j.t.rGr0YM)
  }, {
    value: b.F_X.VOICE_CHANNEL_STATUS_DELETE,
    label: j.intl.string(j.t.V9PEQ4)
  }];

function eE(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function e_(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function ed(e) {
  var t;
  let n = ec().find(t => t.value === e.action);
  return null != eE(b.gGk.COMMUNICATION_DISABLED_UNTIL, e) ? j.intl.string(j.t.z3wbj8) : null != (t = null == n ? true : n.label) ? t : null
}
let eg = {
  [Chunk499979.pJ.SECONDS]: e => j.intl.formatToPlainString(j.t.geSp4K, {
    seconds: e
  }),
  [Chunk499979.pJ.MINUTES]: e => j.intl.formatToPlainString(j.t.iXLF9W, {
    minutes: e
  }),
  [Chunk499979.pJ.HOURS]: e => j.intl.formatToPlainString(j.t.xCjYxK, {
    hours: e
  }),
  [Chunk499979.pJ.DAYS]: e => j.intl.formatToPlainString(j.t["k2UNz+"], {
    days: e
  })
};

function eA(e) {
  let t = eE(b.gGk.COMMUNICATION_DISABLED_UNTIL, e),
    n = e_(b.gGk.ROLES_ADD, e).length > 0,
    l = e_(b.gGk.ROLES_REMOVE, e).length > 0;
  if (null != t) {
    if ((null == t ? true : t.newValue) != null) {
      let n = new Date(null == t ? true : t.newValue).getTime() - L.default.extractTimestamp(e.id),
        l = Math.round(n / 1e3 / 60),
        r = (0, _.$l)(l, F);
      if (null == r.unit || null == r.time) return null;
      if (r.unit in eg) {
        let e = r.unit,
          t = r.unit === _.pJ.SECONDS ? Math.round(n / 1e3) : r.time;
        return eg[e](t)
      }
    } else if ((null == t ? true : t.oldValue) != null) return j.intl.string(j.t.MA1ltr)
  } else if (n && l) return j.intl.string(j.t.RdMMew);
  else if (n) return j.intl.string(j.t["4GQqs8"]);
  else if (l) return j.intl.string(j.t["8mQ6x0"]);
  return null
}

function eT(e) {
  let t = e_(b.gGk.ROLES_ADD, e),
    n = e_(b.gGk.ROLES_REMOVE, e),
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
  return t.length > 0 && n.length > 0 ? j.intl.formatToPlainString(j.t.tZw1EW, {
    roleNamesAdded: l,
    roleNamesRemoved: r
  }) : t.length > 0 ? j.intl.formatToPlainString(j.t["/mTqt5"], {
    roleNames: l
  }) : n.length > 0 ? j.intl.formatToPlainString(j.t.Wk4pAJ, {
    roleNames: r
  }) : null
}

function eI(e) {
  switch (e.action) {
    case b.F_X.GUILD_UPDATE:
      return j.t.LjZO31;
    case b.F_X.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === b.gGk.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case b.rbe.GUILD_STAGE_VOICE:
          return j.t["OKp4+o"];
        case b.rbe.GUILD_VOICE:
          return j.t.NPOy4G;
        case b.rbe.GUILD_CATEGORY:
          return j.t.T3KIjz;
        default:
          return j.t.wrYNG2
      }
    case b.F_X.CHANNEL_UPDATE:
      return j.t.nTYk6B;
    case b.F_X.CHANNEL_DELETE:
      return j.t.ynfvkm;
    case b.F_X.CHANNEL_OVERWRITE_CREATE:
      return j.t.l5Cu1a;
    case b.F_X.CHANNEL_OVERWRITE_UPDATE:
      return j.t.uhtbNU;
    case b.F_X.CHANNEL_OVERWRITE_DELETE:
      return j.t["HASt/3"];
    case b.F_X.MEMBER_KICK:
      return j.t.B5hDZX;
    case b.F_X.MEMBER_PRUNE:
      return j.t.qKOZTP;
    case b.F_X.MEMBER_BAN_ADD:
      return j.t["XklUm/"];
    case b.F_X.MEMBER_BAN_REMOVE:
      return j.t.o3Y6HD;
    case b.F_X.MEMBER_UPDATE:
      return j.t.pznhLN;
    case b.F_X.MEMBER_ROLE_UPDATE:
      return j.t.Vngfia;
    case b.F_X.MEMBER_MOVE:
      return j.t.Yt6NkU;
    case b.F_X.MEMBER_DISCONNECT:
      return j.t.K4eCZw;
    case b.F_X.BOT_ADD:
      return j.t.fWvX0G;
    case b.F_X.ROLE_CREATE:
      return j.t.UTLTx6;
    case b.F_X.ROLE_UPDATE:
      return j.t.NRbN18;
    case b.F_X.ROLE_DELETE:
      return j.t["4s63tb"];
    case b.F_X.INVITE_CREATE:
      return j.t.YHOXWy;
    case b.F_X.INVITE_UPDATE:
      return j.t.ja3kGS;
    case b.F_X.INVITE_DELETE:
      return j.t["3n/iWk"];
    case b.F_X.WEBHOOK_CREATE:
      return j.t.MhYhil;
    case b.F_X.WEBHOOK_UPDATE:
      return j.t["6GTlWB"];
    case b.F_X.WEBHOOK_DELETE:
      return j.t.in0VjZ;
    case b.F_X.EMOJI_CREATE:
      return j.t["7vekRO"];
    case b.F_X.EMOJI_UPDATE:
      return j.t.IsCKfh;
    case b.F_X.EMOJI_DELETE:
      return j.t.JnUaVG;
    case b.F_X.STICKER_CREATE:
      return j.t.DRZifq;
    case b.F_X.STICKER_UPDATE:
      return j.t.bhujGc;
    case b.F_X.STICKER_DELETE:
      return j.t.rGEP9U;
    case b.F_X.MESSAGE_DELETE:
      return j.t["HPkD+M"];
    case b.F_X.MESSAGE_BULK_DELETE:
      return j.t["3RIvLE"];
    case b.F_X.MESSAGE_PIN:
      return j.t.Yna7E7;
    case b.F_X.MESSAGE_UNPIN:
      return j.t.NCxXUW;
    case b.F_X.INTEGRATION_CREATE:
      return j.t.HYvCb3;
    case b.F_X.INTEGRATION_UPDATE:
      return j.t.ibCCOS;
    case b.F_X.INTEGRATION_DELETE:
      return j.t["8zScWY"];
    case b.F_X.STAGE_INSTANCE_CREATE:
      return j.t["n7x/DF"];
    case b.F_X.STAGE_INSTANCE_UPDATE:
      return j.t["0hQYU4"];
    case b.F_X.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return j.t["Oi/in9"];
      return j.t["7ZIFm9"];
    case b.F_X.GUILD_SCHEDULED_EVENT_CREATE:
      return j.t.S7k52p;
    case b.F_X.GUILD_SCHEDULED_EVENT_UPDATE:
      return j.t.ebTK11;
    case b.F_X.GUILD_SCHEDULED_EVENT_DELETE:
      return j.t["/ARPKQ"];
    case b.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case b.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return j.t["8qCI36"];
    case b.F_X.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return j.t.zYb2da;
    case b.F_X.THREAD_CREATE:
      let n = null != e.changes ? e.changes.find(e => e.key === b.gGk.TYPE) : null;
      if (null == n) throw Error("[AuditLog] Could not find type change for thread create");
      switch (n.newValue) {
        case b.rbe.PRIVATE_THREAD:
          return j.t.Br0y5w;
        case b.rbe.ANNOUNCEMENT_THREAD:
          return j.t["6uaMmO"];
        default:
          return j.t["2cxQ7G"]
      }
    case b.F_X.THREAD_UPDATE:
      return j.t.PSsy4t;
    case b.F_X.THREAD_DELETE:
      return j.t.s3Khn8;
    case b.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return j.t.uzCqBm;
    case b.F_X.AUTO_MODERATION_BLOCK_MESSAGE:
      return j.t.NqWv2K;
    case b.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var l;
      if ((null == (l = e.options) ? true : l.auto_moderation_rule_trigger_type) === v.uh.USER_PROFILE.toString()) return j.t.YQsjej;
      return j.t.SD0PwJ;
    case b.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return j.t.Vk4TwX;
    case b.F_X.AUTO_MODERATION_QUARANTINE_USER:
      return j.t["/W5u5o"];
    case b.F_X.CREATOR_MONETIZATION_REQUEST_CREATED:
      return j.t.ONvWyr;
    case b.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return j.t["ryGLk+"];
    case b.F_X.AUTO_MODERATION_RULE_CREATE:
      return j.t["NKljj+"];
    case b.F_X.AUTO_MODERATION_RULE_UPDATE:
      return j.t["3wEA9u"];
    case b.F_X.AUTO_MODERATION_RULE_DELETE:
      return j.t.umua3n;
    case b.F_X.ONBOARDING_PROMPT_CREATE:
      return j.t["/8A1g2"];
    case b.F_X.ONBOARDING_PROMPT_UPDATE:
      return j.t.ArIrWI;
    case b.F_X.ONBOARDING_PROMPT_DELETE:
      return j.t.IuBTao;
    case b.F_X.ONBOARDING_CREATE:
      return j.t["wDaq3/"];
    case b.F_X.ONBOARDING_UPDATE:
      return j.t["yONu/l"];
    case b.F_X.HOME_SETTINGS_CREATE:
      return j.t.dSdCjG;
    case b.F_X.HOME_SETTINGS_UPDATE:
      return j.t.XHE8qv;
    case b.F_X.GUILD_HOME_FEATURE_ITEM:
      let r = null != e.changes ? e.changes.find(e => e.key === b.gGk.ENTITY_TYPE) : null;
      if (null == r) return j.t["UZ+U3A"];
      switch (r.newValue) {
        case s.U.MESSAGE:
          return j.t["PyEa+J"];
        case s.U.FORUM_POST:
          return j.t.hCuAb1;
        default:
          return j.t["UZ+U3A"]
      }
    case b.F_X.GUILD_HOME_REMOVE_ITEM:
      return j.t.kPReun;
    case b.F_X.SOUNDBOARD_SOUND_CREATE:
      return j.t["0PD83V"];
    case b.F_X.SOUNDBOARD_SOUND_UPDATE:
      return j.t.CM8n1w;
    case b.F_X.SOUNDBOARD_SOUND_DELETE:
      return j.t["kVz4/0"];
    case b.F_X.VOICE_CHANNEL_STATUS_CREATE:
      return j.t.MWjnU7;
    case b.F_X.VOICE_CHANNEL_STATUS_DELETE:
      return j.t.aS8Krq;
    case b.F_X.GUILD_MEMBER_VERIFICATION_UPDATE:
      return j.t["NUKUb+"];
    case b.F_X.GUILD_PROFILE_UPDATE:
      return j.t.Ed6hF1;
    case b.F_X.GUILD_MIGRATE_PIN_PERMISSION:
      return j.t["3Ne7MA"];
    case b.F_X.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION:
      return j.t["naflH+"];
    default:
      return null
  }
}

function eO(e) {
  switch (e) {
    case M.lx.GUILD_FEED_REMOVED:
      return j.intl.string(j.t["5G8ZD4"]);
    case M.lx.ACTIVE_CHANNELS_REMOVED:
      return j.intl.string(j.t["4YLtzC"]);
    case M.lx.PINNED:
      return j.intl.string(j.t["1QLRYb"])
  }
  return null
}

function eh(e) {
  switch (e) {
    case M.lx.GUILD_FEED_REMOVED:
      return j.intl.string(j.t.S5kuWQ);
    case M.lx.ACTIVE_CHANNELS_REMOVED:
      return j.intl.string(j.t["8qpgcz"]);
    case M.lx.PINNED:
      return j.intl.string(j.t.CMweGA)
  }
  return null
}

function eN(e, t) {
  switch (e) {
    case b.xBc.CREATE_INSTANT_INVITE:
      return j.intl.string(j.t.zJrgTG);
    case b.xBc.KICK_MEMBERS:
      return j.intl.string(j.t.pBNv6i);
    case b.xBc.BAN_MEMBERS:
      return j.intl.string(j.t.oTBA7N);
    case b.xBc.ADMINISTRATOR:
      return j.intl.string(j.t.PGvZqX);
    case b.xBc.MANAGE_CHANNELS:
      if (t.targetType === b.GaG.CHANNEL || t.targetType === b.GaG.CHANNEL_OVERWRITE) return j.intl.string(j.t.nAw15L);
      return j.intl.string(j.t["9qLtWs"]);
    case b.xBc.MANAGE_GUILD:
      return j.intl.string(j.t.QZRcfO);
    case b.xBc.VIEW_GUILD_ANALYTICS:
      return j.intl.string(j.t["rQJBE/"]);
    case b.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return j.intl.string(j.t["0lTLTv"]);
    case b.xBc.CHANGE_NICKNAME:
      return j.intl.string(j.t.dilOF6);
    case b.xBc.MANAGE_NICKNAMES:
      return j.intl.string(j.t["t+Ct5x"]);
    case b.xBc.MANAGE_ROLES:
      return j.intl.string(j.t["C8d+oG"]);
    case b.xBc.MANAGE_WEBHOOKS:
      return j.intl.string(j.t["/ADKmM"]);
    case b.xBc.CREATE_GUILD_EXPRESSIONS:
      return j.intl.string(j.t.HarVuP);
    case b.xBc.MANAGE_GUILD_EXPRESSIONS:
      return j.intl.string(j.t.bbuXIn);
    case b.xBc.VIEW_AUDIT_LOG:
      return j.intl.string(j.t.fZgLpA);
    case b.xBc.VIEW_CHANNEL:
      if (t.targetType === b.GaG.CHANNEL || t.targetType === b.GaG.CHANNEL_OVERWRITE) return j.intl.string(j.t["W/A4Qp"]);
      return j.intl.string(j.t.uV83yi);
    case b.xBc.SEND_MESSAGES:
      return j.intl.string(j.t.T32rkC);
    case b.xBc.SEND_TTS_MESSAGES:
      return j.intl.string(j.t.Mg7bku);
    case b.xBc.USE_APPLICATION_COMMANDS:
      return j.intl.string(j.t.shbR1a);
    case b.xBc.MANAGE_MESSAGES:
      return j.intl.string(j.t["6lU9xM"]);
    case b.xBc.EMBED_LINKS:
      return j.intl.string(j.t["969dEL"]);
    case b.xBc.ATTACH_FILES:
      return j.intl.string(j.t["3AS4UM"]);
    case b.xBc.READ_MESSAGE_HISTORY:
      return j.intl.string(j.t.l9ufaR);
    case b.xBc.MENTION_EVERYONE:
      return j.intl.string(j.t.Y78KGC);
    case b.xBc.USE_EXTERNAL_EMOJIS:
      return j.intl.string(j.t.BpBGZU);
    case b.xBc.USE_EXTERNAL_STICKERS:
      return j.intl.string(j.t["UeRs+b"]);
    case b.xBc.ADD_REACTIONS:
      return j.intl.string(j.t.yEoJAr);
    case b.xBc.CONNECT:
      return j.intl.string(j.t.S0W8Z5);
    case b.xBc.SPEAK:
      return j.intl.string(j.t["8w1tIR"]);
    case b.xBc.MUTE_MEMBERS:
      return j.intl.string(j.t["8EI30/"]);
    case b.xBc.DEAFEN_MEMBERS:
      return j.intl.string(j.t["9L47Fr"]);
    case b.xBc.MOVE_MEMBERS:
      return j.intl.string(j.t.YtjJPQ);
    case b.xBc.USE_VAD:
      return j.intl.string(j.t["08zAV7"]);
    case b.xBc.PRIORITY_SPEAKER:
      return j.intl.string(j.t.BVK71i);
    case b.xBc.STREAM:
      return j.intl.string(j.t.FlNoSV);
    case b.xBc.REQUEST_TO_SPEAK:
      return j.intl.string(j.t["5kicT2"]);
    case b.xBc.USE_EMBEDDED_ACTIVITIES:
      return j.intl.string(j.t.rLSGeh);
    case b.xBc.CREATE_EVENTS:
      return j.intl.string(j.t.qyjZua);
    case b.xBc.MANAGE_EVENTS:
      return j.intl.string(j.t.HIgA5a);
    case b.xBc.CREATE_PUBLIC_THREADS:
      return j.intl.string(j.t["25rKnX"]);
    case b.xBc.CREATE_PRIVATE_THREADS:
      return j.intl.string(j.t.QwbTSa);
    case b.xBc.SEND_MESSAGES_IN_THREADS:
      return j.intl.string(j.t.fTE74g);
    case b.xBc.MANAGE_THREADS:
      return j.intl.string(j.t.kEqgr7);
    case b.xBc.MODERATE_MEMBERS:
      return j.intl.string(j.t["+RL6pz"]);
    case b.xBc.SET_VOICE_CHANNEL_STATUS:
      return j.intl.string(j.t.VBwkUf);
    case b.xBc.SEND_POLLS:
      return j.intl.string(j.t.UMQ7Ww);
    case b.xBc.USE_EXTERNAL_APPS:
      return j.intl.string(j.t.TtA5rK);
    case b.xBc.PIN_MESSAGES:
      return j.intl.string(j.t.Y5BI39);
    case b.xBc.BYPASS_SLOWMODE:
      return j.intl.string(j.t.kqcjeV)
  }
  return null
}

function em(e, t) {
  let n = [];
  return e.forEach(e => {
    let l = function(e, t) {
        switch (e.targetType) {
          case b.GaG.GUILD:
          case b.GaG.GUILD_HOME:
          case b.GaG.GUILD_PROFILE:
            return t;
          case b.GaG.CHANNEL:
          case b.GaG.CHANNEL_OVERWRITE:
            return eG(e, b.gGk.NAME, e => S.A.getChannel(e), e => (0, g.m1)(e, R.default, G.A, true));
          case b.GaG.USER:
            return eG(e, b.gGk.NICK, e => R.default.getUser(e), e => e);
          case b.GaG.ROLE:
            return eG(e, b.gGk.NAME, e => p.A.getRole(t.id, e), e => e.name);
          case b.GaG.ONBOARDING_PROMPT:
            let n = eG(e, b.gGk.ID, e => O.A.getOnboardingPrompt(e), e => e.title);
            return null == n || "" === n ? j.intl.string(j.t.ZNQyiR) : n;
          case b.GaG.GUILD_ONBOARDING:
          case b.GaG.GUILD_MEMBER_VERIFICATION:
            return t;
          case b.GaG.INVITE:
            return eG(e, b.gGk.CODE, b.FXj);
          case b.GaG.INTEGRATION:
            return eG(e, b.gGk.TYPE, e => x.A.integrations.find(t => t.id === e), e => e.name);
          case b.GaG.WEBHOOK:
            return eG(e, b.gGk.NAME, e => x.A.webhooks.find(t => t.id === e), e => e.name);
          case b.GaG.EMOJI:
            return eG(e, b.gGk.NAME, e => T.Ay.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case b.GaG.STICKER:
            return eG(e, b.gGk.NAME, e => m.A.getStickerById(e), e => e.name);
          case b.GaG.STAGE_INSTANCE:
            return eG(e, b.gGk.TOPIC, e => {
              var n;
              return null == (n = Object.values(N.A.getStageInstancesByGuild(t.id))) ? true : n.find(t => t.id === e)
            }, e => e.topic);
          case b.GaG.GUILD_SCHEDULED_EVENT:
          case b.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return eG(e, b.gGk.NAME, e => x.A.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case b.GaG.THREAD:
            return eG(e, b.gGk.NAME, e => x.A.threads.find(t => t.id === e), e => e.name);
          case b.GaG.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = x.A.integrations.find(t => {
                var n;
                return (null == (n = t.application) ? true : n.id) === e.targetId
              });
              if (null != t) return t.name;
              return e.targetId
            }
            return eG(e, b.gGk.NAME, e => x.A.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === d.kc.CHAT ? "/⁠".concat(t) : t
            });
          case b.GaG.AUTO_MODERATION_RULE:
            return eG(e, b.gGk.NAME, e => x.A.automodRules.find(t => t.id === e), e => e.name);
          case b.GaG.GUILD_SOUNDBOARD:
            return eG(e, b.gGk.NAME, b.FXj);
          case b.GaG.HOME_SETTINGS:
            return eG(e, b.gGk.GUILD_ID, e => h.h.getSettings(e), () => j.intl.string(j.t.VbpLyU), t.id);
          case b.GaG.VOICE_CHANNEL_STATUS:
            return eG(e, b.gGk.STATUS, e => S.A.getChannel(e), e => (0, g.m1)(e, R.default, G.A, true));
          default:
            return P.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = R.default.getUser(e.userId);
    if (null != l || [b.F_X.MEMBER_PRUNE, b.F_X.MEMBER_DISCONNECT, b.F_X.MEMBER_MOVE, b.F_X.CREATOR_MONETIZATION_REQUEST_CREATED, b.F_X.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", l)).set("options", function(e) {
          if (null != e.options) {
            let n = y({}, e.options);
            switch (e.options.type) {
              case b.AO_.USER:
                n.subtarget = eR(e.options.id, e => R.default.getUser(e), e => e.tag);
                break;
              case b.AO_.ROLE:
                n.subtarget = eR(e.options.role_name, b.FXj)
            }
            if (null != e.options.channel_id && (n.channel = eG(e, "", e => S.A.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (n.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let l = x.A.guildScheduledEvents.find(t => t.id === e.targetId),
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
            if (t.action === b.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case b.g0g.ROLE:
                  e.subtarget = eR(t.id, e => p.A.getRole(n.id, e), e => e.name);
                  break;
                case b.g0g.USER:
                  e.subtarget = eR(t.id, e => R.default.getUser(e), e => e.tag);
                  break;
                case b.g0g.CHANNEL:
                  t.id === r()(n.id).subtract(1).toString() ? e.subtarget = j.intl.string(j.t.MSYhgh) : e.subtarget = eR(t.id, e => S.A.getChannel(e), e => (0, g.m1)(e, R.default, G.A, true))
              }
              return e
            }
            switch (e.key) {
              case b.gGk.OWNER_ID:
                return ep(e, e => R.default.getUser(e));
              case b.gGk.CHANNEL_ID:
              case b.gGk.AFK_CHANNEL_ID:
              case b.gGk.SYSTEM_CHANNEL_ID:
              case b.gGk.RULES_CHANNEL_ID:
              case b.gGk.PUBLIC_UPDATES_CHANNEL_ID:
                return ep(e, e => S.A.getChannel(e), e => (0, g.m1)(e, R.default, G.A, true));
              case b.gGk.AFK_TIMEOUT:
                return ep(e, e => e / 60);
              case b.gGk.BITRATE:
                return ep(e, e => e / 1e3);
              case b.gGk.COLOR:
                return ep(e, e => (0, c.Hl)(e).toUpperCase());
              case b.gGk.THEME_COLORS:
                return ep(e, e => "".concat((0, c.Hl)(e[0]).toUpperCase(), ", ").concat((0, c.Hl)(e[1]).toUpperCase()));
              case b.gGk.MAX_AGE:
                return ep(e, e => {
                  let t = C.Ay.getMaxAgeOptionByValue(e);
                  return null !== t ? t.label : e
                });
              case b.gGk.PERMISSIONS: {
                let t = [],
                  {
                    added: n,
                    removed: l
                  } = ef(e.oldValue, e.newValue);
                if (n.length > 0) {
                  let e = new f.QO(b.gGk.PERMISSIONS_GRANTED, null, n);
                  t.push(e)
                }
                if (l.length > 0) {
                  let e = new f.QO(b.gGk.PERMISSIONS_DENIED, null, l);
                  t.push(e)
                }
                return t
              }
              case b.gGk.PERMISSIONS_GRANTED:
              case b.gGk.PERMISSIONS_DENIED: {
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
                  let e = new f.QO(b.gGk.PERMISSIONS_RESET, l, l);
                  t.push(e)
                }
                return t
              }
              case b.gGk.FLAGS: {
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
              case b.gGk.PREFERRED_LOCALE:
                return ep(e, e => {
                  let t = (0, j.getAvailableLocales)().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case b.gGk.VIDEO_QUALITY_MODE:
                return ep(e, e => e === b.K3c.FULL ? j.intl.string(j.t["7jOoJE"]) : j.intl.string(j.t.jjKYpu));
              case b.gGk.SYSTEM_CHANNEL_FLAGS:
                let l, a;
                return l = {
                  [b.ogj.SUPPRESS_JOIN_NOTIFICATIONS]: b.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                  [b.ogj.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: b.gGk.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                  [b.ogj.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: b.gGk.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                  [b.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: b.gGk.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                }, a = [], Object.values(b.ogj).forEach(t => {
                  let n = (e.oldValue & t) === t,
                    r = (e.newValue & t) === t;
                  if (n === r) return;
                  let i = new f.QO(l[t], !n, !r);
                  a.push(i)
                }), a;
              case b.gGk.AUTO_MODERATION_ACTIONS:
                if (t.targetType === b.GaG.AUTO_MODERATION_RULE) return ep(e, e => e.map(e => e.type), e => e.map(I.PZ).join(", "));
                break;
              case b.gGk.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === b.GaG.AUTO_MODERATION_RULE) return ep(e, I.X3);
                break;
              case b.gGk.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === b.GaG.AUTO_MODERATION_RULE) return ep(e, I.nl);
                break;
              case b.gGk.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === b.GaG.AUTO_MODERATION_RULE) return ep(e, e => null != e && "object" == typeof e ? null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.intl.formatToMarkdownString(j.t.y91UXV, {
                  newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                }) : JSON.stringify(e) : e);
                break;
              case b.gGk.AUTO_MODERATION_ADD_KEYWORDS:
              case b.gGk.AUTO_MODERATION_REMOVE_KEYWORDS:
              case b.gGk.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case b.gGk.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case b.gGk.AUTO_MODERATION_ADD_ALLOW_LIST:
              case b.gGk.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === b.GaG.AUTO_MODERATION_RULE) return ep(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case b.gGk.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === b.GaG.AUTO_MODERATION_RULE) return ep(e, e => e.map(S.A.getChannel).filter(e => null != e).map(e => (0, g.m1)(e, R.default, G.A, true)), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]));
                break;
              case b.gGk.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === b.GaG.AUTO_MODERATION_RULE) return ep(e, e => e.map(e => p.A.getRole(n.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : j.intl.string(j.t["K/EdV8"]));
                break;
              case b.gGk.AVAILABLE_TAGS:
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
                      if (null == a[e]) return new f.QO(b.gGk.AVAILABLE_TAG_ADD, null, eS(i[e]))
                  }
                  if (l.length > r.length) {
                    for (let e in a)
                      if (null == i[e]) return new f.QO(b.gGk.AVAILABLE_TAG_DELETE, null, eS(a[e]))
                  }
                  for (let e in a) {
                    let t = a[e],
                      n = i[e];
                    if ((null == n ? true : n.name) !== t.name || (null == n ? true : n.emoji_id) !== t.emoji_id || (null == n ? true : n.emoji_name) !== t.emoji_name) return new f.QO(b.gGk.AVAILABLE_TAG_EDIT, eS(t), eS(n))
                  }
                  return e
                }(e);
              case b.gGk.SCHEDULED_START_TIME:
              case b.gGk.SCHEDULED_END_TIME:
                return ep(e, e => (0, D.i$)(i()(new Date(e)), "LLLL"))
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
  for (let e in b.xBc) {
    let t = b.xBc[e];
    u.zy(r, t) && i.push(t), u.zy(a, t) && s.push(t)
  }
  return {
    added: i,
    removed: s
  }
}

function eS(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : true,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function ep(e, t, n) {
  let l = e.newValue,
    r = e.oldValue;
  return null != e.newValue && (l = t(e.newValue), null != n && null != l && (l = n(l))), null != e.oldValue && (r = t(e.oldValue), null != n && null != r && (r = n(r))), new f.QO(e.key, r || e.oldValue, l || e.newValue)
}

function eG(e, t, n, l, r) {
  let a = null,
    i = n(r = null != r ? r : e.targetId);
  if (null != i && null != l && (a = l(i)), null == a) {
    let t = x.A.deletedTargets[e.targetType];
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

function ex(e, t) {
  return n => n.newValue ? e : t
}

function eb(e) {
  return t => e[t.newValue]
}

function eM(e, t) {
  return n => {
    var l;
    return null != (l = e[n.newValue]) ? l : t
  }
}