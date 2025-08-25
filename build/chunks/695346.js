/** Chunk was on web.js **/
/** chunk id: 695346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A2: () => eq,
  AY: () => ei,
  CM: () => eo,
  CW: () => ex,
  Cr: () => em,
  DC: () => es,
  Ex: () => eM,
  Fg: () => ee,
  G6: () => e_,
  H1: () => j,
  I0: () => U,
  JG: () => eB,
  L1: () => eC,
  NA: () => eO,
  OW: () => eu,
  Ok: () => eg,
  Ou: () => Y,
  Pe: () => V,
  QK: () => eN,
  QZ: () => R,
  Qq: () => C,
  R$: () => y,
  RS: () => ey,
  R_: () => eU,
  Rt: () => eK,
  SE: () => eD,
  Sb: () => eA,
  Sh: () => eF,
  T4: () => L,
  UP: () => ed,
  Wp: () => eP,
  Xc: () => F,
  Xk: () => k,
  Xr: () => ef,
  YC: () => ez,
  YT: () => A,
  Yk: () => eR,
  _O: () => x,
  _j: () => eG,
  bh: () => ea,
  bm: () => ec,
  cC: () => I,
  cP: () => H,
  co: () => eh,
  d$: () => Z,
  d4: () => D,
  d8: () => N,
  dN: () => b,
  eR: () => v,
  eo: () => G,
  ev: () => et,
  fq: () => O,
  fv: () => P,
  fz: () => S,
  gR: () => Q,
  gw: () => eH,
  h2: () => J,
  hg: () => eY,
  iG: () => X,
  iH: () => ej,
  j7: () => eV,
  jU: () => en,
  kJ: () => q,
  kU: () => er,
  l4: () => eW,
  mX: () => z,
  nc: () => ev,
  no: () => ek,
  qF: () => M,
  rN: () => eI,
  tU: () => eE,
  uL: () => B,
  vF: () => T,
  x4: () => eb,
  xM: () => el,
  xq: () => $,
  zA: () => K,
  zY: () => eZ
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk381499 = require("./381499.js"),
  Chunk85746 = require("./85746.js"),
  Chunk291741 = require("./291741.js"),
  Chunk362352 = require("./362352.js"),
  Chunk262572 = require("./262572.js"),
  Chunk497060 = require("./497060.js"),
  Chunk560997 = require("./560997.js"),
  Chunk263937 = require("./263937.js"),
  Chunk973005 = require("./973005.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk611480 = require("./611480.js");
let b = (0, Chunk560997.Zc)("textAndImages", "useLegacyChatInput", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  y = (0, Chunk560997.Zc)("textAndImages", "useRichChatInput", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  O = (0, Chunk560997.Zc)("textAndImages", "includeStickersInAutocomplete", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  v = (0, Chunk560997.Zc)("textAndImages", "includeSoundmojiInAutocomplete", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  I = (0, Chunk560997.Zc)("textAndImages", "renderSpoilers", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : m.A2N.ON_CLICK
  }, e => o.Gm.create({
    value: e
  })),
  T = (0, Chunk560997.Zc)("textAndImages", "useThreadSidebar", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  }));
(0, Chunk560997.Zc)("notifications", "showInAppNotifications", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o.D5.create({
  value: e
}));
let S = (0, Chunk560997.Zc)("notifications", "reactionNotifications", e => null != e ? e : a.Ns.NOTIFICATIONS_ENABLED, e => e);
(0, Chunk560997.Zc)("notifications", "customStatusPushNotifications", e => null != e ? e : a.Oi.STATUS_PUSH_UNSET, e => e);
let A = (0, Chunk560997.Zc)("notifications", "gameActivityNotifications", e => null != e ? e : a.Tv.ACTIVITY_NOTIFICATIONS_UNSET, e => e),
  C = (0, Chunk560997.Zc)("notifications", "gameActivityExcludeSteamNotifications", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: !!e
  })),
  N = (0, Chunk560997.Zc)("notifications", "enableVoiceActivityNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: !!e
  })),
  R = (0, Chunk560997.Zc)("notifications", "quietMode", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: !!e
  })),
  P = (0, Chunk560997.Zc)("notifications", "focusModeExpiresAtMs", e => null != e ? e : "0", e => e),
  w = [],
  D = (0, Chunk560997.Zc)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : w, e => e),
  x = (0, Chunk560997.Zc)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : w, e => e),
  L = (0, Chunk560997.Zc)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : w, e => e),
  j = (0, Chunk560997.Zc)("textAndImages", "viewImageDescriptions", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  k = (0, Chunk560997.Zc)("textAndImages", "showCommandSuggestions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  M = (0, Chunk560997.Zc)("voiceAndVideo", "alwaysPreviewVideo", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  U = (0, Chunk560997.Zc)("voiceAndVideo", "disableStreamPreviews", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  G = (0, Chunk560997.Zc)("notifications", "notifyFriendsOnGoLive", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  B = "0",
  Z = (0, Chunk560997.Zc)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : B, e => e),
  F = (0, Chunk560997.Zc)("gameLibrary", "installShortcutDesktop", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  V = (0, Chunk560997.Zc)("gameLibrary", "installShortcutStartMenu", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  H = (0, Chunk560997.Zc)("privacy", "allowActivityPartyPrivacyFriends", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  Y = (0, Chunk560997.Zc)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  W = [],
  K = (0, Chunk560997.Zc)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : W, e => e),
  z = (0, Chunk560997.Zc)("privacy", "defaultMessageRequestRestricted", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  q = (0, Chunk560997.Zc)("privacy", "nonSpamRetrainingOptIn", e => null == e ? true : e.value, e => null == e ? true : o.D5.create({
    value: e
  }));
(0, Chunk560997.Zc)("privacy", "contactSyncEnabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o.D5.create({
  value: e
}));
let X = (0, Chunk560997.Zc)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
  Q = (0, Chunk560997.Zc)("privacy", "defaultGuildsRestrictedV2", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  J = (0, Chunk560997.Zc)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
(0, Chunk560997.Zc)("privacy", "friendDiscoveryFlags", e => {
  var t;
  return null != (t = null == e ? true : e.value) ? t : 0
}, e => o.yC.create({
  value: e
}));
let $ = (0, Chunk560997.TG)({
    baseSetting: (0, Chunk560997.Zc)("privacy", "friendSourceFlags", e => null == e ? true : e.value, e => o.yC.create({
      value: e
    })),
    isEligible: () => (0, Chunk497060.k6)("user_settings"),
    useIsEligible: () => (0, Chunk497060.kH)("user_settings"),
    ineligibleDefault: Chunk981631.HGf,
    eligibleDefault: () => Chunk981631.O8q
  }),
  ee = (0, Chunk560997.TG)({
    baseSetting: (0, Chunk560997.Zc)("debug", "rtcPanelShowVoiceStates", e => null == e ? true : e.value, e => o.D5.create({
      value: e
    })),
    isEligible: () => (0, Chunk262572.d)({
      location: "UserSettings",
      autoTrackExposure: false
    }).enableRTCPanelVoiceStatesByDefault,
    useIsEligible: () => (0, Chunk262572.t)({
      location: "UserSettings",
      autoTrackExposure: false
    }).enableRTCPanelVoiceStatesByDefault,
    ineligibleDefault: false,
    eligibleDefault: () => true,
    onUseDefault: () => {
      (0, Chunk262572.d)({
        location: "UserSettings"
      })
    }
  }),
  et = (0, Chunk560997.Zc)("textAndImages", "convertEmoticons", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  en = (0, Chunk560997.Zc)("textAndImages", "messageDisplayCompact", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  er = (0, Chunk560997.Zc)("voiceAndVideo", "soundboardSettings", e => e, e => e),
  ei = (0, Chunk560997.Zc)("voiceAndVideo", "soundmojiVolume", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : 100
  }, e => o.A8.create({
    value: e
  }));
(0, Chunk560997.Zc)("voiceAndVideo", "streamNotificationsEnabled", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o.D5.create({
  value: e
}));
let ea = (0, Chunk560997.Zc)("privacy", "dropsOptedOut", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o.D5.create({
  value: e
}));
(0, Chunk560997.Zc)("privacy", "quests3PDataOptedOut", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o.D5.create({
  value: e
})), (0, Chunk560997.Zc)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o.D5.create({
  value: e
}));
let eo = (0, Chunk560997.TG)({
    baseSetting: (0, Chunk560997.Zc)("voiceAndVideo", "afkTimeout", e => null == e ? true : e.value, e => o.yC.create({
      value: e
    })),
    isEligible: () => (0, Chunk291741.mO)("user_settings"),
    useIsEligible: () => (0, Chunk291741.Mk)("user_settings"),
    ineligibleDefault: 600,
    eligibleDefault: () => (0, Chunk291741.fD)("user_settings"),
    onUseDefault: () => (0, Chunk291741.Dl)("user_settings")
  }),
  es = (0, Chunk560997.Zc)("textAndImages", "viewNsfwGuilds", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  el = (0, Chunk560997.Zc)("textAndImages", "viewNsfwCommands", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  }));
(0, Chunk560997.Zc)("privacy", "detectPlatformAccounts", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o.D5.create({
  value: e
}));
let ec = (0, Chunk560997.Zc)("gameLibrary", "disableGamesTab", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  eu = (0, Chunk560997.Zc)("textAndImages", "enableTtsCommand", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  ed = (0, Chunk560997.Zc)("textAndImages", "explicitContentFilter", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : p.TI.NON_FRIENDS
  }, e => o.yC.create({
    value: e
  }));
(0, Chunk560997.Zc)("textAndImages", "dmSpamFilter", e => {
  var t;
  return null != (t = null == e ? true : e.value) ? t : p.fQ.NON_FRIENDS
}, e => o.yC.create({
  value: e
}));
let ef = (0, Chunk560997.Zc)("textAndImages", "dmSpamFilterV2", e => null != e ? e : a.Xr.DEFAULT_UNSET, e => e),
  e_ = (0, Chunk560997.Zc)("status", "showCurrentGame", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  }));
(0, Chunk560997.Zc)("privacy", "recentGamesEnabled", e => {
  var t;
  return null == (t = null == e ? true : e.value) || t
}, e => o.D5.create({
  value: e
}));
let ep = new Set(Object.values(Chunk981631.Skl)),
  eh = (0, Chunk560997.Zc)("status", "status", e => null != e && ep.has(e.value) ? e.value : m.Skl.UNKNOWN, e => o.Gm.create({
    value: e
  })),
  em = (0, Chunk560997.Zc)("status", "statusExpiresAtMs", e => null != e ? e : "0", e => e),
  eg = (0, Chunk560997.Zc)("status", "customStatus", e => e, e => e),
  eE = (0, Chunk560997.Zc)("clips", "allowVoiceRecording", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  eb = (0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "inlineAttachmentMedia", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "inlineAttachmentMedia"),
  ey = (0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "inlineEmbedMedia", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "inlineEmbedMedia"),
  eO = (0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "renderEmbeds", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "renderEmbeds"),
  ev = (0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "renderReactions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "renderReactions");
(0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "defaultReactionEmoji", e => {
  let {
    emojiId: t,
    emojiName: n
  } = null != e ? e : {};
  return {
    emojiId: null == t ? true : t.value,
    emojiName: null == n ? true : n.value
  }
}, e => {
  let {
    emojiId: t,
    emojiName: n
  } = e;
  return {
    emojiId: o.wA.create({
      value: t
    }),
    emojiName: o.Gm.create({
      value: n
    })
  }
}), "text", "defaultReactionEmoji");
let eI = (0, Chunk560997.Zc)("localization", "timezoneOffset", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : null
  }, e => o.T4.create({
    value: null != e ? e : 0
  })),
  eT = new Set([Chunk969943.fx.AUTO, Chunk85746.l.COZY, Chunk85746.l.COMPACT]);
(0, Chunk560997.Zc)("appearance", "channelListLayout", e => null != e && eT.has(e.value) ? e.value : s.l.COZY, e => o.Gm.create({
  value: e
}));
let eS = new Set([Chunk85746.Z.ALL, Chunk85746.Z.UNREADS, Chunk85746.Z.NONE]);
(0, Chunk560997.Zc)("appearance", "messagePreviews", e => null != e && eS.has(e.value) ? e.value : s.Z.ALL, e => o.Gm.create({
  value: e
}));
let eA = (0, Chunk560997.KM)((0, Chunk560997.Zc)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
  eC = (0, Chunk560997.Zc)("appearance", "clientThemeSettings", e => {
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
    backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.yC.create({
      value: e.backgroundGradientPresetId
    }) : true,
    customUserThemeSettings: null != e.customUserThemeSettings ? {
      colors: e.customUserThemeSettings.colors,
      gradientColorStops: e.customUserThemeSettings.gradientColorStops,
      gradientAngle: e.customUserThemeSettings.gradientAngle,
      baseMix: e.customUserThemeSettings.baseMix
    } : true
  })),
  eN = (0, Chunk560997.R2)((0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "gifAutoPlay", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "gifAutoPlay"), "gifAutoPlay", () => {
    var e;
    return null == (e = Chunk263937.Z.getOverride("gifAutoPlay")) ? true : module.value
  }, () => (0, Chunk442837.e7)([Chunk263937.Z], () => {
    var e;
    return null == (e = Chunk263937.Z.getOverride("gifAutoPlay")) ? true : module.value
  })),
  eR = (0, Chunk560997.R2)((0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "animateEmoji", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "animateEmoji"), "animateEmoji", () => {
    var e;
    return null == (e = Chunk263937.Z.getOverride("animateEmoji")) ? true : module.value
  }, () => (0, Chunk442837.e7)([Chunk263937.Z], () => {
    var e;
    return null == (e = Chunk263937.Z.getOverride("animateEmoji")) ? true : module.value
  })),
  eP = (0, Chunk560997.R2)((0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "animateStickers", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : E.yr.ALWAYS_ANIMATE
  }, e => o.yC.create({
    value: e
  })), "text", "animateStickers"), "animateStickers", () => {
    var e;
    return null == (e = Chunk263937.Z.getOverride("animateStickers")) ? true : module.value
  }, () => (0, Chunk442837.e7)([Chunk263937.Z], () => {
    var e;
    return null == (e = Chunk263937.Z.getOverride("animateStickers")) ? true : module.value
  })),
  ew = [],
  eD = (0, Chunk560997.Zc)("privacy", "activityRestrictedGuildIds", e => null != e ? e : ew, e => e),
  ex = (0, Chunk560997.Zc)("privacy", "activityRestrictedGuildIds", e => null != e ? e : ew, e => e, Chunk526761.fy.FREQUENT_USER_ACTION),
  eL = [],
  ej = (0, Chunk560997.Zc)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : eL, e => e);
(0, Chunk560997.TG)({
  baseSetting: (0, Chunk560997.Zc)("privacy", "defaultGuildsActivityRestricted", e => e, e => null != e ? e : a.E5.OFF),
  isEligible: () => (0, Chunk362352.o0)("user_settings"),
  useIsEligible: () => (0, Chunk362352.Yd)("user_settings"),
  ineligibleDefault: Chunk524437.E5.OFF,
  eligibleDefault: () => Chunk524437.E5.ON_FOR_LARGE_GUILDS
});
let ek = (0, Chunk560997.TG)({
    baseSetting: (0, Chunk560997.Zc)("privacy", "defaultGuildsActivityRestrictedV2", e => e, e => null != e ? e : a.GI.ACTIVITY_STATUS_OFF),
    isEligible: () => (0, Chunk362352.o0)("user_settings"),
    useIsEligible: () => (0, Chunk362352.Yd)("user_settings"),
    ineligibleDefault: Chunk524437.GI.ACTIVITY_STATUS_OFF,
    eligibleDefault: () => Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS
  }),
  eM = (0, Chunk560997.Zc)("privacy", "familyCenterEnabledV2", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  eU = (0, Chunk560997.Zc)("privacy", "hideLegacyUsername", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  eG = (0, Chunk560997.Zc)("privacy", "allowGameFriendDmsInDiscord", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  eB = (0, Chunk560997.Zc)("privacy", "slayerSdkReceiveDmsInGame", e => null != e ? e : a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET, e => e),
  eZ = (0, Chunk560997.Zc)("ads", "alwaysDeliver", e => null != e && e, e => e),
  eF = (0, Chunk560997.Zc)("textAndImages", "explicitContentSettings", e => {
    let {
      explicitContentGuilds: t,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: r
    } = null != e ? e : {};
    return {
      explicitContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      explicitContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      explicitContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
    }
  }, e => {
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
  }),
  eV = (0, Chunk560997.Zc)("textAndImages", "goreContentSettings", e => {
    let {
      goreContentGuilds: t,
      goreContentFriendDm: n,
      goreContentNonFriendDm: r
    } = null != e ? e : {};
    return {
      goreContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      goreContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      goreContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
    }
  }, e => {
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
  }),
  eH = (0, Chunk560997.Zc)("textAndImages", "keywordFilterSettings", e => {
    let {
      profanity: t,
      sexualContent: n,
      slurs: r
    } = null != e ? e : {};
    return {
      profanity: null == t ? true : t.value,
      sexualContent: null == n ? true : n.value,
      slurs: null == r ? true : r.value
    }
  }, e => {
    let {
      profanity: t,
      sexualContent: n,
      slurs: r
    } = e;
    return {
      profanity: o.D5.create({
        value: t
      }),
      sexualContent: o.D5.create({
        value: n
      }),
      slurs: o.D5.create({
        value: r
      })
    }
  });
(0, Chunk560997.Zc)("appearance", "searchResultExactCountEnabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o.D5.create({
  value: e
})), (0, Chunk560997.Zc)("appearance", "happeningNowCardsDisabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o.D5.create({
  value: e
}));
let eY = (0, Chunk560997.Zc)("appearance", "timestampHourCycle", e => null != e ? e : a.hg.AUTO, e => e);
(0, Chunk560997.Zc)("appearance", "launchPadMode", e => null != e ? e : a.l1.LAUNCH_PAD_DISABLED, e => e), (0, Chunk560997.Zc)("appearance", "swipeRightToLeftMode", e => null != e ? e : a.n9.SWIPE_RIGHT_TO_LEFT_UNSET, e => e);
let eW = (0, Chunk560997.Zc)("userContent", "lastReceivedChangelogId", e => null != e ? e : "0", e => e),
  eK = (0, Chunk560997.Zc)("safetySettings", "ignoreProfileSpeedbumpDisabled", e => null != e && e, e => e),
  ez = (0, Chunk560997.Zc)("appearance", "uiDensity", e => e === a.Pi.UNSET_UI_DENSITY ? a.Pi.DEFAULT : null != e ? e : a.Pi.DEFAULT, e => e),
  eq = (0, Chunk560997.Zc)("inAppFeedbackSettings", "inAppFeedbackStates", e => (0, r.mapValues)(null != e ? e : {}, e => (0, r.mapValues)(e, e => (null == e ? true : e.value) != null ? Number(e.value) : true)), e => (0, r.mapValues)(e, e => (0, r.mapValues)(e, e => o.wA.create({
    value: null != e ? String(e) : true
  }))), Chunk526761.fy.AUTOMATED)