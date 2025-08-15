/** Chunk was on 93886 **/
/** chunk id: 176038, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./457542.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk153867 = require("./153867.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk223143 = require("./223143.js"),
  Chunk164946 = require("./164946.js"),
  Chunk675478 = require("./675478.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk469115 = require("./469115.js");
let v = [Chunk981631.BRd.DARK, Chunk981631.BRd.LIGHT, Chunk981631.BRd.DARKER, Chunk981631.BRd.MIDNIGHT];

function f(e) {
  return e[Math.floor(Math.random() * e.length)]
}
async function j() {
  let e = function() {
      let e = Chunk594174.default.getCurrentUser();
      return Chunk74538.ZP.canUseClientThemes(module) ? Object.keys(Chunk469115.qt).map(e => Number(e)) : []
    }(),
    t = module.length > 0 && Math.random() > .7;
  try {
    if (exports) {
      let t, n = [...module, null],
        r = f(Chunk647438);
      if (null != Chunk442837) {
        var a;
        let e = Chunk469115.qt[Chunk442837];
        t = null != (a = null == module ? true : module.theme) ? require : Chunk981631.BRd.DARK
      } else t = f([Chunk981631.BRd.DARK, Chunk981631.BRd.DARKER, Chunk981631.BRd.MIDNIGHT]);
      await Chunk153867.ZI({
        theme: exports,
        backgroundGradientPresetId: null != Chunk442837 ? Chunk442837 : true,
        customUserThemeSettings: true
      }, Chunk675478.fy.INFREQUENT_USER_ACTION)
    } else {
      let e = f(v);
      await Chunk153867.ZI({
        theme: module,
        backgroundGradientPresetId: true,
        customUserThemeSettings: true
      }, Chunk675478.fy.INFREQUENT_USER_ACTION)
    }
  } catch (e) {}
}
async function g(e, t) {
  let a = e.length > 0,
    n = t.length > 0;
  if (a || n) try {
    if (a) {
      let t = f([...e, null]);
      (0, l.cV)(t)
    }
    if (n) {
      let e = f([...t, null]);
      (0, l.Rx)(e)
    }
    let r = m.Z.getAllPending(),
      i = (0, d.ED)(r);
    await (0, l.Mn)(i).finally(l.si)
  } catch (e) {}
}

function _() {
  (0, Chunk223143.mw)();
  let [e, t] = (0, Chunk442837.Wu)([Chunk1870.Z], () => {
    let e = Chunk1870.Z.purchases;
    return [(0, Chunk884697.Ad)(module), (0, Chunk884697.jT)(module)]
  }), a = Chunk647438.useCallback(() => {
    j(), g(module, exports)
  }, [module, exports]);
  Chunk647438.useEffect(() => {
    let e = setInterval(() => {
      require()
    }, 5e3);
    return () => clearInterval(module)
  }, [require])
}