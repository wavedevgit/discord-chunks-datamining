/** Chunk was on web.js **/
/** chunk id: 999203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PQ: () => p,
  ZP: () => h,
  e3: () => f.e3
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
    let e = (0, s.e7)([d.Z], () => d.Z.gradientPreset);
    return r.useMemo(() => {
      if (null == e) return null;
      let t = d.Z.getLinearGradient();
      return null == t ? null : (0, f.yf)(e, t)
    }, [e])
  };

function m() {
  let e = (0, s.e7)([l.Z], () => l.Z.theme),
    {
      colors: t,
      chassisMixAmount: n,
      gradientAngle: i,
      setAll: a
    } = (0, u.Ig)(),
    d = (0, s.e7)([c.Z], () => {
      var e, t;
      return null == (t = c.Z.settings.appearance) || null == (e = t.clientThemeSettings) ? true : e.customUserThemeSettings
    }),
    p = r.useRef(true);
  return r.useEffect(() => {
    if (!(0, o.isEqual)(d, p.current)) {
      var e, t, n;
      p.current = d, a({
        colors: null != (e = null == d ? true : d.colors) ? e : [],
        gradientAngle: null != (t = null == d ? true : d.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == d ? true : d.baseMix) ? n : u.BH
      })
    }
  }, [d, a]), r.useMemo(() => 0 === t.length ? null : (0, f.gj)(t, i, n, e), [t, n, i, e])
}

function h() {
  let e = _(),
    t = m();
  return null != t ? {
    clientThemesCSS: t,
    clientThemesClassName: a()(f.e3, f.pX)
  } : null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: f.e3
  }
}