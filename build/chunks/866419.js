/** Chunk was on web.js **/
/** chunk id: 866419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bv: () => h,
  SK: () => O,
  _m: () => _,
  ft: () => E,
  jJ: () => g,
  lT: () => b
}), require("./388685.js"), require("./49124.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk233398 = require("./233398.js"),
  Chunk238302 = require("./238302.js"),
  Chunk36982 = require("./36982.js"),
  Chunk469115 = require("./469115.js"),
  Chunk231338 = require("./231338.js"),
  _ = function(e) {
    return e.RESET_BUTTON = "reset_button", e.EDITOR_CLOSE = "editor_close", e
  }({});

function m(e) {
  return (0, a.wj)(e) ? p.BR.DARK : p.BR.LIGHT
}

function h(e) {
  let t = l.L1.getSetting(),
    n = null != t.backgroundGradientPresetId && t.backgroundGradientPresetId in f.qt && f.qt[t.backgroundGradientPresetId].theme !== e;
  (0, o.y)(e), n && (0, u.kj)()
}

function g() {
  let [e] = Chunk473749.useState(() => Chunk210887.Z.theme);
  return Chunk473749.useCallback(t => {
    let {
      resetColors: n,
      resetGradientAngle: r,
      resetChassisMixAmount: i,
      resetBaseTheme: a
    } = y(t, e);
    c.Ig.getState().setAll({
      colors: n,
      gradientAngle: r,
      chassisMixAmount: i
    }), "reset_button" === t ? h(m(null != a ? a : s.Z.theme)) : (0, o.UD)();
    let d = l.L1.getSetting().backgroundGradientPresetId;
    null != d && (0, u.zO)(d)
  }, [module])
}

function E() {
  let e = m(Chunk210887.Z.theme);
  module !== Chunk210887.Z.theme && h(module)
}

function b(e, t, n) {
  0 === e.length && n([t]), E()
}

function y(e, t) {
  var n, r, i, a;
  let o = l.L1.getSetting().customUserThemeSettings,
    s = d.Z.getSavedCustomTheme(),
    u = "reset_button" === e ? [c.Dp] : [],
    f = 0,
    p = c.BH,
    _ = t;
  return (null == o ? true : o.colors) != null ? (u = o.colors, f = null != (n = o.gradientAngle) ? n : 0, p = null != (r = o.baseMix) ? r : c.BH) : "reset_button" === e && null != s && (u = s.colors, f = null != (i = s.gradient_angle) ? i : 0, p = null != (a = s.base_mix) ? a : c.BH, _ = s.base_theme), {
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
  } = (0, Chunk233398.Ig)(), a = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), [o] = Chunk473749.useState(() => Chunk210887.Z.theme), {
    resetColors: l,
    resetGradientAngle: u,
    resetChassisMixAmount: d,
    resetBaseTheme: f
  } = y("reset_button", Chunk781391);
  return JSON.stringify(module) === JSON.stringify(Chunk695346) && exports === Chunk36982 && require === Chunk238302 && Chunk780384 === Chunk469115
}