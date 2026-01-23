/** Chunk was on 22477 **/
/** chunk id: 258836, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk832248 = require("./832248.js"),
  Chunk323970 = require("./323970.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk876402 = require("./876402.js");
let p = Chunk64700.lazy(() => n.e("24832").then(n.bind(n, 748579)));

function h() {
  let e = (0, r.bG)([o.A], () => o.A.useReducedMotion),
    t = (0, c.A)(e => e.shouldRenderTenureLevelUp),
    n = (0, d.A)();
  return e || !t || null == n ? null : (0, a.jsx)(x, {
    levelUpData: n
  })
}

function x(e) {
  let {
    levelUpData: t
  } = e, n = l.useRef(null), r = l.useCallback(() => {
    c.A.setState({
      shouldRenderTenureLevelUp: false
    })
  }, []);
  return l.useEffect(() => r, [r]), (0, a.jsx)(s.Oky, {
    containerRef: n,
    children: (0, a.jsxs)("div", {
      className: m.i,
      children: [(0, a.jsx)("div", {
        className: m.b,
        children: (0, a.jsx)(i.m, {
          text: u.intl.string(u.t.cpT0Cq),
          children: (0, a.jsx)(s.K0, {
            icon: s.PGe,
            variant: "secondary",
            size: "sm",
            onClick: r,
            "aria-label": u.intl.string(u.t.cpT0Cq)
          })
        })
      }), (0, a.jsx)(l.Suspense, {
        fallback: null,
        children: (0, a.jsx)(p, {
          levelUpData: t
        })
      })]
    })
  })
}