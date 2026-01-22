/** Chunk was on web.js **/
/** chunk id: 253932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $s: () => ee,
  AB: () => ew,
  Bh: () => I,
  CY: () => ey,
  D_: () => E,
  FA: () => et,
  G2: () => eA,
  H1: () => el,
  HO: () => es,
  HZ: () => ez,
  Hu: () => e5,
  Iv: () => eq,
  JG: () => eU,
  JI: () => eN,
  JV: () => N,
  Jr: () => D,
  Kg: () => ed,
  ML: () => y,
  NF: () => eQ,
  NO: () => P,
  NR: () => T,
  PZ: () => e0,
  Pf: () => W,
  Pw: () => eG,
  Q$: () => ev,
  Q_: () => eD,
  Qe: () => ef,
  Qr: () => R,
  S0: () => eM,
  SI: () => b,
  SY: () => v,
  Sf: () => ej,
  T3: () => w,
  TA: () => eK,
  UM: () => z,
  Vd: () => eZ,
  Vv: () => eX,
  WY: () => Q,
  X6: () => eS,
  Xi: () => e3,
  YX: () => Z,
  Yh: () => eo,
  Yt: () => e6,
  Zk: () => eW,
  Zp: () => S,
  Zr: () => X,
  Zt: () => $,
  _3: () => U,
  _6: () => eO,
  _8: () => e$,
  _Z: () => eB,
  _z: () => k,
  b0: () => M,
  bm: () => G,
  cU: () => eu,
  cj: () => eh,
  dG: () => ea,
  dm: () => eH,
  e: () => K,
  eK: () => O,
  eh: () => ex,
  gs: () => A,
  hD: () => eI,
  hH: () => ei,
  he: () => em,
  iM: () => L,
  j0: () => e2,
  j7: () => er,
  jP: () => eb,
  jW: () => eC,
  kt: () => eL,
  l_: () => ep,
  m$: () => eY,
  n6: () => J,
  ng: () => e4,
  ns: () => H,
  on: () => e_,
  oz: () => C,
  pE: () => eF,
  pK: () => e1,
  qN: () => eJ,
  rs: () => eT,
  tP: () => j,
  tz: () => eg,
  uB: () => Y,
  uh: () => V,
  vL: () => en,
  vf: () => ec,
  wT: () => eP,
  wv: () => F,
  xM: () => B
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk406935 = require("./406935.js"),
  Chunk52133 = require("./52133.js"),
  Chunk461012 = require("./461012.js"),
  Chunk527269 = require("./527269.js"),
  Chunk809976 = require("./809976.js"),
  Chunk646769 = require("./646769.js"),
  Chunk397438 = require("./397438.js"),
  Chunk656402 = require("./656402.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js"),
  Chunk815968 = require("./815968.js"),
  Chunk823894 = require("./823894.js");
let E = (0, Chunk646769.c$)("textAndImages", "useLegacyChatInput", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  b = (0, Chunk646769.c$)("textAndImages", "useRichChatInput", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  y = (0, Chunk646769.c$)("textAndImages", "includeStickersInAutocomplete", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  O = (0, Chunk646769.c$)("textAndImages", "includeSoundmojiInAutocomplete", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  A = (0, Chunk646769.c$)("textAndImages", "renderSpoilers", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : h.P6Q.ON_CLICK
  }, e => s.hU.create({
    value: e
  })),
  v = (0, Chunk646769.c$)("textAndImages", "useThreadSidebar", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  }));
(0, Chunk646769.c$)("notifications", "showInAppNotifications", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => s._t.create({
  value: e
}));
let S = (0, Chunk646769.c$)("notifications", "reactionNotifications", e => null != e ? e : a.Tz.NOTIFICATIONS_ENABLED, e => e);
(0, Chunk646769.c$)("notifications", "customStatusPushNotifications", e => null != e ? e : a.DQ.STATUS_PUSH_UNSET, e => e);
let I = (0, Chunk646769.c$)("notifications", "enableVoiceActivityNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: !!e
  })),
  T = (0, Chunk646769.c$)("notifications", "enableFriendOnlineNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: !!e
  })),
  C = (0, Chunk646769.c$)("notifications", "enableFriendAnniversaryNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: !!e
  })),
  N = (0, Chunk646769.c$)("notifications", "enableGameUpdateNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: !!e
  })),
  R = (0, Chunk646769.c$)("notifications", "enableServerTrendingNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: !!e
  })),
  w = (0, Chunk646769.c$)("notifications", "enableProfileUpdatesNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: !!e
  })),
  P = (0, Chunk646769.c$)("notifications", "quietMode", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: !!e
  })),
  D = (0, Chunk646769.c$)("notifications", "focusModeExpiresAtMs", e => null != e ? e : "0", e => e),
  x = [],
  L = (0, Chunk646769.c$)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : x, e => e),
  j = (0, Chunk646769.c$)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : x, e => e),
  M = (0, Chunk646769.c$)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : x, e => e),
  k = (0, Chunk646769.c$)("textAndImages", "viewImageDescriptions", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  U = (0, Chunk646769.c$)("textAndImages", "showCommandSuggestions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  G = (0, Chunk646769.c$)("voiceAndVideo", "alwaysPreviewVideo", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  V = (0, Chunk646769.c$)("voiceAndVideo", "disableStreamPreviews", e => null == e ? true : e.value, e => s._t.create({
    value: e
  })),
  F = (0, Chunk646769.c$)("notifications", "notifyFriendsOnGoLive", e => null == e ? true : e.value, e => s._t.create({
    value: e
  })),
  B = "0",
  H = (0, Chunk646769.c$)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : B, e => e),
  Y = (0, Chunk646769.c$)("gameLibrary", "installShortcutDesktop", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  W = (0, Chunk646769.c$)("gameLibrary", "installShortcutStartMenu", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  K = (0, Chunk646769.c$)("privacy", "allowActivityPartyPrivacyFriends", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  z = (0, Chunk646769.c$)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  q = [],
  X = (0, Chunk646769.c$)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : q, e => e),
  Z = (0, Chunk646769.c$)("privacy", "defaultMessageRequestRestricted", e => null == e ? true : e.value, e => s._t.create({
    value: e
  })),
  Q = (0, Chunk646769.c$)("privacy", "nonSpamRetrainingOptIn", e => null == e ? true : e.value, e => null == e ? true : s._t.create({
    value: e
  }));
(0, Chunk646769.c$)("privacy", "contactSyncEnabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => s._t.create({
  value: e
}));
let $ = (0, Chunk646769.c$)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
  J = (0, Chunk646769.c$)("privacy", "defaultGuildsRestrictedV2", e => null == e ? true : e.value, e => s._t.create({
    value: e
  })),
  ee = (0, Chunk646769.c$)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
(0, Chunk646769.c$)("privacy", "friendDiscoveryFlags", e => {
  var t;
  return null != (t = null == e ? true : e.value) ? t : 0
}, e => s.ZQ.create({
  value: e
}));
let et = (0, Chunk646769.c$)("privacy", "friendSourceFlags", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : h.yKI
  }, e => s.ZQ.create({
    value: e
  })),
  en = (0, Chunk646769.c$)("debug", "rtcPanelShowVoiceStates", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  er = (0, Chunk646769.c$)("textAndImages", "convertEmoticons", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  ei = (0, Chunk646769.c$)("textAndImages", "messageDisplayCompact", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  ea = (0, Chunk646769.c$)("voiceAndVideo", "soundboardSettings", e => e, e => e),
  es = (0, Chunk646769.c$)("voiceAndVideo", "soundmojiVolume", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : 100
  }, e => s.uN.create({
    value: e
  })),
  eo = (0, Chunk646769.c$)("voiceAndVideo", "streamNotificationsEnabled", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  el = (0, Chunk646769.c$)("privacy", "dropsOptedOut", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  ec = (0, Chunk646769.c$)("privacy", "quests3PDataOptedOut", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  }));
(0, Chunk646769.c$)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => s._t.create({
  value: e
}));
let eu = (0, Chunk646769.c6)({
    baseSetting: (0, Chunk646769.c$)("voiceAndVideo", "afkTimeout", e => null == e ? true : e.value, e => s.ZQ.create({
      value: e
    })),
    isEligible: () => (0, c.Do)("user_settings"),
    useIsEligible: () => (0, c.cv)("user_settings"),
    ineligibleDefault: 600,
    eligibleDefault: () => (0, c.MM)("user_settings"),
    onUseDefault: () => (0, c.c9)("user_settings")
  }),
  ed = (0, Chunk646769.c$)("textAndImages", "viewNsfwGuilds", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  ef = (0, Chunk646769.c$)("textAndImages", "viewNsfwCommands", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  }));
(0, Chunk646769.c$)("privacy", "detectPlatformAccounts", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => s._t.create({
  value: e
}));
let ep = (0, Chunk646769.c$)("gameLibrary", "disableGamesTab", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  e_ = (0, Chunk646769.c$)("textAndImages", "enableTtsCommand", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  eh = (0, Chunk646769.c$)("textAndImages", "explicitContentFilter", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : p.Je.NON_FRIENDS
  }, e => s.ZQ.create({
    value: e
  }));
(0, Chunk646769.c$)("textAndImages", "dmSpamFilter", e => {
  var t;
  return null != (t = null == e ? true : e.value) ? t : p.uH.NON_FRIENDS
}, e => s.ZQ.create({
  value: e
}));
let em = (0, Chunk646769.c$)("textAndImages", "dmSpamFilterV2", e => null != e ? e : a.he.DEFAULT_UNSET, e => e),
  eg = (0, Chunk646769.c$)("status", "showCurrentGame", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  }));
(0, Chunk646769.c$)("privacy", "recentGamesEnabled", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => s._t.create({
  value: e
}));
let eE = new Set(Object.values(Chunk652215.clD)),
  eb = (0, Chunk646769.c$)("status", "status", e => null != e && eE.has(e.value) ? e.value : h.clD.UNKNOWN, e => s.hU.create({
    value: e
  })),
  ey = (0, Chunk646769.c$)("status", "statusExpiresAtMs", e => null != e ? e : "0", e => e),
  eO = (0, Chunk646769.c$)("status", "statusCreatedAtMs", e => e, e => e),
  eA = (0, Chunk646769.c$)("status", "customStatus", e => e, e => e),
  ev = (0, Chunk646769.c$)("clips", "allowVoiceRecording", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  eS = (0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "inlineAttachmentMedia", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })), "text", "inlineAttachmentMedia"),
  eI = (0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "inlineEmbedMedia", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })), "text", "inlineEmbedMedia"),
  eT = (0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "renderEmbeds", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })), "text", "renderEmbeds"),
  eC = (0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "renderReactions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
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
    emojiId: s.ol.create({
      value: t
    }),
    emojiName: s.hU.create({
      value: n
    }),
    animated: s._t.create({
      value: r
    }),
    disableDoubleTap: s._t.create({
      value: i
    })
  }
}, {
  comparator: Chunk52133.A
}), "text", "defaultReactionEmoji");
let eN = (0, Chunk646769.c$)("localization", "timezoneOffset", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : null
  }, e => s.as.create({
    value: null != e ? e : 0
  })),
  eR = new Set([Chunk815968.YP.AUTO, Chunk461012.b.COZY, Chunk461012.b.COMPACT]);
(0, Chunk646769.c$)("appearance", "channelListLayout", e => null != e && eR.has(e.value) ? e.value : l.b.COZY, e => s.hU.create({
  value: e
}));
let ew = new Set([Chunk461012.P.ALL, Chunk461012.P.UNREADS, Chunk461012.P.NONE]),
  eP = (0, Chunk646769.c$)("appearance", "messagePreviews", e => null != e && ew.has(e.value) ? e.value : l.P.ALL, e => s.hU.create({
    value: e
  })),
  eD = (0, Chunk646769.Mt)((0, Chunk646769.c$)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
  ex = (0, Chunk646769.c$)("appearance", "clientThemeSettings", e => {
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
    backgroundGradientPresetId: null != e.backgroundGradientPresetId ? s.ZQ.create({
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
  eL = (0, Chunk646769.Tg)((0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "gifAutoPlay", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
    var e;
    return null == (e = f.A.getOverride("gifAutoPlay")) ? true : e.value
  }, () => (0, i.bG)([f.A], () => {
    var e;
    return null == (e = f.A.getOverride("gifAutoPlay")) ? true : e.value
  })),
  ej = (0, Chunk646769.Tg)((0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "animateEmoji", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })), "text", "animateEmoji"), "animateEmoji", () => {
    var e;
    return null == (e = f.A.getOverride("animateEmoji")) ? true : e.value
  }, () => (0, i.bG)([f.A], () => {
    var e;
    return null == (e = f.A.getOverride("animateEmoji")) ? true : e.value
  })),
  eM = (0, Chunk646769.Tg)((0, Chunk646769.Mt)((0, Chunk646769.c$)("textAndImages", "animateStickers", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : g.BJ.ALWAYS_ANIMATE
  }, e => s.ZQ.create({
    value: e
  })), "text", "animateStickers"), "animateStickers", () => {
    var e;
    return null == (e = f.A.getOverride("animateStickers")) ? true : e.value
  }, () => (0, i.bG)([f.A], () => {
    var e;
    return null == (e = f.A.getOverride("animateStickers")) ? true : e.value
  })),
  ek = [],
  eU = (0, Chunk646769.c$)("privacy", "activityRestrictedGuildIds", e => null != e ? e : ek, e => e),
  eG = (0, Chunk646769.c$)("privacy", "activityRestrictedGuildIds", e => null != e ? e : ek, e => e, {
    delay: Chunk355097.Sb.FREQUENT_USER_ACTION
  }),
  eV = [],
  eF = (0, Chunk646769.c$)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : eV, e => e);
(0, Chunk646769.c6)({
  baseSetting: (0, Chunk646769.c$)("privacy", "defaultGuildsActivityRestricted", e => e, e => null != e ? e : a.AN.OFF),
  isEligible: () => (0, u.oK)("user_settings"),
  useIsEligible: () => (0, u.ty)("user_settings"),
  ineligibleDefault: Chunk873298.AN.OFF,
  eligibleDefault: () => a.AN.ON_FOR_LARGE_GUILDS
});
let eB = (0, Chunk646769.c6)({
    baseSetting: (0, Chunk646769.c$)("privacy", "defaultGuildsActivityRestrictedV2", e => e === a.Qd.ACTIVITY_STATUS_UNSET ? null : e, e => null != e ? e : a.Qd.ACTIVITY_STATUS_OFF),
    isEligible: () => (0, u.oK)("user_settings"),
    useIsEligible: () => (0, u.ty)("user_settings"),
    ineligibleDefault: Chunk873298.Qd.ACTIVITY_STATUS_OFF,
    eligibleDefault: () => a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS
  }),
  eH = (0, Chunk646769.c$)("privacy", "familyCenterEnabledV2", e => null == e ? true : e.value, e => s._t.create({
    value: e
  })),
  eY = (0, Chunk646769.c$)("privacy", "hideLegacyUsername", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  })),
  eW = (0, Chunk646769.c$)("privacy", "allowGameFriendDmsInDiscord", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  eK = (0, Chunk646769.c$)("privacy", "slayerSdkReceiveDmsInGame", e => null != e ? e : a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET, e => e),
  ez = (0, Chunk646769.c$)("ads", "alwaysDeliver", e => null != e && e, e => e),
  eq = e => {
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
  eX = e => {
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
  eZ = (0, Chunk646769.c$)("textAndImages", "explicitContentSettings", eq, eX),
  eQ = e => {
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
  e$ = e => {
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
  eJ = (0, Chunk646769.c$)("textAndImages", "goreContentSettings", eQ, e$);
(0, Chunk646769.c$)("appearance", "searchResultExactCountEnabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => s._t.create({
  value: e
})), (0, Chunk646769.c$)("appearance", "happeningNowCardsDisabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => s._t.create({
  value: e
}));
let e0 = (0, Chunk646769.c$)("appearance", "timestampHourCycle", e => null != e ? e : a.PZ.AUTO, e => e);
(0, Chunk646769.c$)("appearance", "launchPadMode", e => null != e ? e : a.Ar.LAUNCH_PAD_DISABLED, e => e), (0, Chunk646769.c$)("appearance", "swipeRightToLeftMode", e => null != e ? e : a.kW.SWIPE_RIGHT_TO_LEFT_UNSET, e => e);
let e1 = (0, Chunk646769.c$)("userContent", "lastReceivedChangelogId", e => null != e ? e : "0", e => e),
  e2 = (0, Chunk646769.c$)("safetySettings", "ignoreProfileSpeedbumpDisabled", e => null != e && e, e => e),
  e3 = (0, Chunk646769.c$)("appearance", "uiDensity", e => e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : null != e ? e : a.NS.DEFAULT, e => e),
  e6 = (0, Chunk646769.c$)("inAppFeedbackSettings", "inAppFeedbackStates", e => (0, r.mapValues)(null != e ? e : {}, e => (0, r.mapValues)(e, e => (null == e ? true : e.value) != null ? Number(e.value) : true)), e => (0, r.mapValues)(e, e => (0, r.mapValues)(e, e => s.ol.create({
    value: null != e ? String(e) : true
  }))), {
    delay: Chunk355097.Sb.AUTOMATED
  }),
  e4 = (0, Chunk646769.c$)("textAndImages", "showMentionSuggestions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => s._t.create({
    value: e
  })),
  e5 = (0, Chunk646769.c$)("textAndImages", "isCrossDmSearchEnabled", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => s._t.create({
    value: e
  }))