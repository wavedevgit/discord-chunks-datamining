/** Chunk was on web.js **/
/** chunk id: 590703, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => m,
  Gc: () => f.Gc,
  Vg: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk544028 = require("./544028.js"),
  Chunk617617 = require("./617617.js"),
  Chunk467135 = require("./467135.js"),
  Chunk47671 = require("./47671.js"),
  Chunk153469 = require("./153469.js");
let p = "data-client-themes",
  _ = () => {
    let e = (0, s.bG)([d.A], () => d.A.gradientPreset);
    return r.useMemo(() => {
      if (null == e) return null;
      let t = d.A.getLinearGradient();
      return null == t ? null : (0, f.hm)(e, t)
    }, [e])
  };

function h() {
  let e = (0, s.bG)([l.A], () => l.A.theme),
    {
      colors: t,
      chassisMixAmount: n,
      gradientAngle: i,
      setAll: a
    } = (0, u.ko)(),
    d = (0, s.bG)([c.A], () => {
      var e, t;
      return null == (t = c.A.settings.appearance) || null == (e = t.clientThemeSettings) ? true : e.customUserThemeSettings
    }),
    p = r.useRef(true);
  return r.useEffect(() => {
    if (!(0, o.isEqual)(d, p.current)) {
      var e, t, n;
      p.current = d, a({
        colors: null != (e = null == d ? true : d.colors) ? e : [],
        gradientAngle: null != (t = null == d ? true : d.gradientAngle) ? t : 0,
        chassisMixAmount: null != (n = null == d ? true : d.baseMix) ? n : u.kJ
      })
    }
  }, [d, a]), r.useMemo(() => 0 === t.length ? null : (0, f.dY)(t, i, n, e), [t, n, i, e])
}

function m() {
  let e = _(),
    t = h();
  return null != t ? {
    clientThemesCSS: t,
    clientThemesClassName: a()(f.Gc, f.hK)
  } : null === e ? {
    clientThemesCSS: "",
    clientThemesClassName: ""
  } : {
    clientThemesCSS: e,
    clientThemesClassName: f.Gc
  }
}