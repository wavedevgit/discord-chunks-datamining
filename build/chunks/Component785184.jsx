/** Chunk was on 20501 **/
/** chunk id: 785184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk7093 = require("./7093.js"),
  Chunk101966 = require("./101966.js"),
  Chunk40347 = require("./40347.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213268 = require("./213268.js");
let u = Chunk73800.lazy(() => require.e("22274").then(require.bind(require, 269792)));

function m() {
  let e = (0, Chunk101966.Z)({
      location: "TenureLevelUpAnimationLazyWrapper"
    }),
    t = (0, Chunk7093.Z)(e => e.shouldRenderTenureLevelUp),
    n = (0, Chunk40347.Z)();
  return module && exports && null != require ? (0, Chunk255367.jsx)(p, {
    levelUpData: require
  }) : null
}

function p(e) {
  let {
    levelUpData: t
  } = e, n = r.useRef(null), l = r.useCallback(() => {
    a.Z.setState({
      shouldRenderTenureLevelUp: false
    })
  }, []);
  return r.useEffect(() => l, [l]), (0, i.jsx)(s.EqS, {
    containerRef: n,
    children: (0, i.jsxs)("div", {
      className: d.wrapper,
      children: [(0, i.jsx)(s.M0o, {
        className: d.closeButton,
        tooltip: c.intl.string(c.t.cpT0Cg),
        color: s.YX$.SECONDARY,
        size: s.tT7.SIZE_24,
        icon: (0, i.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: l
      }), (0, i.jsx)(r.Suspense, {
        fallback: null,
        children: (0, i.jsx)(u, {
          levelUpData: t
        })
      })]
    })
  })
}