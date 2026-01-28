/** Chunk was on 60667 **/
/** chunk id: 142201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk73825 = require("./73825.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk107834 = require("./107834.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk86379 = require("./86379.js"),
  Chunk160946 = require("./160946.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk726649 = require("./726649.js"),
  Chunk611924 = require("./611924.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk295405 = require("./295405.js"),
  Chunk166403 = require("./166403.js"),
  Chunk954571 = require("./954571.js"),
  Chunk474090 = require("./474090.js"),
  Chunk560138 = require("./560138.js"),
  Chunk694080 = require("./694080.js"),
  Chunk170887 = require("./170887.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk558533 = require("./558533.jsx"),
  Chunk185180 = require("./185180.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk887069 = require("./887069.js");
let U = function(e) {
  let {
    entrypoint: t = w.Mf.UserSettings
  } = e;
  (0, E.P)(b.b);
  let n = (0, A.H)(),
    {
      sourceAnalyticsLocations: l,
      analyticsLocations: U
    } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
    G = (0, a.bG)([T.A], () => T.A.hasFetchedSubscriptions()),
    k = (0, a.bG)([C.A], () => C.A.hasFetchedPaymentSources),
    V = (0, a.bG)([O.default], () => O.default.getCurrentUser()),
    H = null == V ? true : V.id,
    B = (0, P.V)(),
    F = (0, y.O)(),
    Y = (0, f.Y)(w.T7),
    [W, z] = i.useState(true),
    K = i.useRef(0),
    Z = (0, S.YE)(V, w.PremiumTypes.TIER_2),
    X = (0, N.A)({
      location: "PremiumMarketingPage"
    }),
    q = (0, a.bG)([j.A], () => j.A.hasFetched);
  i.useEffect(() => {
    q || d.xG()
  }, [q]), i.useEffect(() => {
    c.h.wait(async () => {
      let e = Date.now();
      await Promise.all([d.hP(), d.$o(), (0, u.zS)(null, null, L.tF5.DISCOVERY)]), K.current = Date.now() - e, z(false)
    })
  }, []), i.useEffect(() => {
    W || I.default.track(L.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: l,
      load_duration_ms: K.current
    })
  }, [l, W]), i.useEffect(() => {
    n && (null != B || null != F) && (0, v.u1)(B, F)
  }, [n, B, F]);
  let J = (0, a.bG)([x.A], () => x.A.enabled),
    Q = t === w.Mf.ApplicationStoreHome,
    $ = J ? (0, r.jsx)(_.A, {}) : n ? (0, r.jsx)(h.uK, {}) : Q && Z ? (0, r.jsx)(g.f5, {
      value: U,
      children: (0, r.jsx)(D.A, {
        userId: H
      })
    }) : G && Y && k ? null : (0, r.jsx)("div", {
      className: s()(M.kL, M.Lq),
      children: (0, r.jsx)(o.y$y, {})
    });
  return null != $ ? (0, r.jsxs)(r.Fragment, {
    children: [Q && (0, r.jsx)(p.A, {}), $]
  }) : (0, r.jsxs)(g.f5, {
    value: U,
    children: [Q && !X && (0, r.jsx)(p.A, {}), (0, r.jsx)(R.A, {
      entrypoint: t
    })]
  })
}