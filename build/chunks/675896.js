/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(524437),
  i = n(210887),
  o = n(695346),
  a = n(581883),
  s = n(626135),
  l = n(607070),
  c = n(94752);
let u = c.E.NONE,
  d = window.matchMedia("(prefers-color-scheme: dark)"),
  f = window.matchMedia("(prefers-color-scheme: light)"),
  _ = window.matchMedia("(inverted-colors: inverted)"),
  p = window.matchMedia("(prefers-contrast: more)"),
  h = window.matchMedia("(forced-colors: active)");

function g(e, t) {
  t ? u |= e : u &= ~e
}
let m = {
  init() {
    l.Z.addChangeListener(this.handleAccessibilityStoreChanged), i.Z.addChangeListener(this.handleAccessibilityStoreChanged), a.Z.addChangeListener(this.handleUiDensityChanged), d.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(d), f.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(f), p.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(p), h.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(h), _.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(_), s.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
  },
  getActiveFeatures: () => u,
  handlePrefersColorSchemeDarkChanged(e) {
    g(c.E.PREFERS_COLOR_SCHEME_DARK, e.matches)
  },
  handlePrefersColorSchemeLightChanged(e) {
    g(c.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
  },
  handlePrefersMoreContrastChanged(e) {
    g(c.E.HIGH_CONTRAST, e.matches)
  },
  handlePrefersForcedColorsChanged(e) {
    g(c.E.FORCED_COLORS, e.matches)
  },
  handleInvertColorsChanged(e) {
    g(c.E.INVERT_COLORS, e.matches)
  },
  handleUiDensityChanged() {
    let e = o.YC.getSetting();
    g(c.E.UI_DENSITY_COMPACT, e === r.Pi.COMPACT), g(c.E.UI_DENSITY_SPACIOUS, e === r.Pi.COZY)
  },
  handleAccessibilityStoreChanged() {
    g(c.E.REDUCED_MOTION, l.Z.useReducedMotion), g(c.E.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== l.Z.rawPrefersReducedMotion), g(c.E.FORCED_COLORS_FROM_USER_SETTINGS, l.Z.syncForcedColors), g(c.E.CHAT_FONT_SCALE_DECREASED, l.Z.isFontScaledDown), g(c.E.CHAT_FONT_SCALE_INCREASED, l.Z.isFontScaledUp), g(c.E.ZOOM_LEVEL_DECREASED, l.Z.isZoomedOut), g(c.E.ZOOM_LEVEL_INCREASED, l.Z.isZoomedIn), g(c.E.MESSAGE_GROUP_SPACING_DECREASED, l.Z.isMessageGroupSpacingDecreased), g(c.E.MESSAGE_GROUP_SPACING_INCREASED, l.Z.isMessageGroupSpacingIncreased), g(c.E.DARK_SIDEBAR, i.Z.darkSidebar), g(c.E.SATURATION_LEVEL_DECREASED, l.Z.saturation < 1), g(c.E.ROLE_STYLE_ADJUSTED, "username" !== l.Z.roleStyle), g(c.E.SYNC_PROFILE_THEME_WITH_USER_THEME, l.Z.syncProfileThemeWithUserTheme)
  }
}