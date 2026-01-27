/** Chunk was on web.js **/
/** chunk id: 866315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk817281 = require("./817281.js"),
  Chunk47671 = require("./47671.js"),
  Chunk826673 = require("./826673.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk961350 = require("./961350.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk559868 = require("./559868.js"),
  Chunk49999 = require("./49999.js"),
  Chunk818348 = require("./818348.js");

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
let A = 1e3;

function I() {
  let [e, t] = i.useState(false), O = (0, l.Ry6)(E.lb), I = i.useMemo(() => [o.M.DESKTOP_REFRESH_ONBOARDING_MODAL], []), [S, T] = (0, p.kn)(I), C = S === o.M.DESKTOP_REFRESH_ONBOARDING_MODAL, N = (0, a.bG)([h.default], () => h.default.getId());
  i.useLayoutEffect(() => {
    null != N && g.default.age(N) < m.A.Millis.DAY && (0, f.Dr)(o.M.DESKTOP_REFRESH_ONBOARDING_MODAL);
    let e = "desktop_refresh_theme_migration_key",
      t = "true" === s.w.get(e);
    !C || t || _.A.theme !== b.NJ.DARK || null != d.A.gradientPreset || t || (s.w.set(e, "true"), (0, u.u_)({
      theme: b.NJ.DARKER
    }))
  }, [C, N]), i.useLayoutEffect(() => {
    function e() {
      t(true)
    }
    return c.h.subscribe("CHANGE_LOG_RESOLVED", e), () => {
      c.h.unsubscribe("CHANGE_LOG_RESOLVED", e)
    }
  }, []);
  let w = i.useCallback(() => {
    (0, l.mMO)(async () => {
      let {
        DesktopRefreshOnboardingModal: e
      } = await n.e("33638").then(n.bind(n, 887781));
      return t => (0, r.jsx)(e, v({}, t))
    }, {
      backdropStyle: l.F2Z.TOP_RADIAL,
      onCloseCallback: () => {
        T(y.i.USER_DISMISS)
      }
    })
  }, [T]);
  i.useEffect(() => {
    if (C && !O && e) {
      let e = setTimeout(() => {
        w()
      }, A);
      return () => clearTimeout(e)
    }
  }, [e, O, C, w])
}