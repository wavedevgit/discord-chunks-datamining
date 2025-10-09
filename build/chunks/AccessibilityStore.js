/** Chunk was on web.js **/
/** chunk id: 607070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => b,
  Z: () => J
});
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk12647 = require("./12647.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var b = function(e) {
  return e.DEFAULT = "default", e.HIGH = "high", e
}({});
let y = {
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
  O = y,
  v = {
    12: "font-size-12",
    14: "font-size-14",
    15: "font-size-15",
    16: "font-size-16",
    18: "font-size-18",
    20: "font-size-20",
    24: "font-size-24"
  };

function I(e) {
  return d.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : d.yqN.FONT_SIZE_DEFAULT
}

function T(e) {
  let t = I(e.fontSize);
  if (t > d.yqN.FONT_SIZE_MAX || t < d.yqN.FONT_SIZE_MIN || O.fontSize === t) returnfalse;
  (O = p({}, O)).fontSize = t
}

function S(e) {
  if (e.zoom < d.yqN.ZOOM_MIN || e.zoom > d.yqN.ZOOM_MAX || O.zoom === e.zoom) returnfalse;
  (O = p({}, O)).zoom = e.zoom, u.Z.setZoomFactor(O.zoom)
}

function A() {
  let e = O.fontSize !== Chunk981631.yqN.FONT_SIZE_DEFAULT,
    t = O.zoom !== Chunk981631.yqN.ZOOM_DEFAULT;
  if (!module && !exports) returnfalse;
  (O = p({}, O)).fontSize !== Chunk981631.yqN.FONT_SIZE_DEFAULT && (O.fontSize = Chunk981631.yqN.FONT_SIZE_DEFAULT), O.zoom !== Chunk981631.yqN.ZOOM_DEFAULT && (O.zoom = Chunk981631.yqN.ZOOM_DEFAULT, Chunk12647.Z.setZoomFactor(O.zoom))
}

function C() {
  if (O.keyboardModeEnabled) returnfalse;
  (O = p({}, O)).keyboardModeEnabled = true
}

function N() {
  if (!O.keyboardModeEnabled) returnfalse;
  (O = p({}, O)).keyboardModeEnabled = false
}

function R() {
  (O = p({}, O)).colorblindMode = !O.colorblindMode
}

function P() {
  (O = p({}, O)).lowContrastMode = !O.lowContrastMode
}

function w(e) {
  O.syncForcedColors = e.syncForcedColors
}

function D(e) {
  (O = p({}, O)).saturation = e.saturation
}

function x() {
  (O = p({}, O)).desaturateUserColors = !O.desaturateUserColors
}

function L(e) {
  O.roleStyle = e.roleStyle
}

function M(e) {
  O.displayNameStylesEnabled = e.enabled
}

function k() {
  (O = p({}, O)).submitButtonEnabled = !O.submitButtonEnabled
}

function j() {
  (O = p({}, O)).syncProfileThemeWithUserTheme = !O.syncProfileThemeWithUserTheme
}

function U(e) {
  if (O.systemPrefersReducedMotion === e.systemPrefersReducedMotion) returnfalse;
  O = m(p({}, O), {
    systemPrefersReducedMotion: e.systemPrefersReducedMotion
  })
}

function G(e) {
  if (O.systemPrefersCrossfades === e.systemPrefersCrossfades) returnfalse;
  O = m(p({}, O), {
    systemPrefersCrossfades: e.systemPrefersCrossfades
  })
}

function B(e) {
  if (O.prefersReducedMotion === e.prefersReducedMotion) returnfalse;
  O = m(p({}, O), {
    prefersReducedMotion: e.prefersReducedMotion
  })
}

function Z(e) {
  if (O.systemPrefersContrast === e.systemPrefersContrast) returnfalse;
  O = m(p({}, O), {
    systemPrefersContrast: e.systemPrefersContrast
  })
}

function F(e) {
  O = m(p({}, O), {
    alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
  })
}

function V(e) {
  O = m(p({}, O), {
    enableCustomCursor: e.enableCustomCursor
  })
}

function H(e) {
  var t;
  return O = m(p({}, O), {
    systemForcedColors: null != (t = e.systemForcedColors) ? t : "none"
  }), true
}

function Y() {
  O.forcedColorsModalSeen = true
}

function W() {
  O = m(p({}, O), {
    keyboardNavigationExplainerModalSeen: true
  })
}

function K(e) {
  let {
    messageGroupSpacing: t
  } = e;
  O = m(p({}, O), {
    messageGroupSpacing: t
  })
}

function z(e) {
  let {
    contrast: t
  } = e;
  O = m(p({}, O), {
    contrast: t
  })
}

function q(e) {
  let {
    contrastMode: t
  } = e;
  O = m(p({}, O), {
    contrastMode: t
  })
}

function X(e) {
  O = m(p({}, O), {
    switchIconsEnabled: e.switchIconsEnabled
  })
}
class Q extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(c.Z), isNaN((O = p({}, y, null != e ? e : null)).fontSize) && (O.fontSize = d.yqN.FONT_SIZE_DEFAULT), 0 > f.fP.indexOf(null != O.messageGroupSpacing ? O.messageGroupSpacing : false) && (O.messageGroupSpacing = null)
  }
  get fontScale() {
    return O.fontSize / Chunk981631.yqN.FONT_SIZE_DEFAULT * 100
  }
  get fontSize() {
    return O.fontSize
  }
  get isFontScaledUp() {
    return O.fontSize > Chunk981631.yqN.FONT_SIZE_DEFAULT
  }
  get isFontScaledDown() {
    return O.fontSize < Chunk981631.yqN.FONT_SIZE_DEFAULT
  }
  get fontScaleClass() {
    var e;
    let t = null != (e = v[this.fontSize]) ? module : "";
    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(exports) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(exports) : "".concat(exports)
  }
  get zoom() {
    return O.zoom
  }
  get isZoomedIn() {
    return O.zoom > Chunk981631.yqN.ZOOM_DEFAULT
  }
  get isZoomedOut() {
    return O.zoom < Chunk981631.yqN.ZOOM_DEFAULT
  }
  get keyboardModeEnabled() {
    return O.keyboardModeEnabled
  }
  get colorblindMode() {
    return O.colorblindMode
  }
  get lowContrastMode() {
    return O.lowContrastMode
  }
  get saturation() {
    return O.saturation
  }
  get contrast() {
    return O.contrast
  }
  get desaturateUserColors() {
    return O.desaturateUserColors
  }
  get forcedColorsModalSeen() {
    return O.forcedColorsModalSeen
  }
  get keyboardNavigationExplainerModalSeen() {
    return O.keyboardNavigationExplainerModalSeen
  }
  get messageGroupSpacing() {
    return null != O.messageGroupSpacing ? O.messageGroupSpacing : Chunk695346.jU.getSetting() ? Chunk959517.c8 : Chunk959517.pq
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
    return O.submitButtonEnabled
  }
  get syncProfileThemeWithUserTheme() {
    return O.syncProfileThemeWithUserTheme
  }
  get systemPrefersReducedMotion() {
    return O.systemPrefersReducedMotion
  }
  get rawPrefersReducedMotion() {
    return O.prefersReducedMotion
  }
  get useReducedMotion() {
    switch (O.prefersReducedMotion) {
      case "no-preference":
        returnfalse;
      case "reduce":
        returntrue;
      default:
        return "reduce" === O.systemPrefersReducedMotion
    }
  }
  get systemForcedColors() {
    return O.systemForcedColors
  }
  get syncForcedColors() {
    return O.syncForcedColors
  }
  get useForcedColors() {
    return !!O.syncForcedColors && "active" === O.systemForcedColors
  }
  get systemPrefersContrast() {
    return O.systemPrefersContrast
  }
  get systemPrefersCrossfades() {
    return O.systemPrefersCrossfades
  }
  get alwaysShowLinkDecorations() {
    return O.alwaysShowLinkDecorations
  }
  get enableCustomCursor() {
    return O.enableCustomCursor
  }
  get roleStyle() {
    return O.roleStyle
  }
  get displayNameStylesEnabled() {
    return O.displayNameStylesEnabled
  }
  get isHighContrastModeEnabled() {
    return "high" === O.contrastMode
  }
  get isSwitchIconsEnabled() {
    return O.switchIconsEnabled
  }
  getUserAgnosticState() {
    return O
  }
}
_(Q, "displayName", "AccessibilityStore"), _(Q, "persistKey", "AccessibilityStore"), _(Q, "migrations", [() => {
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
  } = e, n = g(e, ["fontScale"]), r = 16;
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
  return m(p({}, n), {
    fontSize: r
  })
}, e => m(p({}, e), {
  darkSidebar: false
}), e => m(p({}, e), {
  messageGroupSpacing: null
}), e => m(p({}, e), {
  systemPrefersReducedMotion: "no-preference",
  prefersReducedMotion: "auto"
}), e => m(p({}, e), {
  alwaysShowLinkDecorations: e.saturation <= o.AE
}), e => m(p({}, e), {
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
}, e => m(p({}, e), {
  enableCustomCursor: true
})]);
let J = new Q(Chunk570140.Z, {
  ACCESSIBILITY_SET_FONT_SIZE: T,
  ACCESSIBILITY_SET_ZOOM: S,
  ACCESSIBILITY_RESET_TO_DEFAULT: A,
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: C,
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: N,
  ACCESSIBILITY_COLORBLIND_TOGGLE: R,
  ACCESSIBILITY_LOW_CONTRAST_TOGGLE: P,
  ACCESSIBILITY_SET_SATURATION: D,
  ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: x,
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: H,
  ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: Z,
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: U,
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: G,
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: B,
  ACCESSIBILITY_SET_SYNC_FORCED_COLORS: w,
  ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: F,
  ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: V,
  ACCESSIBILITY_SET_ROLE_STYLE: L,
  ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: M,
  ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: Y,
  KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: W,
  ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: K,
  ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: k,
  ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: j,
  ACCESSIBILITY_SET_CONTRAST: z,
  ACCESSIBILITY_SET_CONTRAST_MODE: q,
  ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: X
})