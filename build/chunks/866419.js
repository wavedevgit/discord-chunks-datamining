/** Chunk was on web.js **/
/** chunk id: 866419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bv: () => h,
  SK: () => b,
  _m: () => _,
  ft: () => g,
  jJ: () => m,
  lT: () => E,
  zu: () => f
}), require("./49124.js");
var Chunk73800 = require("./73800.js"),
  Chunk780384 = require("./780384.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js");
require("./581883.js");
var Chunk233398 = require("./233398.js"),
  Chunk238302 = require("./238302.js");
require("./803038.js");
var Chunk469115 = require("./469115.js"),
  Chunk231338 = require("./231338.js");

function f() {
  returnfalse
}
var _ = function(e) {
  return e.RESET_BUTTON = "reset_button", e.EDITOR_CLOSE = "editor_close", e
}({});

function p(e) {
  return (0, i.wj)(e) ? d.BR.DARK : d.BR.LIGHT
}

function h(e) {
  let t = s.L1.getSetting(),
    n = null != t.backgroundGradientPresetId && t.backgroundGradientPresetId in u.qt && u.qt[t.backgroundGradientPresetId].theme !== e;
  (0, a.y)(e), n && (0, c.kj)()
}

function m() {
  let e = Chunk73800.useRef(null);
  return Chunk73800.useEffect(() => {
    module.current = Chunk210887.Z.theme
  }, []), Chunk73800.useCallback(t => {
    var n, r, i, u;
    let d = s.L1.getSetting().customUserThemeSettings;
    l.Ig.getState().setAll({
      colors: null != (n = null == d ? true : d.colors) ? n : "reset_button" === t ? [l.Dp] : [],
      gradientAngle: null != (r = null == d ? true : d.gradientAngle) ? r : 0,
      chassisMixAmount: null != (i = null == d ? true : d.baseMix) ? i : l.BH
    }), "reset_button" === t ? h(p(null != (u = e.current) ? u : o.Z.theme)) : (0, a.UD)();
    let f = s.L1.getSetting().backgroundGradientPresetId;
    null != f && (0, c.zO)(f)
  }, [])
}

function g() {
  let e = p(Chunk210887.Z.theme);
  module !== Chunk210887.Z.theme && h(module)
}

function E(e, t, n) {
  0 === e.length && n([t]), g()
}

function b() {
  var e, t, n;
  let {
    colors: r,
    chassisMixAmount: i,
    gradientAngle: a
  } = (0, Chunk233398.Ig)(), o = Chunk695346.L1.getSetting().customUserThemeSettings, c = null != (e = null == Chunk210887 ? true : Chunk210887.colors) ? module : [Chunk233398.Dp], u = null != (t = null == Chunk210887 ? true : Chunk210887.gradientAngle) ? exports : 0, d = null != (n = null == Chunk210887 ? true : Chunk210887.baseMix) ? require : Chunk233398.BH;
  return JSON.stringify(Chunk73800) === JSON.stringify(Chunk238302) && Chunk780384 === Chunk231338 && Chunk781391 === Chunk469115
}