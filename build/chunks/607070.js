/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => z
});
var r, i = n(442837),
  o = n(433517),
  a = n(780384),
  s = n(570140),
  l = n(695346),
  c = n(581883),
  u = n(12647),
  d = n(981631),
  f = n(959517);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = {
    fontSize: d.yqN.FONT_SIZE_DEFAULT,
    zoom: d.yqN.ZOOM_DEFAULT,
    keyboardModeEnabled: !1,
    colorblindMode: !1,
    lowContrastMode: !1,
    saturation: 1,
    contrast: 1,
    desaturateUserColors: !1,
    forcedColorsModalSeen: !1,
    keyboardNavigationExplainerModalSeen: !1,
    messageGroupSpacing: null,
    systemPrefersReducedMotion: "no-preference",
    systemPrefersCrossfades: !1,
    prefersReducedMotion: "auto",
    systemForcedColors: "none",
    syncForcedColors: !0,
    systemPrefersContrast: "no-preference",
    alwaysShowLinkDecorations: !1,
    roleStyle: "username",
    submitButtonEnabled: !1,
    syncProfileThemeWithUserTheme: !1,
    hideGuildTags: !1
  },
  v = b,
  y = {
    12: "font-size-12",
    14: "font-size-14",
    15: "font-size-15",
    16: "font-size-16",
    18: "font-size-18",
    20: "font-size-20",
    24: "font-size-24"
  };

function O(e) {
  return d.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : d.yqN.FONT_SIZE_DEFAULT
}

function I(e) {
  let t = O(e.fontSize);
  if (t > d.yqN.FONT_SIZE_MAX || t < d.yqN.FONT_SIZE_MIN || v.fontSize === t) return !1;
  (v = p({}, v)).fontSize = t
}

function S(e) {
  if (e.zoom < d.yqN.ZOOM_MIN || e.zoom > d.yqN.ZOOM_MAX || v.zoom === e.zoom) return !1;
  (v = p({}, v)).zoom = e.zoom, u.Z.setZoomFactor(v.zoom)
}

function T() {
  let e = v.fontSize !== d.yqN.FONT_SIZE_DEFAULT,
    t = v.zoom !== d.yqN.ZOOM_DEFAULT;
  if (!e && !t) return !1;
  (v = p({}, v)).fontSize !== d.yqN.FONT_SIZE_DEFAULT && (v.fontSize = d.yqN.FONT_SIZE_DEFAULT), v.zoom !== d.yqN.ZOOM_DEFAULT && (v.zoom = d.yqN.ZOOM_DEFAULT, u.Z.setZoomFactor(v.zoom))
}

function N() {
  if (v.keyboardModeEnabled) return !1;
  (v = p({}, v)).keyboardModeEnabled = !0
}

function A() {
  if (!v.keyboardModeEnabled) return !1;
  (v = p({}, v)).keyboardModeEnabled = !1
}

function C() {
  (v = p({}, v)).colorblindMode = !v.colorblindMode
}

function R() {
  (v = p({}, v)).lowContrastMode = !v.lowContrastMode
}

function P(e) {
  v.syncForcedColors = e.syncForcedColors
}

function w(e) {
  (v = p({}, v)).saturation = e.saturation
}

function D() {
  (v = p({}, v)).desaturateUserColors = !v.desaturateUserColors
}

function L(e) {
  v.roleStyle = e.roleStyle
}

function x() {
  (v = p({}, v)).submitButtonEnabled = !v.submitButtonEnabled
}

function M() {
  (v = p({}, v)).syncProfileThemeWithUserTheme = !v.syncProfileThemeWithUserTheme
}

