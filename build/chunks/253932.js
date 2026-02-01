/** Chunk was on web.js **/
/** chunk id: 253932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $s: () => $,
  Bh: () => I,
  CY: () => ey,
  D_: () => g,
  FA: () => ee,
  G2: () => eO,
  H1: () => es,
  HO: () => ea,
  HZ: () => eW,
  Hu: () => e6,
  Iv: () => eK,
  JG: () => ej,
  JI: () => eC,
  JV: () => C,
  Jr: () => P,
  Kg: () => eu,
  LJ: () => e4,
  ML: () => y,
  NF: () => eZ,
  NO: () => R,
  NR: () => S,
  PZ: () => eJ,
  Pf: () => Y,
  Pw: () => ek,
  Q$: () => ev,
  Q_: () => eR,
  Qe: () => ed,
  Qr: () => N,
  S0: () => ex,
  SI: () => E,
  SY: () => v,
  Sf: () => eL,
  T3: () => w,
  TA: () => eY,
  UM: () => K,
  Vd: () => eq,
  Vv: () => ez,
  WY: () => Q,
  X6: () => eA,
  Xi: () => e1,
  YX: () => Z,
  Yh: () => eo,
  Yt: () => e2,
  Zk: () => eH,
  Zp: () => A,
  Zr: () => q,
  Zt: () => X,
  _3: () => k,
  _6: () => eb,
  _8: () => eQ,
  _Z: () => eV,
  _z: () => j,
  b0: () => M,
  bm: () => U,
  cU: () => ec,
  cj: () => e_,
  dG: () => ei,
  dm: () => eF,
  e: () => W,
  eK: () => b,
  eh: () => eP,
  gs: () => O,
  hD: () => eI,
  hH: () => er,
  he: () => eh,
  iM: () => L,
  j0: () => e0,
  j7: () => en,
  jP: () => eE,
  jW: () => eT,
  kt: () => eD,
  l_: () => ef,
  m$: () => eB,
  n6: () => J,
  ng: () => e3,
  ns: () => B,
  on: () => ep,
  oz: () => T,
  pE: () => eG,
  pK: () => e$,
  qN: () => eX,
  rs: () => eS,
  tP: () => x,
  tz: () => em,
  uB: () => H,
  uh: () => G,
  vL: () => et,
  vf: () => el,
  wv: () => V,
  xM: () => F
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk406935 = require("./406935.js"),
  Chunk52133 = require("./52133.js"),
  Chunk461012 = require("./461012.js"),
  Chunk809976 = require("./809976.js"),
  Chunk646769 = require("./646769.js"),
  Chunk397438 = require("./397438.js"),
  Chunk656402 = require("./656402.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js"),
  Chunk815968 = require("./815968.js"),
  Chunk823894 = require("./823894.js");
let g = (0, Chunk646769.c$)("textAndImages", "useLegacyChatInput", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  E = (0, Chunk646769.c$)("textAndImages", "useRichChatInput", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  y = (0, Chunk646769.c$)("textAndImages", "includeStickersInAutocomplete", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  b = (0, Chunk646769.c$)("textAndImages", "includeSoundmojiInAutocomplete", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  O = (0, Chunk646769.c$)("textAndImages", "renderSpoilers", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : _.P6Q.ON_CLICK
  }, e => o.hU.create({
    value: e
  })),
  v = (0, Chunk646769.c$)("textAndImages", "useThreadSidebar", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  }));
(0, Chunk646769.c$)("notifications", "showInAppNotifications", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o._t.create({
  value: e
}));
let A = (0, Chunk646769.c$)("notifications", "reactionNotifications", e => null != e ? e : a.Tz.NOTIFICATIONS_ENABLED, e => e);
(0, Chunk646769.c$)("notifications", "customStatusPushNotifications", e => null != e ? e : a.DQ.STATUS_PUSH_UNSET, e => e);
let I = (0, Chunk646769.c$)("notifications", "enableVoiceActivityNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: !!e
  })),
  S = (0, Chunk646769.c$)("notifications", "enableFriendOnlineNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: !!e
  })),
  T = (0, Chunk646769.c$)("notifications", "enableFriendAnniversaryNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: !!e
  })),
  C = (0, Chunk646769.c$)("notifications", "enableGameUpdateNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: !!e
  })),
  N = (0, Chunk646769.c$)("notifications", "enableServerTrendingNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: !!e
  })),
  w = (0, Chunk646769.c$)("notifications", "enableProfileUpdatesNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: !!e
  })),
  R = (0, Chunk646769.c$)("notifications", "quietMode", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: !!e
  })),
  P = (0, Chunk646769.c$)("notifications", "focusModeExpiresAtMs", e => null != e ? e : "0", e => e),
  D = [],
  L = (0, Chunk646769.c$)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : D, e => e),
  x = (0, Chunk646769.c$)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : D, e => e),
  M = (0, Chunk646769.c$)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : D, e => e),
  j = (0, Chunk646769.c$)("textAndImages", "viewImageDescriptions", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  k = (0, Chunk646769.c$)("textAndImages", "showCommandSuggestions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  U = (0, Chunk646769.c$)("voiceAndVideo", "alwaysPreviewVideo", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  G = (0, Chunk646769.c$)("voiceAndVideo", "disableStreamPreviews", e => null == e ? true : e.value, e => o._t.create({
    value: e
  })),
  V = (0, Chunk646769.c$)("notifications", "notifyFriendsOnGoLive", e => null == e ? true : e.value, e => o._t.create({
    value: e
  })),
  F = "0",
  B = (0, Chunk646769.c$)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : F, e => e),
  H = (0, Chunk646769.c$)("gameLibrary", "installShortcutDesktop", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  Y = (0, Chunk646769.c$)("gameLibrary", "installShortcutStartMenu", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  W = (0, Chunk646769.c$)("privacy", "allowActivityPartyPrivacyFriends", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  K = (0, Chunk646769.c$)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  z = [],
  q = (0, Chunk646769.c$)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : z, e => e),
  Z = (0, Chunk646769.c$)("privacy", "defaultMessageRequestRestricted", e => null == e ? true : e.value, e => o._t.create({
    value: e
  })),
  Q = (0, Chunk646769.c$)("privacy", "nonSpamRetrainingOptIn", e => null == e ? true : e.value, e => null == e ? true : o._t.create({
    value: e
  }));
(0, Chunk646769.c$)("privacy", "contactSyncEnabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o._t.create({
  value: e
}));
let X = (0, Chunk646769.c$)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
  J = (0, Chunk646769.c$)("privacy", "defaultGuildsRestrictedV2", e => null == e ? true : e.value, e => o._t.create({
    value: e
  })),
  $ = (0, Chunk646769.c$)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
(0, Chunk646769.c$)("privacy", "friendDiscoveryFlags", e => {
  var t;
  return null != (t = null == e ? true : e.value) ? t : 0
}, e => o.ZQ.create({
  value: e
}));
let ee = (0, Chunk646769.c$)("privacy", "friendSourceFlags", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : _.yKI
  }, e => o.ZQ.create({
    value: e
  })),
  et = (0, Chunk646769.c$)("debug", "rtcPanelShowVoiceStates", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  en = (0, Chunk646769.c$)("textAndImages", "convertEmoticons", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  er = (0, Chunk646769.c$)("textAndImages", "messageDisplayCompact", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  ei = (0, Chunk646769.c$)("voiceAndVideo", "soundboardSettings", e => e, e => e),
  ea = (0, Chunk646769.c$)("voiceAndVideo", "soundmojiVolume", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : 100
  }, e => o.uN.create({
    value: e
  })),
  eo = (0, Chunk646769.c$)("voiceAndVideo", "streamNotificationsEnabled", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  es = (0, Chunk646769.c$)("privacy", "dropsOptedOut", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  el = (0, Chunk646769.c$)("privacy", "quests3PDataOptedOut", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  }));
(0, Chunk646769.c$)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o._t.create({
  value: e
}));
let ec = (0, Chunk646769.c$)("voiceAndVideo", "afkTimeout", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : 60
  }, e => o.ZQ.create({
    value: e
  })),
  eu = (0, Chunk646769.c$)("textAndImages", "viewNsfwGuilds", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  ed = (0, Chunk646769.c$)("textAndImages", "viewNsfwCommands", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  }));
(0, Chunk646769.c$)("privacy", "detectPlatformAccounts", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o._t.create({
  value: e
}));
let ef = (0, Chunk646769.c$)("gameLibrary", "disableGamesTab", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  ep = (0, Chunk646769.c$)("textAndImages", "enableTtsCommand", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  e_ = (0, Chunk646769.c$)("textAndImages", "explicitContentFilter", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : f.Je.NON_FRIENDS
  }, e => o.ZQ.create({
    value: e
  }));
(0, Chunk646769.c$)("textAndImages", "dmSpamFilter", e => {
  var t;
  return null != (t = null == e ? true : e.value) ? t : f.uH.NON_FRIENDS
}, e => o.ZQ.create({
  value: e
}));
let eh = (0, Chunk646769.c$)("textAndImages", "dmSpamFilterV2", e => null != e ? e : a.he.DEFAULT_UNSET, e => e),
  em = (0, Chunk646769.c$)("status", "showCurrentGame", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  }));
(0, Chunk646769.c$)("privacy", "recentGamesEnabled", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o._t.create({
  value: e
}));
let eg = new Set(Object.values(Chunk652215.clD)),
  eE = (0, Chunk646769.c$)("status", "status", e => null != e && eg.has(e.value) ? e.value : _.clD.UNKNOWN, e => o.hU.create({
    value: e
  })),
  ey = (0, Chunk646769.c$)("status", "statusExpiresAtMs", e => null != e ? e : "0", e => e),
  eb = (0, Chunk646769.c$)("status", "statusCreatedAtMs", e => e, e => e),
  eO = (0, Chunk646769.c$)("status", "customStatus", e => e, e => e),
  ev = (0, Chunk646769.c$)("clips", "allowVoiceRecording", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  eA = (0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "inlineAttachmentMedia", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })), "text", "inlineAttachmentMedia"),
  eI = (0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "inlineEmbedMedia", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })), "text", "inlineEmbedMedia"),
  eS = (0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "renderEmbeds", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })), "text", "renderEmbeds"),
  eT = (0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "renderReactions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })), "text", "renderReactions");
(0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "defaultReactionEmoji", e => {
  var t, n;
  let {
    emojiId: r,
    emojiName: i,
    animated: a
  } = null != e ? e : {};
  return {
    emojiId: null == r ? true : r.value,
    emojiName: null == i ? true : i.value,
    animated: null == a ? true : a.value,
    disableDoubleTap: null != (t = null == e || null == (n = e.disableDoubleTap) ? true : n.value) && t
  }
}, e => {
  let {
    emojiId: t,
    emojiName: n,
    animated: r,
    disableDoubleTap: i
  } = e;
  return {
    emojiId: o.ol.create({
      value: t
    }),
    emojiName: o.hU.create({
      value: n
    }),
    animated: o._t.create({
      value: r
    }),
    disableDoubleTap: o._t.create({
      value: i
    })
  }
}, {
  comparator: Chunk52133.A
}), "text", "defaultReactionEmoji");
let eC = (0, Chunk646769.c$)("localization", "timezoneOffset", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : null
  }, e => o.as.create({
    value: null != e ? e : 0
  })),
  eN = new Set([Chunk815968.YP.AUTO, Chunk461012.b.COZY, Chunk461012.b.COMPACT]);
(0, Chunk646769.c$)("appearance", "channelListLayout", e => null != e && eN.has(e.value) ? e.value : l.b.COZY, e => o.hU.create({
  value: e
}));
let ew = new Set([Chunk461012.P.ALL, Chunk461012.P.UNREADS, Chunk461012.P.NONE]);
(0, Chunk646769.c$)("appearance", "messagePreviews", e => null != e && ew.has(e.value) ? e.value : l.P.ALL, e => o.hU.create({
  value: e
}));
let eR = (0, Chunk646769.Mt)((0, Chunk646769.c$)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
  eP = (0, Chunk646769.c$)("appearance", "clientThemeSettings", e => {
    var t;
    return {
      backgroundGradientPresetId: null == e || null == (t = e.backgroundGradientPresetId) ? true : t.value,
      customUserThemeSettings: (null == e ? true : e.customUserThemeSettings) != null ? {
        colors: e.customUserThemeSettings.colors,
        gradientColorStops: e.customUserThemeSettings.gradientColorStops,
        gradientAngle: e.customUserThemeSettings.gradientAngle,
        baseMix: e.customUserThemeSettings.baseMix
      } : true
    }
  }, e => ({
    backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.ZQ.create({
      value: e.backgroundGradientPresetId
    }) : true,
    customUserThemeSettings: null != e.customUserThemeSettings ? {
      colors: e.customUserThemeSettings.colors,
      gradientColorStops: e.customUserThemeSettings.gradientColorStops,
      gradientAngle: e.customUserThemeSettings.gradientAngle,
      baseMix: e.customUserThemeSettings.baseMix
    } : true
  }), {
    comparator: Chunk735438.isEqual
  }),
  eD = (0, Chunk646769.Tg)((0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "gifAutoPlay", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
    var e;
    return null == (e = d.A.getOverride("gifAutoPlay")) ? true : e.value
  }, () => (0, i.bG)([d.A], () => {
    var e;
    return null == (e = d.A.getOverride("gifAutoPlay")) ? true : e.value
  })),
  eL = (0, Chunk646769.Tg)((0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "animateEmoji", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })), "text", "animateEmoji"), "animateEmoji", () => {
    var e;
    return null == (e = d.A.getOverride("animateEmoji")) ? true : e.value
  }, () => (0, i.bG)([d.A], () => {
    var e;
    return null == (e = d.A.getOverride("animateEmoji")) ? true : e.value
  })),
  ex = (0, Chunk646769.Tg)((0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "animateStickers", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : m.BJ.ALWAYS_ANIMATE
  }, e => o.ZQ.create({
    value: e
  })), "text", "animateStickers"), "animateStickers", () => {
    var e;
    return null == (e = d.A.getOverride("animateStickers")) ? true : e.value
  }, () => (0, i.bG)([d.A], () => {
    var e;
    return null == (e = d.A.getOverride("animateStickers")) ? true : e.value
  })),
  eM = [],
  ej = (0, Chunk646769.c$)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eM, e => e),
  ek = (0, Chunk646769.c$)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eM, e => e, {
    delay: Chunk355097.Sb.FREQUENT_USER_ACTION
  }),
  eU = [],
  eG = (0, Chunk646769.c$)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : eU, e => e);
(0, Chunk646769.c6)({
  baseSetting: (0, Chunk646769.c$)("privacy", "defaultGuildsActivityRestricted", e => e, e => null != e ? e : a.AN.OFF),
  isEligible: () => (0, c.oK)("user_settings"),
  useIsEligible: () => (0, c.ty)("user_settings"),
  ineligibleDefault: Chunk873298.AN.OFF,
  eligibleDefault: () => a.AN.ON_FOR_LARGE_GUILDS
});
let eV = (0, Chunk646769.c6)({
    baseSetting: (0, Chunk646769.c$)("privacy", "defaultGuildsActivityRestrictedV2", e => e === a.Qd.ACTIVITY_STATUS_UNSET ? null : e, e => null != e ? e : a.Qd.ACTIVITY_STATUS_OFF),
    isEligible: () => (0, c.oK)("user_settings"),
    useIsEligible: () => (0, c.ty)("user_settings"),
    ineligibleDefault: Chunk873298.Qd.ACTIVITY_STATUS_OFF,
    eligibleDefault: () => a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS
  }),
  eF = (0, Chunk646769.c$)("privacy", "familyCenterEnabledV2", e => null == e ? true : e.value, e => o._t.create({
    value: e
  })),
  eB = (0, Chunk646769.c$)("privacy", "hideLegacyUsername", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  eH = (0, Chunk646769.c$)("privacy", "allowGameFriendDmsInDiscord", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  eY = (0, Chunk646769.c$)("privacy", "slayerSdkReceiveDmsInGame", e => null != e ? e : a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET, e => e),
  eW = (0, Chunk646769.c$)("ads", "alwaysDeliver", e => null != e && e, e => e),
  eK = e => {
    let {
      explicitContentGuilds: t,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: r
    } = null != e ? e : {};
    return {
      explicitContentGuilds: null != t ? t : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
      explicitContentFriendDm: null != n ? n : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
      explicitContentNonFriendDm: null != r ? r : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION
    }
  },
  ez = e => {
    let {
      explicitContentGuilds: t,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: r
    } = e;
    return {
      explicitContentGuilds: null != t ? t : true,
      explicitContentFriendDm: null != n ? n : true,
      explicitContentNonFriendDm: null != r ? r : true
    }
  },
  eq = (0, Chunk646769.c$)("textAndImages", "explicitContentSettings", eK, ez),
  eZ = e => {
    let {
      goreContentGuilds: t,
      goreContentFriendDm: n,
      goreContentNonFriendDm: r
    } = null != e ? e : {};
    return {
      goreContentGuilds: null != t ? t : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
      goreContentFriendDm: null != n ? n : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
      goreContentNonFriendDm: null != r ? r : a.TO.UNSET_EXPLICIT_CONTENT_REDACTION
    }
  },
  eQ = e => {
    let {
      goreContentGuilds: t,
      goreContentFriendDm: n,
      goreContentNonFriendDm: r
    } = e;
    return {
      goreContentGuilds: null != t ? t : true,
      goreContentFriendDm: null != n ? n : true,
      goreContentNonFriendDm: null != r ? r : true
    }
  },
  eX = (0, Chunk646769.c$)("textAndImages", "goreContentSettings", eZ, eQ);
(0, Chunk646769.c$)("appearance", "searchResultExactCountEnabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o._t.create({
  value: e
})), (0, Chunk646769.c$)("appearance", "happeningNowCardsDisabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o._t.create({
  value: e
}));
let eJ = (0, Chunk646769.c$)("appearance", "timestampHourCycle", e => null != e ? e : a.PZ.AUTO, e => e);
(0, Chunk646769.c$)("appearance", "launchPadMode", e => null != e ? e : a.Ar.LAUNCH_PAD_DISABLED, e => e), (0, Chunk646769.c$)("appearance", "swipeRightToLeftMode", e => null != e ? e : a.kW.SWIPE_RIGHT_TO_LEFT_UNSET, e => e);
let e$ = (0, Chunk646769.c$)("userContent", "lastReceivedChangelogId", e => null != e ? e : "0", e => e),
  e0 = (0, Chunk646769.c$)("safetySettings", "ignoreProfileSpeedbumpDisabled", e => null != e && e, e => e),
  e1 = (0, Chunk646769.c$)("appearance", "uiDensity", e => e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : null != e ? e : a.NS.DEFAULT, e => e),
  e2 = (0, Chunk646769.c$)("inAppFeedbackSettings", "inAppFeedbackStates", e => (0, r.mapValues)(null != e ? e : {}, e => (0, r.mapValues)(e, e => (null == e ? true : e.value) != null ? Number(e.value) : true)), e => (0, r.mapValues)(e, e => (0, r.mapValues)(e, e => o.ol.create({
    value: null != e ? String(e) : true
  }))), {
    delay: Chunk355097.Sb.AUTOMATED
  }),
  e3 = (0, Chunk646769.c$)("textAndImages", "showMentionSuggestions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  })),
  e6 = (0, Chunk646769.c$)("textAndImages", "isCrossDmSearchEnabled", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o._t.create({
    value: e
  })),
  e4 = (0, Chunk646769.c$)("notifications", "enableDmReplyNudgeReminders", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o._t.create({
    value: e
  }))