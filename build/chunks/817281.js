/** Chunk was on web.js **/
/** chunk id: 817281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => y,
  u_: () => E,
  um: () => h
});
var Chunk873298 = require("./873298.js"),
  Chunk406935 = require("./406935.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk47671 = require("./47671.js"),
  Chunk284016 = require("./284016.js"),
  Chunk973654 = require("./973654.js"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk594061 = require("./594061.js"),
  Chunk652215 = require("./652215.js"),
  Chunk185928 = require("./185928.js");

function h(e) {
  return f.wc.updateAsync("guildFolders", t => {
    t.folders = e.map(e => {
      let t = r.ak.create({
        guildIds: e.guildIds
      });
      return null != e.folderId && (t.id = i.j1.create({
        value: String(e.folderId)
      })), null != e.folderColor && (t.color = i.ol.create({
        value: String(e.folderColor)
      })), null != e.folderName && "" !== e.folderName && (t.name = i.hU.create({
        value: String(e.folderName)
      })), t
    })
  }, f.Sb.FREQUENT_USER_ACTION)
}

function m(e) {
  switch (e) {
    case p.NJ8.DARK:
      return r.Sx.DARK;
    case p.NJ8.LIGHT:
      return r.Sx.LIGHT;
    case p.NJ8.DARKER:
      return r.Sx.DARKER;
    case p.NJ8.MIDNIGHT:
      return r.Sx.MIDNIGHT;
    default:
      return r.Sx.DARK
  }
}

function g(e) {
  return {
    backgroundGradientPresetId: null != e.backgroundGradientPresetId ? i.ZQ.create({
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
  } = e, o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : f.Sb.INFREQUENT_USER_ACTION, u = "system" === r ? _.Q_.ON : _.Q_.OFF, d = null != i ? i : u;
  if (s.h.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: {
        useSystemTheme: d
      }
    }), null == t && "system" !== r && (0, a.Mw)(r) && (0, c.NA)({
      [_.Fc.DARK]: r
    }), s.h.dispatch({
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
    }), l.A.shouldSync("appearance")) return f.wc.updateAsync("appearance", e => {
    e.theme = m(r), e.clientThemeSettings = g({
      backgroundGradientPresetId: t,
      customUserThemeSettings: n
    })
  }, o)
}
let y = {
  overrideLocale(e) {
    s.h.dispatch({
      type: "USER_SETTINGS_LOCALE_OVERRIDE",
      locale: e
    })
  },
  updatedUnsyncedSettings(e) {
    s.h.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: e
    })
  },
  setShouldSyncTextSettings(e) {
    s.h.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        text: {
          shouldSync: e,
          settings: e ? {} : {
            inlineAttachmentMedia: d.X6.getSetting(),
            inlineEmbedMedia: d.hD.getSetting(),
            renderEmbeds: d.rs.getSetting(),
            renderReactions: d.jW.getSetting(),
            animateEmoji: d.Sf.getSetting(),
            animateStickers: d.S0.getSetting(),
            gifAutoPlay: d.kt.getSetting()
          }
        }
      }
    })
  },
  setShouldSyncAppearanceSettings(e) {
    var t;
    s.h.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          shouldSync: e,
          settings: e ? {} : {
            theme: u.A.theme,
            clientThemeSettings: {
              backgroundGradientPresetId: null == (t = o.A.gradientPreset) ? true : t.id
            },
            developerMode: d.Q_.getSetting()
          }
        }
      }
    })
  },
  applySettingsOverride(e) {
    s.h.dispatch({
      type: "USER_SETTINGS_OVERRIDE_APPLY",
      settings: e
    })
  },
  clearSettingsOverride() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    s.h.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: t
    })
  },
  updateLocale: e => f.wc.updateAsync("localization", t => {
    t.locale = i.hU.create({
      value: e
    })
  }, f.Sb.INFREQUENT_USER_ACTION),
  updateTheme(e) {
    s.h.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          settings: {
            theme: e
          }
        }
      }
    }), l.A.shouldSync("appearance") && f.wc.updateAsync("appearance", t => {
      t.theme = m(e)
    }, f.Sb.INFREQUENT_USER_ACTION)
  }
}