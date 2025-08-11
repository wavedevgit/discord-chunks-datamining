/** Chunk was on 75708 **/
/** chunk id: 299657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk497321 = require("./497321.js"),
  Chunk632257 = require("./632257.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
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
  Chunk220654 = require("./220654.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk2359 = require("./2359.jsx"),
  Chunk132547 = require("./132547.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk126867 = require("./126867.js");
let L = function(e) {
  let {
    entrypoint: t = Z.EZ.UserSettings
  } = e;
  (0, j.z)(_.X);
  let n = (0, f.Q)(),
    {
      sourceAnalyticsLocations: s,
      analyticsLocations: L
    } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
    M = (0, l.e7)([v.Z], () => v.Z.hasFetchedSubscriptions()),
    B = (0, l.e7)([O.Z], () => O.Z.hasFetchedPaymentSources),
    U = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
    V = null == U ? true : U.id,
    G = (0, P.N)(),
    F = (0, A.Ng)(),
    H = (0, b.V)(Z.nS),
    [z, W] = r.useState(true),
    Y = r.useRef(0),
    K = (0, T.M5)(U, Z.p9.TIER_2),
    q = (0, y.Z)({
      location: "PremiumMarketingPage"
    }),
    X = (0, l.e7)([I.Z], () => I.Z.hasFetched);
  r.useEffect(() => {
    X || d.MH()
  }, [X]), r.useEffect(() => {
    c.Z.wait(async () => {
      let e = Date.now();
      await Promise.all([d.jg(), d.tZ(), (0, u.Y2)(null, null, w.JjL.DISCOVERY)]), Y.current = Date.now() - e, W(false)
    })
  }, []), r.useEffect(() => {
    z || S.default.track(w.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: s,
      load_duration_ms: Y.current
    })
  }, [s, z]), r.useEffect(() => {
    n && (null != G || null != F) && (0, N.ab)(G, F)
  }, [n, G, F]);
  let J = (0, l.e7)([E.Z], () => E.Z.enabled),
    Q = t === Z.EZ.ApplicationStoreHome,
    $ = J ? <m.Z /> : n ? <x.c8 /> : Q && K ? <h.Gt value={L}><D.Z userId={V} /></h.Gt> : M && H && B ? null : <div className={a()(k.container, k.loading)}><o.$jN /></div>;
  return null != $ ? <i.Fragment>{Q && <p.Z />}{$}</i.Fragment> : <h.Gt value={L}>{Q && !q && <p.Z />}{<R.Z entrypoint={t} />}</h.Gt>
}