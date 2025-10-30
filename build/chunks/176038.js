/** Chunk was on 95017 **/
/** chunk id: 176038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _Y: () => T,
  aB: () => S,
  th: () => E,
  ub: () => O
}), require("./388685.js"), require("./457542.js");
var Chunk647438 = require("./647438.js"),
  Chunk524437 = require("./524437.js"),
  Chunk809206 = require("./809206.js"),
  Chunk153867 = require("./153867.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk164946 = require("./164946.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk469115 = require("./469115.js"),
  Chunk959517 = require("./959517.js");
let _ = [Chunk981631.BRd.DARK, Chunk981631.BRd.LIGHT, Chunk981631.BRd.DARKER, Chunk981631.BRd.MIDNIGHT],
  y = [Chunk524437.Pi.COMPACT, Chunk524437.Pi.COZY, Chunk524437.Pi.DEFAULT];

function C(e) {
  return e[Math.floor(Math.random() * e.length)]
}
async function S() {
  let e = function() {
      let e = Chunk594174.default.getCurrentUser();
      return Chunk74538.ZP.canUseClientThemes(module) ? Object.keys(Chunk469115.qt).map(e => Number(e)) : []
    }(),
    t = module.length > 0 && Math.random() > .7;
  try {
    if (exports) {
      let t, a = [...module, null],
        r = C(Chunk647438);
      if (null != Chunk524437) {
        var n;
        let e = Chunk469115.qt[Chunk524437];
        t = null != (n = null == module ? true : module.theme) ? require : Chunk981631.BRd.DARK
      } else t = C([Chunk981631.BRd.DARK, Chunk981631.BRd.DARKER, Chunk981631.BRd.MIDNIGHT]);
      await Chunk153867.ZI({
        theme: exports,
        backgroundGradientPresetId: null != Chunk524437 ? Chunk524437 : true,
        customUserThemeSettings: true
      }, Chunk675478.fy.INFREQUENT_USER_ACTION)
    } else {
      let e = C(_);
      await Chunk153867.ZI({
        theme: module,
        backgroundGradientPresetId: true,
        customUserThemeSettings: true
      }, Chunk675478.fy.INFREQUENT_USER_ACTION)
    }
  } catch (e) {}
}
async function E() {
  let e = Chunk1870.Z.purchases,
    t = (0, Chunk884697.Ad)(module),
    n = (0, Chunk884697.jT)(module),
    a = exports.length > 0,
    r = require.length > 0;
  if (Chunk647438 || Chunk524437) try {
    if (Chunk647438) {
      let e = C([...exports, null]);
      (0, Chunk809206.cV)(module)
    }
    if (Chunk524437) {
      let e = C([...require, null]);
      (0, Chunk809206.Rx)(module)
    }
    let e = Chunk25990.Z.getAllPending(),
      i = (0, Chunk164946.ED)(module);
    await (0, Chunk809206.Mn)(Chunk153867).finally(Chunk809206.si)
  } catch (e) {}
}

function T() {
  try {
    let e = C(Chunk981631.yqN.FONT_SIZES);
    (0, Chunk857595.oL)(module);
    let t = C(Chunk959517.fP);
    (0, Chunk857595.ZZ)(exports);
    let n = C(y);
    Chunk695346.YC.updateSetting(require)
  } catch (e) {}
}

function O() {
  Chunk647438.useEffect(() => {
    var e, t, n, a, r;
    let f = Chunk594174.default.getCurrentUser(),
      b = Chunk695346.L1.getSetting(),
      v = Chunk1870.Z.purchases,
      j = (0, Chunk884697.Ad)(Chunk469115),
      _ = (0, Chunk884697.jT)(Chunk469115),
      y = Chunk210887.Z.theme,
      C = Chunk981631.backgroundGradientPresetId,
      S = null == Chunk74538 || null == (e = Chunk74538.avatarDecoration) ? true : module.skuId,
      E = null == Chunk74538 || null == (n = Chunk74538.collectibles) || null == (t = require.nameplate) ? true : exports.skuId,
      T = null != S && null != (a = Chunk959517.find(e => e.skuId === S)) ? Chunk647438 : null,
      O = null != E && null != (r = _.find(e => e.skuId === E)) ? Chunk524437 : null,
      N = Chunk607070.Z.fontSize,
      P = Chunk607070.Z.messageGroupSpacing,
      I = Chunk695346.YC.getSetting();
    return () => {
      try {
        Chunk153867.ZI({
          theme: y,
          backgroundGradientPresetId: null != C ? C : true,
          customUserThemeSettings: true
        }, Chunk675478.fy.INFREQUENT_USER_ACTION), (0, Chunk809206.cV)(T), (0, Chunk809206.Rx)(O);
        let e = Chunk25990.Z.getAllPending(),
          t = (0, Chunk164946.ED)(module);
        (0, Chunk809206.Mn)(exports).finally(Chunk809206.si), (0, Chunk857595.oL)(N), (0, Chunk857595.ZZ)(P), Chunk695346.YC.updateSetting(I)
      } catch (e) {}
    }
  }, [])
}