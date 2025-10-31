/** Chunk was on web.js **/
/** chunk id: 299657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk632257 = require("./632257.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk15640 = require("./15640.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk433811 = require("./433811.js"),
  Chunk214852 = require("./214852.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk853872 = require("./853872.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk111361 = require("./111361.js"),
  Chunk357355 = require("./357355.js"),
  Chunk937579 = require("./937579.js"),
  Chunk283066 = require("./283066.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk2359 = require("./2359.jsx"),
  Chunk132547 = require("./132547.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk166893 = require("./166893.js");
let j = function(e) {
  let {
    entrypoint: t = L.EZ.UserSettings
  } = e;
  (0, y.z)(b.X);
  let n = (0, m.Q)(),
    {
      sourceAnalyticsLocations: a,
      analyticsLocations: j
    } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
    U = (0, s.e7)([T.Z], () => T.Z.hasFetchedSubscriptions()),
    G = (0, s.e7)([I.Z], () => I.Z.hasFetchedPaymentSources),
    B = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
    Z = null == B ? true : B.id,
    F = (0, w.N)(),
    V = (0, P.Ng)(),
    H = (0, g.V)(L.nS),
    [Y, W] = i.useState(true),
    K = i.useRef(0),
    z = (0, A.M5)(B, L.PremiumTypes.TIER_2),
    q = (0, R.Z)({
      location: "PremiumMarketingPage"
    }),
    X = (0, s.e7)([C.Z], () => C.Z.hasFetched);
  i.useEffect(() => {
    X || u.MH()
  }, [X]), i.useEffect(() => {
    c.Z.wait(async () => {
      let e = Date.now();
      await Promise.all([u.jg(), u.tZ(), (0, d.Y2)(null, null, M.JjL.DISCOVERY)]), K.current = Date.now() - e, W(false)
    })
  }, []), i.useEffect(() => {
    Y || S.default.track(M.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: a,
      load_duration_ms: K.current
    })
  }, [a, Y]), i.useEffect(() => {
    n && (null != F || null != V) && (0, N.ab)(F, V)
  }, [n, F, V]);
  let Q = (0, s.e7)([O.Z], () => O.Z.enabled),
    J = t === L.EZ.ApplicationStoreHome,
    $ = Q ? (0, r.jsx)(f.Z, {}) : n ? (0, r.jsx)(E.c8, {}) : J && z ? (0, r.jsx)(h.Gt, {
      value: j,
      children: (0, r.jsx)(x.Z, {
        userId: Z
      })
    }) : U && H && G ? null : (0, r.jsx)("div", {
      className: o()(k.container, k.loading),
      children: (0, r.jsx)(l.$jN, {})
    });
  return null != $ ? (0, r.jsxs)(r.Fragment, {
    children: [J && (0, r.jsx)(_.Z, {}), $]
  }) : (0, r.jsxs)(h.Gt, {
    value: j,
    children: [J && !q && (0, r.jsx)(_.Z, {}), (0, r.jsx)(D.Z, {
      entrypoint: t
    })]
  })
}