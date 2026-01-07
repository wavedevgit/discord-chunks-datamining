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
  let e = s.default.getCurrentUser();
  return null == e || Date.now() - e.createdAt < 864e5
}

function I() {
  return "windows" === (0, c.getOS)()
}
let T = {
  initBasic() {
    h.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(h), b.addListener(this.handleSystemColorPreferencesChanged), y.addListener(this.handleSystemColorPreferencesChanged), O.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), g.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
  },
  init() {
    this.initBasic(), a.Z.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, {
        colorblind_enabled: d.Z.colorblindMode
      })
    }), a.Z.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
      l.default.track(f.rMx.LOCAL_SETTINGS_UPDATED, {
        saturation_level: e.saturation
      })
    })
  },
  maybeShowKeyboardNavigationExplainerModal() {
    v = Math.max(v - 1, 0), S() || d.Z.keyboardNavigationExplainerModalSeen || 0 !== v || (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("73872").then(n.bind(n, 461964));
      return t => (0, r.jsx)(e, m({}, t))
    })
  },
  handleSystemPrefersReducedMotionChanged(e) {
    a.Z.wait(() => {
      u.Nc(e.matches ? "reduce" : "no-preference")
    })
  },
  handleSystemColorPreferencesChanged() {
    let e = p.zd.NO_PREFERENCE;
    b.matches ? e = p.zd.DARK : y.matches && (e = p.zd.LIGHT);
    let t = (!c.isPlatformEmbedded || I()) && O.matches ? "active" : "none";
    a.Z.wait(() => {
      o.Q_(e), u.Ej(t)
    })
  },
  handleSystemPrefersContrastChanged() {
    let e = "no-preference";
    g.matches ? e = "more" : E.matches && (e = "less"), a.Z.wait(() => {
      u.TX(e)
    })
  }
}