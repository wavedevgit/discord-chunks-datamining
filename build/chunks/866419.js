/** Chunk was on web.js **/
/** chunk id: 866419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bv: () => b,
  SK: () => T,
  YZ: () => S,
  _m: () => g,
  ft: () => O,
  jJ: () => y,
  lT: () => v,
  zu: () => m
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
  Chunk36982 = require("./36982.js"),
  Chunk803038 = require("./803038.js"),
  Chunk893712 = require("./893712.js"),
  Chunk469115 = require("./469115.js"),
  Chunk231338 = require("./231338.js");

function m() {
  returnfalse
}
var g = function(e) {
  return e.RESET_BUTTON = "reset_button", e.EDITOR_CLOSE = "editor_close", e
}({});

function E(e) {
  return (0, a.wj)(e) ? h.BR.DARK : h.BR.LIGHT
}

function b(e) {
  let t = l.L1.getSetting(),
    n = null != t.backgroundGradientPresetId && t.backgroundGradientPresetId in p.qt && p.qt[t.backgroundGradientPresetId].theme !== e;
  (0, o.y)(e), n && (0, u.kj)()
}

function y() {
  let [e] = Chunk473749.useState(() => Chunk210887.Z.theme);
  return Chunk473749.useCallback(t => {
    let {
      resetColors: n,
      resetGradientAngle: r,
      resetChassisMixAmount: i,
      resetBaseTheme: a
    } = I(t, e);
    c.Ig.getState().setAll({
      colors: n,
      gradientAngle: r,
      chassisMixAmount: i
    }), "reset_button" === t ? b(E(null != a ? a : s.Z.theme)) : (0, o.UD)();
    let d = l.L1.getSetting().backgroundGradientPresetId;
    null != d && (0, u.zO)(d)
  }, [module])
}

function O() {
  let e = E(Chunk210887.Z.theme);
  module !== Chunk210887.Z.theme && b(module)
}

function v(e, t, n) {
  0 === e.length && n([t]), O()
}

function I(e, t) {
  var n, r, i, a;
  let o = l.L1.getSetting().customUserThemeSettings,
    s = d.Z.getSavedCustomTheme(),
    u = "reset_button" === e ? [c.Dp] : [],
    f = 0,
    _ = c.BH,
    p = t;
  return (null == o ? true : o.colors) != null ? (u = o.colors, f = null != (n = o.gradientAngle) ? n : 0, _ = null != (r = o.baseMix) ? r : c.BH) : "reset_button" === e && null != s && (u = s.colors, f = null != (i = s.gradient_angle) ? i : 0, _ = null != (a = s.base_mix) ? a : c.BH, p = s.base_theme), {
    resetColors: u,
    resetGradientAngle: f,
    resetChassisMixAmount: _,
    resetBaseTheme: p
  }
}

function T() {
  let {
    colors: e,
    chassisMixAmount: t,
    gradientAngle: n
  } = (0, Chunk233398.Ig)(), a = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), [o] = Chunk473749.useState(() => Chunk210887.Z.theme), {
    resetColors: l,
    resetGradientAngle: u,
    resetChassisMixAmount: d,
    resetBaseTheme: f
  } = I("reset_button", Chunk781391);
  return JSON.stringify(module) === JSON.stringify(Chunk695346) && exports === Chunk36982 && require === Chunk238302 && Chunk780384 === Chunk803038
}

function S(e) {
  let t = _.L.useExperiment({
      location: e
    }).enabled,
    n = f.Mc.useExperiment({
      location: e
    }).v2EditorEnabled;
  return t && n
}