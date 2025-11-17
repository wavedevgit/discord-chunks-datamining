/** Chunk was on web.js **/
/** chunk id: 168551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PQ: () => p,
  ZP: () => g,
  e3: () => Chunk575196.e3
});
var Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk210887 = require("./210887.js"),
  Chunk581883 = require("./581883.js"),
  Chunk575196 = require("./575196.js"),
  Chunk233398 = require("./233398.js"),
  Chunk514361 = require("./514361.js"),
  Chunk803038 = require("./803038.js");
let p = "data-client-themes",
  h = () => {
    let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
    return Chunk473749.useMemo(() => {
      if (null == module) return null;
      let t = Chunk514361.Z.getLinearGradient();
      return null == exports ? null : (0, Chunk575196.yf)(module, exports)
    }, [module])
  };

function m() {
  let e = Chunk803038.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    t = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    {
      colors: n,
      chassisMixAmount: i,
      gradientAngle: a,
      setAll: f
    } = (0, Chunk233398.Ig)(),
    p = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e, t;
      return null == (t = Chunk581883.Z.settings.appearance) || null == (e = exports.clientThemeSettings) ? true : module.customUserThemeSettings
    }),
    h = Chunk473749.useRef(true);
  return Chunk473749.useEffect(() => {
    if (!(0, Chunk392711.isEqual)(p, h.current)) {
      var e, t, n;
      h.current = p, Chunk514361({
        colors: null != (e = null == p ? true : p.colors) ? module : [],
        gradientAngle: null != (t = null == p ? true : p.gradientAngle) ? exports : 0,
        chassisMixAmount: null != (n = null == p ? true : p.baseMix) ? require : Chunk233398.BH
      })
    }
  }, [p, Chunk514361]), Chunk473749.useMemo(() => module && 0 !== require.length ? (0, Chunk575196.gj)(require, a, Chunk120356, exports) : null, [require, Chunk120356, a, module, exports])
}

function g() {
  let e = h(),
    t = m();
  return null != exports ? {
    clientThemesCSS: exports,
    clientThemesClassName: a()(Chunk575196.e3, Chunk575196.pX)
  } : null === module ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: module,
    clientThemesClassName: Chunk575196.e3
  }
}