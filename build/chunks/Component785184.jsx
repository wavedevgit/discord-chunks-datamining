/** Chunk was on 51711 **/
/** chunk id: 785184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk7093 = require("./7093.js"),
  Chunk40347 = require("./40347.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk92038 = require("./92038.js");
let m = Chunk647438.lazy(() => require.e("22274").then(require.bind(require, 269792)));

function p() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    t = (0, Chunk7093.Z)(e => e.shouldRenderTenureLevelUp),
    n = (0, Chunk40347.Z)();
  return module || !exports || null == require ? null : (0, Chunk951288.jsx)(h, {
    levelUpData: require
  })
}

function h(e) {
  let {
    levelUpData: t
  } = e, n = r.useRef(null), i = r.useCallback(() => {
    o.Z.setState({
      shouldRenderTenureLevelUp: false
    })
  }, []);
  return r.useEffect(() => i, [i]), (0, a.jsx)(l.EqS, {
    containerRef: n,
    children: (0, a.jsxs)("div", {
      className: u.wrapper,
      children: [(0, a.jsx)(l.M0o, {
        className: u.closeButton,
        tooltip: d.intl.string(d.t.cpT0Cg),
        color: l.YX$.SECONDARY,
        size: l.tT7.SIZE_24,
        icon: (0, a.jsx)(l.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: i
      }), (0, a.jsx)(r.Suspense, {
        fallback: null,
        children: (0, a.jsx)(m, {
          levelUpData: t
        })
      })]
    })
  })
}