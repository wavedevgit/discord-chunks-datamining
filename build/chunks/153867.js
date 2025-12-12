/** Chunk was on web.js **/
/** chunk id: 153867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V1: () => m,
  ZI: () => E,
  ZP: () => b
});
var Chunk524437 = require("./524437.js"),
  Chunk381499 = require("./381499.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk514361 = require("./514361.js"),
  Chunk238514 = require("./238514.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk981631 = require("./981631.js"),
  Chunk874893 = require("./874893.js");

function m(e) {
  return f.hW.updateAsync("guildFolders", t => {
    t.folders = e.map(e => {
      let t = r.yX.create({
        guildIds: e.guildIds
      });
      return null != e.folderId && (t.id = i.r1.create({
        value: String(e.folderId)
      })), null != e.folderColor && (t.color = i.wA.create({
        value: String(e.folderColor)
      })), null != e.folderName && "" !== e.folderName && (t.name = i.Gm.create({
        value: String(e.folderName)
      })), t
    })
  }, f.fy.FREQUENT_USER_ACTION)
}

function h(e) {
  switch (e) {
    case p.BRd.DARK:
      return r.Q2.DARK;
    case p.BRd.LIGHT:
      return r.Q2.LIGHT;
    case p.BRd.DARKER:
      return r.Q2.DARKER;
    case p.BRd.MIDNIGHT:
      return r.Q2.MIDNIGHT;
    default:
      return r.Q2.DARK
  }
}

function g(e) {
  return {
    backgroundGradientPresetId: null != e.backgroundGradientPresetId ? i.yC.create({
      value: e.backgroundGradientPresetId
    }) : true,
    customUserThemeSettings: null != e.customUserThemeSettings ? {
      colors: e.customUserThemeSettings.colors,
      gradientColorStops: e.customUserThemeSettings.gradientColorStops,
      gradientAngle: e.customUserThemeSettings.gradientAngle,
      baseMix: e.customUserThemeSettings.baseMix
    } : true
  }
}

function E(e) {
  let {
    backgroundGradientPresetId: t,
    customUserThemeSettings: n,
    theme: r,
    useSystemTheme: i
  } = e, s = arguments.length > 1 && true !== arguments[1] ? arguments[1] : f.fy.INFREQUENT_USER_ACTION, u = "system" === r ? _.KW.ON : _.KW.OFF, d = null != i ? i : u;
  if (a.Z.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: {
        useSystemTheme: d
      }
    }), null == t && "system" !== r && (0, o.wj)(r) && (0, c.Ag)({
      [_.zd.DARK]: r
    }), a.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          settings: {
            clientThemeSettings: {
              backgroundGradientPresetId: t,
              customUserThemeSettings: n
            },
            theme: "system" === r ? true : r
          }
        }
      }
    }), l.Z.shouldSync("appearance")) return f.hW.updateAsync("appearance", e => {
    e.theme = h(r), e.clientThemeSettings = g({
      backgroundGradientPresetId: t,
      customUserThemeSettings: n
    })
  }, s)
}
let b = {
  overrideLocale(e) {
    a.Z.dispatch({
      type: "USER_SETTINGS_LOCALE_OVERRIDE",
      locale: e
    })
  },
  updatedUnsyncedSettings(e) {
    a.Z.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: e
    })
  },
  setShouldSyncTextSettings(e) {
    a.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        text: {
          shouldSync: e,
          settings: e ? {} : {
            inlineAttachmentMedia: d.x4.getSetting(),
            inlineEmbedMedia: d.RS.getSetting(),
            renderEmbeds: d.NA.getSetting(),
            renderReactions: d.nc.getSetting(),
            animateEmoji: d.Yk.getSetting(),
            animateStickers: d.Wp.getSetting(),
            gifAutoPlay: d.QK.getSetting()
          }
        }
      }
    })
  },
  setShouldSyncAppearanceSettings(e) {
    var t;
    a.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          shouldSync: e,
          settings: e ? {} : {
            theme: u.Z.theme,
            clientThemeSettings: {
              backgroundGradientPresetId: null == (t = s.Z.gradientPreset) ? true : t.id
            },
            developerMode: d.Sb.getSetting()
          }
        }
      }
    })
  },
  applySettingsOverride(e) {
    a.Z.dispatch({
      type: "USER_SETTINGS_OVERRIDE_APPLY",
      settings: e
    })
  },
  clearSettingsOverride() {
    for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
    Chunk570140.Z.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: exports
    })
  },
  updateLocale: e => f.hW.updateAsync("localization", t => {
    t.locale = i.Gm.create({
      value: e
    })
  }, f.fy.INFREQUENT_USER_ACTION),
  updateTheme(e) {
    a.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          settings: {
            theme: e
          }
        }
      }
    }), l.Z.shouldSync("appearance") && f.hW.updateAsync("appearance", t => {
      t.theme = h(e)
    }, f.fy.INFREQUENT_USER_ACTION)
  }
}