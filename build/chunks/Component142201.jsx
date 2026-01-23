/** Chunk was on web.js **/
/** chunk id: 142201, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
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
let k = function(e) {
  let {
    entrypoint: t = L.Mf.UserSettings
  } = e;
  (0, b.P)(y.b);
  let n = (0, m.H)(),
    {
      sourceAnalyticsLocations: a,
      analyticsLocations: k
    } = (0, h.Ay)(_.A.PREMIUM_MARKETING),
    U = (0, o.bG)([I.A], () => I.A.hasFetchedSubscriptions()),
    G = (0, o.bG)([A.A], () => A.A.hasFetchedPaymentSources),
    V = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
    F = null == V ? true : V.id,
    B = (0, P.V)(),
    H = (0, w.O)(),
    Y = (0, g.Y)(L.T7),
    [W, K] = i.useState(true),
    z = i.useRef(0),
    q = (0, T.YE)(V, L.PremiumTypes.TIER_2),
    X = (0, R.A)({
      location: "PremiumMarketingPage"
    }),
    Z = (0, o.bG)([C.A], () => C.A.hasFetched);
  i.useEffect(() => {
    Z || u.xG()
  }, [Z]), i.useEffect(() => {
    c.h.wait(async () => {
      let e = Date.now();
      await Promise.all([u.hP(), u.$o(), (0, d.zS)(null, null, j.tF5.DISCOVERY)]), z.current = Date.now() - e, K(false)
    })
  }, []), i.useEffect(() => {
    W || S.default.track(j.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: a,
      load_duration_ms: z.current
    })
  }, [a, W]), i.useEffect(() => {
    n && (null != B || null != H) && (0, N.u1)(B, H)
  }, [n, B, H]);
  let Q = (0, o.bG)([O.A], () => O.A.enabled),
    $ = t === L.Mf.ApplicationStoreHome,
    J = Q ? (0, r.jsx)(f.A, {}) : n ? (0, r.jsx)(E.uK, {}) : $ && q ? (0, r.jsx)(h.f5, {
      value: k,
      children: (0, r.jsx)(x.A, {
        userId: F
      })
    }) : U && Y && G ? null : (0, r.jsx)("div", {
      className: s()(M.kL, M.Lq),
      children: (0, r.jsx)(l.y$y, {})
    });
  return null != J ? (0, r.jsxs)(r.Fragment, {
    children: [$ && (0, r.jsx)(p.A, {}), J]
  }) : (0, r.jsxs)(h.f5, {
    value: k,
    children: [$ && !X && (0, r.jsx)(p.A, {}), (0, r.jsx)(D.A, {
      entrypoint: t
    })]
  })
}