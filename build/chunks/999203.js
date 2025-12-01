/** Chunk was on web.js **/
/** chunk id: 999203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PQ: () => _,
  ZP: () => g,
  e3: () => Chunk639745.e3
});
var Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk210887 = require("./210887.js"),
  Chunk581883 = require("./581883.js"),
  Chunk233398 = require("./233398.js"),
  Chunk514361 = require("./514361.js"),
  Chunk803038 = require("./803038.js"),
  Chunk639745 = require("./639745.js");
let _ = "data-client-themes",
  m = () => {
    let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
    return Chunk473749.useMemo(() => {
      if (null == module) return null;
      let t = Chunk514361.Z.getLinearGradient();
      return null == exports ? null : (0, Chunk639745.yf)(module, exports)
    }, [module])
  };

function h() {
  let e = Chunk803038.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    t = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    {
      colors: n,
      chassisMixAmount: i,
      gradientAngle: a,
      setAll: d
    } = (0, Chunk233398.Ig)(),
    _ = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e, t;
      return null == (t = Chunk581883.Z.settings.appearance) || null == (e = exports.clientThemeSettings) ? true : module.customUserThemeSettings
    }),
    m = Chunk473749.useRef(true);
  return Chunk473749.useEffect(() => {
    if (!(0, Chunk392711.isEqual)(_, m.current)) {
      var e, t, n;
      m.current = _, Chunk514361({
        colors: null != (e = null == _ ? true : _.colors) ? module : [],
        gradientAngle: null != (t = null == _ ? true : _.gradientAngle) ? exports : 0,
        chassisMixAmount: null != (n = null == _ ? true : _.baseMix) ? require : Chunk233398.BH
      })
    }
  }, [_, Chunk514361]), Chunk473749.useMemo(() => module && 0 !== require.length ? (0, Chunk639745.gj)(require, a, Chunk120356, exports) : null, [require, Chunk120356, a, module, exports])
}

function g() {
  let e = m(),
    t = h();
  return null != exports ? {
    clientThemesCSS: exports,
    clientThemesClassName: a()(Chunk639745.e3, Chunk639745.pX)
  } : null === module ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: module,
    clientThemesClassName: Chunk639745.e3
  }
}