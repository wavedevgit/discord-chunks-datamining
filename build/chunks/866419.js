/** Chunk was on web.js **/
/** chunk id: 866419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bv: () => g,
  SK: () => v,
  _m: () => m,
  ft: () => b,
  jJ: () => E,
  lT: () => y,
  zu: () => _
}), require("./388685.js"), require("./49124.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js");
require("./581883.js");
var Chunk233398 = require("./233398.js"),
  Chunk238302 = require("./238302.js"),
  Chunk36982 = require("./36982.js");
require("./803038.js");
var Chunk469115 = require("./469115.js"),
  Chunk231338 = require("./231338.js");

function _() {
  returnfalse
}
var m = function(e) {
  return e.RESET_BUTTON = "reset_button", e.EDITOR_CLOSE = "editor_close", e
}({});

function h(e) {
  return (0, a.wj)(e) ? p.BR.DARK : p.BR.LIGHT
}

function g(e) {
  let t = l.L1.getSetting(),
    n = null != t.backgroundGradientPresetId && t.backgroundGradientPresetId in f.qt && f.qt[t.backgroundGradientPresetId].theme !== e;
  (0, o.y)(e), n && (0, u.kj)()
}

function E() {
  let [e] = Chunk473749.useState(() => Chunk210887.Z.theme);
  return Chunk473749.useCallback(t => {
    let {
      resetColors: n,
      resetGradientAngle: r,
      resetChassisMixAmount: i,
      resetBaseTheme: a
    } = O(t, e);
    c.Ig.getState().setAll({
      colors: n,
      gradientAngle: r,
      chassisMixAmount: i
    }), "reset_button" === t ? g(h(null != a ? a : s.Z.theme)) : (0, o.UD)();
    let d = l.L1.getSetting().backgroundGradientPresetId;
    null != d && (0, u.zO)(d)
  }, [module])
}

function b() {
  let e = h(Chunk210887.Z.theme);
  module !== Chunk210887.Z.theme && g(module)
}

function y(e, t, n) {
  0 === e.length && n([t]), b()
}

function O(e, t) {
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

function v() {
  let {
    colors: e,
    chassisMixAmount: t,
    gradientAngle: n
  } = (0, Chunk233398.Ig)(), a = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), [o] = Chunk473749.useState(() => Chunk210887.Z.theme), {
    resetColors: l,
    resetGradientAngle: u,
    resetChassisMixAmount: d,
    resetBaseTheme: f
  } = O("reset_button", Chunk781391);
  return JSON.stringify(module) === JSON.stringify(Chunk695346) && exports === Chunk36982 && require === Chunk238302 && Chunk780384 === Chunk469115
}