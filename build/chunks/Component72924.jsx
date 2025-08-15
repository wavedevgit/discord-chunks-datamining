/** Chunk was on 31253 **/
/** chunk id: 72924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
async function S(e) {
  var t, n, i, S, p;
  let {
    applicationId: R,
    skuId: f,
    initialPlanId: A,
    analyticsLocations: C,
    analyticsLocationObject: m
  } = e, g = O.Z.get(f);
  if (null == g) {
    let e = (await (0, a.oJ)(R)).find(e => e.sku.id === f);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === N.epS.SUBSCRIPTION_GROUP && await (0, I.rx)(R, e.id)
  }
  g = null != g ? g : O.Z.get(f), l()(null != g && g.applicationId === R, "SKU must belong to application"), g.type !== N.epS.SUBSCRIPTION || (0, u.a)([g.id]) || await (0, c.GZ)(g.id);
  let P = function(e) {
    let t = (0, s.jA)({
        applicationId: e
      }),
      n = null != t ? E.Z.getWindow(t) : true;
    return null == n || n.closed ? o.z1l : o.u1M
  }(R);
  if (g.type !== N.epS.SUBSCRIPTION) return new Promise((e, t) => {
    (0, d.Z)({
      applicationId: R,
      skuId: f,
      analyticsLocationObject: m,
      analyticsLocations: C,
      contextKey: P,
      onComplete: t => {
        var n;
        e(null != (n = null == t ? true : t.entitlements) ? n : [])
      },
      onClose: e => {
        e || t()
      }
    })
  });
  await (t = R, n = f, i = A, S = m, p = C, (0, _.m)({
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocationObject: S,
    analyticsLocations: p,
    renderHeader: (e, t, n) => (0, r.jsx)(T.t, {
      step: n,
      onClose: () => t(false)
    })
  }))
}