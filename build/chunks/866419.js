/** Chunk was on web.js **/
/** chunk id: 866419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bv: () => g,
  SK: () => O,
  YZ: () => v,
  _m: () => h,
  ft: () => b,
  jJ: () => E,
  lT: () => y,
  zu: () => p
}), require("./49124.js");
var Chunk647438 = require("./647438.js"),
  Chunk780384 = require("./780384.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js");
require("./581883.js");
var Chunk233398 = require("./233398.js"),
  Chunk238302 = require("./238302.js"),
  Chunk803038 = require("./803038.js"),
  Chunk893712 = require("./893712.js"),
  Chunk469115 = require("./469115.js"),
  Chunk231338 = require("./231338.js");

function p() {
  returnfalse
}
var h = function(e) {
  return e.RESET_BUTTON = "reset_button", e.EDITOR_CLOSE = "editor_close", e
}({});

function m(e) {
  return (0, i.wj)(e) ? _.BR.DARK : _.BR.LIGHT
}

function g(e) {
  let t = s.L1.getSetting(),
    n = null != t.backgroundGradientPresetId && t.backgroundGradientPresetId in f.qt && f.qt[t.backgroundGradientPresetId].theme !== e;
  (0, o.y)(e), n && (0, c.kj)()
}

function E() {
  let e = Chunk647438.useRef(null);
  return Chunk647438.useEffect(() => {
    module.current = Chunk210887.Z.theme
  }, []), Chunk647438.useCallback(t => {
    var n, r, i, u;
    let d = s.L1.getSetting().customUserThemeSettings;
    l.Ig.getState().setAll({
      colors: null != (n = null == d ? true : d.colors) ? n : "reset_button" === t ? [l.Dp] : [],
      gradientAngle: null != (r = null == d ? true : d.gradientAngle) ? r : 0,
      chassisMixAmount: null != (i = null == d ? true : d.baseMix) ? i : l.BH
    }), "reset_button" === t ? g(m(null != (u = e.current) ? u : a.Z.theme)) : (0, o.UD)();
    let f = s.L1.getSetting().backgroundGradientPresetId;
    null != f && (0, c.zO)(f)
  }, [])
}

function b() {
  let e = m(Chunk210887.Z.theme);
  module !== Chunk210887.Z.theme && g(module)
}

function y(e, t, n) {
  0 === e.length && n([t]), b()
}

function O() {
  var e, t, n;
  let {
    colors: r,
    chassisMixAmount: i,
    gradientAngle: o
  } = (0, Chunk233398.Ig)(), a = Chunk695346.L1.getSetting().customUserThemeSettings, c = null != (e = null == Chunk210887 ? true : Chunk210887.colors) ? module : [Chunk233398.Dp], u = null != (t = null == Chunk210887 ? true : Chunk210887.gradientAngle) ? exports : 0, d = null != (n = null == Chunk210887 ? true : Chunk210887.baseMix) ? require : Chunk233398.BH;
  return JSON.stringify(Chunk647438) === JSON.stringify(Chunk238302) && Chunk780384 === Chunk893712 && Chunk781391 === Chunk803038
}

function v(e) {
  let t = d.L.useExperiment({
      location: e
    }).enabled,
    n = u.Mc.useExperiment({
      location: e
    }).v2EditorEnabled;
  return t && n
}