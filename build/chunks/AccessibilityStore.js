/** Chunk was on web.js **/
/** chunk id: 775602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => $,
  _: () => b
});
var r, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk802124 = require("./802124.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk353835 = require("./353835.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var b = function(e) {
  return e.DEFAULT = "default", e.HIGH = "high", e
}({});
let O = {
    fontSize: Chunk652215.hH7.FONT_SIZE_DEFAULT,
    zoom: Chunk652215.hH7.ZOOM_DEFAULT,
    keyboardModeEnabled: false,
    contrastMode: "default",
    colorblindMode: false,
    lowContrastMode: false,
    saturation: 1,
    contrast: 1,
    desaturateUserColors: false,
    forcedColorsModalSeen: false,
    keyboardNavigationExplainerModalSeen: false,
    messageGroupSpacing: null,
    systemPrefersReducedMotion: "no-preference",
    systemPrefersCrossfades: false,
    prefersReducedMotion: "auto",
    systemForcedColors: "none",
    syncForcedColors: true,
    systemPrefersContrast: "no-preference",
    alwaysShowLinkDecorations: false,
    roleStyle: "username",
    displayNameStylesEnabled: true,
    submitButtonEnabled: false,
    syncProfileThemeWithUserTheme: false,
    enableCustomCursor: true,
    switchIconsEnabled: false
  },
  v = O,
  A = {
    12: "font-size-12",
    14: "font-size-14",
    15: "font-size-15",
    16: "font-size-16",
    18: "font-size-18",
    20: "font-size-20",
    24: "font-size-24"
  };

function I(e) {
  return f.hH7.FONT_SIZES.indexOf(e) >= 0 ? e : f.hH7.FONT_SIZE_DEFAULT
}

function S(e) {
  let t = I(e.fontSize);
  if (t > f.hH7.FONT_SIZE_MAX || t < f.hH7.FONT_SIZE_MIN || v.fontSize === t) returnfalse;
  (v = h({}, v)).fontSize = t
}

function T(e) {
  if (e.zoom < f.hH7.ZOOM_MIN || e.zoom > f.hH7.ZOOM_MAX || v.zoom === e.zoom) returnfalse;
  (v = h({}, v)).zoom = e.zoom, d.A.setZoomFactor(v.zoom)
}

function C() {
  let e = v.fontSize !== f.hH7.FONT_SIZE_DEFAULT,
    t = v.zoom !== f.hH7.ZOOM_DEFAULT;
  if (!e && !t) returnfalse;
  (v = h({}, v)).fontSize !== f.hH7.FONT_SIZE_DEFAULT && (v.fontSize = f.hH7.FONT_SIZE_DEFAULT), v.zoom !== f.hH7.ZOOM_DEFAULT && (v.zoom = f.hH7.ZOOM_DEFAULT, d.A.setZoomFactor(v.zoom))
}

function N() {
  if (v.keyboardModeEnabled) returnfalse;
  (v = h({}, v)).keyboardModeEnabled = true
}

function w() {
  if (!v.keyboardModeEnabled) returnfalse;
  (v = h({}, v)).keyboardModeEnabled = false
}

function R() {
  (v = h({}, v)).colorblindMode = !v.colorblindMode
}

function P() {
  (v = h({}, v)).lowContrastMode = !v.lowContrastMode
}

function D(e) {
  v.syncForcedColors = e.syncForcedColors
}

function L(e) {
  (v = h({}, v)).saturation = e.saturation
}

function x() {
  (v = h({}, v)).desaturateUserColors = !v.desaturateUserColors
}

function M(e) {
  v.roleStyle = e.roleStyle
}

function j(e) {
  v.displayNameStylesEnabled = e.enabled
}

function k() {
  (v = h({}, v)).submitButtonEnabled = !v.submitButtonEnabled
}

function U() {
  (v = h({}, v)).syncProfileThemeWithUserTheme = !v.syncProfileThemeWithUserTheme
}

function G(e) {
  if (v.systemPrefersReducedMotion === e.systemPrefersReducedMotion) returnfalse;
  v = g(h({}, v), {
    systemPrefersReducedMotion: e.systemPrefersReducedMotion
  })
}

function V(e) {
  if (v.systemPrefersCrossfades === e.systemPrefersCrossfades) returnfalse;
  v = g(h({}, v), {
    systemPrefersCrossfades: e.systemPrefersCrossfades
  })
}

function F(e) {
  if (v.prefersReducedMotion === e.prefersReducedMotion) returnfalse;
  v = g(h({}, v), {
    prefersReducedMotion: e.prefersReducedMotion
  })
}

function B(e) {
  if (v.systemPrefersContrast === e.systemPrefersContrast) returnfalse;
  v = g(h({}, v), {
    systemPrefersContrast: e.systemPrefersContrast
  })
}

function H(e) {
  v = g(h({}, v), {
    alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
  })
}

function Y(e) {
  v = g(h({}, v), {
    enableCustomCursor: e.enableCustomCursor
  })
}

function W(e) {
  var t;
  return v = g(h({}, v), {
    systemForcedColors: null != (t = e.systemForcedColors) ? t : "none"
  }), true
}

function K() {
  v.forcedColorsModalSeen = true
}

function z() {
  v = g(h({}, v), {
    keyboardNavigationExplainerModalSeen: true
  })
}

function q(e) {
  let {
    messageGroupSpacing: t
  } = e;
  v = g(h({}, v), {
    messageGroupSpacing: t
  })
}

function Z(e) {
  let {
    contrast: t
  } = e;
  v = g(h({}, v), {
    contrast: t
  })
}

function Q(e) {
  let {
    contrastMode: t
  } = e;
  v = g(h({}, v), {
    contrastMode: t
  })
}

function X(e) {
  v = g(h({}, v), {
    switchIconsEnabled: e.switchIconsEnabled
  })
}
class J extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(u.A), this.waitFor(l.A), isNaN((v = h({}, O, null != e ? e : null)).fontSize) && (v.fontSize = f.hH7.FONT_SIZE_DEFAULT), 0 > p.qh.indexOf(null != v.messageGroupSpacing ? v.messageGroupSpacing : false) && (v.messageGroupSpacing = null)
  }
  get fontScale() {
    return v.fontSize / f.hH7.FONT_SIZE_DEFAULT * 100
  }
  get fontSize() {
    return v.fontSize
  }
  get isFontScaledUp() {
    return v.fontSize > f.hH7.FONT_SIZE_DEFAULT
  }
  get isFontScaledDown() {
    return v.fontSize < f.hH7.FONT_SIZE_DEFAULT
  }
  get fontScaleClass() {
    var e;
    let t = null != (e = A[this.fontSize]) ? e : "";
    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
  }
  get zoom() {
    return v.zoom
  }
  get isZoomedIn() {
    return v.zoom > f.hH7.ZOOM_DEFAULT
  }
  get isZoomedOut() {
    return v.zoom < f.hH7.ZOOM_DEFAULT
  }
  get keyboardModeEnabled() {
    return v.keyboardModeEnabled
  }
  get colorblindMode() {
    return v.colorblindMode
  }
  get lowContrastMode() {
    return v.lowContrastMode
  }
  get saturation() {
    return v.saturation
  }
  get contrast() {
    return v.contrast
  }
  get desaturateUserColors() {
    return v.desaturateUserColors
  }
  get forcedColorsModalSeen() {
    return v.forcedColorsModalSeen
  }
  get keyboardNavigationExplainerModalSeen() {
    return v.keyboardNavigationExplainerModalSeen
  }
  get messageGroupSpacing() {
    return null != v.messageGroupSpacing ? v.messageGroupSpacing : c.hH.getSetting() ? p.y5 : p.ES
  }
  get isMessageGroupSpacingIncreased() {
    let e = c.hH.getSetting() ? p.y5 : p.ES;
    return this.messageGroupSpacing > e
  }
  get isMessageGroupSpacingDecreased() {
    let e = c.hH.getSetting() ? p.y5 : p.ES;
    return this.messageGroupSpacing < e
  }
  get isSubmitButtonEnabled() {
    return v.submitButtonEnabled
  }
  get syncProfileThemeWithUserTheme() {
    return v.syncProfileThemeWithUserTheme
  }
  get systemPrefersReducedMotion() {
    return v.systemPrefersReducedMotion
  }
  get rawPrefersReducedMotion() {
    return v.prefersReducedMotion
  }
  get useReducedMotion() {
    if (l.A.active) returntrue;
    switch (v.prefersReducedMotion) {
      case "no-preference":
        returnfalse;
      case "reduce":
        returntrue;
      default:
        return "reduce" === v.systemPrefersReducedMotion
    }
  }
  get systemForcedColors() {
    return v.systemForcedColors
  }
  get syncForcedColors() {
    return v.syncForcedColors
  }
  get useForcedColors() {
    return !!v.syncForcedColors && "active" === v.systemForcedColors
  }
  get systemPrefersContrast() {
    return v.systemPrefersContrast
  }
  get systemPrefersCrossfades() {
    return v.systemPrefersCrossfades
  }
  get alwaysShowLinkDecorations() {
    return v.alwaysShowLinkDecorations
  }
  get enableCustomCursor() {
    return v.enableCustomCursor
  }
  get roleStyle() {
    return v.roleStyle
  }
  get displayNameStylesEnabled() {
    return v.displayNameStylesEnabled
  }
  get isHighContrastModeEnabled() {
    return "high" === v.contrastMode
  }
  get isSwitchIconsEnabled() {
    return v.switchIconsEnabled
  }
  getUserAgnosticState() {
    return v
  }
}
_(J, "displayName", "AccessibilityStore"), _(J, "persistKey", "AccessibilityStore"), _(J, "migrations", [() => {
  let e = "a11yFontScale",
    t = "a11yZoom",
    n = "a11yColorblindMode",
    r = a.w.get(e) || 100,
    i = a.w.get(t) || f.hH7.ZOOM_DEFAULT,
    o = a.w.get(n) || false;
  return a.w.remove(e), a.w.remove(t), a.w.remove(n), {
    fontScale: r,
    zoom: i,
    colorblindMode: o,
    keyboardModeEnabled: false
  }
}, e => {
  let {
    fontScale: t
  } = e, n = E(e, ["fontScale"]), r = 16;
  switch (t) {
    case 82:
      r = 12;
      break;
    case 92:
      r = 15;
      break;
    case 100:
      r = 16;
      break;
    case 110:
      r = 18;
      break;
    case 125:
      r = 20;
      break;
    case 150:
      r = 24
  }
  return g(h({}, n), {
    fontSize: r
  })
}, e => g(h({}, e), {
  darkSidebar: false
}), e => g(h({}, e), {
  messageGroupSpacing: null
}), e => g(h({}, e), {
  systemPrefersReducedMotion: "no-preference",
  prefersReducedMotion: "auto"
}), e => g(h({}, e), {
  alwaysShowLinkDecorations: e.saturation <= o.yv
}), e => g(h({}, e), {
  disableVoiceBackgrounds: false
}), e => {
  try {
    delete e.disableVoiceBackgrounds
  } catch (e) {}
  return e
}, e => {
  try {
    delete e.hideGuildTags
  } catch (e) {}
  return e
}, e => g(h({}, e), {
  enableCustomCursor: true
})]);
let $ = new J(Chunk73153.h, {
  ACCESSIBILITY_SET_FONT_SIZE: S,
  ACCESSIBILITY_SET_ZOOM: T,
  ACCESSIBILITY_RESET_TO_DEFAULT: C,
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: N,
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: w,
  ACCESSIBILITY_COLORBLIND_TOGGLE: R,
  ACCESSIBILITY_LOW_CONTRAST_TOGGLE: P,
  ACCESSIBILITY_SET_SATURATION: L,
  ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: x,
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: W,
  ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: B,
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: G,
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: V,
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: F,
  ACCESSIBILITY_SET_SYNC_FORCED_COLORS: D,
  ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: H,
  ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: Y,
  ACCESSIBILITY_SET_ROLE_STYLE: M,
  ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: j,
  ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: K,
  KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: z,
  ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: q,
  ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: k,
  ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: U,
  ACCESSIBILITY_SET_CONTRAST: Z,
  ACCESSIBILITY_SET_CONTRAST_MODE: Q,
  ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: X
})