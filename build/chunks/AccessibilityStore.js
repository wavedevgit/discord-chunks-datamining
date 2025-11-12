/** Chunk was on web.js **/
/** chunk id: 607070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => y,
  Z: () => $
});
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk244827 = require("./244827.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk12647 = require("./12647.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js");

function p(e, t, n) {
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
      p(e, t, n[t])
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
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var y = function(e) {
  return e.DEFAULT = "default", e.HIGH = "high", e
}({});
let O = {
    fontSize: Chunk981631.yqN.FONT_SIZE_DEFAULT,
    zoom: Chunk981631.yqN.ZOOM_DEFAULT,
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
  I = {
    12: "font-size-12",
    14: "font-size-14",
    15: "font-size-15",
    16: "font-size-16",
    18: "font-size-18",
    20: "font-size-20",
    24: "font-size-24"
  };

function S(e) {
  return f.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : f.yqN.FONT_SIZE_DEFAULT
}

function T(e) {
  let t = S(e.fontSize);
  if (t > f.yqN.FONT_SIZE_MAX || t < f.yqN.FONT_SIZE_MIN || v.fontSize === t) returnfalse;
  (v = h({}, v)).fontSize = t
}

function A(e) {
  if (e.zoom < f.yqN.ZOOM_MIN || e.zoom > f.yqN.ZOOM_MAX || v.zoom === e.zoom) returnfalse;
  (v = h({}, v)).zoom = e.zoom, d.Z.setZoomFactor(v.zoom)
}

function C() {
  let e = v.fontSize !== Chunk981631.yqN.FONT_SIZE_DEFAULT,
    t = v.zoom !== Chunk981631.yqN.ZOOM_DEFAULT;
  if (!module && !exports) returnfalse;
  (v = h({}, v)).fontSize !== Chunk981631.yqN.FONT_SIZE_DEFAULT && (v.fontSize = Chunk981631.yqN.FONT_SIZE_DEFAULT), v.zoom !== Chunk981631.yqN.ZOOM_DEFAULT && (v.zoom = Chunk981631.yqN.ZOOM_DEFAULT, Chunk12647.Z.setZoomFactor(v.zoom))
}

function N() {
  if (v.keyboardModeEnabled) returnfalse;
  (v = h({}, v)).keyboardModeEnabled = true
}

function R() {
  if (!v.keyboardModeEnabled) returnfalse;
  (v = h({}, v)).keyboardModeEnabled = false
}

function P() {
  (v = h({}, v)).colorblindMode = !v.colorblindMode
}

function w() {
  (v = h({}, v)).lowContrastMode = !v.lowContrastMode
}

function D(e) {
  v.syncForcedColors = e.syncForcedColors
}

function x(e) {
  (v = h({}, v)).saturation = e.saturation
}

function L() {
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

function B(e) {
  if (v.systemPrefersCrossfades === e.systemPrefersCrossfades) returnfalse;
  v = g(h({}, v), {
    systemPrefersCrossfades: e.systemPrefersCrossfades
  })
}

function Z(e) {
  if (v.prefersReducedMotion === e.prefersReducedMotion) returnfalse;
  v = g(h({}, v), {
    prefersReducedMotion: e.prefersReducedMotion
  })
}

function F(e) {
  if (v.systemPrefersContrast === e.systemPrefersContrast) returnfalse;
  v = g(h({}, v), {
    systemPrefersContrast: e.systemPrefersContrast
  })
}

function V(e) {
  v = g(h({}, v), {
    alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
  })
}

function H(e) {
  v = g(h({}, v), {
    enableCustomCursor: e.enableCustomCursor
  })
}

function Y(e) {
  var t;
  return v = g(h({}, v), {
    systemForcedColors: null != (t = e.systemForcedColors) ? t : "none"
  }), true
}

function W() {
  v.forcedColorsModalSeen = true
}

function K() {
  v = g(h({}, v), {
    keyboardNavigationExplainerModalSeen: true
  })
}

function z(e) {
  let {
    messageGroupSpacing: t
  } = e;
  v = g(h({}, v), {
    messageGroupSpacing: t
  })
}

function q(e) {
  let {
    contrast: t
  } = e;
  v = g(h({}, v), {
    contrast: t
  })
}

function X(e) {
  let {
    contrastMode: t
  } = e;
  v = g(h({}, v), {
    contrastMode: t
  })
}

function Q(e) {
  v = g(h({}, v), {
    switchIconsEnabled: e.switchIconsEnabled
  })
}
class J extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(u.Z), this.waitFor(l.Z), isNaN((v = h({}, O, null != e ? e : null)).fontSize) && (v.fontSize = f.yqN.FONT_SIZE_DEFAULT), 0 > _.fP.indexOf(null != v.messageGroupSpacing ? v.messageGroupSpacing : false) && (v.messageGroupSpacing = null)
  }
  get fontScale() {
    return v.fontSize / Chunk981631.yqN.FONT_SIZE_DEFAULT * 100
  }
  get fontSize() {
    return v.fontSize
  }
  get isFontScaledUp() {
    return v.fontSize > Chunk981631.yqN.FONT_SIZE_DEFAULT
  }
  get isFontScaledDown() {
    return v.fontSize < Chunk981631.yqN.FONT_SIZE_DEFAULT
  }
  get fontScaleClass() {
    var e;
    let t = null != (e = I[this.fontSize]) ? module : "";
    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(exports) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(exports) : "".concat(exports)
  }
  get zoom() {
    return v.zoom
  }
  get isZoomedIn() {
    return v.zoom > Chunk981631.yqN.ZOOM_DEFAULT
  }
  get isZoomedOut() {
    return v.zoom < Chunk981631.yqN.ZOOM_DEFAULT
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
    return null != v.messageGroupSpacing ? v.messageGroupSpacing : Chunk695346.jU.getSetting() ? Chunk959517.c8 : Chunk959517.pq
  }
  get isMessageGroupSpacingIncreased() {
    let e = Chunk695346.jU.getSetting() ? Chunk959517.c8 : Chunk959517.pq;
    return this.messageGroupSpacing > module
  }
  get isMessageGroupSpacingDecreased() {
    let e = Chunk695346.jU.getSetting() ? Chunk959517.c8 : Chunk959517.pq;
    return this.messageGroupSpacing < module
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
    if (Chunk244827.Z.active) returntrue;
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
p(J, "displayName", "AccessibilityStore"), p(J, "persistKey", "AccessibilityStore"), p(J, "migrations", [() => {
  let e = "a11yFontScale",
    t = "a11yZoom",
    n = "a11yColorblindMode",
    r = Chunk433517.K.get(module) || 100,
    i = Chunk433517.K.get(exports) || Chunk981631.yqN.ZOOM_DEFAULT,
    o = Chunk433517.K.get(require) || false;
  return Chunk433517.K.remove(module), Chunk433517.K.remove(exports), Chunk433517.K.remove(require), {
    fontScale: r,
    zoom: Chunk442837,
    colorblindMode: Chunk780384,
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
  alwaysShowLinkDecorations: e.saturation <= o.AE
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
let $ = new J(Chunk570140.Z, {
  ACCESSIBILITY_SET_FONT_SIZE: T,
  ACCESSIBILITY_SET_ZOOM: A,
  ACCESSIBILITY_RESET_TO_DEFAULT: C,
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: N,
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: R,
  ACCESSIBILITY_COLORBLIND_TOGGLE: P,
  ACCESSIBILITY_LOW_CONTRAST_TOGGLE: w,
  ACCESSIBILITY_SET_SATURATION: x,
  ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: L,
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: Y,
  ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: F,
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: G,
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: B,
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: Z,
  ACCESSIBILITY_SET_SYNC_FORCED_COLORS: D,
  ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: V,
  ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: H,
  ACCESSIBILITY_SET_ROLE_STYLE: M,
  ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: j,
  ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: W,
  KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: K,
  ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: z,
  ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: k,
  ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: U,
  ACCESSIBILITY_SET_CONTRAST: q,
  ACCESSIBILITY_SET_CONTRAST_MODE: X,
  ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: Q
})