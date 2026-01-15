/** Chunk was on web.js **/
/** chunk id: 366841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk153867 = require("./153867.js"),
  Chunk514361 = require("./514361.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk596401 = require("./596401.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
let S = 1e3;

function I() {
  let [e, t] = i.useState(false), O = (0, l.VXO)(E.Xd), I = i.useMemo(() => [o.z.DESKTOP_REFRESH_ONBOARDING_MODAL], []), [T, C] = (0, p.US)(I), A = T === o.z.DESKTOP_REFRESH_ONBOARDING_MODAL, N = (0, a.e7)([h.default], () => h.default.getId());
  i.useLayoutEffect(() => {
    null != N && g.default.age(N) < m.Z.Millis.DAY && (0, f.Q3)(o.z.DESKTOP_REFRESH_ONBOARDING_MODAL);
    let e = "desktop_refresh_theme_migration_key",
      t = "true" === s.K.get(e);
    !A || t || _.Z.theme !== y.BR.DARK || null != d.Z.gradientPreset || t || (s.K.set(e, "true"), (0, u.ZI)({
      theme: y.BR.DARKER
    }))
  }, [A, N]), i.useLayoutEffect(() => {
    function e() {
      t(true)
    }
    return c.Z.subscribe("CHANGE_LOG_RESOLVED", e), () => {
      c.Z.unsubscribe("CHANGE_LOG_RESOLVED", e)
    }
  }, []);
  let P = i.useCallback(() => {
    (0, l.ZDy)(async () => {
      let {
        DesktopRefreshOnboardingModal: e
      } = await n.e("49910").then(n.bind(n, 239191));
      return t => (0, r.jsx)(e, v({}, t))
    }, {
      backdropStyle: l.fCB.TOP_RADIAL,
      onCloseCallback: () => {
        C(b.L.USER_DISMISS)
      }
    })
  }, [C]);
  i.useEffect(() => {
    if (A && !O && e) {
      let e = setTimeout(() => {
        P()
      }, S);
      return () => clearTimeout(e)
    }
  }, [e, O, A, P])
}