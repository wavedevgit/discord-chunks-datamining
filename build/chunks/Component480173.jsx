/** Chunk was on 53950 **/
/** chunk id: 480173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk7093 = require("./7093.js"),
  Chunk817466 = require("./817466.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119290 = require("./119290.js");
let p = Chunk473749.lazy(() => require.e("77898").then(require.bind(require, 739859)));

function h() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    t = (0, Chunk7093.Z)(e => e.shouldRenderTenureLevelUp),
    n = (0, Chunk817466.Z)();
  return module || !exports || null == require ? null : (0, Chunk54381.jsx)(x, {
    levelUpData: require
  })
}

function x(e) {
  let {
    levelUpData: t
  } = e, n = r.useRef(null), i = r.useCallback(() => {
    c.Z.setState({
      shouldRenderTenureLevelUp: false
    })
  }, []);
  return r.useEffect(() => i, [i]), (0, a.jsx)(s.EqS, {
    containerRef: n,
    children: (0, a.jsxs)("div", {
      className: m.wrapper,
      children: [(0, a.jsx)("div", {
        className: m.closeButton,
        children: (0, a.jsx)(l.u, {
          text: u.intl.string(u.t.cpT0Cq),
          children: (0, a.jsx)(s.hU, {
            icon: s.Dio,
            variant: "secondary",
            size: "sm",
            onClick: i,
            "aria-label": u.intl.string(u.t.cpT0Cq)
          })
        })
      }), (0, a.jsx)(r.Suspense, {
        fallback: null,
        children: (0, a.jsx)(p, {
          levelUpData: t
        })
      })]
    })
  })
}