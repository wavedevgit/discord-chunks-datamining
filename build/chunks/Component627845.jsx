/** Chunk was on web.js **/
/** chunk id: 627845, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T,
  b: () => I
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk781391 = require("./781391.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js"),
  Chunk874893 = require("./874893.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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
let h = window.matchMedia("(prefers-reduced-motion: reduce)"),
  g = window.matchMedia("(prefers-contrast: more)"),
  E = window.matchMedia("(prefers-contrast: less)"),
  b = window.matchMedia("(prefers-color-scheme: dark)"),
  y = window.matchMedia("(prefers-color-scheme: light)"),
  O = window.matchMedia("(forced-colors: active)"),
  v = 5;

function S() {
  let e = Chunk594174.default.getCurrentUser();
  return null == module || Date.now() - module.createdAt < 864e5
}

function I() {
  return "windows" === (0, Chunk358085.getOS)()
}
let T = {
  initBasic() {
    h.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(h), b.addListener(this.handleSystemColorPreferencesChanged), y.addListener(this.handleSystemColorPreferencesChanged), O.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), g.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
  },
  init() {
    this.initBasic(), Chunk570140.Z.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      Chunk626135.default.track(Chunk981631.rMx.LOCAL_SETTINGS_UPDATED, {
        colorblind_enabled: Chunk607070.Z.colorblindMode
      })
    }), Chunk570140.Z.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
      l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, {
        saturation_level: e.saturation
      })
    })
  },
  maybeShowKeyboardNavigationExplainerModal() {
    v = Math.max(v - 1, 0), S() || Chunk607070.Z.keyboardNavigationExplainerModalSeen || 0 !== v || (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("73872").then(require.bind(require, 461964));
      return t => (0, r.jsx)(e, m({}, t))
    })
  },
  handleSystemPrefersReducedMotionChanged(e) {
    o.Z.wait(() => {
      u.Nc(e.matches ? "reduce" : "no-preference")
    })
  },
  handleSystemColorPreferencesChanged() {
    let e = Chunk874893.zd.NO_PREFERENCE;
    b.matches ? e = Chunk874893.zd.DARK : y.matches && (e = Chunk874893.zd.LIGHT);
    let t = (!Chunk358085.isPlatformEmbedded || I()) && O.matches ? "active" : "none";
    Chunk570140.Z.wait(() => {
      Chunk781391.Q_(module), Chunk857595.Ej(exports)
    })
  },
  handleSystemPrefersContrastChanged() {
    let e = "no-preference";
    g.matches ? e = "more" : E.matches && (e = "less"), Chunk570140.Z.wait(() => {
      Chunk857595.TX(module)
    })
  }
}