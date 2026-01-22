/** Chunk was on web.js **/
/** chunk id: 230835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Y: () => b,
  IE: () => m,
  JB: () => _,
  eq: () => E,
  tr: () => O,
  vC: () => g
}), require("./896048.js"), require("./457529.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk973654 = require("./973654.js"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk467135 = require("./467135.js"),
  Chunk823459 = require("./823459.js"),
  Chunk74396 = require("./74396.js"),
  Chunk385803 = require("./385803.js"),
  Chunk818348 = require("./818348.js"),
  _ = function(e) {
    return e.RESET_BUTTON = "reset_button", e.EDITOR_CLOSE = "editor_close", e
  }({});

function h(e) {
  return (0, a.Mw)(e) ? p.NJ.DARK : p.NJ.LIGHT
}

function m(e) {
  let t = l.eh.getSetting(),
    n = null != t.backgroundGradientPresetId && t.backgroundGradientPresetId in f.ag && f.ag[t.backgroundGradientPresetId].theme !== e;
  (0, s.GQ)(e), n && (0, u.S8)()
}

function g() {
  let [e] = r.useState(() => o.A.theme);
  return r.useCallback(t => {
    let {
      resetColors: n,
      resetGradientAngle: r,
      resetChassisMixAmount: i,
      resetBaseTheme: a
    } = y(t, e);
    c.ko.getState().setAll({
      colors: n,
      gradientAngle: r,
      chassisMixAmount: i
    }), "reset_button" === t ? m(h(null != a ? a : o.A.theme)) : (0, s.XG)();
    let d = l.eh.getSetting().backgroundGradientPresetId;
    null != d && (0, u.bc)(d)
  }, [e])
}

function E() {
  let e = h(o.A.theme);
  e !== o.A.theme && m(e)
}

function b(e, t, n) {
  0 === e.length && n([t]), E()
}

function y(e, t) {
  var n, r, i, a;
  let s = l.eh.getSetting().customUserThemeSettings,
    o = d.A.getSavedCustomTheme(),
    u = "reset_button" === e ? [c.OT] : [],
    f = 0,
    p = c.kJ,
    _ = t;
  return (null == s ? true : s.colors) != null ? (u = s.colors, f = null != (n = s.gradientAngle) ? n : 0, p = null != (r = s.baseMix) ? r : c.kJ) : "reset_button" === e && null != o && (u = o.colors, f = null != (i = o.gradient_angle) ? i : 0, p = null != (a = o.base_mix) ? a : c.kJ, _ = o.base_theme), {
    resetColors: u,
    resetGradientAngle: f,
    resetChassisMixAmount: p,
    resetBaseTheme: _
  }
}

function O() {
  let {
    colors: e,
    chassisMixAmount: t,
    gradientAngle: n
  } = (0, c.ko)(), a = (0, i.bG)([o.A], () => o.A.theme), [s] = r.useState(() => o.A.theme), {
    resetColors: l,
    resetGradientAngle: u,
    resetChassisMixAmount: d,
    resetBaseTheme: f
  } = y("reset_button", s);
  return JSON.stringify(e) === JSON.stringify(l) && t === d && n === u && a === f
}