function k(e) {
  if (v.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
  v = m(p({}, v), {
    systemPrefersReducedMotion: e.systemPrefersReducedMotion
  })
}

function j(e) {
  if (v.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
  v = m(p({}, v), {
    systemPrefersCrossfades: e.systemPrefersCrossfades
  })
}

function U(e) {
  if (v.prefersReducedMotion === e.prefersReducedMotion) return !1;
  v = m(p({}, v), {
    prefersReducedMotion: e.prefersReducedMotion
  })
}

function G(e) {
  if (v.systemPrefersContrast === e.systemPrefersContrast) return !1;
  v = m(p({}, v), {
    systemPrefersContrast: e.systemPrefersContrast
  })
}

function B(e) {
  v = m(p({}, v), {
    alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
  })
}

function F(e) {
  var t;
  return v = m(p({}, v), {
    systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : "none"
  }), !0
}

function V() {
  v.forcedColorsModalSeen = !0
}

function Z() {
  v = m(p({}, v), {
    keyboardNavigationExplainerModalSeen: !0
  })
}

function H(e) {
  let {
    messageGroupSpacing: t
  } = e;
  v = m(p({}, v), {
    messageGroupSpacing: t
  })
}

function W(e) {
  let {
    contrast: t
  } = e;
  v = m(p({}, v), {
    contrast: t
  })
}

function Y(e) {
  let {
    hideTags: t
  } = e;
  v = m(p({}, v), {
    hideGuildTags: t
  })
}
class K extends(r = i.ZP.DeviceSettingsStore) {
  initialize(e) {
    this.waitFor(c.Z), isNaN((v = p({}, b, null != e ? e : null)).fontSize) && (v.fontSize = d.yqN.FONT_SIZE_DEFAULT), 0 > f.fP.indexOf(null != v.messageGroupSpacing ? v.messageGroupSpacing : -1) && (v.messageGroupSpacing = null)
  }
  get fontScale() {
    return v.fontSize / d.yqN.FONT_SIZE_DEFAULT * 100
  }
  get fontSize() {
    return v.fontSize
  }
  get isFontScaledUp() {
    return v.fontSize > d.yqN.FONT_SIZE_DEFAULT
  }
  get isFontScaledDown() {
    return v.fontSize < d.yqN.FONT_SIZE_DEFAULT
  }
  get fontScaleClass() {
    var e;
    let t = null !== (e = y[this.fontSize]) && void 0 !== e ? e : "";
    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
  }
  get zoom() {
    return v.zoom
  }
  get isZoomedIn() {
    return v.zoom > d.yqN.ZOOM_DEFAULT
  }
  get isZoomedOut() {
    return v.zoom < d.yqN.ZOOM_DEFAULT
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
    return null != v.messageGroupSpacing ? v.messageGroupSpacing : l.jU.getSetting() ? f.c8 : f.pq
  }
  get isMessageGroupSpacingIncreased() {
    let e = l.jU.getSetting() ? f.c8 : f.pq;
    return this.messageGroupSpacing > e
  }
  get isMessageGroupSpacingDecreased() {
    let e = l.jU.getSetting() ? f.c8 : f.pq;
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
    switch (v.prefersReducedMotion) {
      case "no-preference":
        return !1;
      case "reduce":
        return !0;
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
  get roleStyle() {
    return v.roleStyle
  }
  get hideTags() {
    return v.hideGuildTags
  }
  getUserAgnosticState() {
    return v
  }
}
_(K, "displayName", "AccessibilityStore"), _(K, "persistKey", "AccessibilityStore"), _(K, "migrations", [() => {
  let e = "a11yFontScale",
    t = "a11yZoom",
    n = "a11yColorblindMode",
    r = o.K.get(e) || 100,
    i = o.K.get(t) || d.yqN.ZOOM_DEFAULT,
    a = o.K.get(n) || !1;
  return o.K.remove(e), o.K.remove(t), o.K.remove(n), {
    fontScale: r,
    zoom: i,
    colorblindMode: a,
    keyboardModeEnabled: !1
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
  darkSidebar: !1
}), e => m(p({}, e), {
  messageGroupSpacing: null
}), e => m(p({}, e), {
  systemPrefersReducedMotion: "no-preference",
  prefersReducedMotion: "auto"
}), e => m(p({}, e), {
  alwaysShowLinkDecorations: e.saturation <= a.AE
}), e => m(p({}, e), {
  disableVoiceBackgrounds: !1
}), e => {
  try {
    delete e.disableVoiceBackgrounds
  } catch (e) {}
  return e
}]);
let z = new K(s.Z, {
  ACCESSIBILITY_SET_FONT_SIZE: I,
  ACCESSIBILITY_SET_ZOOM: S,
  ACCESSIBILITY_RESET_TO_DEFAULT: T,
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: N,
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: A,
  ACCESSIBILITY_COLORBLIND_TOGGLE: C,
  ACCESSIBILITY_LOW_CONTRAST_TOGGLE: R,
  ACCESSIBILITY_SET_SATURATION: w,
  ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: D,
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: F,
  ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: G,
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: k,
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: j,
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: U,
  ACCESSIBILITY_SET_SYNC_FORCED_COLORS: P,
  ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: B,
  ACCESSIBILITY_SET_ROLE_STYLE: L,
  ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: V,
  KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: Z,
  ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: H,
  ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: x,
  ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: M,
  ACCESSIBILITY_SET_CONTRAST: W,
  ACCESSIBILITY_SET_HIDE_TAGS: Y
})