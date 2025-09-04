/** Chunk was on web.js **/
/** chunk id: 695346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A2: () => e0,
  AY: () => en,
  CM: () => eo,
  CW: () => eL,
  Cr: () => em,
  DC: () => es,
  Eo: () => eW,
  Ex: () => eU,
  Fg: () => J,
  G6: () => e_,
  H1: () => x,
  I0: () => k,
  JG: () => eZ,
  JN: () => er,
  JT: () => ea,
  L1: () => eN,
  NA: () => ev,
  OW: () => eu,
  Ok: () => eE,
  Ou: () => V,
  P4: () => eg,
  Pe: () => Z,
  QK: () => eR,
  QZ: () => C,
  R$: () => y,
  RS: () => eO,
  R_: () => eG,
  Rt: () => eJ,
  SE: () => ex,
  Sb: () => eC,
  Sh: () => eY,
  T4: () => D,
  UP: () => ed,
  Wp: () => ew,
  Xc: () => B,
  Xk: () => L,
  Xr: () => ef,
  YC: () => e$,
  Yk: () => eP,
  _O: () => w,
  _j: () => eB,
  bh: () => ei,
  bm: () => ec,
  cC: () => I,
  cP: () => F,
  co: () => eh,
  d$: () => G,
  d4: () => P,
  d8: () => A,
  dN: () => b,
  eR: () => v,
  eo: () => M,
  ev: () => $,
  fq: () => O,
  fv: () => N,
  fz: () => S,
  gR: () => q,
  gw: () => eq,
  h2: () => X,
  hg: () => eX,
  iG: () => z,
  iH: () => ek,
  j7: () => ez,
  jU: () => ee,
  kJ: () => K,
  kU: () => et,
  l4: () => eQ,
  lk: () => eV,
  mX: () => W,
  nc: () => eI,
  nh: () => eH,
  no: () => eM,
  qF: () => j,
  rN: () => eT,
  tU: () => eb,
  uL: () => U,
  uh: () => eK,
  vF: () => T,
  x4: () => ey,
  xM: () => el,
  xq: () => Q,
  zA: () => Y,
  zY: () => eF
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
let A = (0, Chunk560997.Zc)("notifications", "enableVoiceActivityNotifications", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: !!e
  })),
  C = (0, Chunk560997.Zc)("notifications", "quietMode", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: !!e
  })),
  N = (0, Chunk560997.Zc)("notifications", "focusModeExpiresAtMs", e => null != e ? e : "0", e => e),
  R = [],
  P = (0, Chunk560997.Zc)("textAndImages", "emojiPickerCollapsedSections", e => null != e ? e : R, e => e),
  w = (0, Chunk560997.Zc)("textAndImages", "stickerPickerCollapsedSections", e => null != e ? e : R, e => e),
  D = (0, Chunk560997.Zc)("textAndImages", "soundboardPickerCollapsedSections", e => null != e ? e : R, e => e),
  x = (0, Chunk560997.Zc)("textAndImages", "viewImageDescriptions", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  L = (0, Chunk560997.Zc)("textAndImages", "showCommandSuggestions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  j = (0, Chunk560997.Zc)("voiceAndVideo", "alwaysPreviewVideo", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  k = (0, Chunk560997.Zc)("voiceAndVideo", "disableStreamPreviews", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  M = (0, Chunk560997.Zc)("notifications", "notifyFriendsOnGoLive", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  U = "0",
  G = (0, Chunk560997.Zc)("notifications", "notificationCenterAckedBeforeId", e => null != e ? e : U, e => e),
  B = (0, Chunk560997.Zc)("gameLibrary", "installShortcutDesktop", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  Z = (0, Chunk560997.Zc)("gameLibrary", "installShortcutStartMenu", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  F = (0, Chunk560997.Zc)("privacy", "allowActivityPartyPrivacyFriends", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  V = (0, Chunk560997.Zc)("privacy", "allowActivityPartyPrivacyVoiceChannel", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  H = [],
  Y = (0, Chunk560997.Zc)("privacy", "messageRequestRestrictedGuildIds", e => null != e ? e : H, e => e),
  W = (0, Chunk560997.Zc)("privacy", "defaultMessageRequestRestricted", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  K = (0, Chunk560997.Zc)("privacy", "nonSpamRetrainingOptIn", e => null == e ? true : e.value, e => null == e ? true : o.D5.create({
    value: e
  }));
(0, Chunk560997.Zc)("privacy", "contactSyncEnabled", e => {
  var t;
  return null != (t = null == e ? true : e.value) && t
}, e => o.D5.create({
  value: e
}));
let z = (0, Chunk560997.Zc)("privacy", "defaultGuildsRestricted", e => null != e && e, e => e),
  q = (0, Chunk560997.Zc)("privacy", "defaultGuildsRestrictedV2", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  X = (0, Chunk560997.Zc)("privacy", "restrictedGuildIds", e => null != e ? e : [], e => e);
(0, Chunk560997.Zc)("privacy", "friendDiscoveryFlags", e => {
  var t;
  return null != (t = null == e ? true : e.value) ? t : 0
}, e => o.yC.create({
  value: e
}));
let Q = (0, Chunk560997.TG)({
    baseSetting: (0, Chunk560997.Zc)("privacy", "friendSourceFlags", e => null == e ? true : e.value, e => o.yC.create({
      value: e
    })),
    isEligible: () => (0, Chunk497060.k6)("user_settings"),
    useIsEligible: () => (0, Chunk497060.kH)("user_settings"),
    ineligibleDefault: Chunk981631.HGf,
    eligibleDefault: () => Chunk981631.O8q
  }),
  J = (0, Chunk560997.TG)({
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
  $ = (0, Chunk560997.Zc)("textAndImages", "convertEmoticons", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  ee = (0, Chunk560997.Zc)("textAndImages", "messageDisplayCompact", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  et = (0, Chunk560997.Zc)("voiceAndVideo", "soundboardSettings", e => e, e => e),
  en = (0, Chunk560997.Zc)("voiceAndVideo", "soundmojiVolume", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : 100
  }, e => o.A8.create({
    value: e
  })),
  er = (0, Chunk560997.Zc)("voiceAndVideo", "streamNotificationsEnabled", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  ei = (0, Chunk560997.Zc)("privacy", "dropsOptedOut", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  ea = (0, Chunk560997.Zc)("privacy", "quests3PDataOptedOut", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  }));
(0, Chunk560997.Zc)("voiceAndVideo", "nativePhoneIntegrationEnabled", e => {
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
  eg = (0, Chunk560997.Zc)("status", "statusCreatedAtMs", e => e, e => e),
  eE = (0, Chunk560997.Zc)("status", "customStatus", e => e, e => e),
  eb = (0, Chunk560997.Zc)("clips", "allowVoiceRecording", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  ey = (0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "inlineAttachmentMedia", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "inlineAttachmentMedia"),
  eO = (0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "inlineEmbedMedia", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "inlineEmbedMedia"),
  ev = (0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "renderEmbeds", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "renderEmbeds"),
  eI = (0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "renderReactions", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })), "text", "renderReactions");
(0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "defaultReactionEmoji", e => {
  let {
    emojiId: t,
    emojiName: n,
    animated: r
  } = null != e ? e : {};
  return {
    emojiId: null == t ? true : t.value,
    emojiName: null == n ? true : n.value,
    animated: null == r ? true : r.value
  }
}, e => {
  let {
    emojiId: t,
    emojiName: n,
    animated: r
  } = e;
  return {
    emojiId: o.wA.create({
      value: t
    }),
    emojiName: o.Gm.create({
      value: n
    }),
    animated: o.D5.create({
      value: r
    })
  }
}), "text", "defaultReactionEmoji");
let eT = (0, Chunk560997.Zc)("localization", "timezoneOffset", e => {
    var t;
    return null != (t = null == e ? true : e.value) ? t : null
  }, e => o.T4.create({
    value: null != e ? e : 0
  })),
  eS = new Set([Chunk969943.fx.AUTO, Chunk85746.l.COZY, Chunk85746.l.COMPACT]);
(0, Chunk560997.Zc)("appearance", "channelListLayout", e => null != e && eS.has(e.value) ? e.value : s.l.COZY, e => o.Gm.create({
  value: e
}));
let eA = new Set([Chunk85746.Z.ALL, Chunk85746.Z.UNREADS, Chunk85746.Z.NONE]);
(0, Chunk560997.Zc)("appearance", "messagePreviews", e => null != e && eA.has(e.value) ? e.value : s.Z.ALL, e => o.Gm.create({
  value: e
}));
let eC = (0, Chunk560997.KM)((0, Chunk560997.Zc)("appearance", "developerMode", e => null != e && e, e => e), "appearance", "developerMode"),
  eN = (0, Chunk560997.Zc)("appearance", "clientThemeSettings", e => {
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
  eR = (0, Chunk560997.R2)((0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "gifAutoPlay", e => {
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
  eP = (0, Chunk560997.R2)((0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "animateEmoji", e => {
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
  ew = (0, Chunk560997.R2)((0, Chunk560997.KM)((0, Chunk560997.Zc)("textAndImages", "animateStickers", e => {
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
  eD = [],
  ex = (0, Chunk560997.Zc)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eD, e => e),
  eL = (0, Chunk560997.Zc)("privacy", "activityRestrictedGuildIds", e => null != e ? e : eD, e => e, Chunk526761.fy.FREQUENT_USER_ACTION),
  ej = [],
  ek = (0, Chunk560997.Zc)("privacy", "activityJoiningRestrictedGuildIds", e => null != e ? e : ej, e => e);
(0, Chunk560997.TG)({
  baseSetting: (0, Chunk560997.Zc)("privacy", "defaultGuildsActivityRestricted", e => e, e => null != e ? e : a.E5.OFF),
  isEligible: () => (0, Chunk362352.o0)("user_settings"),
  useIsEligible: () => (0, Chunk362352.Yd)("user_settings"),
  ineligibleDefault: Chunk524437.E5.OFF,
  eligibleDefault: () => Chunk524437.E5.ON_FOR_LARGE_GUILDS
});
let eM = (0, Chunk560997.TG)({
    baseSetting: (0, Chunk560997.Zc)("privacy", "defaultGuildsActivityRestrictedV2", e => e, e => null != e ? e : a.GI.ACTIVITY_STATUS_OFF),
    isEligible: () => (0, Chunk362352.o0)("user_settings"),
    useIsEligible: () => (0, Chunk362352.Yd)("user_settings"),
    ineligibleDefault: Chunk524437.GI.ACTIVITY_STATUS_OFF,
    eligibleDefault: () => Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS
  }),
  eU = (0, Chunk560997.Zc)("privacy", "familyCenterEnabledV2", e => null == e ? true : e.value, e => o.D5.create({
    value: e
  })),
  eG = (0, Chunk560997.Zc)("privacy", "hideLegacyUsername", e => {
    var t;
    return null != (t = null == e ? true : e.value) && t
  }, e => o.D5.create({
    value: e
  })),
  eB = (0, Chunk560997.Zc)("privacy", "allowGameFriendDmsInDiscord", e => {
    var t;
    return null == (t = null == e ? true : e.value) || t
  }, e => o.D5.create({
    value: e
  })),
  eZ = (0, Chunk560997.Zc)("privacy", "slayerSdkReceiveDmsInGame", e => null != e ? e : a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET, e => e),
  eF = (0, Chunk560997.Zc)("ads", "alwaysDeliver", e => null != e && e, e => e),
  eV = e => {
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
  },
  eH = e => {
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
  eY = (0, Chunk560997.Zc)("textAndImages", "explicitContentSettings", eV, eH),
  eW = e => {
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
  },
  eK = e => {
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
  ez = (0, Chunk560997.Zc)("textAndImages", "goreContentSettings", eW, eK),
  eq = (0, Chunk560997.Zc)("textAndImages", "keywordFilterSettings", e => {
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
let eX = (0, Chunk560997.Zc)("appearance", "timestampHourCycle", e => null != e ? e : a.hg.AUTO, e => e);
(0, Chunk560997.Zc)("appearance", "launchPadMode", e => null != e ? e : a.l1.LAUNCH_PAD_DISABLED, e => e), (0, Chunk560997.Zc)("appearance", "swipeRightToLeftMode", e => null != e ? e : a.n9.SWIPE_RIGHT_TO_LEFT_UNSET, e => e);
let eQ = (0, Chunk560997.Zc)("userContent", "lastReceivedChangelogId", e => null != e ? e : "0", e => e),
  eJ = (0, Chunk560997.Zc)("safetySettings", "ignoreProfileSpeedbumpDisabled", e => null != e && e, e => e),
  e$ = (0, Chunk560997.Zc)("appearance", "uiDensity", e => e === a.Pi.UNSET_UI_DENSITY ? a.Pi.DEFAULT : null != e ? e : a.Pi.DEFAULT, e => e),
  e0 = (0, Chunk560997.Zc)("inAppFeedbackSettings", "inAppFeedbackStates", e => (0, r.mapValues)(null != e ? e : {}, e => (0, r.mapValues)(e, e => (null == e ? true : e.value) != null ? Number(e.value) : true)), e => (0, r.mapValues)(e, e => (0, r.mapValues)(e, e => o.wA.create({
    value: null != e ? String(e) : true
  }))), Chunk526761.fy.AUTOMATED)