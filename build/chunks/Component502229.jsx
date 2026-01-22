/** Chunk was on web.js **/
/** chunk id: 502229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I,
  D: () => S
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk973654 = require("./973654.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk652215 = require("./652215.js"),
  Chunk185928 = require("./185928.js");

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
let m = window.matchMedia("(prefers-reduced-motion: reduce)"),
  g = window.matchMedia("(prefers-contrast: more)"),
  E = window.matchMedia("(prefers-contrast: less)"),
  b = window.matchMedia("(prefers-color-scheme: dark)"),
  y = window.matchMedia("(prefers-color-scheme: light)"),
  O = window.matchMedia("(forced-colors: active)"),
  A = 5;

function v() {
  let e = o.default.getCurrentUser();
  return null == e || Date.now() - e.createdAt < 864e5
}

function S() {
  return "windows" === (0, c.getOS)()
}
let I = {
  initBasic() {
    m.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(m), b.addListener(this.handleSystemColorPreferencesChanged), y.addListener(this.handleSystemColorPreferencesChanged), O.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), g.addListener(this.handleSystemPrefersContrastChanged), E.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
  },
  init() {
    this.initBasic(), a.h.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      l.default.track(f.HAw.LOCAL_SETTINGS_UPDATED, {
        colorblind_enabled: d.A.colorblindMode
      })
    }), a.h.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
      l.default.track(f.HAw.LOCAL_SETTINGS_UPDATED, {
        saturation_level: e.saturation
      })
    })
  },
  maybeShowKeyboardNavigationExplainerModal() {
    A = Math.max(A - 1, 0), v() || d.A.keyboardNavigationExplainerModalSeen || 0 !== A || (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("98186").then(n.bind(n, 645905));
      return t => (0, r.jsx)(e, h({}, t))
    })
  },
  handleSystemPrefersReducedMotionChanged(e) {
    a.h.wait(() => {
      u.RJ(e.matches ? "reduce" : "no-preference")
    })
  },
  handleSystemColorPreferencesChanged() {
    let e = p.Fc.NO_PREFERENCE;
    b.matches ? e = p.Fc.DARK : y.matches && (e = p.Fc.LIGHT);
    let t = (!c.isPlatformEmbedded || S()) && O.matches ? "active" : "none";
    a.h.wait(() => {
      s.LA(e), u.RI(t)
    })
  },
  handleSystemPrefersContrastChanged() {
    let e = "no-preference";
    g.matches ? e = "more" : E.matches && (e = "less"), a.h.wait(() => {
      u.Jb(e)
    })
  }
}