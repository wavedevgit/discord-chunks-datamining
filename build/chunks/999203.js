/** Chunk was on web.js **/
/** chunk id: 999203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PQ: () => p,
  ZP: () => h,
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
  Chunk639745 = require("./639745.js");
let p = "data-client-themes",
  _ = () => {
    let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
    return Chunk473749.useMemo(() => {
      if (null == module) return null;
      let t = Chunk514361.Z.getLinearGradient();
      return null == exports ? null : (0, Chunk639745.yf)(module, exports)
    }, [module])
  };

function m() {
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    {
      colors: t,
      chassisMixAmount: n,
      gradientAngle: i,
      setAll: a
    } = (0, Chunk233398.Ig)(),
    d = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e, t;
      return null == (t = Chunk581883.Z.settings.appearance) || null == (e = exports.clientThemeSettings) ? true : module.customUserThemeSettings
    }),
    p = Chunk473749.useRef(true);
  return Chunk473749.useEffect(() => {
    if (!(0, Chunk392711.isEqual)(Chunk514361, p.current)) {
      var e, t, n;
      p.current = Chunk514361, a({
        colors: null != (e = null == Chunk514361 ? true : Chunk514361.colors) ? module : [],
        gradientAngle: null != (t = null == Chunk514361 ? true : Chunk514361.gradientAngle) ? exports : 0,
        chassisMixAmount: null != (n = null == Chunk514361 ? true : Chunk514361.baseMix) ? require : Chunk233398.BH
      })
    }
  }, [Chunk514361, a]), Chunk473749.useMemo(() => 0 === exports.length ? null : (0, Chunk639745.gj)(exports, Chunk120356, require, module), [exports, require, Chunk120356, module])
}

function h() {
  let e = _(),
    t = m();
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