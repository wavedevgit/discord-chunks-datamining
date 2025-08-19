/** Chunk was on 11868 **/
/** chunk id: 72924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk558381 = require("./558381.js"),
  Chunk821849 = require("./821849.js"),
  Chunk531826 = require("./531826.js"),
  Chunk15640 = require("./15640.js"),
  Chunk724870 = require("./724870.jsx"),
  Chunk87484 = require("./87484.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk106976 = require("./106976.js"),
  Chunk689011 = require("./689011.jsx"),
  Chunk55563 = require("./55563.js"),
  Chunk981631 = require("./981631.js");
async function N(e) {
  var t, n, i, N, f;
  let {
    applicationId: S,
    skuId: m,
    initialPlanId: R,
    analyticsLocations: A,
    analyticsLocationObject: g
  } = e, P = O.Z.get(m);
  if (null == P) {
    let e = (await (0, o.oJ)(S)).find(e => e.sku.id === m);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === p.epS.SUBSCRIPTION_GROUP && await (0, I.rx)(S, e.id)
  }
  P = null != P ? P : O.Z.get(m), l()(null != P && P.applicationId === S, "SKU must belong to application"), P.type !== p.epS.SUBSCRIPTION || (0, u.a)([P.id]) || await (0, c.GZ)(P.id);
  let C = function(e) {
    let t = (0, s.jA)({
        applicationId: e
      }),
      n = null != t ? E.Z.getWindow(t) : true;
    return null == n || n.closed ? a.z1l : a.u1M
  }(S);
  if (P.type !== p.epS.SUBSCRIPTION) return new Promise((e, t) => {
    (0, _.Z)({
      applicationId: S,
      skuId: m,
      analyticsLocationObject: g,
      analyticsLocations: A,
      contextKey: C,
      onComplete: t => {
        var n;
        e(null != (n = null == t ? true : t.entitlements) ? n : [])
      },
      onClose: e => {
        e || t()
      }
    })
  });
  await (t = S, n = m, i = R, N = g, f = A, (0, d.m)({
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: N,
    analyticsLocations: f,
    renderHeader: (e, t, n) => (0, r.jsx)(T.t, {
      step: n,
      onClose: () => t(false)
    })
  }))
}