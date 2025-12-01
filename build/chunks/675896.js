/** Chunk was on web.js **/
/** chunk id: 675896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk524437 = require("./524437.js"),
  Chunk984802 = require("./984802.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk626135 = require("./626135.js"),
  Chunk607070 = require("./607070.js"),
  Chunk94752 = require("./94752.js");
let d = Chunk94752.E.NONE,
  f = window.matchMedia("(prefers-color-scheme: dark)"),
  p = window.matchMedia("(prefers-color-scheme: light)"),
  _ = window.matchMedia("(inverted-colors: inverted)"),
  m = window.matchMedia("(prefers-contrast: more)"),
  h = window.matchMedia("(forced-colors: active)");

function g(e, t) {
  t ? d |= e : d &= ~e
}
let E = {
  init() {
    Chunk607070.Z.addChangeListener(this.handleAccessibilityStoreChanged), Chunk210887.Z.addChangeListener(this.handleAccessibilityStoreChanged), Chunk581883.Z.addChangeListener(this.handleUiDensityChanged), f.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(f), p.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(p), m.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(m), h.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(h), _.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(_), Chunk626135.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
  },
  getActiveFeatures: () => d,
  handlePrefersColorSchemeDarkChanged(e) {
    g(u.E.PREFERS_COLOR_SCHEME_DARK, e.matches)
  },
  handlePrefersColorSchemeLightChanged(e) {
    g(u.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
  },
  handlePrefersMoreContrastChanged(e) {
    g(u.E.HIGH_CONTRAST, e.matches)
  },
  handlePrefersForcedColorsChanged(e) {
    g(u.E.FORCED_COLORS, e.matches)
  },
  handleInvertColorsChanged(e) {
    g(u.E.INVERT_COLORS, e.matches)
  },
  handleUiDensityChanged() {
    let e = Chunk695346.YC.getSetting();
    g(Chunk94752.E.UI_DENSITY_COMPACT, module === Chunk524437.Pi.COMPACT), g(Chunk94752.E.UI_DENSITY_SPACIOUS, module === Chunk524437.Pi.COZY)
  },
  handleAccessibilityStoreChanged() {
    g(Chunk94752.E.REDUCED_MOTION, Chunk607070.Z.useReducedMotion), g(Chunk94752.E.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== Chunk607070.Z.rawPrefersReducedMotion), g(Chunk94752.E.FORCED_COLORS_FROM_USER_SETTINGS, Chunk607070.Z.syncForcedColors), g(Chunk94752.E.CHAT_FONT_SCALE_DECREASED, Chunk607070.Z.isFontScaledDown), g(Chunk94752.E.CHAT_FONT_SCALE_INCREASED, Chunk607070.Z.isFontScaledUp), g(Chunk94752.E.ZOOM_LEVEL_DECREASED, Chunk607070.Z.isZoomedOut), g(Chunk94752.E.ZOOM_LEVEL_INCREASED, Chunk607070.Z.isZoomedIn), g(Chunk94752.E.MESSAGE_GROUP_SPACING_DECREASED, Chunk607070.Z.isMessageGroupSpacingDecreased), g(Chunk94752.E.MESSAGE_GROUP_SPACING_INCREASED, Chunk607070.Z.isMessageGroupSpacingIncreased), g(Chunk94752.E.DARK_SIDEBAR, (0, Chunk984802.Zp)()), g(Chunk94752.E.SATURATION_LEVEL_DECREASED, Chunk607070.Z.saturation < 1), g(Chunk94752.E.ROLE_STYLE_ADJUSTED, "username" !== Chunk607070.Z.roleStyle), g(Chunk94752.E.SYNC_PROFILE_THEME_WITH_USER_THEME, Chunk607070.Z.syncProfileThemeWithUserTheme), g(Chunk94752.E.CONTRAST_LEVEL_INCREASED, Chunk607070.Z.isHighContrastModeEnabled)
  }
}