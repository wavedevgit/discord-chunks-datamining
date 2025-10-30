/** Chunk was on web.js **/
/** chunk id: 366841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let I = 1e3;

function S() {
  let [e, t] = Chunk647438.useState(false), O = (0, Chunk481060.VXO)(Chunk596401.Xd), S = Chunk647438.useMemo(() => [Chunk704215.z.DESKTOP_REFRESH_ONBOARDING_MODAL], []), [T, A] = (0, Chunk243778.US)(S), C = T === Chunk704215.z.DESKTOP_REFRESH_ONBOARDING_MODAL, N = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getId());
  Chunk647438.useLayoutEffect(() => {
    null != N && Chunk709054.default.age(N) < Chunk70956.Z.Millis.DAY && (0, Chunk266454.Q3)(Chunk704215.z.DESKTOP_REFRESH_ONBOARDING_MODAL);
    let e = "desktop_refresh_theme_migration_key",
      t = "true" === Chunk433517.K.get(module);
    !C || exports || Chunk210887.Z.theme !== Chunk231338.BR.DARK || null != Chunk514361.Z.gradientPreset || exports || (Chunk433517.K.set(module, "true"), (0, Chunk153867.ZI)({
      theme: Chunk231338.BR.DARKER
    }))
  }, [C, N]), Chunk647438.useLayoutEffect(() => {
    function e() {
      exports(true)
    }
    return Chunk570140.Z.subscribe("CHANGE_LOG_RESOLVED", module), () => {
      Chunk570140.Z.unsubscribe("CHANGE_LOG_RESOLVED", module)
    }
  }, []);
  let R = Chunk647438.useCallback(() => {
    (0, Chunk481060.ZDy)(async () => {
      let {
        DesktopRefreshOnboardingModal: e
      } = await require.e("49910").then(require.bind(require, 239191));
      return t => (0, r.jsx)(e, v({}, t))
    }, {
      backdropStyle: Chunk481060.fCB.TOP_RADIAL,
      onCloseCallback: () => {
        A(Chunk921944.L.USER_DISMISS)
      }
    })
  }, [A]);
  Chunk647438.useEffect(() => {
    if (C && !O && module) {
      let e = setTimeout(() => {
        R()
      }, I);
      return () => clearTimeout(module)
    }
  }, [module, O, C, R])
}